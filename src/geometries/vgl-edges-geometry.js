import { EdgesGeometry } from '../three.js';
import { string, number } from '../validators.js';

/**
 * A component representing edges geometry,
 * corresponding [THREE.EdgesGeometry](https://threejs.org/docs/#api/geometries/EdgesGeometry).
 *
 */

export default {
  props: {
    /** Name of the geometry, defining the object's structure. */
    geometry: string,
    /** thresholdAngle — An edge is only rendered if the angle (in degrees)
     * between the face normals of the adjoining faces exceeds this value.
     * default = 1 degree. */
    thresholdAngle: { type: number, default: 1 },
  },
  inject: {
    vglObject3d: { default: {} },
    vglNamespace: 'vglNamespace',
  },
  computed: {
    inst: () => {
      const { vglNamespace: { geometries }, geometry, thresholdAngle } = this;
      return new EdgesGeometry(geometries[geometry], parseInt(thresholdAngle, 10));
    },
  },
  render() { return {}; },
};
