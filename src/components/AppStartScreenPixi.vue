<script setup>
import {Ticker,Application, Sprite, Geometry, Mesh, Triangle, Graphics, BlurFilter, HardMixBlend} from 'pixi.js';
import {GlowFilter, ColorGradientFilter, DropShadowFilter} from 'pixi-filters';
import {ref, onMounted} from 'vue';
const canvasContainer = ref(null);
let START_VALUES = {};
let angle = null;
let top = null;
let fTriangleAlpha = 0;
let lineStep = 60;
let triangleStep = 20;
let lineWidth = 4;
let executeTime = null;
let startTriangles = null;
let startSecondTriangle = null;
let startThirdTriangle = null;

const dropShadowFLine1 = new DropShadowFilter({
  color: 0xFFFFFF,
  alpha: 1,
  blur: 6,
  offset: {x: 0, y: 8}
});
const dropShadowFLine2 = new DropShadowFilter({
  color: 0xFFFFFF,
  alpha: 1,
  blur: 6,
  offset: {x: 8, y: 0}
});
const dropShadowSLine2 = new DropShadowFilter({
  color: 0xFFFFFF,
  alpha: 1,
  blur: 6,
  offset: {x: -4, y: 0}
});
const dropShadowThLine1 = new DropShadowFilter({
  color: 0xFFFFFF,
  alpha: 1,
  blur: 4,
  offset: {x: 0, y: 5}
});
const dropShadowThLine2 = new DropShadowFilter({
  color: 0xFFFFFF,
  alpha: 1,
  blur: 4,
  offset: {x: 0, y: -5}
});

let gradientFilter = new ColorGradientFilter({
    type: 0,
    angle: 180,
    maxColors: 0,
    stops: [{color: 0x7A6A5C, offset: 0, alpha:1}, {color:0xFFF8EF, offset: 1,alpha:1}]
})
const dropShadow = new DropShadowFilter({
  color: 0xFFF8EF,
  alpha: 0.5,
  blur: 6,
  offset: {x: 0, y: 0}
})
const blueFilterLine = new BlurFilter({strength: 1})
const blueFilterTriangle = new BlurFilter({strength: 0.1})

let fLine = new Graphics();
let sLine = new Graphics();
let thLine = new Graphics();
let fTriangle = new Graphics();
let sTriangle = new Graphics();
let thTriangle = new Graphics();

let fLineValue = null;
let sLineValue = null;
let thLineValue = null;
let fTr = null;
let sTr = null;
let thTr = null;

