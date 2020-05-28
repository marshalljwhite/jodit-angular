/**
 * @fileoverview added by tsickle
 * Generated from: lib/Events.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Output, EventEmitter } from '@angular/core';
/**
 * @record
 */
export function EventObj() { }
if (false) {
    /** @type {?} */
    EventObj.prototype.args;
    /** @type {?} */
    EventObj.prototype.editor;
}
export class Events {
    constructor() {
        // tslint:disable:no-output-on-prefix
        this.onChange = new EventEmitter();
        this.onBeforeEnter = new EventEmitter(false);
        this.onKeydown = new EventEmitter(false);
        this.onMousedown = new EventEmitter(false);
        this.onClick = new EventEmitter(false);
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onPaste = new EventEmitter(false);
        this.onResize = new EventEmitter();
        this.onBeforeCommand = new EventEmitter(false);
        this.onAfterCommand = new EventEmitter();
        this.onAfterExec = new EventEmitter();
        this.onAfterPaste = new EventEmitter();
        this.onChangeSelection = new EventEmitter();
    }
}
Events.propDecorators = {
    onChange: [{ type: Output }],
    onBeforeEnter: [{ type: Output }],
    onKeydown: [{ type: Output }],
    onMousedown: [{ type: Output }],
    onClick: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }],
    onPaste: [{ type: Output }],
    onResize: [{ type: Output }],
    onBeforeCommand: [{ type: Output }],
    onAfterCommand: [{ type: Output }],
    onAfterExec: [{ type: Output }],
    onAfterPaste: [{ type: Output }],
    onChangeSelection: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    Events.prototype.onChange;
    /** @type {?} */
    Events.prototype.onBeforeEnter;
    /** @type {?} */
    Events.prototype.onKeydown;
    /** @type {?} */
    Events.prototype.onMousedown;
    /** @type {?} */
    Events.prototype.onClick;
    /** @type {?} */
    Events.prototype.onFocus;
    /** @type {?} */
    Events.prototype.onBlur;
    /** @type {?} */
    Events.prototype.onPaste;
    /** @type {?} */
    Events.prototype.onResize;
    /** @type {?} */
    Events.prototype.onBeforeCommand;
    /** @type {?} */
    Events.prototype.onAfterCommand;
    /** @type {?} */
    Events.prototype.onAfterExec;
    /** @type {?} */
    Events.prototype.onAfterPaste;
    /** @type {?} */
    Events.prototype.onChangeSelection;
}
/** @type {?} */
export const validEvents = [
    'onChange',
    'onBeforeEnter',
    'onKeydown',
    'onMousedown',
    'onClick',
    'onFocus',
    'onBlur',
    'onPaste',
    'onResize',
    'onBeforeCommand',
    'onAfterCommand',
    'onAfterExec',
    'onAfterPaste',
    'onChangeSelection',
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vam9kaXQtYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9FdmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUVuRCw4QkFHQzs7O0lBRkMsd0JBQVk7O0lBQ1osMEJBQVk7O0FBR2QsTUFBTSxPQUFPLE1BQU07SUFBbkI7O1FBRVksYUFBUSxHQUEyQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RELGtCQUFhLEdBQTJCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLGNBQVMsR0FBMkIsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUQsZ0JBQVcsR0FBMkIsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUQsWUFBTyxHQUEyQixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxZQUFPLEdBQTJCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckQsV0FBTSxHQUEyQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BELFlBQU8sR0FBMkIsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsYUFBUSxHQUEyQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RELG9CQUFlLEdBQTJCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xFLG1CQUFjLEdBQTJCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUQsZ0JBQVcsR0FBMkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RCxpQkFBWSxHQUEyQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFELHNCQUFpQixHQUEyQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzNFLENBQUM7Ozt1QkFkRSxNQUFNOzRCQUNOLE1BQU07d0JBQ04sTUFBTTswQkFDTixNQUFNO3NCQUNOLE1BQU07c0JBQ04sTUFBTTtxQkFDTixNQUFNO3NCQUNOLE1BQU07dUJBQ04sTUFBTTs4QkFDTixNQUFNOzZCQUNOLE1BQU07MEJBQ04sTUFBTTsyQkFDTixNQUFNO2dDQUNOLE1BQU07Ozs7SUFiUCwwQkFBZ0U7O0lBQ2hFLCtCQUEwRTs7SUFDMUUsMkJBQXNFOztJQUN0RSw2QkFBd0U7O0lBQ3hFLHlCQUFvRTs7SUFDcEUseUJBQStEOztJQUMvRCx3QkFBOEQ7O0lBQzlELHlCQUFvRTs7SUFDcEUsMEJBQWdFOztJQUNoRSxpQ0FBNEU7O0lBQzVFLGdDQUFzRTs7SUFDdEUsNkJBQW1FOztJQUNuRSw4QkFBb0U7O0lBQ3BFLG1DQUF5RTs7O0FBSTNFLE1BQU0sT0FBTyxXQUFXLEdBQXFCO0lBQzNDLFVBQVU7SUFDVixlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7SUFDYixTQUFTO0lBQ1QsU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7Q0FDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge091dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRPYmoge1xyXG4gIGFyZ3M6IGFueVtdO1xyXG4gIGVkaXRvcjogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRzIHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1vdXRwdXQtb24tcHJlZml4XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkJlZm9yZUVudGVyOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo+ID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XHJcbiAgQE91dHB1dCgpIG9uS2V5ZG93bjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xyXG4gIEBPdXRwdXQoKSBvbk1vdXNlZG93bjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xyXG4gIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo+ID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XHJcbiAgQE91dHB1dCgpIG9uRm9jdXM6IEV2ZW50RW1pdHRlcjxFdmVudE9iaj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQmx1cjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25QYXN0ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xyXG4gIEBPdXRwdXQoKSBvblJlc2l6ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25CZWZvcmVDb21tYW5kOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo+ID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XHJcbiAgQE91dHB1dCgpIG9uQWZ0ZXJDb21tYW5kOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkFmdGVyRXhlYzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25BZnRlclBhc3RlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZVNlbGVjdGlvbjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZEV2ZW50czogKGtleW9mIEV2ZW50cylbXSA9IFtcclxuICAnb25DaGFuZ2UnLFxyXG4gICdvbkJlZm9yZUVudGVyJyxcclxuICAnb25LZXlkb3duJyxcclxuICAnb25Nb3VzZWRvd24nLFxyXG4gICdvbkNsaWNrJyxcclxuICAnb25Gb2N1cycsXHJcbiAgJ29uQmx1cicsXHJcbiAgJ29uUGFzdGUnLFxyXG4gICdvblJlc2l6ZScsXHJcbiAgJ29uQmVmb3JlQ29tbWFuZCcsXHJcbiAgJ29uQWZ0ZXJDb21tYW5kJyxcclxuICAnb25BZnRlckV4ZWMnLFxyXG4gICdvbkFmdGVyUGFzdGUnLFxyXG4gICdvbkNoYW5nZVNlbGVjdGlvbicsXHJcbl07XHJcbiJdfQ==