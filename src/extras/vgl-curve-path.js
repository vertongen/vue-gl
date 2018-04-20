import VglCurve from './vgl-curve.js';
import { CurvePath } from '../three.js';
import { string, boolean } from '../validators.js';
import { parseArray } from '../parsers.js';

/**
 * An abstract base component extending curve, corresponding [THREE.CurvePath](https://threejs.org/docs/index.html#api/extras/core/CurvePath).
 * It is simply an array of connected curves.
 */

export default {
  mixins: [VglCurve],
  props: {
    /** The array of Curves. */
    curves: string,
    /** Whether or not to automatically close the path. */
    autoClose: boolean,
  },
  computed: {
    inst: () => new CurvePath(),
  },
  watch: {
    inst: {
      handler(inst) {
        Object.assign(inst, { autoClose: this.autoClose });
      },
      immediate: true,
    },
    autoClose(autoClose) { this.inst.autoClose = autoClose; },
    curves(curves) {
      this.inst.curves = parseArray(curves).map((name) => {
        return this.vglNamespace.curves[name];
      });
    },
  },
};