const drawLines = () => {
  // draw and hide first line
  fLine.clear();
  if(fLineValue.length <= fLineValue.stopLength) {
    fLine.moveTo(fLineValue.x, fLineValue.y);
    fLine.lineTo(
        fLineValue.x + fLineValue.length * Math.cos(angle * (Math.PI / 180)),
        fLineValue.y + fLineValue.length * Math.sin(angle * (Math.PI / 180))
    );
    fLineValue.length += lineStep;
  } else {
    fLine.moveTo(
        fLineValue.x + fLineValue.hiddenLength * Math.cos(angle * (Math.PI / 180)),
        fLineValue.y + fLineValue.hiddenLength * Math.sin(angle * (Math.PI / 180)));
    fLine.lineTo(
        fLineValue.x + fLineValue.stopLength * Math.cos(angle * (Math.PI / 180)),
        fLineValue.y + fLineValue.stopLength * Math.sin(angle * (Math.PI / 180))
    );
    fLineValue.hiddenLength += lineStep;
    if(fLineValue.hiddenLength >= fLineValue.stopLength) {
      fLineValue.step = 'stop-animation';
    }
  }
  fLine.filters = [dropShadowFLine1, dropShadowFLine2, blueFilterLine];
  fLine.stroke({width: lineWidth, color: '#FFF8EF'})

  // draw and hide second line
  sLine.clear();
  if(sLineValue.length <= sLineValue.stopLength) {
    sLine.moveTo(sLineValue.x, sLineValue.y);
    sLine.lineTo(
        sLineValue.x + sLineValue.length * Math.cos(angle * (Math.PI / 180)),
        sLineValue.y - sLineValue.length * Math.sin(angle * (Math.PI / 180))
    );
    sLineValue.length += lineStep
  } else {
    sLine.moveTo(
        sLineValue.x + sLineValue.hiddenLength * Math.cos(angle * (Math.PI / 180)),
        sLineValue.y - sLineValue.hiddenLength * Math.sin(angle * (Math.PI / 180))
    );
    sLine.lineTo(
        sLineValue.x + sLineValue.stopLength * Math.cos(angle * (Math.PI / 180)),
        sLineValue.y - sLineValue.stopLength * Math.sin(angle * (Math.PI / 180))
    );
    sLineValue.hiddenLength += lineStep
    if(sLineValue.hiddenLength >= sLineValue.stopLength) {
      sLineValue.step = 'stop-animation';
    }
  }
  sLine.filters = [dropShadowFLine1, dropShadowSLine2, blueFilterLine];
  sLine.stroke({width: lineWidth, color: '#FFF8EF'})

  // draw and hide third line
  thLine.clear();
  if(thLineValue.length <= thLineValue.stopLength) {
    thLine.moveTo(thLineValue.x, thLineValue.y);
    thLine.lineTo(
        thLineValue.x - thLineValue.length,
        thLineValue.y
    );
    thLineValue.length += lineStep;
  } else {
    thLine.moveTo(thLineValue.x - thLineValue.hiddenLength, thLineValue.y);
    thLine.lineTo(0, thLineValue.y);
    thLineValue.hiddenLength += lineStep;
    if(thLineValue.hiddenLength >= thLineValue.stopLength) {
      thLineValue.step = 'stop-animation';
    }
  }
  thLine.filters = [dropShadowThLine1, dropShadowThLine2, blueFilterLine];
  thLine.stroke({width: lineWidth, color: '#FFF8EF'})
}
onMounted(async () => {
 // стартовые значения
// 800px ширина треугольника, 64% высота треугольника
  START_VALUES.lx1 = Math.floor((window.innerWidth - 800) / 2);
  START_VALUES.ly1 = Math.floor((36 * window.innerHeight / 100) / 2);
  START_VALUES.rx1 = Math.floor((window.innerWidth - 800) / 2 + 800);
  START_VALUES.ry1 = Math.floor((36 * window.innerHeight / 100) / 2);
  START_VALUES.bx = Math.floor(window.innerWidth / 2);
  START_VALUES.by = Math.floor(82 * window.innerHeight / 100)
  START_VALUES.height = Math.floor(64 * window.innerHeight / 100) // высота треугольника
  angle = Math.atan(START_VALUES.height / (800 / 2)) * 180/Math.PI;
  top = START_VALUES.ly1;

  fLineValue = {
    length: 0,
    hiddenLength: 0,
    x: START_VALUES.lx1 - (Math.round(top / (Math.tan((angle * Math.PI) / 180)))),
    y: 0,
    stopLength: Math.floor(Math.abs(window.innerHeight / Math.sin((angle * Math.PI) / 180))) + 20,
    step: 'drawing'
  }
  sLineValue = {
    length: 0,
    hiddenLength: 0,
    x: START_VALUES.lx1 + (800 / 2) - (Math.round(top / (Math.tan((angle * Math.PI) / 180)))),
    y: window.innerHeight,
    stopLength: Math.abs(window.innerHeight / Math.sin((angle * Math.PI) / 180)) + 20,
    step: 'drawing'
  }
  thLineValue = {
    length: 0,
    hiddenLength: 0,
    x: window.innerWidth,
    y: top,
    stopLength: window.innerWidth + 20,
    step: 'drawing'
  }
  fTr = {
    lx1: START_VALUES.lx1,
    ly1: START_VALUES.ly1,
    lx2: START_VALUES.lx1,
    ly2: START_VALUES.ly1,
    rx1: START_VALUES.rx1,
    ry1: START_VALUES.ry1,
    rx2: START_VALUES.rx1,
    ry2: START_VALUES.ry1,
    bx: START_VALUES.bx,
    by: START_VALUES.by,
    step: 'change-opacity'
  }
  sTr = fTr;
  thTr = fTr;

  const app = new Application();
  const ticker = new Ticker();
  await app.init({
      resizeTo: window,
      preference: 'webgl',
      backgroundAlpha: 0
  });
  canvasContainer.value.appendChild(app.canvas);

  let opacityStep = 0;
  ticker.add(() => {
    executeTime = performance.now()
    if(startTriangles === null) {
      startTriangles = executeTime + 500;
    }
    if(fLineValue.step === 'drawing' || sLineValue.step === 'drawing' || thLineValue.step === 'drawing') {
      drawLines();
      console.log('drawing lines');
    }
    
    if(executeTime > startTriangles) {
      fTriangle.clear();
      sTriangle.clear();
      thTriangle.clear();
      opacityStep++;
      if(fTriangleAlpha < 1 && opacityStep % 7 === 0 && fTr.step === 'change-opacity') {
        fTriangleAlpha += 0.05;
        fTr.step = fTriangleAlpha < 1 ? fTr.step : 'change-height'
      }
      if(fTr.step === 'change-height') {
        fTr.ly1 = fTr.ly1 > 0 ? fTr.ly1 - triangleStep : fTr.ly1;
        fTr.ly2 = fTr.ly2 > 0 ? fTr.ly2 - triangleStep : fTr.ly2;
        fTr.ry2 = fTr.ry2 > 0 ? fTr.ry2 - triangleStep : fTr.ry2;
        fTr.ry1 = fTr.ry1 > 0 ? fTr.ry1 - triangleStep : fTr.ry1;
        fTr.by = fTr.by < window.innerHeight ? fTr.by + triangleStep : fTr.by;
        fTr.step = fTr.ly1 <= 0 && fTr.ly2 <= 0 && fTr.ry2 <= 0 && fTr.ry1 <= 0 && fTr.by >= window.innerHeight ? 'change-width' : fTr.step
      }
      if(fTr.step === 'change-width') {
        if(fTr === sTr) {
          sTr = {...fTr};
          thTr = {...fTr};
          startSecondTriangle = executeTime + 300;
          startThirdTriangle = executeTime + 600;
        }
        fTr.lx1 = fTr.lx1 > 0 ? fTr.lx1 - triangleStep : fTr.lx1;
        fTr.lx2 = fTr.lx2 > 0 ? fTr.lx2 - triangleStep : fTr.lx2;
        fTr.rx2 = fTr.rx2 < window.innerWidth ? fTr.rx2 + triangleStep : fTr.rx2;
        fTr.rx1 = fTr.rx1 < window.innerWidth ? fTr.rx1 + triangleStep : fTr.rx1;
        fTr.step = fTr.lx1 <= 0 && fTr.lx2 <= 0 && fTr.rx2 >= window.innerWidth && fTr.rx1 >= window.innerWidth ? 'sides-down' : fTr.step;
      }
      if(fTr.step === 'sides-down') {
        fTr.ly1 = fTr.ly1 < window.innerHeight ? fTr.ly1 + triangleStep : fTr.ly1;
        fTr.ry1 = fTr.ry1 < window.innerHeight ? fTr.ry1 + triangleStep : fTr.ry1;
        fTr.step = fTr.ly1 >= window.innerHeight && fTr.ry1 >= window.innerHeight ? 'stop-animation' : fTr.step;
      }
      if(startSecondTriangle && executeTime > startSecondTriangle) {
        sTr.lx1 = sTr.lx1 > 0 ? sTr.lx1 - triangleStep : sTr.lx1;
        sTr.lx2 = sTr.lx2 > 0 ? sTr.lx2 - triangleStep : sTr.lx2;
        sTr.rx2 = sTr.rx2 < window.innerWidth ? sTr.rx2 + triangleStep : sTr.rx2;
        sTr.rx1 = sTr.rx1 < window.innerWidth ? sTr.rx1 + triangleStep : sTr.rx1;
        sTr.step = sTr.lx1 <= 0 && sTr.lx2 <= 0 && sTr.rx2 >= window.innerWidth && sTr.rx1 >= window.innerWidth ? 'sides-down' : sTr.step;
        if(sTr.step === 'sides-down') {
          sTr.ly1 = sTr.ly1 < window.innerHeight ? sTr.ly1 + triangleStep : sTr.ly1;
          sTr.ry1 = sTr.ry1 < window.innerHeight ? sTr.ry1 + triangleStep : sTr.ry1;
          sTr.step = sTr.ly1 >= window.innerHeight && sTr.ry1 >= window.innerHeight ? 'stop-animation' : sTr.step;
        }
      }
      if(startThirdTriangle && executeTime > startThirdTriangle) {
        thTr.lx1 = thTr.lx1 > 0 ? thTr.lx1 - triangleStep : thTr.lx1;
        thTr.lx2 = thTr.lx2 > 0 ? thTr.lx2 - triangleStep : thTr.lx2;
        thTr.rx2 = thTr.rx2 < window.innerWidth ? thTr.rx2 + triangleStep : thTr.rx2;
        thTr.rx1 = thTr.rx1 < window.innerWidth ? thTr.rx1 + triangleStep : thTr.rx1;
        thTr.step = thTr.lx1 <= 0 && thTr.lx2 <= 0 && thTr.rx2 >= window.innerWidth && thTr.rx1 >= window.innerWidth ? 'sides-down' : thTr.step;
        if(thTr.step === 'sides-down') {
          thTr.ly1 = thTr.ly1 < window.innerHeight ? thTr.ly1 + triangleStep : thTr.ly1;
          thTr.ry1 = thTr.ry1 < window.innerHeight ? thTr.ry1 + triangleStep : thTr.ry1;
          thTr.step = thTr.ly1 >= window.innerHeight && thTr.ry1 >= window.innerHeight ? 'stop-animation' : thTr.step;
        }
      }

      fTriangle.poly([fTr.lx1, fTr.ly1, fTr.lx2, fTr.ly2, fTr.rx2, fTr.ry2, fTr.rx1, fTr.ry1, fTr.bx, fTr.by])
      fTriangle.filters = [gradientFilter, dropShadow, blueFilterTriangle]
      fTriangle.fill({color: '#FFF8EF', alpha: fTriangleAlpha < 1 ? fTriangleAlpha : 1});

      if(sTr.step === 'change-width' || sTr.step === 'sides-down') {
        sTriangle.poly([sTr.lx1, sTr.ly1, sTr.lx2, sTr.ly2, sTr.rx2, sTr.ry2, sTr.rx1, sTr.ry1, sTr.bx, sTr.by])
        sTriangle.filters = [gradientFilter, dropShadow, blueFilterTriangle]
        sTriangle.fill({color: '#FFF8EF', alpha: fTriangleAlpha < 1 ? fTriangleAlpha : 1});
      }

      if(thTr.step === 'change-width' || thTr.step === 'sides-down') {
        thTriangle.poly([thTr.lx1, thTr.ly1, thTr.lx2, thTr.ly2, thTr.rx2, thTr.ry2, thTr.rx1, thTr.ry1, thTr.bx, thTr.by])
        thTriangle.filters = [gradientFilter, dropShadow, blueFilterTriangle]
        thTriangle.fill({color: '#FFF8EF', alpha: fTriangleAlpha < 1 ? fTriangleAlpha : 1});
      }
    }
    if(thTr?.step === 'stop-animation') {
      ticker.destroy();
    }
    console.log('animatin work', ticker.FPS);
  })
  ticker.start();

  app.stage.addChild(fLine);
  app.stage.addChild(sLine);
  app.stage.addChild(thLine);


  app.stage.addChild(fTriangle);
  app.stage.addChild(sTriangle);
  app.stage.addChild(thTriangle);
})

</script>
<template>
  <div class="w-full h-screen bg-black relative">
    <div class="absolute top-0 w-full h-full left-0 z-[1] gradient"></div>
    <div ref="canvasContainer" class="relative z-[2]"></div>
  </div>
</template>
<style scoped>
.gradient {
  background: linear-gradient(90deg, #000 0%, #8F8173 47.5%, #000 100%);
  will-change: opacity;
  animation-name: show;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-delay: 1s;
  animation-fill-mode:backwards;
}
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>