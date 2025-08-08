export function isWebGLSupported(): boolean {
    try {
        const canvas = document.createElement('canvas');
        return !!(
            window.WebGLRenderingContext &&
            (canvas.getContext('webgl') ||
                canvas.getContext('experimental-webgl'))
        );
    } catch (e) {
        console.log(e);
        return false;
    }
}

export function distance(x1: number, y1: number, x2: number, y2: number) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}
