import { Curve } from '../three.js';
import { number, string } from '../validators.js';

/**
 * An abstract base component for creating a curve, corresponding [THREE.Curve](https://threejs.org/docs/index.html#api/extras/core/Curve)
 */

export default {
  inject: ['vglNamespace'],
  props: {
    /** Name of the curve. */
    name: string,
    /**
     * This value determines the amount of divisions when calculating the cumulative segment lengths
     * of a curve. It is recommended to increase this value if the curve is very large.
     */
    arcLengthDivisions: { type: number, default: 200 },
  },
  computed: {
    inst: () => new Curve(),
  },
  watch: {
    inst: {
      handler(inst) {
        Object.assign(inst, { arcLengthDivisions: parseInt(this.arcLengthDivisions, 10) });
        this.vglNamespace.curves[this.name] = inst;
      },
      immediate: true,
    },
    arcLengthDivisions(arcLengthDivisions) {
      this.inst.arcLengthDivisions = parseInt(arcLengthDivisions, 10);
    },
    name(name, oldName) {
      const { vglNamespace: { curves }, inst } = this;
      if (curves[oldName] === inst) delete curves[oldName];
      curves[name] = inst;
    },
  },
  beforeDestroy() {
    const { vglNamespace: { curves }, inst } = this;
    if (curves[this.name] === inst) delete curves[this.name];
  },
  created() { this.vglNamespace.update(); },
  beforeUpdate() { this.vglNamespace.update(); },
  render(h) { return this.$slots.default ? h('div', this.$slots.default) : undefined; },
};
