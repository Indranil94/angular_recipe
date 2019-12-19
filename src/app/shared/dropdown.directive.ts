import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: "[appDropdown]"
})

export class DropdownDirective{

    constructor (private el: ElementRef, private renderer: Renderer2) {}
 
    @HostBinding('class.show') isOpen = false;
   
    @HostListener('mouseenter') toggleOpen() {
        this.isOpen = true;

        let part = this.el.nativeElement.querySelector('.dropdown-menu');
        // if(this.isOpen)
          this.renderer.addClass(part, 'show');
        // else
        //   this.renderer.removeClass(part, 'show');
    }
    @HostListener('mouseleave') toggleClose() {
      // this.isOpen = !this.isOpen;
      this.isOpen = false;
      setTimeout(()=>{
        if(!this.isOpen){
          this.isOpen = false;
          let part = this.el.nativeElement.querySelector('.dropdown-menu');
          this.renderer.removeClass(part, 'show');
        }
      },500)
      // let part = this.el.nativeElement.querySelector('.dropdown-menu');
      // // if(this.isOpen)
      //   this.renderer.removeClass(part, 'show');
      // // else
      //   this.renderer.removeClass(part, 'show');
  }
}