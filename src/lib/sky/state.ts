import RBush from "rbush";
import {
  itemFromStar,
  type BackgroundStar,
  type Star,
  type StarLink,
  type StarTreeItem,
} from "./types";

export const starTreeStore = new RBush<StarTreeItem>();

export function addStar(star: Star) {
  starTreeStore.insert(itemFromStar(star));
}
export function removeStar(star: Star) {
  starTreeStore.remove(itemFromStar(star), (a, b) => a.star.id === b.star.id);
}

export const background_stars: BackgroundStar[] = [];

export const starLinks: StarLink[] = [];

export const windowData = {
  width: 0,
  height: 0,
};
