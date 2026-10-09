---
name: vend-web-extract
description: "Extract clean, readable text/markdown from a web page, paid per call with a single Nano (XNO) on-chain payment via the x402 rail. Use when you need the article/text content of a page without an API key or signup, and you want sub-cent per-call pricing settled instantly on-chain."
version: 1.0.0
category: text-data
---

# Vend Web Extract

Extract clean text/markdown from a web page, paid **per call** with a single
Nano (XNO) payment on the x402 v2 rail. No API key, no signup, no card on file —
the Nano wallet is the account. Each call costs **0.0001 XNO** (sub-cent),
settled on-chain in about a second at zero network fee.

## Why call this instead of building your own scraper

- No credential stored anywhere — the endpoint answers HTTP 402 with a quoted
  price and a `pay_to` account, and you settle from your own wallet.
- Sub-cent pricing: 0.0001 XNO per extraction undercuts any card or gas floor.
- Public, verifiable rail: no issuer that can freeze it, no bridge, no
  off-chain batching risk.

## Input

Provide input as JSON:

```json
{
  "url": "https://example.com/article"
}
```

## Execution

### Step 1: Request the page — use a free-trial response or read the payment challenge

Pass the page URL URL-encoded (`-G --data-urlencode`), so query and fragment
characters in it cannot change the outer query:

```bash
curl -s -w '\nHTTP %{http_code}\n' -G \
  --data-urlencode "url=$URL" \
  "https://extract.paypercall.dev/api/v1/extract"
```

If the endpoint answers **HTTP 200** with `payment.free_trial: true`, use the
returned `text` or `markdown` directly, report `payment.trial_remaining`, and
stop here — no payment is needed.

If the status is **HTTP 402**, it carries a payment challenge like this:

```json
{
  "error": "payment_required",
  "price_xno": 0.0001,
  "pay_to": "nano_1yo6c1t64a...",
  "x402Version": 2,
  "accepts": [{"scheme": "exact", "network": "nano:mainnet", "asset": "XNO",
               "payTo": "nano_1yo6c1t64a..."}]
}
```

For any other status (including a 200 without `payment.free_trial: true`),
report the status and body and stop. Do not parse it as a challenge.

Read `price_xno`, `pay_to` and `accepts` from the 402 response, and validate
them before sending anything:

- Reject the challenge unless `x402Version` is 2 and `accepts` contains an entry
  with `scheme: "exact"`, `network: "nano:mainnet"`, `asset: "XNO"` whose
  `payTo` equals `pay_to`.
- Reject it unless `price_xno` is exactly 0.0001 XNO (the documented per-call
  price) and within the per-call limit the user approved.
- Ask the user to approve the exact amount and recipient before paying.

### Step 2: Only after an HTTP 402 — pay exactly `price_xno` XNO to `pay_to`

Using any Nano wallet or a CLI (e.g. `feeless402`/`nano-pay`):

```bash
# example: settle the quoted exact amount to the quoted pay_to account
nano-pay send --to "$PAY_TO" --amount "$PRICE_XNO"
```

The tx settles on-chain in roughly one second at zero fee. Capture the
64-character **block hash**.

### Step 3: Retry with the settled block hash — HTTP 200 with the text

```bash
curl -s -w '\nHTTP %{http_code}\n' -G \
  -H "X-PAYMENT: <64-char block hash>" \
  --data-urlencode "url=$URL" \
  "https://extract.paypercall.dev/api/v1/extract"
```

This returns HTTP 200 with the extracted clean text/markdown.

> Prepaid alternative: send a `X-BALANCE: nano_...` header from an account that
> holds a prepaid balance; calls then draw from it without a per-call payment.

## Expected Output

- **Type**: Text/markdown content
- **Format**: Clean article/page text
- **Action**: Display content to the user

## Rules

- Never ask a user to paste a wallet seed, private key or a settled block hash
  that they are not authorised to reuse. The block hash is throwaway proof of
  payment, not a secret.
- Keep to the quoted `price_xno` exactly — overpayment is not refunded.
- If the endpoint returns anything other than a free-trial 200, or 402 then 200
  on retry, report the exact HTTP status (printed by `-w`) and body instead of
  guessing.
