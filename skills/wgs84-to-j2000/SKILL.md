---
name: wgs84-to-j2000
description: Convert WGS84 ECEF coordinates to J2000 ECI using exact inverse formula p1 equals R transpose at p2 and v1 equals R transpose at v2 plus omega cross p2 for centimeter level accuracy with Earth Orientation Parameters IAU 2000A precession nutation model support.
skillId: skp-tue60rfgnuqgrdre9w0m1bwm
workflowId: see-workflow-mapping
triggers:
  - wgs84 to j2000
  - ecef to ecef
  - WGS84转J2000
  - inverse conversion
  - 逆坐标转换
tags:
  - orbital
  - astronomy
  - space
  - gnss
  - coordinate
  - eop
  - inverse
  - precision
version: 1.0.0
---

# wgs84-to-j2000

Convert WGS84 ECEF coordinates to J2000 ECI using exact inverse formula p1 equals R transpose at p2 and v1 equals R transpose at v2 plus omega cross p2 for centimeter level accuracy with Earth Orientation Parameters IAU 2000A precession nutation model support.

## Installation

```bash
refly skill install skp-tue60rfgnuqgrdre9w0m1bwm
```

## Usage

After installation, run the skill using your installation ID:

```bash
refly skill run <installationId> --input '{}'
```

The installation ID is returned when you run `refly skill install`.
