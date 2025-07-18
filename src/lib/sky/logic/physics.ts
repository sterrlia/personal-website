import * as constants from "../constants";
import * as state from "../state";
import type p5 from "p5";

export function applyCursorRepel(p5: p5) {
  const searchBox = {
    minX: p5.mouseX - constants.cursorGravityRadius,
    minY: p5.mouseY - constants.cursorGravityRadius,
    maxX: p5.mouseX + constants.cursorGravityRadius,
    maxY: p5.mouseY + constants.cursorGravityRadius,
  };

  const nearby = state.starTreeStore.search(searchBox);

  for (const item of nearby) {
    const star = item.star;
    state.removeStar(star);
  }

  for (const item of nearby) {
    const star = item.star;

    const dx = star.x - p5.mouseX;
    const dy = star.y - p5.mouseY;

    const distSq = dx * dx + dy * dy + 1e-6;

    const force = constants.cursorForceCoef / distSq;
    const vx = (dx / Math.sqrt(distSq)) * force;
    const vy = (dy / Math.sqrt(distSq)) * force;

    star.vx += vx;
    star.vy += vy;

    state.addStar(star);
  }
}

export function applyPointRepel(p5: p5) {
  const moving = state.starTreeStore
    .all()
    .filter((item) => item.star.vx != 0 || item.star.vy != 0);

  for (const item of moving) {
    const star = item.star;
    const searchBox = {
      minX: star.x - constants.starGravityRadius,
      minY: star.y - constants.starGravityRadius,
      maxX: star.x + constants.starGravityRadius,
      maxY: star.y + constants.starGravityRadius,
    };
    const nearbyItems = state.starTreeStore.search(searchBox);
    if (nearbyItems.length === 0) {
      continue;
    }

    state.removeStar(star);

    for (const neighborItem of nearbyItems) {
      const neighborStar = neighborItem.star;
      if (neighborStar.id === star.id) {
        continue;
      }

      state.removeStar(neighborStar);

      const dx = neighborStar.x - star.x;
      const dy = neighborStar.y - star.y;

      const distSq = dx * dx + dy * dy + 1e-6;
      const dist = Math.sqrt(distSq);

      if (dist <= constants.starLinkDistance) {
        const linkExists = state.starLinks.some((link) => {
          return (
            (link.firstStarId === star.id &&
              link.secondStarId === neighborStar.id) ||
            (link.secondStarId === star.id &&
              link.firstStarId === neighborStar.id)
          );
        });

        if (!linkExists) {
          state.starLinks.push({
            firstStarId: star.id,
            secondStarId: neighborStar.id,
            timestamp: p5.millis(),
            active: true,
          });
          star.linkCount++;
          neighborStar.linkCount++;
        }
      }

      const force = constants.starForceCoef / distSq;
      const vx = (dx / dist) * force;
      const vy = (dy / dist) * force;

      star.vx -= vx / 2;
      star.vy -= vy / 2;
      neighborStar.vx += vx / 2;
      neighborStar.vy += vy / 2;

      state.addStar(neighborStar);
    }

    state.addStar(star);
  }
}

export function updateStars(p5: p5) {
  const moving = state.starTreeStore
    .all()
    .filter((item) => item.star.vx != 0 || item.star.vy != 0);

  for (const item of moving) {
    const star = item.star;
    if (Math.abs(star.vx) < 0.01) {
      star.vx = 0;
      continue;
    }
    if (Math.abs(star.vy) < 0.01) {
      star.vy = 0;
      continue;
    }

    state.removeStar(star);

    star.vx = p5.constrain(
      star.vx,
      constants.maxStarVelocity * -1,
      constants.maxStarVelocity,
    );
    star.vy = p5.constrain(
      star.vy,
      constants.maxStarVelocity * -1,
      constants.maxStarVelocity,
    );

    star.x += star.vx;
    star.y += star.vy;
    star.x = p5.constrain(star.x, star.r, state.windowData.width - item.star.r);
    star.y = p5.constrain(
      star.y,
      star.r,
      state.windowData.height - item.star.r,
    );

    star.vx *= constants.starVelocityDamping;
    star.vy *= constants.starVelocityDamping;

    state.addStar(star);
  }
}

export function updateStarLinks(p5: p5) {
  const starItems = state.starTreeStore.all();

  for (let i = state.starLinks.length - 1; i >= 0; i--) {
    const millis = p5.millis();
    const link = state.starLinks[i];
    if (
      !link.active &&
      millis > link.timestamp + constants.inactiveLinkLifetime
    ) {
      state.starLinks.splice(i, 1);
    }

    const [firstStarItem, secondStarItem] = starItems.filter(
      (item) =>
        item.star.id == link.firstStarId || item.star.id == link.secondStarId,
    );
    const firstStar = firstStarItem.star;
    const secondStar = secondStarItem.star;

    if (
      firstStar.linkCount === 1 &&
      secondStar.linkCount === 1 &&
      millis > link.timestamp + constants.singleStarLinkLifetime
    ) {
      link.active = false;
      link.timestamp = millis;

      firstStar.linkCount--;
      secondStar.linkCount--;

      continue;
    }

    const dx = firstStar.x - secondStar.x;
    const dy = firstStar.y - secondStar.y;

    const distSq = dx * dx + dy * dy + 1e-6;
    const dist = Math.sqrt(distSq);

    if (dist >= constants.starLinkUnbindDistance) {
      state.starLinks.splice(i, 1);
      firstStar.linkCount--;
      secondStar.linkCount--;
    }
  }
}

export function applyStarPulseAnimation(p5: p5) {
  const t = p5.millis() / 10000;
  const minRadius = constants.starSize - 1;
  const radiusAdd = 3;
  const radius = minRadius + Math.sin(t * p5.TWO_PI * 0.5) * radiusAdd;

  for (const item of state.starTreeStore.all()) {
    item.star.r = radius;
  }
}
