declare module "*.obj" {
  const src: string
  export default src
}

declare module "*.stl" {
  const src: string
  export default src
}

/**
 * KiCad footprint module declaration
 *
 * When using the tscircuit Bun plugin (plugins/bun-plugin-kicad-mod.ts),
 * .kicad_mod files are parsed at import time and return circuit JSON.
 *
 * Usage:
 * ```tsx
 * import footprint from "./my-footprint.kicad_mod"
 * <chip footprint={footprint} name="U1" />
 * ```
 *
 * @see https://github.com/tscircuit/tscircuit#kicad-footprint-imports
 */
declare module "*.kicad_mod" {
  import type { AnyCircuitElement } from "circuit-json"
  const circuitJson: AnyCircuitElement[]
  export default circuitJson
}

declare module "*.glb" {
  const src: string
  export default src
}

declare module "*.gltf" {
  const src: string
  export default src
}

declare module "*.step" {
  const src: string
  export default src
}
