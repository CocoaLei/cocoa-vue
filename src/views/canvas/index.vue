<template>
  <div class="page">
    <cv-header title="Canvas" />
    <div class="canvas-wrapper">
      <canvas id="canvas">This is a canvas!</canvas>
    </div>
  </div>
</template>

<script>
  import '@/layouts/cv-header';

  export default {
    data() {
      return {
        ball: {
          x: 0,
          y: 0,
          radius: 14,
          speed_x: 3,
          speed_y: 6,
          color: 'blue',
        },
        raf: undefined,
      };
    },
    mounted() {
      window.addEventListener('click', () => {
        this.raf = window.requestAnimationFrame(this.drawAnimation);
      });
    },
    methods: {
      drawGraphicInCanvas() {
        const graphicCanvas = document.getElementById('graphic-canvas');
        // 支持检查
        if (graphicCanvas.getContext) {
          const graphicContext = graphicCanvas.getContext('2d');
          // graphicContext.fillStyle = 'rgb(200, 0, 0)';
          // graphicContext.fillRect(10, 10, 50, 50);
          //
          // graphicContext.fillStyle = 'rgb(0, 0, 200, 0.5)';
          // graphicContext.fillRect(30, 30, 50, 50);

          // graphicContext.font = '48px PingFangSc #000';
          // graphicContext.strokeText('Hello', 50, 100);

          // graphicContext.beginPath();
          // graphicContext.moveTo(0, 0);
          // graphicContext.lineWidth = 4;
          // graphicContext.lineCap = 'square';
          // graphicContext.lineTo(150, 75);
          // graphicContext.stroke();

          // graphicContext.beginPath();
          // graphicContext.moveTo(0, 75);
          // graphicContext.lineWidth = 2;
          // graphicContext.setLineDash([4, 8]);
          // graphicContext.lineDashOffset = 0;
          // graphicContext.lineTo(300, 75);
          // graphicContext.stroke();

          // graphicContext.beginPath();
          // graphicContext.moveTo(0, 0);
          // graphicContext.lineWidth = 8;
          // graphicContext.lineJoin = 'round';
          // graphicContext.lineTo(150, 75);
          // graphicContext.lineTo(300, 0);
          // graphicContext.stroke();

          // graphicContext.shadowColor = 'rgb(0, 0, 0)';
          // graphicContext.shadowBlur = 10;
          //
          // graphicContext.fillStyle = 'rgb(255, 255, 255)';
          // graphicContext.fillRect(10, 10, 50, 50);

          // graphicContext.strokeStyle = 'orange';
          // graphicContext.strokeRect(10, 10, 50, 50);

          // graphicContext.font = '48px serif';
          // graphicContext.textAlign = 'center';
          // graphicContext.textBaseline = 'alphabetic';
          // graphicContext.strokeText('Hello world', 150, 100);

          graphicContext.beginPath();
          graphicContext.arc(150, 75, 50, 0, Math.PI * 2, false);
          graphicContext.stroke();
        }
      },
      drawAnimation() {
        const canvas = document.getElementById('canvas');
        // 支持检查
        if (canvas && canvas.getContext) {
          const ctx = canvas.getContext('2d');
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.beginPath();
          ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);
          ctx.fillStyle = this.ball.color;
          ctx.fill();
          ctx.closePath();
          this.ball.x += this.ball.speed_x;
          this.ball.y += this.ball.speed_y;
          this.ball.speed_y *= 0.99;
          this.ball.speed_y += 0.25;
          if (this.ball.speed_y < 0.01) window.cancelAnimationFrame(this.raf);
          if (this.ball.y + this.ball.speed_y > canvas.height || this.ball.y + this.ball.speed_y < 0) {
            this.ball.speed_y = -this.ball.speed_y;
          }
          if (this.ball.x + this.ball.speed_x > canvas.width || this.ball.x + this.ball.speed_x < 0) {
            this.ball.speed_x = -this.ball.speed_x;
          }
          this.raf = window.requestAnimationFrame(this.drawAnimation);
        }
      },
    },
  };
</script>

<style lang="less" scoped>
  .page {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    .canvas-wrapper {
      width: 100%;
      height: 300px;
      #graphic-canvas {
        margin: 1px;
        color: #000;
        background-color: #fff;
        border: 1px solid #000;
      }
    }
  }
</style>
