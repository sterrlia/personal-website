import * as constants from "./constants";

export interface StarTreeItem {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  star: Star;
}

export interface Star {
  id: number;
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  linkCount: number;
}

export interface StarLink {
  firstStarId: number;
  secondStarId: number;
  timestamp: number;
  active: boolean;
}

export interface BackgroundStar {
  x: number;
  y: number;
  r: number;
  alpha: number;
}

export function itemFromStar(star: Star): StarTreeItem {
  return {
    minX: star.x - constants.starSize / 2,
    minY: star.y - constants.starSize / 2,
    maxX: star.x + constants.starSize / 2,
    maxY: star.y + constants.starSize / 2,
    star: star,
  };
}
