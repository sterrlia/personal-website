import * as constants from '../constants';
import * as state from '../state';
import type p5 from 'p5';
import { itemFromStar } from '../types';

export function generateBackgroundStars(p5: p5) {
    const cols = Math.ceil(Math.sqrt(1000));
    const rows = Math.ceil(1000 / cols);
    const xStep = state.windowData.width / cols;
    const yStep = state.windowData.height / rows;

    let count = 0;

    for (let i = 0; i < cols && count < 1000; i++) {
        for (let j = 0; j < rows && count < 10000; j++) {
            const jitterX = p5.random(
                -xStep * constants.starNoiseCoef,
                xStep * constants.starNoiseCoef
            );
            const jitterY = p5.random(
                -yStep * constants.starNoiseCoef,
                yStep * constants.starNoiseCoef
            );

            const pointX = i * xStep + xStep / 2 + jitterX;
            const pointY = j * yStep + yStep / 2 + jitterY;

            state.background_stars.push({
                x: pointX,
                y: pointY,
                r: p5.random(1, 3),
                alpha: p5.random(50, 150),
            });

            count++;
        }
    }
}

export function generateStars(p5: p5) {
    const starCount = Math.round(
        ((state.windowData.width * state.windowData.height) / 2073613) *
            constants.relativeStarCount
    );
    const cols = Math.ceil(Math.sqrt(starCount));
    const rows = Math.ceil(starCount / cols);
    const xStep = state.windowData.width / cols;
    const yStep = state.windowData.height / rows;

    let count = 0;

    for (let i = 0; i < cols && count < starCount; i++) {
        for (let j = 0; j < rows && count < starCount; j++) {
            const jitterX = p5.random(
                -xStep * constants.starNoiseCoef,
                xStep * constants.starNoiseCoef
            );
            const jitterY = p5.random(
                -yStep * constants.starNoiseCoef,
                yStep * constants.starNoiseCoef
            );

            const pointX = i * xStep + xStep / 2 + jitterX;
            const pointY = j * yStep + yStep / 2 + jitterY;

            state.starTreeStore.insert(
                itemFromStar({
                    x: pointX,
                    y: pointY,
                    r: constants.starSize,
                    vx: 0.0,
                    vy: 0.0,
                    id: count,
                    linkCount: 0,
                })
            );

            count++;
        }
    }
}
