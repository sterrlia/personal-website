import type { Sketch } from "p5-svelte";
import { isWebGLSupported } from "./utils";
import * as state from "./state";
import { init, physics } from "./logic";

export const getSketch = (containerId: string): Sketch => {
  const sketch: Sketch = (p5) => {
    state.windowData.width = document.documentElement.scrollWidth;
    state.windowData.height = document.documentElement.scrollHeight;

    const container = document.querySelector("#".concat(containerId));
    if (!container) {
      throw new Error("Container not found");
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        p5.resizeCanvas(cr.width, cr.height);
        // Optionally redraw your sketch here
      }
    });

    resizeObserver.observe(container);

    const webGLSupported = isWebGLSupported();

    p5.setup = () => {
      const renderer = webGLSupported ? p5.WEBGL : undefined;
      p5.createCanvas(
        state.windowData.width,
        state.windowData.height,
        renderer,
      );
      if (webGLSupported) {
        p5.translate(-state.windowData.width / 2, -state.windowData.height / 2);
      }

      init.generateBackgroundStars(p5);
      init.generateStars(p5);
    };

    p5.draw = () => {
      p5.translate(-state.windowData.width / 2, -state.windowData.height / 2);

      physics.applyCursorRepel(p5);
      physics.applyPointRepel(p5);
      physics.updateStars(p5);
      physics.applyStarPulseAnimation(p5);
      physics.updateStarLinks(p5);

      render();
    };

    function render() {
      p5.pixelDensity(2);
      p5.smooth();
      p5.background(20);
      p5.noStroke();

      for (const star of state.background_stars) {
        p5.fill(255, 255, 255, 90);
        p5.circle(star.x, star.y, star.r);
      }

      const starItems = state.starTreeStore.all();
      for (const item of starItems) {
        const star = item.star;
        blurredCircle(star.x, star.y, star.r);
      }

      p5.strokeWeight(1);
      p5.stroke(255, 255, 255, 150);

      for (const link of state.starLinks) {
        if (!link.active) {
          continue;
        }

        const [firstStarItem, secondStarItem] = starItems.filter((item) => {
          return (
            item.star.id == link.firstStarId ||
            item.star.id == link.secondStarId
          );
        });

        p5.line(
          firstStarItem.star.x,
          firstStarItem.star.y,
          secondStarItem.star.x,
          secondStarItem.star.y,
        );
      }
      p5.noStroke();
    }

    function blurredCircle(x: number, y: number, r: number, alpha = 255) {
      const blurLayers = 30;
      const blurStepCoef = 0.048;

      for (let i = 1; i <= blurLayers; i++) {
        p5.fill(255, 255, 255, alpha * (1 - (i / blurLayers) ** 2));
        p5.circle(x, y, r + (blurStepCoef * i) ** 8);
      }

      p5.fill(255, 255, 255, alpha);

      p5.circle(x, y, r);
    }
  };

  return sketch;
};
