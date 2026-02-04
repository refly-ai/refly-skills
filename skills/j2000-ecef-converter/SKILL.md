---
name: j2000-ecef-converter
description: High precision J2000 ECI to WGS84 ECEF coordinate conversion tool using exact velocity formula v2 equals R at v1 minus omega cross p2 for centimeter-level position accuracy and micrometer-level velocity accuracy with Earth Orientation Parameters support.
skillId: skp-kuyabdprke2h401o6blgp7db
workflowId: see-workflow-mapping
triggers:
  - j2000 to wgs84
  - eci to ecef
  - coordinate conversion
  - J2000转WGS84
  - ECI转ECEF
tags:
  - orbital
  - astronomy
  - space
  - gnss
  - coordinate
  - eop
  - precision
version: 1.0.0
---

# j2000-ecef-converter

High precision J2000 ECI to WGS84 ECEF coordinate conversion tool using exact velocity formula v2 equals R at v1 minus omega cross p2 for centimeter-level position accuracy and micrometer-level velocity accuracy with Earth Orientation Parameters support.

## Installation

```bash
refly skill install skp-kuyabdprke2h401o6blgp7db
```

## Usage

After installation, run the skill using your installation ID:

```bash
refly skill run <installationId> --input '{}'
```

The installation ID is returned when you run `refly skill install`.
