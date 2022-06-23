import config from "../../js/config.js";

export function loadImage( src ) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener("load", () => resolve(image) );
        image.src = src;
    });
}

export function path( context, fn ) {
    context.save();
    context.beginPath();
    fn( context );
    context.closePath();
    context.restore();
}

export function devLog(where, what) {
    if( config.dev ) {
        console.log(`[${where}] ${ what }`);
    }
}

export function getCentered(ix, iy, cw, ch, scale=1) {
    const w = cw * scale;
    const h = ch * scale;

    const x = ix * cw;
    const y = iy * ch;

    const centerX = x - w/2 + cw/2;
    const centerY = y - h/2 + ch/2;

    return [ centerX, centerY, w, h ];
}