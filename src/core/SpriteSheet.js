export default class SpriteSheet {
    constructor( image ) {
        this.image = image;
        this.sprites = new Map();
    }

    define( name, x, y, w, h ) {
        const canvas = document.createElement("canvas");
        const c = canvas.getContext("2d");

        canvas.width = w;
        canvas.height = h;

        c.drawImage(
            this.image,
            x * w, y * h, w, h,
            0, 0, w, h
        );

        this.sprites.set( name, canvas );
    }

    draw( tileName, context, x, y, w, h ) {
        const buffer = this.sprites.get( tileName );

        if( buffer instanceof HTMLCanvasElement ) {
            context.drawImage(
                buffer,
                x, y, w, h
            );
        }
    }
}