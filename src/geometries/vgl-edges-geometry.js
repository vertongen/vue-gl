import { VglObject3dWithMatarialAndGeometry } from '../mixins.js';
import { EdgesGeometry } from '../three.js';
import { string, number } from '../validators.js';

/**
 * A component representing edges geometry,
 * corresponding [THREE.EdgesGeometry](https://threejs.org/docs/#api/geometries/EdgesGeometry).
 *
 */

export default {
  mixins: [VglObject3dWithMatarialAndGeometry],
  props: {
    /** Name of the geometry, defining the object's structure. */
    geometry: string,
    /** thresholdAngle — An edge is only rendered if the angle (in degrees)
     * between the face normals of the adjoining faces exceeds this value.
     * default = 1 degree. */
    thresholdAngle: { type: number, default: 1 },
  },
  computed: {
    inst: () => {
      const myInst = new EdgesGeometry();
      myInst.thresholdAngle = parseInt(this.thresholdAngle, 10);
      return myInst;
    },
  },
};
