import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appDraggableContent]'
})
export class DraggableContentDirective {
    private isDown = false;
    private startX = 0;
    private startY = 0;
    private scrollLeft = 0;
    private scrollTop = 0;

    private container!: HTMLElement;

    constructor (private el: ElementRef) { }

    ngAfterViewInit () {
        // If used on parent, find the PDF container inside
        this.container = this.el.nativeElement.querySelector('.ng2-pdf-viewer-container') || this.el.nativeElement;
        this.container.style.cursor = 'grab';
    }

    @HostListener('mousedown', ['$event'])
    onMouseDown (e: MouseEvent) {
        if (!this.container) return;
        this.isDown = true;
        this.startX = e.pageX - this.container.offsetLeft;
        this.startY = e.pageY - this.container.offsetTop;
        this.scrollLeft = this.container.scrollLeft;
        this.scrollTop = this.container.scrollTop;
        this.container.style.cursor = 'grabbing';
        e.preventDefault();
    }

    @HostListener('mouseleave')
    onMouseLeave () {
        this.isDown = false;
        if (this.container) this.container.style.cursor = 'grab';
    }

    @HostListener('mouseup')
    onMouseUp () {
        this.isDown = false;
        if (this.container) this.container.style.cursor = 'grab';
    }

    @HostListener('mousemove', ['$event'])
    onMouseMove (e: MouseEvent) {
        if (!this.isDown || !this.container) return;
        e.preventDefault();
        const x = e.pageX - this.container.offsetLeft;
        const y = e.pageY - this.container.offsetTop;
        const walkX = x - this.startX;
        const walkY = y - this.startY;
        this.container.scrollLeft = this.scrollLeft - walkX;
        this.container.scrollTop = this.scrollTop - walkY;
    }
}
