import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector:'[crossedOut]'
})

export class CrossingOutDirective{

    constructor (private el: ElementRef) {}

    @Input('crossedOut')
    crossedOutStyle: string;

    @HostListener('click')
    onClick() {
        this.crossedOut();
    }

    private crossedOut() {

        if (this.crossedOutStyle == "line-through") {
            this.crossedOutStyle = "none"
            this.el.nativeElement.style.textDecoration = "none"
        } else if ( (this.crossedOutStyle == null) ||
                    (this.crossedOutStyle == "none") ) {
            this.crossedOutStyle = "line-through"
            this.el.nativeElement.style.textDecoration = "line-through"
        }
        
        //this.el.nativeElement.style.textDecoration = style;
        console.log( this.el.nativeElement.style.textDecoration);
    }
}