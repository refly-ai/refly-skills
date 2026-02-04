---
name: orbital-elements-to-state
description: Convert six classical orbital elements to J2000 ECI state vectors position and velocity using Vallado Equation 2-73 vy=v_factor*(e+cos(nu)) with Newton iteration for Kepler equation. Use when user needs orbital mechanics coordinate transformation.
skillId: skp-mgk1izoiaexr9pw7ozgigy6b
workflowId: see-workflow-mapping
triggers:
  - orbital elements to state
  - convert orbital elements
  - 六根数转状态矢量
tags:
  - orbital
  - astronomy
  - space
  - gnss
  - mechanics
version: 1.0.0
---

# orbital-elements-to-state

Convert six classical orbital elements to J2000 ECI state vectors position and velocity using Vallado Equation 2-73 vy=v_factor*(e+cos(nu)) with Newton iteration for Kepler equation. Use when user needs orbital mechanics coordinate transformation.

## Installation

```bash
refly skill install skp-mgk1izoiaexr9pw7ozgigy6b
```

## Usage

After installation, run the skill using your installation ID:

```bash
refly skill run <installationId> --input '{}'
```

The installation ID is returned when you run `refly skill install`.
