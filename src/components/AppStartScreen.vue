<script setup>
import { onMounted, ref } from 'vue';

const canvasElement = ref(null);
let ctx, CANVAS_WIDTH, CANVAS_HEIGHT;
let START_VALUES = {};
let triangles = [{}, null, null];
let lineargradient = null;
let angle = 60;
let angleInRadians = angle * (Math.PI / 180)
let firstLineCoords = {x: 0,y:0,sx:0,sy:0,status:'drawing-down',fullLength: null, currentLength: 0}
let executeTime = null;
let startSecondTriangle = null;
let startThirdTriangle = null;
// let rateUpdate = 5;
// let count = 0;
let gradientOpacity = 0;
const drawFLine = () => {
    if(firstLineCoords.status === 'drawing-down') {
        if(firstLineCoords.y >= CANVAS_HEIGHT) {
            firstLineCoords.status = 'hidden-down'
        }
        ctx.beginPath();
        ctx.moveTo(firstLineCoords.sx, firstLineCoords.sy);
        ctx.lineTo(firstLineCoords.x, firstLineCoords.y);
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#FFF8EF';
        ctx.filter = 'drop-shadow(0px 0px 7.542px #FFF8EF) drop-shadow(0px 0px 52.797px #FFF8EF) drop-shadow(0px 0px 105.594px #FFF8EF)';
        ctx.stroke();
        firstLineCoords.currentLength += 2;
        firstLineCoords.x = firstLineCoords.x + firstLineCoords.currentLength * Math.cos(angleInRadians);
        firstLineCoords.y = firstLineCoords.y + firstLineCoords.currentLength * Math.sin(angleInRadians);
    }
    if(firstLineCoords.status === 'hidden-down') {
        if(firstLineCoords.currentLength <= 0) {
            firstLineCoords.status = 'disabled';
        }
        ctx.beginPath();
        ctx.moveTo(firstLineCoords.sx, firstLineCoords.sy);
        ctx.lineTo(firstLineCoords.x, firstLineCoords.y);
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#FFF8EF';
        ctx.filter = 'drop-shadow(0px 0px 7.542px #FFF8EF) drop-shadow(0px 0px 52.797px #FFF8EF) drop-shadow(0px 0px 105.594px #FFF8EF)';
        ctx.stroke();
        firstLineCoords.currentLength -= 2;
        firstLineCoords.sx = firstLineCoords.sx + firstLineCoords.currentLength * Math.cos(angleInRadians);
        firstLineCoords.sy = firstLineCoords.sy + firstLineCoords.currentLength * Math.sin(angleInRadians);
    }
}
const drawTriangle = (ctx, triangle, fillStyle) => {
  ctx.beginPath();
  ctx.moveTo(triangle.leftX_1, triangle.leftY_1);
  ctx.lineTo(triangle.leftX_2, triangle.leftY_2);
  ctx.lineTo(triangle.rightX_2, triangle.rightY_2);
  ctx.lineTo(triangle.rightX_1, triangle.rightY_1);
  ctx.lineTo(triangle.bottomX, triangle.bottomY);
  ctx.lineTo(triangle.leftX_1, triangle.leftY_1);
  ctx.fillStyle = fillStyle;
  ctx.fill();
}
const animateTriangle = (ctx, triangleIndex) => {
  if(triangles[triangleIndex].step === 'width-change') {
      if(triangles[triangleIndex].leftX_1 > 0) {
        triangles[triangleIndex].leftX_1 -= 20;
        triangles[triangleIndex].leftX_2 -= 20;
      }
      if(triangles[triangleIndex].rightX_1 < CANVAS_WIDTH) {
        triangles[triangleIndex].rightX_1 += 20
        triangles[triangleIndex].rightX_2 += 20
      }
      if(triangles[triangleIndex].leftX_1 <= 0 && triangles[triangleIndex].rightX_1 >= CANVAS_WIDTH) {
        triangles[triangleIndex].step = 'left-right-to-down'
      }
  }
  if(triangles[triangleIndex].step === 'left-right-to-down') {
      if(triangles[triangleIndex].leftY_1 < CANVAS_HEIGHT) {
        triangles[triangleIndex].leftY_1 += 20;
      }
      if(triangles[triangleIndex].rightY_1 < CANVAS_HEIGHT) {
        triangles[triangleIndex].rightY_1 += 20;
      }
      if(triangles[triangleIndex].leftY_1 >= CANVAS_HEIGHT && triangles[triangleIndex].rightY_1 >= CANVAS_HEIGHT) {
        triangles[triangleIndex].step = 'stop';
      }
  }
}
const animate = () => {
    if(triangles[2] && triangles[2].step === 'stop') {
      console.log('animation stop')
      return false;
    }
    executeTime = performance.now();
    // drawFLine();
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.lineWidth = 2;
    // ctx.filter = 'drop-shadow(0px 0px 7.542px #FFF8EF) drop-shadow(0px 0px 52.797px #FFF8EF) drop-shadow(0px 0px 105.594px #FFF8EF)';
    ctx.filter = 'drop-shadow(0px 0px 300px #FFF8EF)';
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'transparent';
    if(!lineargradient) {
      lineargradient = ctx.createLinearGradient(CANVAS_WIDTH / 2, 0, CANVAS_WIDTH / 2, CANVAS_HEIGHT);
    }
    // lineargradient.addColorStop(0, `rgba(22, 19, 18, ${gradientOpacity})`); // #161312
    lineargradient.addColorStop(0, `rgba(122, 106, 92, ${gradientOpacity})`); // #7A6A5C
    lineargradient.addColorStop(1, `rgba(255, 248, 239, ${gradientOpacity})`); // #FFF8EF

    if(triangles[0].step === 'opacity-change') {
        gradientOpacity += 0.005;
        if(gradientOpacity >= 1) {
          gradientOpacity = 1;
          triangles[0].step = 'height-change'
        }
     }
    if(triangles[0].step === 'height-change') {
        if(triangles[0].leftY_1 > 0) {
          triangles[0].leftY_1 -= 10;
          triangles[0].leftY_2 -= 10;
        }
        if(triangles[0].rightY_1 > 0) {
          triangles[0].rightY_1 -= 10;
          triangles[0].rightY_2 -= 10;
        }
        if(triangles[0].bottomY < CANVAS_HEIGHT) {
          triangles[0].bottomY += 10;
        }
        if(triangles[0].leftY_1 <= 0 &&  triangles[0].rightY_1 <= 0 && triangles[0].bottomY >= CANVAS_HEIGHT) {
          triangles[0].step = 'width-change'
            triangles[1] = {
              leftX_1: triangles[0].leftX_1,
              leftY_1: triangles[0].leftY_1,
              leftX_2: triangles[0].leftX_2,
              leftY_2: triangles[0].leftY_2,
              rightX_1: triangles[0].rightX_1,
              rightY_1: triangles[0].rightY_1,
              rightX_2: triangles[0].rightX_2,
              rightY_2: triangles[0].rightY_2,
              bottomX: triangles[0].bottomX,
              bottomY: triangles[0].bottomY,
              step: triangles[0].step
            };
            triangles[2] = {
              leftX_1: triangles[0].leftX_1,
              leftY_1: triangles[0].leftY_1,
              leftX_2: triangles[0].leftX_2,
              leftY_2: triangles[0].leftY_2,
              rightX_1: triangles[0].rightX_1,
              rightY_1: triangles[0].rightY_1,
              rightX_2: triangles[0].rightX_2,
              rightY_2: triangles[0].rightY_2,
              bottomX: triangles[0].bottomX,
              bottomY: triangles[0].bottomY,
              step: triangles[0].step
            };
            startSecondTriangle = executeTime + 300;
            startThirdTriangle = executeTime + 600;
        }
    }
    animateTriangle(ctx, 0);
    drawTriangle(ctx, triangles[0], lineargradient);
    if(triangles[1]) {
      if(triangles[1] && executeTime > startSecondTriangle) {
        animateTriangle(ctx, 1);
      }
      drawTriangle(ctx, triangles[1], lineargradient);
    }
    if(triangles[2]) {
      if(triangles[2] && executeTime > startThirdTriangle) {
        animateTriangle(ctx, 2);
      }
      drawTriangle(ctx, triangles[2], lineargradient);
    }
  requestAnimationFrame(animate)
}
onMounted(() => {
    CANVAS_WIDTH = window.innerWidth;
    CANVAS_HEIGHT = window.innerHeight;
    canvasElement.value.width = CANVAS_WIDTH;
    canvasElement.value.height = CANVAS_HEIGHT;
    ctx = canvasElement.value.getContext('2d');
    START_VALUES.leftX = Math.floor((window.innerWidth - 800) / 2);
    START_VALUES.leftY = Math.floor((30 * window.innerHeight / 100) / 2);
    START_VALUES.rightX = Math.floor((window.innerWidth - 800) / 2 + 800);
    START_VALUES.rightY = Math.floor((30 * window.innerHeight / 100) / 2);
    START_VALUES.bottomX = Math.floor(window.innerWidth / 2);
    START_VALUES.bottomY = Math.floor(window.innerHeight - ((20 * window.innerHeight / 100) / 2))
    triangles[0].leftX_1 = START_VALUES.leftX;
    triangles[0].leftY_1 = START_VALUES.leftY;
    triangles[0].leftX_2 = START_VALUES.leftX;
    triangles[0].leftY_2 = START_VALUES.leftY;
    triangles[0].rightX_1 = START_VALUES.rightX;
    triangles[0].rightY_1 = START_VALUES.rightY;
    triangles[0].rightX_2 = START_VALUES.rightX;
    triangles[0].rightY_2 = START_VALUES.rightY;
    triangles[0].bottomX = START_VALUES.bottomX;
    triangles[0].bottomY = START_VALUES.bottomY;
    triangles[0].step = 'opacity-change';

    animate();
})
</script>
<template>
    <canvas ref="canvasElement" class="bg-black">

    </canvas>
</template>
<style scoped>
</style>