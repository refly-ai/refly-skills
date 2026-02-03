---
name: corp-history-analyzer
description: 公司历史沿革分析系统，自动化处理工商档案并生成法律尽调报告。Use when Claude needs to: (1) 对工商档案PDF进行OCR识别和文本提取, (2) 分析公司股权变更历史并追踪股权演变, (3) 识别股权代持、零对价转让、未实缴出资等特殊情况, (4) 评估国有股权转让未评估、关联方交易等潜在法律风险, (5) 生成符合法律尽调标准的Word格式历史沿革报告。适用于投资尽调、IPO审核、并购重组等法律服务场景。
skillId: skp-oej3svnqrj0nkhx0puuhc84m
workflowId: see-workflow-mapping
triggers:
  - 历史沿革
  - 工商档案
  - 尽调报告
  - 股权变更
  - 公司历史
  - 法律尽调
tags:
  - legal
  - due-diligence
  - document-analysis
version: 1.0.0
---

# corp-history-analyzer

公司历史沿革分析系统，自动化处理工商档案并生成法律尽调报告。Use when Claude needs to: (1) 对工商档案PDF进行OCR识别和文本提取, (2) 分析公司股权变更历史并追踪股权演变, (3) 识别股权代持、零对价转让、未实缴出资等特殊情况, (4) 评估国有股权转让未评估、关联方交易等潜在法律风险, (5) 生成符合法律尽调标准的Word格式历史沿革报告。适用于投资尽调、IPO审核、并购重组等法律服务场景。

## Installation

```bash
refly skill install skp-oej3svnqrj0nkhx0puuhc84m
```

## Usage

After installation, run the skill using your installation ID:

```bash
refly skill run <installationId> --input '{}'
```

The installation ID is returned when you run `refly skill install`.
