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