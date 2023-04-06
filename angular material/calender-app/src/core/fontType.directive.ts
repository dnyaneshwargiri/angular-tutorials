import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFontType]'
})
export class FontTypeDirective {

  @Input() appFontType: string="";
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.fontFamily = this.appFontType;
  }


}
