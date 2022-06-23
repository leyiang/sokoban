export default class Animation {
    constructor( name, state ) {
        this.name = name;
        this.state = state;
        this.index = 1;

        setInterval(() => {
            this.index ++;

            if( this.index > 2 ) {
                this.index = 1;
            }
        }, 300 )
    }

    setState( state ) {
        this.state = state;
    }

    render(c, view, x, y, w, h) {
        const tileName = this.state + "_" + this.index;

        view.draw(
            tileName,
            this.name,
            c,
            x, y, w, h
        );
    }
}