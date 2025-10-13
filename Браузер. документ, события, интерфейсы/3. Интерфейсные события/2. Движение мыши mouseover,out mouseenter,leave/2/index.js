'use strict';

class HoverIntent {
    constructor({
        elem,
        over,
        out
    }) {
        this.idTimeout = null;
        this.elem = elem;
        this.over = over;
        this.out = out;

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);

        elem.addEventListener("mouseenter", this.onMouseEnter);
        elem.addEventListener("mouseleave", this.onMouseLeave);
        elem.addEventListener("mousemove", this.onMouseMove);
    }

    onMouseEnter() {
        console.log('mouseenter')
        this.idTimeout = setTimeout(() => {
            this.over()
        }, 500)
    }

    onMouseLeave() {
        console.log('mouseeleave')
        if (this.idTimeout) {
            clearTimeout(this.idTimeout)
            this.idTimeout = null
        }
        this.out()
    }

    onMouseMove() {
        console.log('onMouseMove')
        if (this.idTimeout) {
            clearTimeout(this.idTimeout)
            this.idTimeout = null
            this.idTimeout = setTimeout(() => {
                this.over()
            }, 500)
        }
    }

    destroy() {
        elem.removeEventListener("mouseenter", this.onMouseEnter);
        elem.removeEventListener("mouseleave", this.onMouseLeave);
        elem.removeEventListener("mousemove", this.onMouseMove);
    }

}