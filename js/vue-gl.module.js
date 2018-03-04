var babelHelpers={};babelHelpers.typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},babelHelpers.jsx=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,a,n,r){var s=t&&t.defaultProps,o=arguments.length-3;if(a||0==o||(a={}),a&&s)for(var l in s)void 0===a[l]&&(a[l]=s[l]);else a||(a=s||{});if(1==o)a.children=r;else if(1<o){for(var p=Array(o),d=0;d<o;d++)p[d]=arguments[d+3];a.children=p}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:a,_owner:null}}}(),babelHelpers.asyncIterator=function(e){if("function"==typeof Symbol){if(Symbol.asyncIterator){var t=e[Symbol.asyncIterator];if(null!=t)return t.call(e)}if(Symbol.iterator)return e[Symbol.iterator]()}throw new TypeError("Object is not async iterable")},babelHelpers.asyncGenerator=function(){function e(e){this.value=e}function t(t){function a(n,r){try{var s=t[n](r),o=s.value;o instanceof e?Promise.resolve(o.value).then(function(e){a("next",e)},function(e){a("throw",e)}):i(s.done?"return":"normal",s.value)}catch(e){i("throw",e)}}function i(e,t){"return"===e?n.resolve({value:t,done:!0}):"throw"===e?n.reject(t):n.resolve({value:t,done:!1});n=n.next,n?a(n.key,n.arg):r=null}var n,r;this._invoke=function(e,t){return new Promise(function(i,s){var o={key:e,arg:t,resolve:i,reject:s,next:null};r?r=r.next=o:(n=r=o,a(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}return"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)},{wrap:function(e){return function(){return new t(e.apply(this,arguments))}},await:function(t){return new e(t)}}}(),babelHelpers.asyncGeneratorDelegate=function(e,t){function a(a,i){return n=!0,i=new Promise(function(t){t(e[a](i))}),{done:!1,value:t(i)}}var i={},n=!1;return"function"==typeof Symbol&&Symbol.iterator&&(i[Symbol.iterator]=function(){return this}),i.next=function(e){return n?(n=!1,e):a("next",e)},"function"==typeof e.throw&&(i.throw=function(e){if(n)throw n=!1,e;return a("throw",e)}),"function"==typeof e.return&&(i.return=function(e){return a("return",e)}),i},babelHelpers.asyncToGenerator=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function i(n,r){try{var s=t[n](r),o=s.value}catch(e){return void a(e)}return s.done?void e(o):Promise.resolve(o).then(function(e){i("next",e)},function(e){i("throw",e)})}return i("next")})}},babelHelpers.classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},babelHelpers.createClass=function(){function e(e,t){for(var a,n=0;n<t.length;n++)a=t[n],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),babelHelpers.defineEnumerableProperties=function(e,t){for(var a in t){var i=t[a];i.configurable=i.enumerable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,a,i)}return e},babelHelpers.defaults=function(e,t){for(var a=Object.getOwnPropertyNames(t),n=0;n<a.length;n++){var i=a[n],r=Object.getOwnPropertyDescriptor(t,i);r&&r.configurable&&e[i]===void 0&&Object.defineProperty(e,i,r)}return e},babelHelpers.defineProperty=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},babelHelpers.extends=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var i in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},babelHelpers.get=function e(t,a,i){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,a);if(n===void 0){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,a,i)}if("value"in n)return n.value;var s=n.get;return void 0===s?void 0:s.call(i)},babelHelpers.inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},babelHelpers.instanceof=function(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t},babelHelpers.interopRequireDefault=function(e){return e&&e.__esModule?e:{default:e}},babelHelpers.interopRequireWildcard=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},babelHelpers.newArrowCheck=function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")},babelHelpers.objectDestructuringEmpty=function(e){if(null==e)throw new TypeError("Cannot destructure undefined")},babelHelpers.objectWithoutProperties=function(e,t){var a={};for(var n in e)0<=t.indexOf(n)||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a},babelHelpers.possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e},babelHelpers.selfGlobal="undefined"==typeof global?self:global,babelHelpers.set=function e(t,a,i,n){var r=Object.getOwnPropertyDescriptor(t,a);if(r===void 0){var s=Object.getPrototypeOf(t);null!==s&&e(s,a,i,n)}else if("value"in r&&r.writable)r.value=i;else{var o=r.set;o!==void 0&&o.call(n,i)}return i},babelHelpers.slicedToArray=function(){function e(e,t){var a,i=[],n=!0,r=!1;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(i.push(s.value),!(t&&i.length===t));n=!0);}catch(e){r=!0,a=e}finally{try{!n&&o["return"]&&o["return"]()}finally{if(r)throw a}}return i}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),babelHelpers.slicedToArrayLoose=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e)){for(var a,i=[],n=e[Symbol.iterator]();!(a=n.next()).done&&(i.push(a.value),!(t&&i.length===t)););return i}throw new TypeError("Invalid attempt to destructure non-iterable instance")},babelHelpers.taggedTemplateLiteral=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},babelHelpers.taggedTemplateLiteralLoose=function(e,t){return e.raw=t,e},babelHelpers.temporalRef=function(e,t,a){if(e===a)throw new ReferenceError(t+" is not defined - temporal dead zone");else return e},babelHelpers.temporalUndefined={},babelHelpers.toArray=function(e){return Array.isArray(e)?e:Array.from(e)},babelHelpers.toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)},babelHelpers;import{Vector2,Vector3,Euler,Spherical,Object3D,Scene,Camera,WebGLRenderer,PerspectiveCamera,Group,Light,DirectionalLight,AmbientLight,Material,PointsMaterial,BufferGeometry,SphereBufferGeometry,MeshStandardMaterial,Mesh,Points,LineBasicMaterial,Line,Sprite,BoxBufferGeometry,CircleBufferGeometry,LineSegments,LineLoop,CylinderBufferGeometry,ConeBufferGeometry,AxesHelper,OrthographicCamera,PlaneBufferGeometry,DodecahedronBufferGeometry,IcosahedronBufferGeometry,OctahedronBufferGeometry,RingBufferGeometry,TetrahedronBufferGeometry,TorusBufferGeometry,TorusKnotBufferGeometry,ArrowHelper,Color,BoxHelper,PointLight,SpotLight,TextureLoader,UVMapping,CubeReflectionMapping,CubeRefractionMapping,EquirectangularReflectionMapping,EquirectangularRefractionMapping,SphericalReflectionMapping,CubeUVReflectionMapping,CubeUVRefractionMapping,RepeatWrapping,ClampToEdgeWrapping,MirroredRepeatWrapping,NearestFilter,LinearFilter,NearestMipMapNearestFilter,NearestMipMapLinearFilter,LinearMipMapNearestFilter,LinearMipMapLinearFilter,AlphaFormat,RGBFormat,RGBAFormat,LuminanceFormat,LuminanceAlphaFormat,RGBEFormat,DepthFormat,DepthStencilFormat,UnsignedByteType,ByteType,ShortType,UnsignedShortType,IntType,UnsignedIntType,FloatType,HalfFloatType,UnsignedShort4444Type,UnsignedShort5551Type,UnsignedShort565Type,UnsignedInt248Type,LinearEncoding,sRGBEncoding,GammaEncoding,RGBEEncoding,LogLuvEncoding,RGBM7Encoding,RGBM16Encoding,RGBDEncoding,BasicDepthPacking,RGBADepthPacking,ExtrudeBufferGeometry,TextBufferGeometry,FontLoader,SpriteMaterial,GridHelper,ShadowMaterial,CameraHelper,DirectionalLightHelper,PolarGridHelper,MeshBasicMaterial}from"https://unpkg.com/three@0.90.0/build/three.module.js";var VglNamespace={inject:{vglNamespace:{default:function(){var e,t=this,a=[],i=[];return{renderers:a,cameras:Object.create(null),scenes:Object.create(null),update:function(){e||(t.$nextTick(function(){i.forEach(function(e){e()}),a.forEach(function(e){e.render()}),e=!1}),e=!0)},beforeRender:i,geometries:Object.create(null),materials:Object.create(null),textures:Object.create(null)}}}},provide:function(){return{vglNamespace:Object.create(this.vglNamespace,{geometries:{value:Object.create(this.vglNamespace.geometries)},materials:{value:Object.create(this.vglNamespace.materials)},textures:{value:Object.create(this.vglNamespace.textures)}})}},render:function(e){return this.$slots.default?e("div",this.$slots.default):void 0}},toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)};/**
 * Returns a parsed vector3 object.
 */function parseVector3(e){return e.isVector3?e:new(Function.prototype.bind.apply(Vector3,[null].concat(toConsumableArray(e.trim().split(/\s+/).map(function(e){return parseFloat(e)})))))}/**
 * Returns a parsed vector2 object.
 */function parseVector2(e){return e.isVector2?e:new(Function.prototype.bind.apply(Vector2,[null].concat(toConsumableArray(e.trim().split(/\s+/).map(function(e){return parseFloat(e)})))))}/**
 * Returns a parsed euler object.
 */function parseEuler(e){return e.isEuler?e:new(Function.prototype.bind.apply(Euler,[null].concat(toConsumableArray(e.trim().split(/\s+/).map(function(e,t){return 3===t?e:parseFloat(e)})))))}/**
 * Returns a parsed spherical object.
 */function parseSpherical(e){return e.isSpherical?e:new(Function.prototype.bind.apply(Spherical,[null].concat(toConsumableArray(e.trim().split(/\s+/).map(function(e){return parseFloat(e)})))))().makeSafe()}var number=[String,Number],string=String,vector3=[String,Vector3],spherical=[String,Spherical],boolean=Boolean,euler=[String,Euler],vector2=[String,Vector2],VglObject3d={props:{/** The object's local position as a 3D vector. */position:vector3,/** The object's local rotation as a euler angle. */rotation:euler,/** The object's local scale as a 3D vector. */scale:vector3,/** Whether the object gets rendered into shadow map. */castShadow:boolean,/** Whether the material receives shadows. */receiveShadow:boolean,/** Optional name of the object. */name:string},computed:{inst:function(){return new Object3D}},inject:{vglObject3d:{default:{}},vglNamespace:"vglNamespace"},provide:function(){var e=this;return{vglObject3d:{get inst(){return e.inst}}}},created:function(){this.vglNamespace.update()},beforeUpdate:function(){this.vglNamespace.update()},beforeDestroy:function(){this.inst.parent&&this.inst.parent.remove(this.inst),this.vglNamespace.update()},watch:{inst:{handler:function(e,t){t&&t.parent&&t.parent.remove(t),this.vglObject3d.inst&&this.vglObject3d.inst.add(e),this.position&&e.position.copy(parseVector3(this.position)),this.rotation&&e.rotation.copy(parseEuler(this.rotation)),this.scale&&e.scale.copy(parseVector3(this.scale)),Object.assign(e,{castShadow:this.castShadow,receiveShadow:this.receiveShadow})},immediate:!0},"vglObject3d.inst":function(e){e.add(this.inst)},position:function(e){this.inst.position.copy(parseVector3(e))},rotation:function(e){this.inst.rotation.copy(parseEuler(e))},scale:function(e){this.inst.scale.copy(parseVector3(e))},castShadow:function(e){this.inst.castShadow=e},receiveShadow:function(e){this.inst.receiveShadow=e}},render:function(e){return this.$slots.default?e("div",this.$slots.default):void 0}},vglScene={mixins:[VglObject3d],computed:{inst:function(){return new Scene}},watch:{inst:{handler:function(e){this.vglNamespace.scenes[this.name]=e},immediate:!0},name:function(e,t){var a=this.vglNamespace.scenes,i=this.inst;a[t]===i&&delete a[t],a[e]=i}},beforeDestroy:function(){var e=this.vglNamespace.scenes,t=this.inst;e[this.name]===t&&delete e[this.name]}},VglCamera={mixins:[VglObject3d],props:{/**
     * Position in 3D space for the camera to point towards.
     * This property overwrite rotation property when both defined.
     */orbitTarget:vector3,/**
     * Spherical position around orbitTarget.
     * This property overwrite position and rotation properties.
     * If orbitTarget is not defined, automatically set to (0, 0, 0).
     */orbitPosition:spherical},computed:{inst:function(){return new Camera}},watch:{inst:{handler:function(e){if(this.vglNamespace.cameras[this.name]=e,this.orbitPosition||this.orbitTarget){var t;this.orbitTarget&&(t=parseVector3(this.orbitTarget)),this.orbitPosition&&(e.position.setFromSpherical(parseSpherical(this.orbitPosition)),t&&e.position.add(t)),e.lookAt(t||new Vector3)}},immediate:!0},name:function(e,t){var a=this.vglNamespace.cameras,i=this.inst;a[t]===i&&delete a[t],a[e]=i},orbitTarget:function(e){var t=parseVector3(e);this.orbitPosition&&this.inst.position.setFromSpherical(parseSpherical(this.orbitPosition)).add(t),this.inst.lookAt(t)},orbitPosition:function(e){if(this.inst.position.setFromSpherical(parseSpherical(e)),this.orbitTarget){var t=parseVector3(this.orbitTarget);this.inst.position.add(t),this.inst.lookAt(t)}else this.inst.lookAt(new Vector3)}},beforeDestroy:function(){var e=this.vglNamespace.cameras,t=this.inst;e[this.name]===t&&delete e[this.name]}},vglRenderer={mixins:[VglNamespace],props:{/** Shader precision. Can be "highp", "mediump" or "lowp". */precision:string,/** Whether the canvas contains an alpha (transparency) buffer or not. */alpha:boolean,/** Whether the renderer will assume that colors have premultiplied alpha. */disablePremultipliedAlpha:boolean,/** Whether to perform antialiasing. */antialias:boolean,/** Whether the drawing buffer has a stencil buffer of at least 8 bits. */disableStencil:boolean,/**
     * A hint to the user agent indicating what configuration of GPU is suitable
     * for this WebGL context. Can be "high-performance", "low-power" or "default".
     */powerPreference:string,/** Whether to preserve the buffers until manually cleared or overwritten. */preserveDrawingBuffer:boolean,/** Whether the drawing buffer has a depth buffer of at least 16 bits. */disableDepth:boolean,/** Whether to use a logarithmic depth buffer. */logarithmicDepthBuffer:boolean,/** Name of the using camera. */camera:string,/** Name of the target scene. */scene:string,/** If set, use shadow maps in the scene. */shadowMapEnabled:boolean},computed:{inst:function(){var e=new WebGLRenderer({precision:this.precision,alpha:this.alpha,premultipliedAlpha:!this.disablePremultipliedAlpha,antialias:this.antialias,stencil:!this.disableStencil,preserveDrawingBuffer:this.preserveDrawingBuffer,depth:!this.disableDepth,logarithmicDepthBuffer:this.logarithmicDepthBuffer,powerPreference:this.powerPreference});return e.shadowMap.enabled=this.shadowMapEnabled,e}},methods:{render:function(){var e=this.vglNamespace.scenes[this.scene],t=this.vglNamespace.cameras[this.camera];if(e&&t){if(t.isPerspectiveCamera){var a=this.$el.clientWidth/this.$el.clientHeight;t.aspect!==a&&(t.aspect=a,t.updateProjectionMatrix())}else if(t.isOrthographicCamera){var i=this.$el.clientWidth/2,n=this.$el.clientHeight/2;(t.right!==i||t.top!==n)&&(t.left=-i,t.right=i,t.top=n,t.bottom=-n,t.updateProjectionMatrix())}else throw new TypeError("Unknown camera type.");this.inst.render(e,t)}}},watch:{inst:function(e,t){this.$el&&(e.setSize(this.$el.clientWidth,this.$el.clientHeight),this.$el.replaceChild(e.domElement,t.domElement),this.vglNamespace.update()),t.dispose()}},created:function(){this.vglNamespace.renderers.push(this)},mounted:function(){this.inst.setSize(this.$el.clientWidth,this.$el.clientHeight),this.$el.insertBefore(this.inst.domElement,this.$el.firstChild),this.vglNamespace.update()},beforeDestroy:function(){this.vglNamespace.renderers.splice(this.vglNamespace.renderers.indexOf(this),1),this.inst.dispose()},render:function(e){var t=this;return e("div",[e("iframe",{style:{visibility:"hidden",width:"100%",height:"100%"},on:{load:function(e){e.target.contentWindow.addEventListener("resize",function(){t.inst.setSize(t.$el.clientWidth,t.$el.clientHeight),t.vglNamespace.update()},!1)}}},this.$slots.default)])}},vglPerspectiveCamera={mixins:[VglCamera],props:{/** Zoom factor of the camera. */zoom:{type:number,default:1},/** Camera frustum near plane. */near:{type:number,default:.1},/** Camera frustum far plane. */far:{type:number,default:2e3},/** Camera frustum vertical field of view, from bottom to top of view, in degrees. */fov:{type:number,default:50}},computed:{inst:function(){return new PerspectiveCamera}},watch:{inst:{handler:function(e){Object.assign(e,{zoom:parseFloat(this.zoom),near:parseFloat(this.near),far:parseFloat(this.far),fov:parseFloat(this.fov)})},immediate:!0},zoom:function(e){this.inst.zoom=parseFloat(e)},near:function(e){this.inst.near=parseFloat(e)},far:function(e){this.inst.far=parseFloat(e)},fov:function(e){this.inst.fov=parseFloat(e)}}},vglGroup={mixins:[VglObject3d],computed:{inst:function(){return new Group}}},VglLight={mixins:[VglObject3d],props:{/** CSS style color of the light. */color:{type:string,default:"#fff"},/** Numeric value of the light's strength/intensity. */intensity:{type:number,default:1}},computed:{inst:function(){return new Light}},watch:{inst:{handler:function(e){e.color.setStyle(this.color),Object.assign(e,{intensity:parseFloat(this.intensity)})},immediate:!0},color:function(e){this.inst.color.setStyle(e)},intensity:function(e){this.inst.intensity=parseFloat(e)}}},vglDirectionalLight={mixins:[VglLight],computed:{inst:function(){return new DirectionalLight}}},vglAmbientLight={mixins:[VglLight],computed:{inst:function(){return new AmbientLight}}},VglMaterial={inject:["vglNamespace"],props:{/** Name of the material. */name:string},computed:{inst:function(){return new Material}},watch:{inst:{handler:function(e){this.vglNamespace.materials[this.name]=e},immediate:!0},name:function(e,t){var a=this.vglNamespace.materials,i=this.inst;a[t]===i&&delete a[t],a[e]=i}},beforeDestroy:function(){var e=this.vglNamespace.materials,t=this.inst;e[this.name]===t&&delete e[this.name]},created:function(){this.vglNamespace.update()},beforeUpdate:function(){this.vglNamespace.update()},render:function(e){return this.$slots.default?e("div",this.$slots.default):void 0}},vglPointsMaterial={mixins:[VglMaterial],props:{/** CSS style color of the material. */color:{type:string,default:"#fff"},/** The size of the points. */size:{type:number,default:1},/** Specify whether points' size will get smaller with the distance. */disableSizeAttenuation:boolean},computed:{inst:function(){return new PointsMaterial}},watch:{inst:{handler:function(e){Object.assign(e,{size:parseFloat(this.size),sizeAttenuation:!this.disableSizeAttenuation}),e.color.setStyle(this.color)},immediate:!0},color:function(e){this.inst.color.setStyle(e)},size:function(e){this.inst.size=parseFloat(e)},disableSizeAttenuation:function(e){this.inst.sizeAttenuation=!e}}},VglGeometry={inject:["vglNamespace"],props:{/** Name of the component. */name:string},computed:{inst:function(){return new BufferGeometry}},watch:{inst:{handler:function(e){this.vglNamespace.geometries[this.name]=e},immediate:!0},name:function(e,t){var a=this.vglNamespace.geometries,i=this.inst;a[t]===i&&delete a[t],a[e]=i}},beforeDestroy:function(){var e=this.vglNamespace.geometries,t=this.inst;e[this.name]===t&&delete e[this.name]},created:function(){this.vglNamespace.update()},beforeUpdate:function(){this.vglNamespace.update()},render:function(e){return this.$slots.default?e("div",this.$slots.default):void 0}},vglSphereGeometry={mixins:[VglGeometry],props:{/** Sphere radius. */radius:{type:number,default:1},/** Number of horizontal segments. */widthSegments:{type:number,default:8},/** Number of vertical segments. */heightSegments:{type:number,default:6},/** Specify horizontal starting angle. */phiStart:{type:number,default:0},/** Specify horizontal sweep angle size. */phiLength:{type:number,default:2*Math.PI},/** Specify vertical starting angle. */thetaStart:{type:number,default:0},/** Specify vertical sweep angle size. */thetaLength:{type:number,default:Math.PI}},computed:{inst:function(){return new SphereBufferGeometry(parseFloat(this.radius),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10),parseFloat(this.phiStart),parseFloat(this.phiLength),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},VglObject3dWithMatarial={mixins:[VglObject3d],methods:{setMaterial:function(){var e=this.vglNamespace.materials,t=this.material,a=this.inst;e[t]&&(a.material=e[t])}},created:function(){this.vglNamespace.beforeRender.unshift(this.setMaterial)},beforeDestroy:function(){var e=this.vglNamespace.beforeRender,t=this.setMaterial;e.splice(e.indexOf(t),1)}},VglObject3dWithMatarialAndGeometry={mixins:[VglObject3dWithMatarial],methods:{setGeometry:function(){var e=this.vglNamespace.geometries,t=this.geometry,a=this.inst;e[t]&&(a.geometry=e[t])}},created:function(){this.vglNamespace.beforeRender.unshift(this.setGeometry)},beforeDestroy:function(){var e=this.vglNamespace.beforeRender,t=this.setGeometry;e.splice(e.indexOf(t),1)}},VglMaterialWithMap={mixins:[VglMaterial],methods:{setMap:function(){var e=this.vglNamespace.textures,t=this.inst,a=this.map;a in e&&(t.map=e[a])}},created:function(){this.vglNamespace.beforeRender.unshift(this.setMap)},beforeDestroy:function(){var e=this.vglNamespace.beforeRender,t=this.setMap;e.splice(e.indexOf(t),1)}},vglMeshStandardMaterial={mixins:[VglMaterialWithMap],props:{/** CSS style color of the material. */color:{type:string,default:"#fff"},/** The color map of the material. */map:string},computed:{inst:function(){return new MeshStandardMaterial}},watch:{inst:{handler:function(e){e.color.setStyle(this.color)},immediate:!0},color:function(e){this.inst.color.setStyle(e)}}},vglMesh={mixins:[VglObject3dWithMatarialAndGeometry],props:{/** Name of the geometry, defining the object's structure. */geometry:string,/** Name of the material, defining the object's appearance. */material:string},computed:{inst:function(){return new Mesh}}},vglPoints={mixins:[VglObject3dWithMatarialAndGeometry],props:{/** Name of the geometry, defining the object's structure. */geometry:string,/** Name of the material, defining the object's appearance. */material:string},computed:{inst:function(){return new Points}}},vglLineBasicMaterial={mixins:[VglMaterial],props:{/** CSS style color of the material. */color:{type:string,default:"#fff"},/** A boolean whether the material is affected by lights. */lights:boolean,/** The line thickness. */linewidth:{type:number,default:1},/** Define appearance of line ends. Possible values are "butt", "round" and "square". */linecap:{type:string,default:"round"},/** Define appearance of line joints. Possible values are "round", "bevel" and "miter". */linejoin:{type:string,default:"round"}},computed:{inst:function(){return new LineBasicMaterial}},watch:{inst:{handler:function(e){Object.assign(e,{lights:this.lights,linecap:this.linecap,linejoin:this.linejoin,linewidth:parseFloat(this.linewidth)}),e.color.setStyle(this.color)},immediate:!0},color:function(e){this.inst.color.setStyle(e)},lights:function(e){this.inst.lights=e},linewidth:function(e){this.inst.linewidth=parseFloat(e)},linecap:function(e){this.inst.linecap=e},linejoin:function(e){this.inst.linejoin=e}}},VglLine={mixins:[VglObject3dWithMatarialAndGeometry],props:{/** Name of the geometry, representing the line segment(s). */geometry:string,/** Name of the material for the line. */material:string},computed:{inst:function(){return new Line}}},vglSprite={mixins:[VglObject3dWithMatarial],props:{/** Name of the material, defining the object's appearance. */material:string},computed:{inst:function(){return new Sprite}}},vglBoxGeometry={mixins:[VglGeometry],props:{/** Width of the sides on the X axis. */width:{type:number,default:1},/** Height of the sides on the Y axis. */height:{type:number,default:1},/** Depth of the sides on the Z axis. */depth:{type:number,default:1},/** Number of segmented faces along the width of the sides. */widthSegments:{type:number,default:1},/** Number of segmented faces along the height of the sides. */heightSegments:{type:number,default:1},/** Number of segmented faces along the depth of the sides. */depthSegments:{type:number,default:1}},computed:{inst:function(){return new BoxBufferGeometry(parseFloat(this.width),parseFloat(this.height),parseFloat(this.depth),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10),parseInt(this.depthSegments,10))}}},vglCircleGeometry={mixins:[VglGeometry],props:{/** Radius of the circle. */radius:{type:number,default:1},/** Number of segments (triangles). */segments:{type:number,default:8},/** Start angle for first segment. */thetaStart:{type:number,default:0},/** The central angle of the circular sector. */thetaLength:{type:number,default:2*Math.PI}},computed:{inst:function(){return new CircleBufferGeometry(parseFloat(this.radius),parseInt(this.segments,10),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},vglLineSegments={mixins:[VglLine],computed:{inst:function(){return new LineSegments}}},vglLineLoop={mixins:[VglLine],computed:{inst:function(){return new LineLoop}}},VglCylinderGeometry={mixins:[VglGeometry],props:{/** Radius of the cylinder at the top. */radiusTop:{type:number,default:1},/** Radius of the cylinder at the bottom. */radiusBottom:{type:number,default:1},/** Height of the cylinder. */height:{type:number,default:1},/** Number of segmented faces around the circumference of the cylinder. */radialSegments:{type:number,default:8},/** Number of rows of faces along the height of the cylinder. */heightSegments:{type:number,default:1},/** A Boolean indicating whether the ends of the cylinder are open or capped. */openEnded:boolean,/** Start angle for first segment. */thetaStart:{type:number,default:0},/** The central angle of the circular sector. */thetaLength:{type:number,default:2*Math.PI}},computed:{inst:function(){return new CylinderBufferGeometry(parseFloat(this.radiusTop),parseFloat(this.radiusBottom),parseFloat(this.height),parseInt(this.radialSegments,10),parseInt(this.heightSegments,10),this.openEnded,parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},vglConeGeometry={mixins:[VglCylinderGeometry],props:{/** Radius of the cone at the base. */radius:{type:number,default:1}},computed:{inst:function(){return new ConeBufferGeometry(parseFloat(this.radius),parseFloat(this.height),parseInt(this.radialSegments,10),parseInt(this.heightSegments,10),this.openEnded,parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},vglAxesHelper={mixins:[VglObject3d],props:{/** Size of the lines representing the axes. */size:{type:number,default:1}},computed:{inst:function(){return new AxesHelper(parseFloat(this.size))}}},vglOrthographicCamera={mixins:[VglCamera],props:{/** Zoom factor of the camera. */zoom:{type:number,default:1},/** Camera frustum near plane. */near:{type:number,default:.1},/** Camera frustum far plane. */far:{type:number,default:2e3}},computed:{inst:function(){return new OrthographicCamera}},watch:{inst:{handler:function(e){Object.assign(e,{zoom:parseFloat(this.zoom),near:parseFloat(this.near),far:parseFloat(this.far)})},immediate:!0},zoom:function(e){this.inst.zoom=parseFloat(e)},near:function(e){this.inst.near=parseFloat(e)},far:function(e){this.inst.far=parseFloat(e)}}},vglPlaneGeometry={mixins:[VglGeometry],props:{/** Width along the X axis. */width:{type:number,default:1},/** Height along the Y axis. */height:{type:number,default:1},/** Number of segments along the X axis. */widthSegments:{type:number,default:1},/** Number of segments along the Y axis. */heightSegments:{type:number,default:1}},computed:{inst:function(){return new PlaneBufferGeometry(parseFloat(this.width),parseFloat(this.height),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10))}}},vglDodecahedronGeometry={mixins:[VglGeometry],props:{/** Radius of the dodecahedron. */radius:{type:number,default:1},/** Setting this to a value greater than 0 adds vertices making it no longer a dodecahedron. */detail:{type:number,default:0}},computed:{inst:function(){return new DodecahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},vglIcosahedronGeometry={mixins:[VglGeometry],props:{/** Radius of the icosahedron. */radius:{type:number,default:1},/** Setting this to a value greater than 0 adds vertices making it no longer a icosahedron. */detail:{type:number,default:0}},computed:{inst:function(){return new IcosahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},vglOctahedronGeometry={mixins:[VglGeometry],props:{/** Radius of the octahedron. */radius:{type:number,default:1},/** Setting this to a value greater than 0 adds vertices making it no longer a octahedron. */detail:{type:number,default:0}},computed:{inst:function(){return new OctahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},vglRingGeometry={mixins:[VglGeometry],props:{/** Inner radius of the ring. */innerRadius:{type:number,default:.5},/** Outer radius of the ring. */outerRadius:{type:number,default:1},/** Number of segments along to the tangential direction. */thetaSegments:{type:number,default:8},/** Number of segments along to the radial direction. */phiSegments:{type:number,default:1},/** The starting angle. */thetaStart:{type:number,default:0},/** The central angle. */thetaLength:{type:number,default:2*Math.PI}},computed:{inst:function(){return new RingBufferGeometry(parseFloat(this.innerRadius),parseFloat(this.outerRadius),parseInt(this.thetaSegments,10),parseInt(this.phiSegments,10),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},vglTetrahedronGeometry={mixins:[VglGeometry],props:{/** Radius of the tetrahedron. */radius:{type:number,default:1},/** Setting this to a value greater than 0 adds vertices making it no longer a tetrahedron. */detail:{type:number,default:0}},computed:{inst:function(){return new TetrahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},vglTorusGeometry={mixins:[VglGeometry],props:{/** Radius of the torus. */radius:{type:number,default:1},/** Diamiter of the tube. */tube:{type:number,default:.4},/** Number of segments of the tube's section. */radialSegments:{type:number,default:8},/** Number of segments along to the tube length direction. */tubularSegments:{type:number,default:6},/** The central angle. */arc:{type:number,default:2*Math.PI}},computed:{inst:function(){return new TorusBufferGeometry(parseFloat(this.radius),parseFloat(this.tube),parseInt(this.radialSegments,10),parseInt(this.tubularSegments,10),parseFloat(this.arc))}}},vglTorusKnotGeometry={mixins:[VglGeometry],props:{/** Radius of the torus. */radius:{type:number,default:1},/** Diamiter of the tube. */tube:{type:number,default:.4},/** Number of segments of the tube's section. */radialSegments:{type:number,default:8},/** Number of segments along to the tube length direction. */tubularSegments:{type:number,default:64},/**
     * This value determines how many times the geometry winds
     * around its axis of rotational symmetry.
     */p:{type:number,default:2},/**
     * This value determines how many times the geometry winds
     * around a circle in the interior of the torus.
     */q:{type:number,default:3}},computed:{inst:function(){return new TorusKnotBufferGeometry(parseFloat(this.radius),parseFloat(this.tube),parseInt(this.tubularSegments,10),parseInt(this.radialSegments,10),parseInt(this.p,10),parseInt(this.q,10))}}},vglArrowHelper={mixins:[VglObject3d],props:{/** Direction from origin. */dir:vector3,/** Length of the arrow. */length:{type:number,default:1},/** Color of the arrow. */color:{type:string,default:"#ff0"},/** The length of the head of the arrow. */headLength:number,/** The width of the head of the arrow. */headWidth:number},computed:{inst:function(){return new ArrowHelper(new Vector3(0,1,0),new Vector3())},len:function(){return[parseFloat(this.length),this.headLength===void 0?void 0:parseFloat(this.headLength),this.headWidth===void 0?void 0:parseFloat(this.headWidth)]}},watch:{inst:{handler:function(e){this.dir&&e.setDirection(parseVector3(this.dir).normalize()),e.setLength.apply(e,toConsumableArray(this.len)),e.setColor(new Color(this.color))},immediate:!0},dir:function(e){this.inst.setDirection(parseVector3(e).normalize())},len:function(e){var t;(t=this.inst).setLength.apply(t,toConsumableArray(e))},color:function(e){this.inst.setColor(new Color(e))}}},vglBoxHelper={mixins:[VglObject3d],props:{/** Size of the lines representing the axes. */color:{type:string,default:"#ff0"}},computed:{inst:function(){return new BoxHelper(void 0,this.color)}},methods:{setFromObject:function(){this.inst.setFromObject(this.vglObject3d.inst)}},created:function(){this.vglNamespace.beforeRender.push(this.setFromObject)},beforeDestroy:function(){var e=this.vglNamespace.beforeRender,t=this.setFromObject;e.splice(e.indexOf(t),1)}},vglPointLight={mixins:[VglLight],props:{/**
     * The distance from the light where the intensity is 0.
     * When set to 0, then the light never stops.
     */distance:{type:number,default:0},/**
     * The amount the light dims along the distance of the light.
     * For physically correct lighting, set this to 2.
     */decay:{type:number,default:1}},computed:{inst:function(){return new PointLight}},watch:{inst:{handler:function(e){Object.assign(e,{distance:parseFloat(this.distance),decay:parseFloat(this.decay)})},immediate:!0},distance:function(e){this.inst.distance=parseFloat(e)},decay:function(e){this.inst.decay=parseFloat(e)}}},vglSpotLight={mixins:[VglLight],props:{/**
     * The distance from the light where the intensity is 0.
     * When set to 0, then the light never stops.
     */distance:{type:number,default:0},/**
     * The amount the light dims along the distance of the light.
     * For physically correct lighting, set this to 2.
     */decay:{type:number,default:1},/**
     * Maximum extent of the spotlight, in radians, from its direction.
     * Should be no more than Math.PI/2.
     */angle:{type:number,default:Math.PI/3},/**
     * Percent of the spotlight cone that is attenuated due to penumbra.
     * Takes values between zero and 1.
     */penumbra:{type:number,default:0},/** The spotlight's pointing position. */target:vector3},computed:{inst:function(){return new SpotLight}},beforeDestroy:function(){this.inst.target.parent&&this.inst.target.parent.remove(this.inst.target)},watch:{inst:{handler:function(e){Object.assign(e,{distance:parseFloat(this.distance),decay:parseFloat(this.decay),angle:parseFloat(this.angle),penumbra:parseFloat(this.penumbra)}),this.target&&e.target.position.copy(parseVector3(this.target)),this.vglObject3d.inst&&this.vglObject3d.inst.add(e.target)},immediate:!0},"vglObject3d.inst":function(e){e.add(this.inst.target)},distance:function(e){this.inst.distance=parseFloat(e)},decay:function(e){this.inst.decay=parseFloat(e)},angle:function(e){this.inst.angle=parseFloat(e)},penumbra:function(e){this.inst.penumbra=parseFloat(e)},target:function(e){this.inst.target.position.copy(parseVector3(e))}}},_mapping={uv:UVMapping,"cube-reflection":CubeReflectionMapping,"cube-refraction":CubeRefractionMapping,"equirectangular-reflection":EquirectangularReflectionMapping,"equirectangular-refraction":EquirectangularRefractionMapping,"spherical-reflection":SphericalReflectionMapping,"cube-uv-reflection":CubeUVReflectionMapping,"cube-uv-refraction":CubeUVRefractionMapping},wrapping={repeat:RepeatWrapping,"clamp-to-edge":ClampToEdgeWrapping,"mirrored-repeat":MirroredRepeatWrapping},filter={nearest:NearestFilter,"nearest-mip-map-nearest":NearestMipMapNearestFilter,"nearest-mip-map-linear":NearestMipMapLinearFilter,linear:LinearFilter,"linear-mip-map-nearest":LinearMipMapNearestFilter,"linear-mip-map-linear":LinearMipMapLinearFilter},_format={alpha:AlphaFormat,rgb:RGBFormat,rgba:RGBAFormat,luminance:LuminanceFormat,"luminance-alpha":LuminanceAlphaFormat,rgbe:RGBEFormat,depth:DepthFormat,"depth-stencil":DepthStencilFormat},_type={"unsigned-byte":UnsignedByteType,byte:ByteType,short:ShortType,"unsigned-short":UnsignedShortType,int:IntType,"unsigned-int":UnsignedIntType,float:FloatType,"half-float":HalfFloatType,"unsigned-short-4444":UnsignedShort4444Type,"unsigned-short-5551":UnsignedShort5551Type,"unsigned-short-565":UnsignedShort565Type,"unsigned-int-248":UnsignedInt248Type},_encoding={linear:LinearEncoding,"s-rgb":sRGBEncoding,gamma:GammaEncoding,rgbe:RGBEEncoding,"log-luv":LogLuvEncoding,rgbm7:RGBM7Encoding,rgbm16:RGBM16Encoding,rgbde:RGBDEncoding,"basic-depth":BasicDepthPacking,"rgba-depth":RGBADepthPacking},vglTexture={inject:["vglNamespace"],props:{/** The path or URL to the file. This can also be a Data URI. */src:string,name:string,mapping:{type:string,default:"uv"},wrapS:{type:string,default:"clamp-to-edge"},wrapT:{type:string,default:"clamp-to-edge"},magFilter:{type:string,default:"linear"},minFilter:{type:string,default:"linear-mip-map-linear"},anisotropy:{type:number,default:1},format:string,type:{type:string,default:"unsigned-byte"},offset:vector2,repeat:vector2,rotation:{type:number,default:0},center:vector2,premultiplyAlpha:boolean,unpackAlignment:{type:number,default:4},encoding:{type:string,default:"linear"}},computed:{inst:function(){var e=this;return new TextureLoader().load(this.src,function(t){e.format&&Object.assign(t,{format:_format[e.format]}),e.vglNamespace.update()})}},watch:{inst:{handler:function(e){this.vglNamespace.textures[this.name]=e,Object.assign(e,{mapping:_mapping[this.mapping],wrapS:wrapping[this.wrapS],wrapT:wrapping[this.wrapT],magFilter:filter[this.magFilter],minFilter:filter[this.minFilter],anisotropy:parseInt(this.anisotropy,10),type:_type[this.type],rotation:parseFloat(this.rotation),premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:parseInt(this.unpackAlignment,10),encoding:_encoding[this.encoding]}),this.offset&&e.offset.copy(parseVector2(this.offset)),this.repeat&&e.repeat.copy(parseVector2(this.repeat)),this.center&&e.center.copy(parseVector2(this.center))},immediate:!0},name:function(e,t){var a=this.vglNamespace.textures,i=this.inst;a[t]===i&&delete a[t],a[e]=i},mapping:function(e){this.inst.mapping=_mapping[e]},wrapS:function(e){this.inst.wrapS=wrapping[e]},wrapT:function(e){this.inst.wrapT=wrapping[e]},magFilter:function(e){this.inst.magFilter=filter[e]},minFilter:function(e){this.inst.minFilter=filter[e]},anisotropy:function(e){this.inst.anisotropy=parseInt(e,10)},format:function(e){this.inst.format=_format[e]},type:function(e){this.inst.type=_type[e]},offset:function(e){this.inst.offset.copy(parseVector2(e))},repeat:function(e){this.inst.repeat.copy(parseVector2(e))},rotation:function(e){this.inst.rotation=parseFloat(e)},center:function(e){this.inst.center.copy(parseVector2(e))},premultiplyAlpha:function(e){this.inst.premultiplyAlpha=e},unpackAlignment:function(e){this.inst.unpackAlignment=parseInt(e,10)},encoding:function(e){this.inst.encoding=_encoding[e]}},beforeDestroy:function(){var e=this.vglNamespace.textures,t=this.inst,a=this.name;e[a]===t&&delete e[a]},beforeUpdate:function(){this.inst.needsUpdate=!0,this.vglNamespace.update()},render:function(e){return this.$slots.default?e("div",this.$slots.default):void 0}},VglExtrudeGeometry={mixins:[VglGeometry],computed:{inst:function(){return new ExtrudeBufferGeometry([],{})}}},fonts=Object.create(null),vglTextGeometry={mixins:[VglExtrudeGeometry],props:{/** The text that needs to be shown. */text:{type:string,default:""},/** The path or URL to the facetype json file. This can also be a Data URI. */font:string,/** Size of the text. */size:{type:number,default:100},/** Thickness to extrude text. */height:{type:number,default:50},/** Number of points on the curves. */curveSegments:{type:number,default:12},/** Turn on bevel. */bevelEnabled:boolean,/** How deep into text bevel goes. */bevelThickness:{type:number,default:10},/** How far from text outline is bevel. */bevelSize:{type:number,default:8},/** Number of bevel segments. */bevelSegments:{type:number,default:3}},data:function(){return{f:void 0}},computed:{inst:function(){return this.f===void 0?new BufferGeometry:new TextBufferGeometry(this.text,{font:fonts[this.f],size:parseFloat(this.size),height:parseFloat(this.height),curveSegments:parseInt(this.curveSegments,10),bevelEnabled:this.bevelEnabled,bevelThickness:parseFloat(this.bevelThickness),bevelSize:parseFloat(this.bevelSize),bevelSegments:parseInt(this.bevelSegments,10)})}},watch:{font:{handler:function(e){var t=this;fonts[e]?fonts[e].isFont?this.f=e:fonts[e].push(function(){e===t.font&&(t.f=e)}):(fonts[e]=[function(){e===t.font&&(t.f=e),t.vglNamespace.update()}],new FontLoader().load(e,function(t){var a=fonts[e];fonts[e]=t,a.forEach(function(e){e()})}))},immediate:!0}}},vglSpriteMaterial={mixins:[VglMaterialWithMap],props:{/** CSS style color of the material. */color:{type:string,default:"#fff"},/** The texture map of the material. */map:string},computed:{inst:function(){return new SpriteMaterial}},watch:{inst:{handler:function(e){e.color.setStyle(this.color)},immediate:!0},color:function(e){this.inst.color.setStyle(e)}}},vglGridHelper={mixins:[VglObject3d],props:{/** The size of the grid. */size:{type:number,default:10},/** The number of divisions across the grid. */divisions:{type:number,default:10},/** The color of the centerline. */colorCenterLine:{type:string,default:"#444444"},/** The color of the lines of the grid. */colorGrid:{type:string,default:"#888888"}},computed:{inst:function(){return new GridHelper(parseFloat(this.size),parseInt(this.divisions,10),this.colorCenterLine,this.colorGrid)}}},vglShadowMaterial={mixins:[VglMaterial],computed:{inst:function(){return new ShadowMaterial}}},vglCameraHelper={mixins:[VglObject3d],props:{/** Name of the camera to visualize. */camera:string},computed:{inst:function(){return new CameraHelper(new Camera())}},methods:{setCamera:function(){this.inst.camera=this.vglNamespace.cameras[this.camera],this.inst.camera.updateProjectionMatrix(),this.inst.update()}},created:function(){this.vglNamespace.beforeRender.push(this.setCamera)},beforeDestroy:function(){var e=this.vglNamespace.beforeRender,t=this.setCamera;e.splice(e.indexOf(t),1)}},vglDirectionalLightHelper={mixins:[VglObject3d],props:{/** If this is not the set the helper will take the color of the light. */color:{type:string},/** Dimensions of the plane. */size:{type:number,default:1}},computed:{inst:function(){return new DirectionalLightHelper(this.vglObject3d.inst,parseFloat(this.size))}},watch:{inst:{handler:function(e){this.color&&(Object.assign(e,{color:this.color}),e.update())},immediate:!0},color:function(e){this.inst.color=e,this.inst.update()}}},vglPolarGridHelper={mixins:[VglObject3d],props:{/** The radius of the polar grid. This can be any positive number. */radius:{type:number,default:10},/** The number of radial lines. This can be any positive integer. */radials:{type:number,default:16},/** The number of circles. This can be any positive integer. */circles:{type:number,default:8},/**
     * The number of line segments used for each circle.
     * This can be any positive integer that is 3 or greater.
     */divisions:{type:number,default:64},/** The first color used for grid elements. */color1:{type:string,default:"#444444"},/** The second color used for grid elements. */color2:{type:string,default:"#888888"}},computed:{inst:function(){return new PolarGridHelper(parseFloat(this.radius),parseInt(this.radials,10),parseInt(this.circles,10),parseInt(this.divisions,10),this.color1,this.color2)}}},vglMeshBasicMaterial={mixins:[VglMaterialWithMap],props:{/** CSS style color of the material. */color:{type:string,default:"#fff"},/** The color map of the material. */map:string},computed:{inst:function(){return new MeshBasicMaterial}},watch:{inst:{handler:function(e){e.color.setStyle(this.color)},immediate:!0},color:function(e){this.inst.color.setStyle(e)}}};/**
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
 */export{VglNamespace,VglObject3d,vglScene as VglScene,VglCamera,vglRenderer as VglRenderer,vglPerspectiveCamera as VglPerspectiveCamera,vglGroup as VglGroup,VglLight,vglDirectionalLight as VglDirectionalLight,vglAmbientLight as VglAmbientLight,VglMaterial,vglPointsMaterial as VglPointsMaterial,VglGeometry,vglSphereGeometry as VglSphereGeometry,vglMeshStandardMaterial as VglMeshStandardMaterial,vglMesh as VglMesh,vglPoints as VglPoints,vglLineBasicMaterial as VglLineBasicMaterial,VglLine,vglSprite as VglSprite,vglBoxGeometry as VglBoxGeometry,vglCircleGeometry as VglCircleGeometry,vglLineSegments as VglLineSegments,vglLineLoop as VglLineLoop,vglConeGeometry as VglConeGeometry,vglAxesHelper as VglAxesHelper,vglOrthographicCamera as VglOrthographicCamera,VglCylinderGeometry,vglPlaneGeometry as VglPlaneGeometry,vglDodecahedronGeometry as VglDodecahedronGeometry,vglIcosahedronGeometry as VglIcosahedronGeometry,vglOctahedronGeometry as VglOctahedronGeometry,vglRingGeometry as VglRingGeometry,vglTetrahedronGeometry as VglTetrahedronGeometry,vglTorusGeometry as VglTorusGeometry,vglTorusKnotGeometry as VglTorusKnotGeometry,vglArrowHelper as VglArrowHelper,vglBoxHelper as VglBoxHelper,vglPointLight as VglPointLight,vglSpotLight as VglSpotLight,vglTexture as VglTexture,VglExtrudeGeometry,vglTextGeometry as VglTextGeometry,vglSpriteMaterial as VglSpriteMaterial,vglGridHelper as VglGridHelper,vglShadowMaterial as VglShadowMaterial,vglCameraHelper as VglCameraHelper,vglDirectionalLightHelper as VglDirectionalLightHelper,vglPolarGridHelper as VglPolarGridHelper,vglMeshBasicMaterial as VglMeshBasicMaterial};
