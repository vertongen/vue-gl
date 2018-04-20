describe('VglCurve:', function suite() {
  const { VglCurve, VglNamespace } = VueGL;
  it('without properties', function test(done) {
    const vm = new Vue({
      template: '<vgl-namespace><vgl-curve ref="c" /></vgl-namespace>',
      components: { VglCurve, VglNamespace },
    }).$mount();
    vm.$nextTick(() => {
      try {
        const expected = new THREE.Curve();
        const { inst } = vm.$refs.c;
        expect(inst).to.deep.equal(expected);
        done();
      } catch (e) {
        done(e);
      }
    });
  });
  it('with properties', function test(done) {
    const vm = new Vue({
      template: '<vgl-namespace><vgl-curve arc-length-divisions="322" ref="c" /></vgl-namespace>',
      components: { VglCurve, VglNamespace },
    }).$mount();
    vm.$nextTick(() => {
      try {
        const expected = new THREE.Curve();
        expected.arcLengthDivisions = 322;
        const { inst } = vm.$refs.c;
        expect(inst).to.deep.equal(expected);
        done();
      } catch (e) {
        done(e);
      }
    });
  });
  it('after properties are changed', function test(done) {
    const vm = new Vue({
      template: '<vgl-namespace><vgl-curve :arc-length-divisions="d" ref="c" /></vgl-namespace>',
      components: { VglCurve, VglNamespace },
      data: {
        d: 150,
      },
    }).$mount();
    vm.$nextTick(() => {
      vm.d = '220';
      vm.$nextTick(() => {
        try {
          const expected = new THREE.Curve();
          expected.arcLengthDivisions = 220;
          const { inst } = vm.$refs.c;
          expect(inst).to.deep.equal(expected);
          done();
        } catch (e) {
          done(e);
        }
      });
    });
  });
});
