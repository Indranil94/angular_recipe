import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: "[appDropdown]"
})

export class DropdownDirective{

    constructor (private el: ElementRef, private renderer: Renderer2) {}
 
    @HostBinding('class.show') isOpen = false;
   
    @HostListener('mouseenter') toggleOpen() {
        this.isOpen = !this.isOpen;
        let part = this.el.nativeElement.querySelector('.dropdown-menu');
        if(this.isOpen)
          this.renderer.addClass(part, 'show');
        else
          this.renderer.removeClass(part, 'show');
    }
}