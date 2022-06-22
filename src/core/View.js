import SpriteSheet from "./SpriteSheet.js";
import layers from "../js/layers/layers.js";
import config from "../js/config.js";

export default class View {
    constructor( canvas ) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");

        this.layers = layers;
        this.sprites = new Map;
    }

    init( game, sprites_info, images ) {
        this.game = game;
        const w = config.col * config.cell;
        const h = config.row * config.cell;

        this.canvas.width = w;
        this.canvas.height = h;

        this.initSprites( sprites_info, images );
    }

    initSprites( sprite_info_list, images ) {
        sprite_info_list.forEach( (spec, index) => {
            const image = images[ index ];
            const { w, h } = spec.cell;
            const sprite = new SpriteSheet( image );

            spec.info.forEach( info => {
                sprite.define( info.name, info.x, info.y, w, h );
            });

            this.sprites.set( spec.name, sprite );
        });
    }

    addLayer( layer ) {
        this.layers.push( layer );
    }

    render() {
        this.layers.forEach(layer => {
            layer( this.context, this, this.game );
        });
    }

    draw( tileName, spriteName, context, x, y, w, h ) {
        const sprite = this.sprites.get( spriteName );
        const buffer = sprite?.get( tileName );

        if( buffer instanceof HTMLCanvasElement ) {
            context.drawImage(
                buffer,
                x, y, w, h
            );
        } else {
            console.warn(`Buffer ${ tileName } not exits`)
        }
    }

    // Draw In Center
    drawCell( tileName, spriteName, context, x, y) {
        this.draw(
            tileName,
            spriteName,
            context,
            x * config.cell, y * config.cell,
            config.cell, config.cell
        );
    }
}