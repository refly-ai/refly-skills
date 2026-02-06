---
name: openai-whisper
description: Local speech-to-text with the Whisper CLI (no API key). This skill allows you to transcribe audio files directly on your machine using OpenAI's Whisper model. Use when you need to: (1) Transcribe audio recordings to text, (2) Translate audio in foreign languages to English, or (3) Generate subtitles in formats like SRT or VTT.
skillId: skp-i3i1eae76onkfpz23ftr9yez
workflowId: see-workflow-mapping
triggers:
  - transcribe audio
  - whisper
  - speech-to-text
  - audio transcription
version: 1.0.0
---

# openai-whisper

Local speech-to-text with the Whisper CLI (no API key). This skill allows you to transcribe audio files directly on your machine using OpenAI's Whisper model. Use when you need to: (1) Transcribe audio recordings to text, (2) Translate audio in foreign languages to English, or (3) Generate subtitles in formats like SRT or VTT.

## Installation

```bash
refly skill install skp-i3i1eae76onkfpz23ftr9yez
```

## Usage

After installation, run the skill using your installation ID:

```bash
refly skill run <installationId> --input '{}'
```

The installation ID is returned when you run `refly skill install`.
