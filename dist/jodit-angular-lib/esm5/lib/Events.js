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
var Events = /** @class */ (function () {
    function Events() {
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
    return Events;
}());
export { Events };
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
export var validEvents = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vam9kaXQtYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9FdmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUVuRCw4QkFHQzs7O0lBRkMsd0JBQVk7O0lBQ1osMEJBQVk7O0FBR2Q7SUFBQTs7UUFFWSxhQUFRLEdBQTJCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEQsa0JBQWEsR0FBMkIsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEUsY0FBUyxHQUEyQixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RCxnQkFBVyxHQUEyQixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RCxZQUFPLEdBQTJCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELFlBQU8sR0FBMkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRCxXQUFNLEdBQTJCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEQsWUFBTyxHQUEyQixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxhQUFRLEdBQTJCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEQsb0JBQWUsR0FBMkIsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEUsbUJBQWMsR0FBMkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1RCxnQkFBVyxHQUEyQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pELGlCQUFZLEdBQTJCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUQsc0JBQWlCLEdBQTJCLElBQUksWUFBWSxFQUFFLENBQUM7SUFDM0UsQ0FBQzs7MkJBZEUsTUFBTTtnQ0FDTixNQUFNOzRCQUNOLE1BQU07OEJBQ04sTUFBTTswQkFDTixNQUFNOzBCQUNOLE1BQU07eUJBQ04sTUFBTTswQkFDTixNQUFNOzJCQUNOLE1BQU07a0NBQ04sTUFBTTtpQ0FDTixNQUFNOzhCQUNOLE1BQU07K0JBQ04sTUFBTTtvQ0FDTixNQUFNOztJQUNULGFBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWhCWSxNQUFNOzs7SUFFakIsMEJBQWdFOztJQUNoRSwrQkFBMEU7O0lBQzFFLDJCQUFzRTs7SUFDdEUsNkJBQXdFOztJQUN4RSx5QkFBb0U7O0lBQ3BFLHlCQUErRDs7SUFDL0Qsd0JBQThEOztJQUM5RCx5QkFBb0U7O0lBQ3BFLDBCQUFnRTs7SUFDaEUsaUNBQTRFOztJQUM1RSxnQ0FBc0U7O0lBQ3RFLDZCQUFtRTs7SUFDbkUsOEJBQW9FOztJQUNwRSxtQ0FBeUU7OztBQUkzRSxNQUFNLEtBQU8sV0FBVyxHQUFxQjtJQUMzQyxVQUFVO0lBQ1YsZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0lBQ2IsU0FBUztJQUNULFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0NBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50T2JqIHtcclxuICBhcmdzOiBhbnlbXTtcclxuICBlZGl0b3I6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50cyB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGU6bm8tb3V0cHV0LW9uLXByZWZpeFxyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25CZWZvcmVFbnRlcjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xyXG4gIEBPdXRwdXQoKSBvbktleWRvd246IEV2ZW50RW1pdHRlcjxFdmVudE9iaj4gPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcclxuICBAT3V0cHV0KCkgb25Nb3VzZWRvd246IEV2ZW50RW1pdHRlcjxFdmVudE9iaj4gPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcclxuICBAT3V0cHV0KCkgb25DbGljazogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xyXG4gIEBPdXRwdXQoKSBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxFdmVudE9iaj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uUGFzdGU6IEV2ZW50RW1pdHRlcjxFdmVudE9iaj4gPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcclxuICBAT3V0cHV0KCkgb25SZXNpemU6IEV2ZW50RW1pdHRlcjxFdmVudE9iaj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQmVmb3JlQ29tbWFuZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xyXG4gIEBPdXRwdXQoKSBvbkFmdGVyQ29tbWFuZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25BZnRlckV4ZWM6IEV2ZW50RW1pdHRlcjxFdmVudE9iaj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQWZ0ZXJQYXN0ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25DaGFuZ2VTZWxlY3Rpb246IEV2ZW50RW1pdHRlcjxFdmVudE9iaj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRFdmVudHM6IChrZXlvZiBFdmVudHMpW10gPSBbXHJcbiAgJ29uQ2hhbmdlJyxcclxuICAnb25CZWZvcmVFbnRlcicsXHJcbiAgJ29uS2V5ZG93bicsXHJcbiAgJ29uTW91c2Vkb3duJyxcclxuICAnb25DbGljaycsXHJcbiAgJ29uRm9jdXMnLFxyXG4gICdvbkJsdXInLFxyXG4gICdvblBhc3RlJyxcclxuICAnb25SZXNpemUnLFxyXG4gICdvbkJlZm9yZUNvbW1hbmQnLFxyXG4gICdvbkFmdGVyQ29tbWFuZCcsXHJcbiAgJ29uQWZ0ZXJFeGVjJyxcclxuICAnb25BZnRlclBhc3RlJyxcclxuICAnb25DaGFuZ2VTZWxlY3Rpb24nLFxyXG5dO1xyXG4iXX0=