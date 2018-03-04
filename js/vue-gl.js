(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?t(exports,require('three')):'function'==typeof define&&define.amd?define(['exports','three'],t):t(e.VueGL={},e.THREE)})(this,function(e,t){'use strict';/**
 * Returns a parsed vector3 object.
 */function a(e){return e.isVector3?e:new(Function.prototype.bind.apply(t.Vector3,[null].concat(p(e.trim().split(/\s+/).map(function(e){return parseFloat(e)})))))}/**
 * Returns a parsed vector2 object.
 */function i(e){return e.isVector2?e:new(Function.prototype.bind.apply(t.Vector2,[null].concat(p(e.trim().split(/\s+/).map(function(e){return parseFloat(e)})))))}/**
 * Returns a parsed euler object.
 */function r(e){return e.isEuler?e:new(Function.prototype.bind.apply(t.Euler,[null].concat(p(e.trim().split(/\s+/).map(function(e,t){return 3===t?e:parseFloat(e)})))))}/**
 * Returns a parsed spherical object.
 */function n(e){return e.isSpherical?e:new(Function.prototype.bind.apply(t.Spherical,[null].concat(p(e.trim().split(/\s+/).map(function(e){return parseFloat(e)})))))().makeSafe()}var o=Math.PI,s={};s.typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e},s.jsx=function(){var e='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(t,a,r,n){var o=t&&t.defaultProps,s=arguments.length-3;if(a||0==s||(a={}),a&&o)for(var l in o)void 0===a[l]&&(a[l]=o[l]);else a||(a=o||{});if(1==s)a.children=n;else if(1<s){for(var p=Array(s),d=0;d<s;d++)p[d]=arguments[d+3];a.children=p}return{$$typeof:e,type:t,key:void 0===r?null:''+r,ref:null,props:a,_owner:null}}}(),s.asyncIterator=function(e){if('function'==typeof Symbol){if(Symbol.asyncIterator){var t=e[Symbol.asyncIterator];if(null!=t)return t.call(e)}if(Symbol.iterator)return e[Symbol.iterator]()}throw new TypeError('Object is not async iterable')},s.asyncGenerator=function(){function e(e){this.value=e}function t(t){function a(r,n){try{var o=t[r](n),s=o.value;s instanceof e?Promise.resolve(s.value).then(function(e){a('next',e)},function(e){a('throw',e)}):i(o.done?'return':'normal',o.value)}catch(e){i('throw',e)}}function i(e,t){'return'===e?r.resolve({value:t,done:!0}):'throw'===e?r.reject(t):r.resolve({value:t,done:!1});r=r.next,r?a(r.key,r.arg):n=null}var r,n;this._invoke=function(e,t){return new Promise(function(i,o){var s={key:e,arg:t,resolve:i,reject:o,next:null};n?n=n.next=s:(r=n=s,a(e,t))})},'function'!=typeof t.return&&(this.return=void 0)}return'function'==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke('next',e)},t.prototype.throw=function(e){return this._invoke('throw',e)},t.prototype.return=function(e){return this._invoke('return',e)},{wrap:function(e){return function(){return new t(e.apply(this,arguments))}},await:function(t){return new e(t)}}}(),s.asyncGeneratorDelegate=function(e,t){function a(a,i){return r=!0,i=new Promise(function(t){t(e[a](i))}),{done:!1,value:t(i)}}var i={},r=!1;return'function'==typeof Symbol&&Symbol.iterator&&(i[Symbol.iterator]=function(){return this}),i.next=function(e){return r?(r=!1,e):a('next',e)},'function'==typeof e.throw&&(i.throw=function(e){if(r)throw r=!1,e;return a('throw',e)}),'function'==typeof e.return&&(i.return=function(e){return a('return',e)}),i},s.asyncToGenerator=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function i(r,n){try{var o=t[r](n),s=o.value}catch(e){return void a(e)}return o.done?void e(s):Promise.resolve(s).then(function(e){i('next',e)},function(e){i('throw',e)})}return i('next')})}},s.classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},s.createClass=function(){function e(e,t){for(var a,r=0;r<t.length;r++)a=t[r],a.enumerable=a.enumerable||!1,a.configurable=!0,'value'in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),s.defineEnumerableProperties=function(e,t){for(var a in t){var i=t[a];i.configurable=i.enumerable=!0,'value'in i&&(i.writable=!0),Object.defineProperty(e,a,i)}return e},s.defaults=function(e,t){for(var a=Object.getOwnPropertyNames(t),r=0;r<a.length;r++){var i=a[r],n=Object.getOwnPropertyDescriptor(t,i);n&&n.configurable&&e[i]===void 0&&Object.defineProperty(e,i,n)}return e},s.defineProperty=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},s.extends=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var i in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.get=function e(t,a,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,a);if(r===void 0){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,a,i)}if('value'in r)return r.value;var o=r.get;return void 0===o?void 0:o.call(i)},s.inherits=function(e,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function, not '+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s.instanceof=function(e,t){return null!=t&&'undefined'!=typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t},s.interopRequireDefault=function(e){return e&&e.__esModule?e:{default:e}},s.interopRequireWildcard=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},s.newArrowCheck=function(e,t){if(e!==t)throw new TypeError('Cannot instantiate an arrow function')},s.objectDestructuringEmpty=function(e){if(null==e)throw new TypeError('Cannot destructure undefined')},s.objectWithoutProperties=function(e,t){var a={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a},s.possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t&&('object'==typeof t||'function'==typeof t)?t:e},s.selfGlobal='undefined'==typeof global?self:global,s.set=function e(t,a,i,r){var n=Object.getOwnPropertyDescriptor(t,a);if(n===void 0){var o=Object.getPrototypeOf(t);null!==o&&e(o,a,i,r)}else if('value'in n&&n.writable)n.value=i;else{var s=n.set;s!==void 0&&s.call(r,i)}return i},s.slicedToArray=function(){function e(e,t){var a,i=[],r=!0,n=!1;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(i.push(o.value),!(t&&i.length===t));r=!0);}catch(e){n=!0,a=e}finally{try{!r&&s['return']&&s['return']()}finally{if(n)throw a}}return i}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),s.slicedToArrayLoose=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e)){for(var a,i=[],r=e[Symbol.iterator]();!(a=r.next()).done&&(i.push(a.value),!(t&&i.length===t)););return i}throw new TypeError('Invalid attempt to destructure non-iterable instance')},s.taggedTemplateLiteral=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},s.taggedTemplateLiteralLoose=function(e,t){return e.raw=t,e},s.temporalRef=function(e,t,a){if(e===a)throw new ReferenceError(t+' is not defined - temporal dead zone');else return e},s.temporalUndefined={},s.toArray=function(e){return Array.isArray(e)?e:Array.from(e)},s.toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)},s;var l={inject:{vglNamespace:{default:function(){var e,t=this,a=[],i=[];return{renderers:a,cameras:Object.create(null),scenes:Object.create(null),update:function(){e||(t.$nextTick(function(){i.forEach(function(e){e()}),a.forEach(function(e){e.render()}),e=!1}),e=!0)},beforeRender:i,geometries:Object.create(null),materials:Object.create(null),textures:Object.create(null)}}}},provide:function(){return{vglNamespace:Object.create(this.vglNamespace,{geometries:{value:Object.create(this.vglNamespace.geometries)},materials:{value:Object.create(this.vglNamespace.materials)},textures:{value:Object.create(this.vglNamespace.textures)}})}},render:function(e){return this.$slots.default?e('div',this.$slots.default):void 0}},p=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)},d=[String,Number],c=String,m=[String,t.Vector3],u=[String,t.Spherical],g=Boolean,f=[String,t.Euler],h=[String,t.Vector2],y={props:{/** The object's local position as a 3D vector. */position:m,/** The object's local rotation as a euler angle. */rotation:f,/** The object's local scale as a 3D vector. */scale:m,/** Whether the object gets rendered into shadow map. */castShadow:g,/** Whether the material receives shadows. */receiveShadow:g,/** Optional name of the object. */name:c},computed:{inst:function(){return new t.Object3D}},inject:{vglObject3d:{default:{}},vglNamespace:'vglNamespace'},provide:function(){var e=this;return{vglObject3d:{get inst(){return e.inst}}}},created:function(){this.vglNamespace.update()},beforeUpdate:function(){this.vglNamespace.update()},beforeDestroy:function(){this.inst.parent&&this.inst.parent.remove(this.inst),this.vglNamespace.update()},watch:{inst:{handler:function(e,t){t&&t.parent&&t.parent.remove(t),this.vglObject3d.inst&&this.vglObject3d.inst.add(e),this.position&&e.position.copy(a(this.position)),this.rotation&&e.rotation.copy(r(this.rotation)),this.scale&&e.scale.copy(a(this.scale)),Object.assign(e,{castShadow:this.castShadow,receiveShadow:this.receiveShadow})},immediate:!0},"vglObject3d.inst":function(e){e.add(this.inst)},position:function(e){this.inst.position.copy(a(e))},rotation:function(e){this.inst.rotation.copy(r(e))},scale:function(e){this.inst.scale.copy(a(e))},castShadow:function(e){this.inst.castShadow=e},receiveShadow:function(e){this.inst.receiveShadow=e}},render:function(e){return this.$slots.default?e('div',this.$slots.default):void 0}},b={mixins:[y],props:{/**
     * Position in 3D space for the camera to point towards.
     * This property overwrite rotation property when both defined.
     */orbitTarget:m,/**
     * Spherical position around orbitTarget.
     * This property overwrite position and rotation properties.
     * If orbitTarget is not defined, automatically set to (0, 0, 0).
     */orbitPosition:u},computed:{inst:function(){return new t.Camera}},watch:{inst:{handler:function(e){if(this.vglNamespace.cameras[this.name]=e,this.orbitPosition||this.orbitTarget){var i;this.orbitTarget&&(i=a(this.orbitTarget)),this.orbitPosition&&(e.position.setFromSpherical(n(this.orbitPosition)),i&&e.position.add(i)),e.lookAt(i||new t.Vector3)}},immediate:!0},name:function(e,t){var a=this.vglNamespace.cameras,i=this.inst;a[t]===i&&delete a[t],a[e]=i},orbitTarget:function(e){var t=a(e);this.orbitPosition&&this.inst.position.setFromSpherical(n(this.orbitPosition)).add(t),this.inst.lookAt(t)},orbitPosition:function(e){if(this.inst.position.setFromSpherical(n(e)),this.orbitTarget){var i=a(this.orbitTarget);this.inst.position.add(i),this.inst.lookAt(i)}else this.inst.lookAt(new t.Vector3)}},beforeDestroy:function(){var e=this.vglNamespace.cameras,t=this.inst;e[this.name]===t&&delete e[this.name]}},v={mixins:[y],props:{/** CSS style color of the light. */color:{type:c,default:'#fff'},/** Numeric value of the light's strength/intensity. */intensity:{type:d,default:1}},computed:{inst:function(){return new t.Light}},watch:{inst:{handler:function(e){e.color.setStyle(this.color),Object.assign(e,{intensity:parseFloat(this.intensity)})},immediate:!0},color:function(e){this.inst.color.setStyle(e)},intensity:function(e){this.inst.intensity=parseFloat(e)}}},S={inject:['vglNamespace'],props:{/** Name of the material. */name:c},computed:{inst:function(){return new t.Material}},watch:{inst:{handler:function(e){this.vglNamespace.materials[this.name]=e},immediate:!0},name:function(e,t){var a=this.vglNamespace.materials,i=this.inst;a[t]===i&&delete a[t],a[e]=i}},beforeDestroy:function(){var e=this.vglNamespace.materials,t=this.inst;e[this.name]===t&&delete e[this.name]},created:function(){this.vglNamespace.update()},beforeUpdate:function(){this.vglNamespace.update()},render:function(e){return this.$slots.default?e('div',this.$slots.default):void 0}},w={inject:['vglNamespace'],props:{/** Name of the component. */name:c},computed:{inst:function(){return new t.BufferGeometry}},watch:{inst:{handler:function(e){this.vglNamespace.geometries[this.name]=e},immediate:!0},name:function(e,t){var a=this.vglNamespace.geometries,i=this.inst;a[t]===i&&delete a[t],a[e]=i}},beforeDestroy:function(){var e=this.vglNamespace.geometries,t=this.inst;e[this.name]===t&&delete e[this.name]},created:function(){this.vglNamespace.update()},beforeUpdate:function(){this.vglNamespace.update()},render:function(e){return this.$slots.default?e('div',this.$slots.default):void 0}},x={mixins:[y],methods:{setMaterial:function(){var e=this.vglNamespace.materials,t=this.material,a=this.inst;e[t]&&(a.material=e[t])}},created:function(){this.vglNamespace.beforeRender.unshift(this.setMaterial)},beforeDestroy:function(){var e=this.vglNamespace.beforeRender,t=this.setMaterial;e.splice(e.indexOf(t),1)}},N={mixins:[x],methods:{setGeometry:function(){var e=this.vglNamespace.geometries,t=this.geometry,a=this.inst;e[t]&&(a.geometry=e[t])}},created:function(){this.vglNamespace.beforeRender.unshift(this.setGeometry)},beforeDestroy:function(){var e=this.vglNamespace.beforeRender,t=this.setGeometry;e.splice(e.indexOf(t),1)}},V={mixins:[S],methods:{setMap:function(){var e=this.vglNamespace.textures,t=this.inst,a=this.map;a in e&&(t.map=e[a])}},created:function(){this.vglNamespace.beforeRender.unshift(this.setMap)},beforeDestroy:function(){var e=this.vglNamespace.beforeRender,t=this.setMap;e.splice(e.indexOf(t),1)}},G={mixins:[N],props:{/** Name of the geometry, representing the line segment(s). */geometry:c,/** Name of the material for the line. */material:c},computed:{inst:function(){return new t.Line}}},L={mixins:[w],props:{/** Radius of the cylinder at the top. */radiusTop:{type:d,default:1},/** Radius of the cylinder at the bottom. */radiusBottom:{type:d,default:1},/** Height of the cylinder. */height:{type:d,default:1},/** Number of segmented faces around the circumference of the cylinder. */radialSegments:{type:d,default:8},/** Number of rows of faces along the height of the cylinder. */heightSegments:{type:d,default:1},/** A Boolean indicating whether the ends of the cylinder are open or capped. */openEnded:g,/** Start angle for first segment. */thetaStart:{type:d,default:0},/** The central angle of the circular sector. */thetaLength:{type:d,default:2*o}},computed:{inst:function(){return new t.CylinderBufferGeometry(parseFloat(this.radiusTop),parseFloat(this.radiusBottom),parseFloat(this.height),parseInt(this.radialSegments,10),parseInt(this.heightSegments,10),this.openEnded,parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},M={uv:t.UVMapping,"cube-reflection":t.CubeReflectionMapping,"cube-refraction":t.CubeRefractionMapping,"equirectangular-reflection":t.EquirectangularReflectionMapping,"equirectangular-refraction":t.EquirectangularRefractionMapping,"spherical-reflection":t.SphericalReflectionMapping,"cube-uv-reflection":t.CubeUVReflectionMapping,"cube-uv-refraction":t.CubeUVRefractionMapping},P={repeat:t.RepeatWrapping,"clamp-to-edge":t.ClampToEdgeWrapping,"mirrored-repeat":t.MirroredRepeatWrapping},T={nearest:t.NearestFilter,"nearest-mip-map-nearest":t.NearestMipMapNearestFilter,"nearest-mip-map-linear":t.NearestMipMapLinearFilter,linear:t.LinearFilter,"linear-mip-map-nearest":t.LinearMipMapNearestFilter,"linear-mip-map-linear":t.LinearMipMapLinearFilter},B={alpha:t.AlphaFormat,rgb:t.RGBFormat,rgba:t.RGBAFormat,luminance:t.LuminanceFormat,"luminance-alpha":t.LuminanceAlphaFormat,rgbe:t.RGBEFormat,depth:t.DepthFormat,"depth-stencil":t.DepthStencilFormat},C={"unsigned-byte":t.UnsignedByteType,byte:t.ByteType,short:t.ShortType,"unsigned-short":t.UnsignedShortType,int:t.IntType,"unsigned-int":t.UnsignedIntType,float:t.FloatType,"half-float":t.HalfFloatType,"unsigned-short-4444":t.UnsignedShort4444Type,"unsigned-short-5551":t.UnsignedShort5551Type,"unsigned-short-565":t.UnsignedShort565Type,"unsigned-int-248":t.UnsignedInt248Type},R={linear:t.LinearEncoding,"s-rgb":t.sRGBEncoding,gamma:t.GammaEncoding,rgbe:t.RGBEEncoding,"log-luv":t.LogLuvEncoding,rgbm7:t.RGBM7Encoding,rgbm16:t.RGBM16Encoding,rgbde:t.RGBDEncoding,"basic-depth":t.BasicDepthPacking,"rgba-depth":t.RGBADepthPacking},A={mixins:[w],computed:{inst:function(){return new t.ExtrudeBufferGeometry([],{})}}},D=Object.create(null);/**
 * This is the base mixin component for most object components in VueGL,
 * corresponding [THREE.Object3D](https://threejs.org/docs/index.html#api/core/Object3D).
 * Object3d components inside a object3d component are added
 * as children via THREE.Object3D.prototype.add() method.
 *
 * VglObject3d components inside default slots are added as children.
 *//**
 * This is where you place objects,
 * corresponding [THREE.Scene](https://threejs.org/docs/index.html#api/scenes/Scene).
 *
 * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
 *//**
 * This is abstract base component for cameras,
 * corresponding [THREE.Camera](https://threejs.org/docs/index.html#api/cameras/Camera).
 * This component should always be mixined (inherited).
 * You probably want a [VglPerspectiveCamera](vgl-perspective-camera)
 * and [VglOrthographicCamera](vgl-orthographic-camera).
 *
 * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
 *//**
 * This component creates a canvas that have WebGL context.
 * Options are corresponding [THREE.WebGLRenderer](https://threejs.org/docs/index.html#api/core/Object3D).
 *
 * Properties of [VglNamespace](vgl-namespace) are also available as mixin.
 *//**
 * Camera that uses perspective projection,
 * corresponding [THREE.PerspectiveCamera](https://threejs.org/docs/index.html#api/cameras/PerspectiveCamera).
 * Camera frustum aspect ratio is automatically set to the renderer aspect ratio.
 *
 * Properties of [VglCamera](vgl-camera) are also available as mixin.
 *//**
 * A component for grouping objects,
 * corresponding [THREE.Group](https://threejs.org/docs/index.html#api/objects/Group).
 * Its purpose is to make working with groups of objects syntactically clearer.
 *
 * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
 *//**
 * Abstract mixin component for lights,
 * corresponding [THREE.Light](https://threejs.org/docs/index.html#api/lights/Light).
 *
 * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
 *//**
 * A light that gets emitted in a specific direction, corresponding [THREE.DirectionalLight](https://threejs.org/docs/index.html#api/lights/DirectionalLight). This light will behave as though it is infinitely far away and the rays produced from it are all parallel. This light can cast shadows.
 *
 * Properties of [VglLight](vgl-light) are also available as mixin.
 *//**
 * A light component globally illuminates all objects in the scene equally,
 * corresponding [THREE.AmbientLight](https://threejs.org/docs/index.html#api/lights/AmbientLight).
 * This light cannot be used to cast shadows as it does not have a direction.
 *
 * Properties of [VglLight](vgl-light) are also available as mixin.
 *//**
 * Abstract mixin component for materials,
 * corresponding [THREE.Material](https://threejs.org/docs/index.html#api/materials/Material).
 *//**
 * The default material used by [VglPoints](vgl-points),
 * corresponding [THREE.PointsMaterial](https://threejs.org/docs/index.html#api/materials/PointsMaterial).
 *
 * Properties of [VglMaterial](vgl-material) are also available as mixin.
 *//**
 * This is the base mixin component for all geometry components,
 * corresponding [THREE.Geometry](https://threejs.org/docs/index.html#api/core/Geometry).
 * This can also be used directly for building custom geometries.
 *//**
 * This is a component for generating sphere geometries,
 * corresponding [THREE.SphereGeometry](https://threejs.org/docs/index.html#api/geometries/SphereGeometry).
 *
 * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
 *//**
 * A standard physically based material,
 * corresponding [THREE.MeshStandardMaterial](https://threejs.org/docs/index.html#api/materials/MeshStandardMaterial).
 * Using Metallic-Roughness workflow.
 *
 * Properties of [VglMaterial](vgl-material) are also available as mixin.
 *//**
 * A component representing triangular polygon mesh based objects,
 * corresponding [THREE.Mesh](https://threejs.org/docs/index.html#api/objects/Mesh).
 *
 * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
 *//**
 * A component for displaying points,
 * corresponding [THREE.Points](https://threejs.org/docs/index.html#api/objects/Points).
 *
 * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
 *//**
 * A material for drawing wireframe-style geometries,
 * corresponding [THREE.LineBasicMaterial](https://threejs.org/docs/index.html#api/materials/LineBasicMaterial).
 *
 * Properties of [VglMaterial](vgl-material) are also available as mixin.
 *//**
 * A continuous line component,
 * corresponding [THREE.Line](https://threejs.org/docs/index.html#api/objects/Line).
 *
 * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
 *//**
 * A sprite component corresponding [THREE.Sprite](https://threejs.org/docs/index.html#api/objects/Sprite).
 * It is a plane that always faces towards the camera.
 *
 * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
 *//**
 * This is the quadrilateral primitive geometry component,
 * corresponding [THREE.BoxGeometry](https://threejs.org/docs/index.html#api/geometries/BoxGeometry).
 *
 * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
 *//**
 * This is a simple shape component of Euclidean geometry,
 * corresponding [THREE.CircleGeometry](https://threejs.org/docs/index.html#api/geometries/CircleGeometry).
 * It is contructed from a number of triangular segments that are oriented around a central point
 * and extend as far out as a given radius.
 * It is built counter-clockwise from a start angle and a given central angle.
 * It can also be used to create regular polygons,
 * where the number of segments determines the number of sides.
 *
 * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
 *//**
 * A series of lines component drawn between pairs of vertices,
 * corresponding [THREE.LineSegments](https://threejs.org/docs/index.html#api/objects/LineSegments).
 *
 * Properties of [VglLine](vgl-line) are also available as mixin.
 *//**
 * A continuous line component that connects back to the start,
 * corresponding [THREE.LineLoop](https://threejs.org/docs/index.html#api/objects/LineLoop).
 *
 * Properties of [VglLine](vgl-line) are also available as mixin.
 *//**
 * This is a component for generating cylinder geometries,
 * corresponding [THREE.CylinderGeometry](https://threejs.org/docs/index.html#api/geometries/CylinderGeometry).
 *
 * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
 *//**
 * This is a component for generating cone geometries,
 * corresponding [THREE.ConeGeometry](https://threejs.org/docs/index.html#api/geometries/ConeGeometry).
 *
 * Properties of [VglCylinderGeometry](vgl-cylinder-geometry) are also available as mixin.
 *//**
 * An axis object to visualize the the 3 axes in a simple way,
 * corresponding [THREE.AxesHelper](https://threejs.org/docs/index.html#api/helpers/AxesHelper).
 * The X axis is red. The Y axis is green. The Z axis is blue.
 *
 * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
 *//**
 * Camera that uses orthographic projection,
 * corresponding [THREE.OrthographicCamera](https://threejs.org/docs/index.html#api/cameras/OrthographicCamera).
 * Camera frustum top, bottom, left, and right planes are automatically set to the renderer size.
 *
 * Properties of [VglCamera](vgl-camera) are also available as mixin.
 *//**
 * A component for generating plane geometries,
 * corresponding [THREE.PlaneGeometry](https://threejs.org/docs/index.html#api/geometries/PlaneGeometry).
 *
 * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
 *//**
 * A component for generating a dodecahedron geometries,
 * corresponding [THREE.DodecahedronGeometry](https://threejs.org/docs/index.html#api/geometries/DodecahedronGeometry).
 *
 * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
 *//**
 * A component for generating a icosahedron geometries,
 * corresponding [THREE.IcosahedronGeometry](https://threejs.org/docs/index.html#api/geometries/IcosahedronGeometry).
 *
 * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
 *//**
 * A component for generating a octahedron geometries,
 * corresponding [THREE.OctahedronGeometry](https://threejs.org/docs/index.html#api/geometries/OctahedronGeometry).
 *
 * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
 *//**
 * This is a simple shape component of Euclidean geometry,
 * corresponding [THREE.RingGeometry](https://threejs.org/docs/index.html#api/geometries/RingGeometry).
 * It is contructed from a number of triangular segments that are oriented around a central point
 * and extend as far out as a given radius.
 * It is built counter-clockwise from a start angle and a given central angle.
 * It can also be used to create regular polygons,
 * where the number of segments determines the number of sides.
 *
 * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
 *//**
 * A component for generating a tetrahedron geometries,
 * corresponding [THREE.TetrohedronGeometry](https://threejs.org/docs/index.html#api/geometries/TetrohedronGeometry).
 *
 * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
 *//**
 * A component for generating torus geometries,
 * corresponding [THREE.TorusGeometry](https://threejs.org/docs/index.html#api/geometries/TorusGeometry).
 *
 * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
 *//**
 * A component for generating torus knot geometries,
 * corresponding [THREE.TorusKnotGeometry](https://threejs.org/docs/index.html#api/geometries/TorusKnotGeometry).
 *
 * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
 *//**
 * An 3D arrow object for visualizing directions,
 * corresponding [THREE.ArrowHelper](https://threejs.org/docs/index.html#api/helpers/ArrowHelper).
 *
 * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
 *//**
 * A helper component to show the world-axis-aligned bounding box around its parent,
 * corresponding [THREE.BoxHelper](https://threejs.org/docs/index.html#api/helpers/BoxHelper).
 *
 * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
 *//**
 * A light that gets emitted from a single point in all directions, corresponding [THREE.PointLight](https://threejs.org/docs/index.html#api/lights/PointLight). A common use case for this is to replicate the light emitted from a bare lightbulb. This light can cast shadows.
 *
 * Properties of [VglLight](vgl-light) are also available as mixin.
 *//**
 * This light gets emitted from a single point in one direction, along a cone that increases in size the further from the light it gets. Corresponding [THREE.SpotLight](https://threejs.org/docs/index.html#api/lights/SpotLight). This light can cast shadows.
 *
 * Properties of [VglLight](vgl-light) are also available as mixin.
 *//**
 * A texture to apply to a surface or as a reflection or refraction map,
 * corresponding [THREE.Texture](https://threejs.org/docs/index.html#api/textures/Texture).
 *//**
 * A component for creating extruded geometry from a path shape,
 * corresponding [THREE.ExtrudeGeometry](https://threejs.org/docs/index.html#api/geometries/ExtrudeGeometry).
 *
 * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
 *//**
 * A component for generating text as a single geometry,
 * corresponding [THREE.TextGeometry](https://threejs.org/docs/index.html#api/geometries/TextGeometry).
 *
 * Properties of [VglGeometry](vgl-geometry) are also available as mixin.
 *//**
 * A material for a use with a [VglSprite](vgl-sprite) component,
 * corresponding [THREE.SpriteMaterial](https://threejs.org/docs/index.html#api/materials/SpriteMaterial).
 *
 * Properties of [VglMaterial](vgl-material) are also available as mixin.
 *//**
 * A component to define grids,
 * corresponding [THREE.GridHelper](https://threejs.org/docs/index.html#api/helpers/GridHelper).
 * Grids are two-dimensional arrays of lines.
 *
 * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
 *//**
 * This material can receive shadows but otherwise is completely transparent,
 * corresponding [THREE.ShadowMaterial](https://threejs.org/docs/index.html#api/materials/ShadowMaterial).
 *
 * Properties of [VglMaterial](vgl-material) are also available as mixin.
 *//**
 * This helps with visualizing what a camera contains in its frustum,
 * corresponding [THREE.CameraHelper](https://threejs.org/docs/index.html#api/helpers/CameraHelper).
 * It visualizes the frustum of a camera using a LineSegments.
 *
 * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
 *//**
 * A helper component to assist with visualizing a DirectionalLight's effect on the scene,
 * corresponding [THREE.DirectionalLightHelper](https://threejs.org/docs/index.html#api/helpers/DirectionalLightHelper).
 *
 * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
 *//**
 * A component to define polar grids,
 * correcponding [THREE.PolarGridHelper](https://threejs.org/docs/index.html#api/helpers/PolarGridHelper).
 * Grids are two-dimensional arrays of lines.
 *
 * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
 *//**
 * A material for drawing geometries in a simple shaded (flat or wireframe) way,
 * corresponding [THREE.MeshStandardMaterial](https://threejs.org/docs/index.html#api/materials/MeshStandardMaterial).
 * This material is not affected by lights.
 *
 * Properties of [VglMaterial](vgl-material) are also available as mixin.
 */e.VglNamespace=l,e.VglObject3d=y,e.VglScene={mixins:[y],computed:{inst:function(){return new t.Scene}},watch:{inst:{handler:function(e){this.vglNamespace.scenes[this.name]=e},immediate:!0},name:function(e,t){var a=this.vglNamespace.scenes,i=this.inst;a[t]===i&&delete a[t],a[e]=i}},beforeDestroy:function(){var e=this.vglNamespace.scenes,t=this.inst;e[this.name]===t&&delete e[this.name]}},e.VglCamera=b,e.VglRenderer={mixins:[l],props:{/** Shader precision. Can be "highp", "mediump" or "lowp". */precision:c,/** Whether the canvas contains an alpha (transparency) buffer or not. */alpha:g,/** Whether the renderer will assume that colors have premultiplied alpha. */disablePremultipliedAlpha:g,/** Whether to perform antialiasing. */antialias:g,/** Whether the drawing buffer has a stencil buffer of at least 8 bits. */disableStencil:g,/**
     * A hint to the user agent indicating what configuration of GPU is suitable
     * for this WebGL context. Can be "high-performance", "low-power" or "default".
     */powerPreference:c,/** Whether to preserve the buffers until manually cleared or overwritten. */preserveDrawingBuffer:g,/** Whether the drawing buffer has a depth buffer of at least 16 bits. */disableDepth:g,/** Whether to use a logarithmic depth buffer. */logarithmicDepthBuffer:g,/** Name of the using camera. */camera:c,/** Name of the target scene. */scene:c,/** If set, use shadow maps in the scene. */shadowMapEnabled:g},computed:{inst:function(){var e=new t.WebGLRenderer({precision:this.precision,alpha:this.alpha,premultipliedAlpha:!this.disablePremultipliedAlpha,antialias:this.antialias,stencil:!this.disableStencil,preserveDrawingBuffer:this.preserveDrawingBuffer,depth:!this.disableDepth,logarithmicDepthBuffer:this.logarithmicDepthBuffer,powerPreference:this.powerPreference});return e.shadowMap.enabled=this.shadowMapEnabled,e}},methods:{render:function(){var e=this.vglNamespace.scenes[this.scene],t=this.vglNamespace.cameras[this.camera];if(e&&t){if(t.isPerspectiveCamera){var a=this.$el.clientWidth/this.$el.clientHeight;t.aspect!==a&&(t.aspect=a,t.updateProjectionMatrix())}else if(t.isOrthographicCamera){var i=this.$el.clientWidth/2,r=this.$el.clientHeight/2;(t.right!==i||t.top!==r)&&(t.left=-i,t.right=i,t.top=r,t.bottom=-r,t.updateProjectionMatrix())}else throw new TypeError('Unknown camera type.');this.inst.render(e,t)}}},watch:{inst:function(e,t){this.$el&&(e.setSize(this.$el.clientWidth,this.$el.clientHeight),this.$el.replaceChild(e.domElement,t.domElement),this.vglNamespace.update()),t.dispose()}},created:function(){this.vglNamespace.renderers.push(this)},mounted:function(){this.inst.setSize(this.$el.clientWidth,this.$el.clientHeight),this.$el.insertBefore(this.inst.domElement,this.$el.firstChild),this.vglNamespace.update()},beforeDestroy:function(){this.vglNamespace.renderers.splice(this.vglNamespace.renderers.indexOf(this),1),this.inst.dispose()},render:function(e){var t=this;return e('div',[e('iframe',{style:{visibility:'hidden',width:'100%',height:'100%'},on:{load:function(e){e.target.contentWindow.addEventListener('resize',function(){t.inst.setSize(t.$el.clientWidth,t.$el.clientHeight),t.vglNamespace.update()},!1)}}},this.$slots.default)])}},e.VglPerspectiveCamera={mixins:[b],props:{/** Zoom factor of the camera. */zoom:{type:d,default:1},/** Camera frustum near plane. */near:{type:d,default:.1},/** Camera frustum far plane. */far:{type:d,default:2e3},/** Camera frustum vertical field of view, from bottom to top of view, in degrees. */fov:{type:d,default:50}},computed:{inst:function(){return new t.PerspectiveCamera}},watch:{inst:{handler:function(e){Object.assign(e,{zoom:parseFloat(this.zoom),near:parseFloat(this.near),far:parseFloat(this.far),fov:parseFloat(this.fov)})},immediate:!0},zoom:function(e){this.inst.zoom=parseFloat(e)},near:function(e){this.inst.near=parseFloat(e)},far:function(e){this.inst.far=parseFloat(e)},fov:function(e){this.inst.fov=parseFloat(e)}}},e.VglGroup={mixins:[y],computed:{inst:function(){return new t.Group}}},e.VglLight=v,e.VglDirectionalLight={mixins:[v],computed:{inst:function(){return new t.DirectionalLight}}},e.VglAmbientLight={mixins:[v],computed:{inst:function(){return new t.AmbientLight}}},e.VglMaterial=S,e.VglPointsMaterial={mixins:[S],props:{/** CSS style color of the material. */color:{type:c,default:'#fff'},/** The size of the points. */size:{type:d,default:1},/** Specify whether points' size will get smaller with the distance. */disableSizeAttenuation:g},computed:{inst:function(){return new t.PointsMaterial}},watch:{inst:{handler:function(e){Object.assign(e,{size:parseFloat(this.size),sizeAttenuation:!this.disableSizeAttenuation}),e.color.setStyle(this.color)},immediate:!0},color:function(e){this.inst.color.setStyle(e)},size:function(e){this.inst.size=parseFloat(e)},disableSizeAttenuation:function(e){this.inst.sizeAttenuation=!e}}},e.VglGeometry=w,e.VglSphereGeometry={mixins:[w],props:{/** Sphere radius. */radius:{type:d,default:1},/** Number of horizontal segments. */widthSegments:{type:d,default:8},/** Number of vertical segments. */heightSegments:{type:d,default:6},/** Specify horizontal starting angle. */phiStart:{type:d,default:0},/** Specify horizontal sweep angle size. */phiLength:{type:d,default:2*o},/** Specify vertical starting angle. */thetaStart:{type:d,default:0},/** Specify vertical sweep angle size. */thetaLength:{type:d,default:o}},computed:{inst:function(){return new t.SphereBufferGeometry(parseFloat(this.radius),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10),parseFloat(this.phiStart),parseFloat(this.phiLength),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},e.VglMeshStandardMaterial={mixins:[V],props:{/** CSS style color of the material. */color:{type:c,default:'#fff'},/** The color map of the material. */map:c},computed:{inst:function(){return new t.MeshStandardMaterial}},watch:{inst:{handler:function(e){e.color.setStyle(this.color)},immediate:!0},color:function(e){this.inst.color.setStyle(e)}}},e.VglMesh={mixins:[N],props:{/** Name of the geometry, defining the object's structure. */geometry:c,/** Name of the material, defining the object's appearance. */material:c},computed:{inst:function(){return new t.Mesh}}},e.VglPoints={mixins:[N],props:{/** Name of the geometry, defining the object's structure. */geometry:c,/** Name of the material, defining the object's appearance. */material:c},computed:{inst:function(){return new t.Points}}},e.VglLineBasicMaterial={mixins:[S],props:{/** CSS style color of the material. */color:{type:c,default:'#fff'},/** A boolean whether the material is affected by lights. */lights:g,/** The line thickness. */linewidth:{type:d,default:1},/** Define appearance of line ends. Possible values are "butt", "round" and "square". */linecap:{type:c,default:'round'},/** Define appearance of line joints. Possible values are "round", "bevel" and "miter". */linejoin:{type:c,default:'round'}},computed:{inst:function(){return new t.LineBasicMaterial}},watch:{inst:{handler:function(e){Object.assign(e,{lights:this.lights,linecap:this.linecap,linejoin:this.linejoin,linewidth:parseFloat(this.linewidth)}),e.color.setStyle(this.color)},immediate:!0},color:function(e){this.inst.color.setStyle(e)},lights:function(e){this.inst.lights=e},linewidth:function(e){this.inst.linewidth=parseFloat(e)},linecap:function(e){this.inst.linecap=e},linejoin:function(e){this.inst.linejoin=e}}},e.VglLine=G,e.VglSprite={mixins:[x],props:{/** Name of the material, defining the object's appearance. */material:c},computed:{inst:function(){return new t.Sprite}}},e.VglBoxGeometry={mixins:[w],props:{/** Width of the sides on the X axis. */width:{type:d,default:1},/** Height of the sides on the Y axis. */height:{type:d,default:1},/** Depth of the sides on the Z axis. */depth:{type:d,default:1},/** Number of segmented faces along the width of the sides. */widthSegments:{type:d,default:1},/** Number of segmented faces along the height of the sides. */heightSegments:{type:d,default:1},/** Number of segmented faces along the depth of the sides. */depthSegments:{type:d,default:1}},computed:{inst:function(){return new t.BoxBufferGeometry(parseFloat(this.width),parseFloat(this.height),parseFloat(this.depth),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10),parseInt(this.depthSegments,10))}}},e.VglCircleGeometry={mixins:[w],props:{/** Radius of the circle. */radius:{type:d,default:1},/** Number of segments (triangles). */segments:{type:d,default:8},/** Start angle for first segment. */thetaStart:{type:d,default:0},/** The central angle of the circular sector. */thetaLength:{type:d,default:2*o}},computed:{inst:function(){return new t.CircleBufferGeometry(parseFloat(this.radius),parseInt(this.segments,10),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},e.VglLineSegments={mixins:[G],computed:{inst:function(){return new t.LineSegments}}},e.VglLineLoop={mixins:[G],computed:{inst:function(){return new t.LineLoop}}},e.VglConeGeometry={mixins:[L],props:{/** Radius of the cone at the base. */radius:{type:d,default:1}},computed:{inst:function(){return new t.ConeBufferGeometry(parseFloat(this.radius),parseFloat(this.height),parseInt(this.radialSegments,10),parseInt(this.heightSegments,10),this.openEnded,parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},e.VglAxesHelper={mixins:[y],props:{/** Size of the lines representing the axes. */size:{type:d,default:1}},computed:{inst:function(){return new t.AxesHelper(parseFloat(this.size))}}},e.VglOrthographicCamera={mixins:[b],props:{/** Zoom factor of the camera. */zoom:{type:d,default:1},/** Camera frustum near plane. */near:{type:d,default:.1},/** Camera frustum far plane. */far:{type:d,default:2e3}},computed:{inst:function(){return new t.OrthographicCamera}},watch:{inst:{handler:function(e){Object.assign(e,{zoom:parseFloat(this.zoom),near:parseFloat(this.near),far:parseFloat(this.far)})},immediate:!0},zoom:function(e){this.inst.zoom=parseFloat(e)},near:function(e){this.inst.near=parseFloat(e)},far:function(e){this.inst.far=parseFloat(e)}}},e.VglCylinderGeometry=L,e.VglPlaneGeometry={mixins:[w],props:{/** Width along the X axis. */width:{type:d,default:1},/** Height along the Y axis. */height:{type:d,default:1},/** Number of segments along the X axis. */widthSegments:{type:d,default:1},/** Number of segments along the Y axis. */heightSegments:{type:d,default:1}},computed:{inst:function(){return new t.PlaneBufferGeometry(parseFloat(this.width),parseFloat(this.height),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10))}}},e.VglDodecahedronGeometry={mixins:[w],props:{/** Radius of the dodecahedron. */radius:{type:d,default:1},/** Setting this to a value greater than 0 adds vertices making it no longer a dodecahedron. */detail:{type:d,default:0}},computed:{inst:function(){return new t.DodecahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},e.VglIcosahedronGeometry={mixins:[w],props:{/** Radius of the icosahedron. */radius:{type:d,default:1},/** Setting this to a value greater than 0 adds vertices making it no longer a icosahedron. */detail:{type:d,default:0}},computed:{inst:function(){return new t.IcosahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},e.VglOctahedronGeometry={mixins:[w],props:{/** Radius of the octahedron. */radius:{type:d,default:1},/** Setting this to a value greater than 0 adds vertices making it no longer a octahedron. */detail:{type:d,default:0}},computed:{inst:function(){return new t.OctahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},e.VglRingGeometry={mixins:[w],props:{/** Inner radius of the ring. */innerRadius:{type:d,default:.5},/** Outer radius of the ring. */outerRadius:{type:d,default:1},/** Number of segments along to the tangential direction. */thetaSegments:{type:d,default:8},/** Number of segments along to the radial direction. */phiSegments:{type:d,default:1},/** The starting angle. */thetaStart:{type:d,default:0},/** The central angle. */thetaLength:{type:d,default:2*o}},computed:{inst:function(){return new t.RingBufferGeometry(parseFloat(this.innerRadius),parseFloat(this.outerRadius),parseInt(this.thetaSegments,10),parseInt(this.phiSegments,10),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},e.VglTetrahedronGeometry={mixins:[w],props:{/** Radius of the tetrahedron. */radius:{type:d,default:1},/** Setting this to a value greater than 0 adds vertices making it no longer a tetrahedron. */detail:{type:d,default:0}},computed:{inst:function(){return new t.TetrahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},e.VglTorusGeometry={mixins:[w],props:{/** Radius of the torus. */radius:{type:d,default:1},/** Diamiter of the tube. */tube:{type:d,default:.4},/** Number of segments of the tube's section. */radialSegments:{type:d,default:8},/** Number of segments along to the tube length direction. */tubularSegments:{type:d,default:6},/** The central angle. */arc:{type:d,default:2*o}},computed:{inst:function(){return new t.TorusBufferGeometry(parseFloat(this.radius),parseFloat(this.tube),parseInt(this.radialSegments,10),parseInt(this.tubularSegments,10),parseFloat(this.arc))}}},e.VglTorusKnotGeometry={mixins:[w],props:{/** Radius of the torus. */radius:{type:d,default:1},/** Diamiter of the tube. */tube:{type:d,default:.4},/** Number of segments of the tube's section. */radialSegments:{type:d,default:8},/** Number of segments along to the tube length direction. */tubularSegments:{type:d,default:64},/**
     * This value determines how many times the geometry winds
     * around its axis of rotational symmetry.
     */p:{type:d,default:2},/**
     * This value determines how many times the geometry winds
     * around a circle in the interior of the torus.
     */q:{type:d,default:3}},computed:{inst:function(){return new t.TorusKnotBufferGeometry(parseFloat(this.radius),parseFloat(this.tube),parseInt(this.tubularSegments,10),parseInt(this.radialSegments,10),parseInt(this.p,10),parseInt(this.q,10))}}},e.VglArrowHelper={mixins:[y],props:{/** Direction from origin. */dir:m,/** Length of the arrow. */length:{type:d,default:1},/** Color of the arrow. */color:{type:c,default:'#ff0'},/** The length of the head of the arrow. */headLength:d,/** The width of the head of the arrow. */headWidth:d},computed:{inst:function(){return new t.ArrowHelper(new t.Vector3(0,1,0),new t.Vector3())},len:function(){return[parseFloat(this.length),this.headLength===void 0?void 0:parseFloat(this.headLength),this.headWidth===void 0?void 0:parseFloat(this.headWidth)]}},watch:{inst:{handler:function(e){this.dir&&e.setDirection(a(this.dir).normalize()),e.setLength.apply(e,p(this.len)),e.setColor(new t.Color(this.color))},immediate:!0},dir:function(e){this.inst.setDirection(a(e).normalize())},len:function(e){var t;(t=this.inst).setLength.apply(t,p(e))},color:function(e){this.inst.setColor(new t.Color(e))}}},e.VglBoxHelper={mixins:[y],props:{/** Size of the lines representing the axes. */color:{type:c,default:'#ff0'}},computed:{inst:function(){return new t.BoxHelper(void 0,this.color)}},methods:{setFromObject:function(){this.inst.setFromObject(this.vglObject3d.inst)}},created:function(){this.vglNamespace.beforeRender.push(this.setFromObject)},beforeDestroy:function(){var e=this.vglNamespace.beforeRender,t=this.setFromObject;e.splice(e.indexOf(t),1)}},e.VglPointLight={mixins:[v],props:{/**
     * The distance from the light where the intensity is 0.
     * When set to 0, then the light never stops.
     */distance:{type:d,default:0},/**
     * The amount the light dims along the distance of the light.
     * For physically correct lighting, set this to 2.
     */decay:{type:d,default:1}},computed:{inst:function(){return new t.PointLight}},watch:{inst:{handler:function(e){Object.assign(e,{distance:parseFloat(this.distance),decay:parseFloat(this.decay)})},immediate:!0},distance:function(e){this.inst.distance=parseFloat(e)},decay:function(e){this.inst.decay=parseFloat(e)}}},e.VglSpotLight={mixins:[v],props:{/**
     * The distance from the light where the intensity is 0.
     * When set to 0, then the light never stops.
     */distance:{type:d,default:0},/**
     * The amount the light dims along the distance of the light.
     * For physically correct lighting, set this to 2.
     */decay:{type:d,default:1},/**
     * Maximum extent of the spotlight, in radians, from its direction.
     * Should be no more than Math.PI/2.
     */angle:{type:d,default:o/3},/**
     * Percent of the spotlight cone that is attenuated due to penumbra.
     * Takes values between zero and 1.
     */penumbra:{type:d,default:0},/** The spotlight's pointing position. */target:m},computed:{inst:function(){return new t.SpotLight}},beforeDestroy:function(){this.inst.target.parent&&this.inst.target.parent.remove(this.inst.target)},watch:{inst:{handler:function(e){Object.assign(e,{distance:parseFloat(this.distance),decay:parseFloat(this.decay),angle:parseFloat(this.angle),penumbra:parseFloat(this.penumbra)}),this.target&&e.target.position.copy(a(this.target)),this.vglObject3d.inst&&this.vglObject3d.inst.add(e.target)},immediate:!0},"vglObject3d.inst":function(e){e.add(this.inst.target)},distance:function(e){this.inst.distance=parseFloat(e)},decay:function(e){this.inst.decay=parseFloat(e)},angle:function(e){this.inst.angle=parseFloat(e)},penumbra:function(e){this.inst.penumbra=parseFloat(e)},target:function(e){this.inst.target.position.copy(a(e))}}},e.VglTexture={inject:['vglNamespace'],props:{/** The path or URL to the file. This can also be a Data URI. */src:c,name:c,mapping:{type:c,default:'uv'},wrapS:{type:c,default:'clamp-to-edge'},wrapT:{type:c,default:'clamp-to-edge'},magFilter:{type:c,default:'linear'},minFilter:{type:c,default:'linear-mip-map-linear'},anisotropy:{type:d,default:1},format:c,type:{type:c,default:'unsigned-byte'},offset:h,repeat:h,rotation:{type:d,default:0},center:h,premultiplyAlpha:g,unpackAlignment:{type:d,default:4},encoding:{type:c,default:'linear'}},computed:{inst:function(){var e=this;return new t.TextureLoader().load(this.src,function(t){e.format&&Object.assign(t,{format:B[e.format]}),e.vglNamespace.update()})}},watch:{inst:{handler:function(e){this.vglNamespace.textures[this.name]=e,Object.assign(e,{mapping:M[this.mapping],wrapS:P[this.wrapS],wrapT:P[this.wrapT],magFilter:T[this.magFilter],minFilter:T[this.minFilter],anisotropy:parseInt(this.anisotropy,10),type:C[this.type],rotation:parseFloat(this.rotation),premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:parseInt(this.unpackAlignment,10),encoding:R[this.encoding]}),this.offset&&e.offset.copy(i(this.offset)),this.repeat&&e.repeat.copy(i(this.repeat)),this.center&&e.center.copy(i(this.center))},immediate:!0},name:function(e,t){var a=this.vglNamespace.textures,i=this.inst;a[t]===i&&delete a[t],a[e]=i},mapping:function(e){this.inst.mapping=M[e]},wrapS:function(e){this.inst.wrapS=P[e]},wrapT:function(e){this.inst.wrapT=P[e]},magFilter:function(e){this.inst.magFilter=T[e]},minFilter:function(e){this.inst.minFilter=T[e]},anisotropy:function(e){this.inst.anisotropy=parseInt(e,10)},format:function(e){this.inst.format=B[e]},type:function(e){this.inst.type=C[e]},offset:function(e){this.inst.offset.copy(i(e))},repeat:function(e){this.inst.repeat.copy(i(e))},rotation:function(e){this.inst.rotation=parseFloat(e)},center:function(e){this.inst.center.copy(i(e))},premultiplyAlpha:function(e){this.inst.premultiplyAlpha=e},unpackAlignment:function(e){this.inst.unpackAlignment=parseInt(e,10)},encoding:function(e){this.inst.encoding=R[e]}},beforeDestroy:function(){var e=this.vglNamespace.textures,t=this.inst,a=this.name;e[a]===t&&delete e[a]},beforeUpdate:function(){this.inst.needsUpdate=!0,this.vglNamespace.update()},render:function(e){return this.$slots.default?e('div',this.$slots.default):void 0}},e.VglExtrudeGeometry=A,e.VglTextGeometry={mixins:[A],props:{/** The text that needs to be shown. */text:{type:c,default:''},/** The path or URL to the facetype json file. This can also be a Data URI. */font:c,/** Size of the text. */size:{type:d,default:100},/** Thickness to extrude text. */height:{type:d,default:50},/** Number of points on the curves. */curveSegments:{type:d,default:12},/** Turn on bevel. */bevelEnabled:g,/** How deep into text bevel goes. */bevelThickness:{type:d,default:10},/** How far from text outline is bevel. */bevelSize:{type:d,default:8},/** Number of bevel segments. */bevelSegments:{type:d,default:3}},data:function(){return{f:void 0}},computed:{inst:function(){return this.f===void 0?new t.BufferGeometry:new t.TextBufferGeometry(this.text,{font:D[this.f],size:parseFloat(this.size),height:parseFloat(this.height),curveSegments:parseInt(this.curveSegments,10),bevelEnabled:this.bevelEnabled,bevelThickness:parseFloat(this.bevelThickness),bevelSize:parseFloat(this.bevelSize),bevelSegments:parseInt(this.bevelSegments,10)})}},watch:{font:{handler:function(e){var a=this;D[e]?D[e].isFont?this.f=e:D[e].push(function(){e===a.font&&(a.f=e)}):(D[e]=[function(){e===a.font&&(a.f=e),a.vglNamespace.update()}],new t.FontLoader().load(e,function(t){var a=D[e];D[e]=t,a.forEach(function(e){e()})}))},immediate:!0}}},e.VglSpriteMaterial={mixins:[V],props:{/** CSS style color of the material. */color:{type:c,default:'#fff'},/** The texture map of the material. */map:c},computed:{inst:function(){return new t.SpriteMaterial}},watch:{inst:{handler:function(e){e.color.setStyle(this.color)},immediate:!0},color:function(e){this.inst.color.setStyle(e)}}},e.VglGridHelper={mixins:[y],props:{/** The size of the grid. */size:{type:d,default:10},/** The number of divisions across the grid. */divisions:{type:d,default:10},/** The color of the centerline. */colorCenterLine:{type:c,default:'#444444'},/** The color of the lines of the grid. */colorGrid:{type:c,default:'#888888'}},computed:{inst:function(){return new t.GridHelper(parseFloat(this.size),parseInt(this.divisions,10),this.colorCenterLine,this.colorGrid)}}},e.VglShadowMaterial={mixins:[S],computed:{inst:function(){return new t.ShadowMaterial}}},e.VglCameraHelper={mixins:[y],props:{/** Name of the camera to visualize. */camera:c},computed:{inst:function(){return new t.CameraHelper(new t.Camera())}},methods:{setCamera:function(){this.inst.camera=this.vglNamespace.cameras[this.camera],this.inst.camera.updateProjectionMatrix(),this.inst.update()}},created:function(){this.vglNamespace.beforeRender.push(this.setCamera)},beforeDestroy:function(){var e=this.vglNamespace.beforeRender,t=this.setCamera;e.splice(e.indexOf(t),1)}},e.VglDirectionalLightHelper={mixins:[y],props:{/** If this is not the set the helper will take the color of the light. */color:{type:c},/** Dimensions of the plane. */size:{type:d,default:1}},computed:{inst:function(){return new t.DirectionalLightHelper(this.vglObject3d.inst,parseFloat(this.size))}},watch:{inst:{handler:function(e){this.color&&(Object.assign(e,{color:this.color}),e.update())},immediate:!0},color:function(e){this.inst.color=e,this.inst.update()}}},e.VglPolarGridHelper={mixins:[y],props:{/** The radius of the polar grid. This can be any positive number. */radius:{type:d,default:10},/** The number of radial lines. This can be any positive integer. */radials:{type:d,default:16},/** The number of circles. This can be any positive integer. */circles:{type:d,default:8},/**
     * The number of line segments used for each circle.
     * This can be any positive integer that is 3 or greater.
     */divisions:{type:d,default:64},/** The first color used for grid elements. */color1:{type:c,default:'#444444'},/** The second color used for grid elements. */color2:{type:c,default:'#888888'}},computed:{inst:function(){return new t.PolarGridHelper(parseFloat(this.radius),parseInt(this.radials,10),parseInt(this.circles,10),parseInt(this.divisions,10),this.color1,this.color2)}}},e.VglMeshBasicMaterial={mixins:[V],props:{/** CSS style color of the material. */color:{type:c,default:'#fff'},/** The color map of the material. */map:c},computed:{inst:function(){return new t.MeshBasicMaterial}},watch:{inst:{handler:function(e){e.color.setStyle(this.color)},immediate:!0},color:function(e){this.inst.color.setStyle(e)}}},Object.defineProperty(e,'__esModule',{value:!0})});
