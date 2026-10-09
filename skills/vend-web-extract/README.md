# vend-web-extract

Extract clean, readable text/markdown from a web page, paid per call with a
single Nano (XNO) on-chain payment via the x402 rail. No API key, no signup,
no card on file — the Nano wallet is the account.

## Why

Web extraction is a common agent need, but most solutions require an API key, a
signup, or a card on file. `vend-web-extract` uses an endpoint that answers
HTTP 402 with an x402 payment challenge — you settle a single **0.0001 XNO**
payment on-chain in about a second at zero fee, then the call returns the
content. Removes the signup/key step for paid web extraction.

## Installation

Drop this directory into your skills path (e.g. as a Claude Code or Cursor
skill), or use any tool that loads SKILL.md-based skills.

## What it does

1. `GET .../extract?url=<URL>` (the `url` parameter must be URL-encoded) →
   HTTP 200 with `payment.free_trial: true` when a trial is available (use the
   content directly), or HTTP 402 with `price_xno` / `pay_to`.
2. Only on HTTP 402: check the challenge (x402 v2, exact scheme on
   `nano:mainnet`, asset XNO, price exactly 0.0001 XNO), get the user's approval,
   then pay exactly `price_xno` XNO to `pay_to` from your own wallet.
3. Retry with the settled block hash as `X-PAYMENT` → HTTP 200 + clean text.

See `SKILL.md` for the full runbook.

## Endpoint

`https://extract.paypercall.dev/api/v1/extract`

Verified live 2026-09-28: without a trial it answers HTTP 402 with `price_xno: 0.0001`,
`pay_to: nano_1yo6c1t64a...`, `accepts[0].network: nano:mainnet`,
`asset: XNO` (x402 v2 exact scheme).

## Author

dhyabi2
