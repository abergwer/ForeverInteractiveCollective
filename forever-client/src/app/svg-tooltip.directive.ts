import { Directive, ElementRef, Input } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Directive({
  selector: '[svgTooltip]',
})
export class SvgTooltipDirective {
  @Input('svgTooltip') tooltipText: string;

  constructor(private elementRef: ElementRef, private matTooltip: MatTooltip) {}

  ngOnInit() {
    this.matTooltip.position = 'above';
    this.matTooltip.message = this.tooltipText;
    this.matTooltip.showDelay = 500;
    this.matTooltip.hideDelay = 200;

    const element = this.elementRef.nativeElement;
    element.style.cursor = 'pointer';

    element.addEventListener('mouseenter', () => {
      this.matTooltip.show();
    });

    element.addEventListener('mouseleave', () => {
      this.matTooltip.hide();
    });
  }
}
