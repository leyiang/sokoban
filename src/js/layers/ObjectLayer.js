export default function(c, view) {
    game.grid.cells.forEach( cell => {
        cell.render( c, view );
    });
}