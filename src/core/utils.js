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