<div align="center">

<h1 align="center" style="border-bottom: none">
    <b>
        <a href="https://refly.ai">Refly Skills</a><br>
    </b>
    ⭐️ The Official Executable Skill Registry for Refly ⭐️ <br>
</h1>

</div>
Refly Skills is an open-source library of production-ready, runnable agent skills.<br>
Every skill ships with a stable interface, deterministic execution, and one-click runtime inside Refly —  
ready to use in Claude Code, Cursor, and MCP-powered workflows.

- ⚡ **Run instantly** — execute skills in Refly with one click  
- 🧩 **Reusable infrastructure** — versioned skills, not one-off prompts  
- 🔌 **Export anywhere** — ship skills to Claude Code or deploy as APIs  
- 🌍 **Community-powered** — import, fork, and publish your own skills

<div align="center">

[Refly Cloud](https://refly.ai/) · [Forum](https://github.com/refly-ai/refly/discussions) · [Discord](https://discord.gg/YVuYFjFvRC) · [Twitter](https://x.com/reflyai) · [Documentation](https://docs.refly.ai/)

<p align="center">
    <a href="https://refly.ai" target="_blank">
        <img alt="Static Badge" src="https://img.shields.io/badge/Product-F04438"></a>
    <a href="https://refly.ai/pricing" target="_blank">
        <img alt="Static Badge" src="https://img.shields.io/badge/free-pricing?logo=free&color=%20%23155EEF&label=pricing&labelColor=%20%23528bff"></a>
    <a href="https://discord.gg/YVuYFjFvRC" target="_blank">
        <img alt="Discord Chat" src="https://img.shields.io/discord/1323513432686989362?label=chat&logo=discord&logoColor=white&style=flat&color=5865F2"></a>
    <a href="https://x.com/reflyai" target="_blank">
        <img alt="Static Badge" src="https://img.shields.io/twitter/follow/reflyai"></a>
</p>

</div>

## Installation

### Install Refly CLI

```bash
npm install -g @powerformer/refly-cli@0.1.25
```

### Install a Skill

```bash
# Via Refly CLI
refly skill install <skill-id>

# Via npx
npx skills add refly-ai/<skill-name>
```

### Publish a Skill

```bash
refly skill publish <skill-id>
```

## Skills

### AI Image Generation

| Skill | Description |
|-------|-------------|
| [fal-image](./skills/fal-image) | Generate AI images using Fal.ai Flux models. Create images from text prompts, transform existing images, or generate photorealistic/artistic images. |
| [nano-banana](./skills/nano-banana) | Fast AI image generation using Nano Banana for quick prototypes and simple image content. |
| [nano-banana-pro](./skills/nano-banana-pro) | Generate or edit images via Gemini 3 Pro Image. Supports 1K/2K/4K resolutions and up to 14 input images for composition. |
| [seedream-image](./skills/seedream-image) | Generate AI images using ByteDance Seedream 4.5 for high-quality artistic or realistic images with style transfer. |

### AI Video Generation

| Skill | Description |
|-------|-------------|
| [fal-video](./skills/fal-video) | Generate AI videos using Fal.ai Seedance models. Animate images into short videos or create motion from still photos. |
| [kling-video](./skills/kling-video) | Generate AI videos using Kling models. Create videos from text, animate images, transform videos, or create AI avatar videos with speech. |
| [wan-video](./skills/wan-video) | Generate AI videos using Alibaba Wan 2.6 models. Create videos from text, animate images, or apply AI style transfer. |
| [video-creator](./skills/video-creator) | AI short video creation with multi-platform publishing to YouTube, TikTok, Instagram, Facebook, LinkedIn, and Twitter. |

### AI Audio Generation

| Skill | Description |
|-------|-------------|
| [fal-audio](./skills/fal-audio) | Generate AI audio using Fal.ai audio models. Convert text to speech, create podcast-style audio, or clone voices from samples. |
| [fish-audio](./skills/fish-audio) | Generate AI audio using Fish Audio models. Text-to-speech in multiple languages and audio transcription. |

### AI Avatar

| Skill | Description |
|-------|-------------|
| [volcengine-avatar](./skills/volcengine-avatar) | Create AI digital humans using Volcengine Avatar. Generate avatar videos with speech or build virtual spokespersons. |

### Communication & Messaging

| Skill | Description |
|-------|-------------|
| [slack](./skills/slack) | Integrate with Slack for team messaging. Send messages to channels, post notifications, and automate communication workflows. |
| [microsoft-teams](./skills/microsoft-teams) | Integrate with Microsoft Teams. Send messages to channels, post team notifications, and automate communication. |
| [send-email](./skills/send-email) | Send emails with HTML content and file attachments. |
| [outlook](./skills/outlook) | Integrate with Microsoft Outlook for email and calendar. Send/manage emails and create calendar events. |

### Social Media

| Skill | Description |
|-------|-------------|
| [facebook](./skills/facebook) | Integrate with Facebook for social media management. Post updates, share content, and automate page workflows. |
| [instagram](./skills/instagram) | Integrate with Instagram. Post content, manage media and insights, and automate publishing workflows. |
| [youtube](./skills/youtube) | Integrate with YouTube for video management. Upload videos, manage channel content, and retrieve analytics. |

### Project Management & Issue Tracking

| Skill | Description |
|-------|-------------|
| [linear](./skills/linear) | Integrate with Linear for issue tracking. Create/manage issues, track development tasks, and automate project workflows. |
| [asana](./skills/asana) | Integrate with Asana for task management. Create/manage tasks, organize projects, and automate team tracking. |
| [trello](./skills/trello) | Integrate with Trello for project management. Create/manage cards, organize tasks in lists, and automate tracking. |
| [gitlab](./skills/gitlab) | Integrate with GitLab for DevOps. Create/manage issues, trigger CI/CD pipelines, and automate development workflows. |

### CRM & Sales

| Skill | Description |
|-------|-------------|
| [salesforce](./skills/salesforce) | Integrate with Salesforce for CRM operations. Create/query records, manage accounts and opportunities. |
| [hubspot](./skills/hubspot) | Integrate with HubSpot for CRM management. Manage contacts and deals, track sales pipelines. |
| [apollo](./skills/apollo) | Search sales leads with Apollo.io. Find company/contact information and enrich lead data. |
| [hunter](./skills/hunter) | Find emails with Hunter.io. Discover professional email addresses and verify deliverability. |
| [linkup](./skills/linkup) | Find LinkedIn contacts with Linkup. Search professional profiles and enrich network data. |

### Productivity & Office

| Skill | Description |
|-------|-------------|
| [excel](./skills/excel) | Integrate with Microsoft Excel. Read/write data, manage workbooks, and automate data analysis. |
| [onedrive](./skills/onedrive) | Integrate with OneDrive for cloud storage. Upload/download files and manage cloud documents. |
| [google-calendar](./skills/google-calendar) | Integrate with Google Calendar. Create events, manage schedules, and automate calendar workflows. |
| [google-analytics](./skills/google-analytics) | Integrate with Google Analytics. Retrieve website analytics reports and analyze web performance. |
| [google-maps](./skills/google-maps) | Integrate with Google Maps. Geocode addresses, search places, and get directions. |
| [zoom](./skills/zoom) | Integrate with Zoom for video meetings. Schedule meetings, create instant meetings, and manage invitations. |

### Database & Data

| Skill | Description |
|-------|-------------|
| [airtable](./skills/airtable) | Integrate with Airtable for database management. Create/query records and automate data workflows. |

### Payment

| Skill | Description |
|-------|-------------|
| [stripe](./skills/stripe) | Integrate with Stripe for payment processing. Manage customers, payments, invoices, and subscriptions. |

### Search & Research

| Skill | Description |
|-------|-------------|
| [exa](./skills/exa) | Perform semantic search using Exa AI. Find content by meaning, discover similar documents. |
| [jina](./skills/jina) | Extract content from URLs and search with Jina. Read/extract content and perform site-specific searches. |
| [perplexity](./skills/perplexity) | AI-powered search and chat with Perplexity. Get AI responses with real-time web search. |

### Financial Data

| Skill | Description |
|-------|-------------|
| [alpha-vantage](./skills/alpha-vantage) | Get financial data from Alpha Vantage. Retrieve stock quotes, forex/crypto rates, and market analytics. |

### Specialized Tools

| Skill | Description |
|-------|-------------|
| [amazon-christmas-tree-research](./skills/amazon-christmas-tree-research) | Research tool for Amazon Christmas tree products. |
| [geo-content-optimizer](./skills/geo-content-optimizer) | Optimize content based on geographic targeting. |
| [social-trend-monitor](./skills/social-trend-monitor) | Monitor social media trends and analytics. |
| [youtube-video-analyzer](./skills/youtube-video-analyzer) | Analyze YouTube videos for insights and metrics. |

## Structure

Each skill contains:
- `SKILL.md` - Skill definition with metadata, triggers, and implementation
- `README.md` - Documentation and usage instructions

Example SKILL.md format:
```markdown
---
name: skill-name
description: Use when you need to...
---

# Skill Content
...
```

## Contributing

| Bug Reports | Feature Requests | Issues/Discussions | ReflyAI Community |
|-------------|------------------|-------------------|-------------------|
| [Create Bug Report](https://github.com/refly-ai/refly-skills/issues/new/choose) | [Submit Feature Request](https://github.com/refly-ai/refly-skills/pulls) | [View GitHub Discussions](https://github.com/refly-ai/refly/discussions) | [Visit ReflyAI Community](https://docs.refly.ai/community/contact-us) |
| Something isn't working as expected | Ideas for new skills or improvements | Discuss and raise questions | A place to ask questions, learn, and connect with others |

1. Create your skill with `refly skill create <name>`
2. Develop and test locally
3. Publish with `refly skill publish <skill-id>`
4. A pull request will be automatically created for review

## Community and Contact

- [GitHub Discussion](https://github.com/refly-ai/refly/discussions): Best for sharing feedback and asking questions.
- [GitHub Issues](https://github.com/refly-ai/refly-skills/issues): Best for reporting bugs and suggesting features.
- [Discord](https://discord.gg/YVuYFjFvRC): Best for sharing your skills and interacting with the community.
- [X(Twitter)](https://x.com/reflyai): Best for sharing your skills and staying connected with the community.

## Security Issues

To protect your privacy, please avoid posting security-related issues on GitHub. Instead, send your questions to [support@refly.ai](mailto:support@refly.ai), and we will provide you with a more detailed response.

## License

Individual skills may have their own licenses. Please check each skill's directory for specific license terms.
