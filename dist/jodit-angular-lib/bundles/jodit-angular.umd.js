(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('jodit-angular', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory(global['jodit-angular'] = {}, global.ng.core, global.ng.forms, global.ng.common));
}(this, (function (exports, core, forms, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/Events.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function EventObj() { }
    if (false) {
        /** @type {?} */
        EventObj.prototype.args;
        /** @type {?} */
        EventObj.prototype.editor;
    }
    var Events = /** @class */ (function () {
        function Events() {
            // tslint:disable:no-output-on-prefix
            this.onChange = new core.EventEmitter();
            this.onBeforeEnter = new core.EventEmitter(false);
            this.onKeydown = new core.EventEmitter(false);
            this.onMousedown = new core.EventEmitter(false);
            this.onClick = new core.EventEmitter(false);
            this.onFocus = new core.EventEmitter();
            this.onBlur = new core.EventEmitter();
            this.onPaste = new core.EventEmitter(false);
            this.onResize = new core.EventEmitter();
            this.onBeforeCommand = new core.EventEmitter(false);
            this.onAfterCommand = new core.EventEmitter();
            this.onAfterExec = new core.EventEmitter();
            this.onAfterPaste = new core.EventEmitter();
            this.onChangeSelection = new core.EventEmitter();
        }
        Events.propDecorators = {
            onChange: [{ type: core.Output }],
            onBeforeEnter: [{ type: core.Output }],
            onKeydown: [{ type: core.Output }],
            onMousedown: [{ type: core.Output }],
            onClick: [{ type: core.Output }],
            onFocus: [{ type: core.Output }],
            onBlur: [{ type: core.Output }],
            onPaste: [{ type: core.Output }],
            onResize: [{ type: core.Output }],
            onBeforeCommand: [{ type: core.Output }],
            onAfterCommand: [{ type: core.Output }],
            onAfterExec: [{ type: core.Output }],
            onAfterPaste: [{ type: core.Output }],
            onChangeSelection: [{ type: core.Output }]
        };
        return Events;
    }());
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
    var validEvents = [
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

    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    /** @type {?} */
    var EditorModule = require('jodit');
    /** @type {?} */
    var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef((/**
         * @return {?}
         */
        function () { return JoditAngularComponent; })),
        multi: true
    };
    var JoditAngularComponent = /** @class */ (function (_super) {
        __extends(JoditAngularComponent, _super);
        function JoditAngularComponent(elementRef, ngZone) {
            var _this = _super.call(this) || this;
            _this.elementRef = elementRef;
            _this.ngZone = ngZone;
            _this._config = {};
            _this.tagName = 'textarea';
            _this.elementRef = elementRef;
            _this.ngZone = ngZone;
            return _this;
        }
        Object.defineProperty(JoditAngularComponent.prototype, "config", {
            get: /**
             * @return {?}
             */
            function () {
                return this._config;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                this._config = v;
                if (this.element) {
                    this.resetEditor();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        JoditAngularComponent.prototype.createElement = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var tagName = typeof this.tagName === 'string' ? this.tagName : 'textarea';
            this.element = document.createElement(tagName);
            if (this.element) {
                this.element.id = this.id;
                this.elementRef.nativeElement.appendChild(this.element);
            }
        };
        Object.defineProperty(JoditAngularComponent.prototype, "value", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.editor) {
                    return this.editor.getEditorValue();
                }
                else {
                    return '';
                }
            },
            set: /**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                if (this.editor) {
                    this.editor.setEditorValue(v || '');
                }
                else {
                    this.defaultValue = v;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        JoditAngularComponent.prototype.resetEditor = /**
         * @return {?}
         */
        function () {
            this.editor.destruct();
            this.createEditor();
        };
        /**
         * @return {?}
         */
        JoditAngularComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            if (!this.element) {
                this.createElement();
                this.createEditor();
            }
        };
        /**
         * @return {?}
         */
        JoditAngularComponent.prototype.createEditor = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Create instance outside Angular scope
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.editor = new EditorModule.Jodit(_this.element, _this.config);
            }));
            if (this.defaultValue) {
                this.editor.value = this.defaultValue;
            }
            this.editor.events
                .on('change', (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (typeof _this.onChangeCallback === 'function') {
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () { return _this.onChangeCallback(value); }));
                }
            }))
                .on('blur', (/**
             * @return {?}
             */
            function () {
                if (typeof _this.onTouchedCallback === 'function') {
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () { return _this.onTouchedCallback(); }));
                }
            }));
            validEvents.forEach((/**
             * @param {?} eventName
             * @return {?}
             */
            function (eventName) {
                /** @type {?} */
                var eventEmitter = _this[eventName];
                if (eventEmitter.observers.length > 0) {
                    /** @type {?} */
                    var eventNameInJodit = eventName.substring(2);
                    eventNameInJodit = eventNameInJodit.substr(0, 1).toLowerCase() + eventNameInJodit.substring(1);
                    // tslint:disable-next-line:max-line-length
                    _this.editor.events.on(eventNameInJodit, _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () { return (/**
                     * @param {...?} args
                     * @return {?}
                     */
                    function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return eventEmitter.emit({
                            args: args,
                            editor: _this.editor
                        });
                    }); })));
                }
            }));
        };
        /**
         * @return {?}
         */
        JoditAngularComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.editor) {
                this.editor.destruct();
            }
        };
        /**
         * @param {?} v
         * @return {?}
         */
        JoditAngularComponent.prototype.writeValue = /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.value = v;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        JoditAngularComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChangeCallback = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        JoditAngularComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouchedCallback = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        JoditAngularComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.editor.setReadOnly(isDisabled);
        };
        JoditAngularComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jodit-editor',
                        template: "\n        <ng-template></ng-template>",
                        encapsulation: core.ViewEncapsulation.None,
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        styles: ["/*!\n jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser\n Author: Chupurnov <chupurnov@gmail.com> (https://xdsoft.net/)\n Version: v3.3.24\n Url: https://xdsoft.net/jodit/\n License(s): MIT\n*/.jodit_wysiwyg{outline:0}.jodit_wysiwyg ::-moz-selection,.jodit_wysiwyg::-moz-selection{background:#b5d6fd;color:#000}.jodit_wysiwyg ::selection,.jodit_wysiwyg::selection{background:#b5d6fd;color:#000}.jodit_container:not(.jodit_inline) .jodit_wysiwyg{margin:0;padding:10px;outline:0;overflow-x:auto;position:relative}.jodit_container:not(.jodit_inline) .jodit_wysiwyg img{position:relative;max-width:100%}.jodit_container:not(.jodit_inline) .jodit_wysiwyg p,.jodit_container:not(.jodit_inline) .jodit_wysiwyg pre{margin:0 0 10px}.jodit_container:not(.jodit_inline) .jodit_wysiwyg h1,.jodit_container:not(.jodit_inline) .jodit_wysiwyg h2,.jodit_container:not(.jodit_inline) .jodit_wysiwyg h3,.jodit_container:not(.jodit_inline) .jodit_wysiwyg h4,.jodit_container:not(.jodit_inline) .jodit_wysiwyg h5{margin-top:0}.jodit_container:not(.jodit_inline) .jodit_wysiwyg blockquote{border-left:2px solid #222;margin-left:0;padding-left:5px;color:#222}.jodit_container:not(.jodit_inline) .jodit_wysiwyg jodit-media{position:relative}.jodit_container:not(.jodit_inline) .jodit_wysiwyg jodit-media *{position:relative;z-index:0}.jodit_container:not(.jodit_inline) .jodit_wysiwyg jodit-media:before{z-index:1;content:\"\";position:absolute;top:0;left:0;right:0;bottom:0}.jodit_form{font-family:Helvetica,sans-serif,Arial;font-size:14px;color:#000}.jodit_form.jodit_error{border-color:#f7d1d1;box-shadow:inset 0 0 3px 0 hsla(0,0%,74.1%,.3)}@media (max-width:768px){.jodit_form{min-width:150px}}.jodit_form button{height:36px;line-height:1;color:#000;padding:10px;cursor:pointer;text-decoration:none;border:none;background:#d6d6d6;font-size:16px;outline:0;transition:background .2s;margin-top:10px;margin-bottom:10px}.jodit_form button:hover{background-color:#ecebe9;color:#000}.jodit_form button:active{background:#ecebe9;color:#000}.jodit_form label{margin-top:10px;text-align:left;white-space:nowrap;display:flex;align-items:center}.jodit_form .jodit_form_center{justify-content:center}.jodit_input,.jodit_select,.jodit_textarea{font-family:Helvetica,sans-serif,Arial;font-size:14px;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;height:32px;border-radius:0;outline:0;line-height:100%;border:1px solid #ddd;padding:5px 10px;background-color:#fff}.jodit_input[disabled],.jodit_select[disabled],.jodit_textarea[disabled]{background-color:#f0f0f0;color:#ddd}.jodit_input:focus{border-color:#66afe9;outline:0}.jodit_checkbox{z-index:2;border:0;cursor:pointer;height:16px;padding:0;margin-right:4px;width:16px;position:relative;outline:0}.jodit_checkbox:checked:after{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M27 4L12 19l-7-7-5 5 12 12L32 9z' fill='%23FFF'/%3E%3C/svg%3E\") 50% no-repeat #b5b5b5;border-color:#b5b5b5}.jodit_select{padding-right:20px;background-image:url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0ye2ZpbGw6IzQ0NH08L3N0eWxlPjwvZGVmcz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDQuOTV2MTBIMHoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xLjQxIDQuNjdsMS4wNy0xLjQ5IDEuMDYgMS40OUgxLjQxek0zLjU0IDUuMzNMMi40OCA2LjgyIDEuNDEgNS4zM2gyLjEzeiIvPjwvc3ZnPg==);background-repeat:no-repeat;background-position:98% 50%}.jodit_textarea{height:auto;min-width:180px}.jodit_form_group{display:flex;flex-direction:column;margin-bottom:10px;min-width:180px}.jodit_button{position:relative;display:inline-flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:auto;padding:0 10px;height:40px;line-height:1;margin:0;background-color:hsla(0,0%,88.2%,.99);cursor:pointer;border:0;border-radius:.25rem;text-decoration:none}.jodit_button svg+span{margin-left:5px}.jodit_button:active,.jodit_button:focus{outline:0}.jodit_button.disabled{opacity:.7}.jodit_buttons{margin-bottom:10px;display:flex;flex-wrap:nowrap;justify-content:space-between}.jodit_button .jodit_icon,.jodit_button svg,.jodit_dialog_header .jodit_icon,.jodit_dialog_header svg{width:16px;height:16px;display:inline-block;vertical-align:middle}.jodit_button_group{display:flex}.jodit_button_group input{display:none}.jodit_button_group button{display:flex;flex:1;justify-content:center;text-align:center}.jodit_button_group button+button{margin-left:-1px}.jodit_button_group button:first-child,.jodit_button_group input:first-child+button{border-right:0;border-top-right-radius:0;border-bottom-right-radius:0}.jodit_button_group button:last-child,.jodit_button_group input:last-child+button{border-left:0;border-top-left-radius:0;border-bottom-left-radius:0}.jodit_button_group input[type=checkbox]:checked+button,.jodit_button_group input[type=checkbox]:not(:checked)+button+button{background-image:none;box-shadow:inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05)}.jodit_context_menu{font-family:Helvetica,sans-serif,Arial;font-size:14px;position:absolute;z-index:2222224;display:none;min-width:150px;background:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.24)}.jodit_context_menu a{display:flex;align-items:center;height:38px;text-decoration:none!important;border-bottom:1px solid hsla(0,0%,80%,.24);color:#727272}.jodit_context_menu a svg{display:block;width:18px;height:38px;margin:0 10px;fill:#727272}.jodit_context_menu a span{display:flex;align-items:center;padding:10px;height:38px;border-left:1px solid hsla(0,0%,80%,.24);box-sizing:border-box}.jodit_context_menu a:hover{background-color:#e3e3e3;color:#000}.jodit_context_menu a:hover .jodit_icon{fill:#000}.jodit_context_menu a:last-child{border:0}.jodit_context_menu-show{display:block}.jodit_dialog_box{font-family:Helvetica,sans-serif,Arial;font-size:14px;box-sizing:border-box;position:absolute;display:none;width:0;height:0;border:0;will-change:left,top,width,height}.jodit_dialog_box.jodit_dialog_box-moved{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jodit_dialog_box *{box-sizing:border-box}.jodit_dialog_box .jodit_elfinder,.jodit_dialog_box .jodit_elfinder *{box-sizing:initial}.jodit_dialog_box .jodit_dialog_overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:2222222;text-align:center;white-space:nowrap;overflow:auto;display:none;background-color:rgba(0,0,0,.5)}.jodit_dialog_box.active,.jodit_dialog_box.jodit_modal .jodit_dialog_overlay{display:block}.jodit_dialog_box .jodit_dialog{z-index:2222223;display:flex;flex-flow:column nowrap;white-space:normal;text-align:left;position:fixed;left:0;top:0;background-color:#fff;box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);min-width:200px;min-height:100px;max-height:100%}.jodit_dialog_box .jodit_dialog .jodit_prompt{max-width:300px;min-width:200px;padding:10px;word-break:break-all}.jodit_dialog_box .jodit_dialog .jodit_prompt label{margin-bottom:5px;display:block}.jodit_dialog_box .jodit_dialog .jodit_alert{max-width:300px;min-width:200px;padding:10px;word-break:break-all}.jodit_dialog_box .jodit_dialog .jodit_dialog_header{display:flex;justify-content:space-between;text-align:left;cursor:move;height:48px;overflow:hidden;color:#222;border-bottom:1px solid #ddd}.jodit_dialog_box .jodit_dialog .jodit_dialog_header .jodit_dialog_header-title,.jodit_dialog_box .jodit_dialog .jodit_dialog_header .jodit_dialog_header-toolbar{display:flex;align-items:center;flex-shrink:3;font-size:18px;margin:0;font-weight:400;line-height:48px;vertical-align:top;padding:0 10px}@media (max-width:480px){.jodit_dialog_box .jodit_dialog{max-width:100%;width:100%!important;height:100%!important;top:0!important;left:0!important}.jodit_dialog_box .jodit_dialog .jodit_dialog_header .jodit_dialog_header-title,.jodit_dialog_box .jodit_dialog .jodit_dialog_header .jodit_dialog_header-toolbar{padding-left:0}}.jodit_dialog_box .jodit_dialog .jodit_dialog_header .jodit_button{margin-left:10px}.jodit_dialog_box .jodit_dialog .jodit_dialog_header .jodit_dialog_header-button{color:#222;font-size:28px;transition:background-color .2s;flex-basis:48px;height:48px;line-height:48px;text-decoration:none;text-align:center}.jodit_dialog_box .jodit_dialog .jodit_dialog_header .jodit_dialog_header-button:hover{background-color:#ecebe9}.jodit_dialog_box .jodit_dialog .jodit_dialog_header .jodit_toolbar{background:0 0;border:0;box-shadow:none}.jodit_dialog_box .jodit_dialog .jodit_dialog_header .jodit_toolbar>li.jodit_toolbar_btn .jodit_input{padding-left:10px;width:auto}.jodit_dialog_box .jodit_dialog .jodit_dialog_content{flex:1 0;min-height:100px;overflow:auto}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group{margin-bottom:10px;padding:0 10px}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group:first-child{margin-top:10px}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group .jodit_input_group{display:table;border-collapse:separate;width:100%}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group .jodit_input_group>*{vertical-align:middle;display:table-cell;height:34px}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group .jodit_input_group>input{margin:0!important}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group .jodit_input_group>input:not([class*=col-]){width:100%}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group .jodit_input_group-buttons{width:1%;font-size:0;white-space:nowrap;vertical-align:middle}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group .jodit_input_group-buttons>.jodit_button{border:1px solid #ddd;margin-left:-1px;height:34px;line-height:34px;border-radius:0}.jodit_dialog_box .jodit_dialog .jodit_dialog_footer{padding:10px;display:none}.jodit_dialog_box .jodit_dialog.with_footer .jodit_dialog_footer{display:flex;justify-content:space-between;flex-wrap:nowrap}.jodit_dialog_box .jodit_dialog.with_footer .jodit_dialog_footer .jodit_button{margin-right:10px}.jodit_dialog_box .jodit_dialog.with_footer .jodit_dialog_footer .jodit_button:last-child{margin-right:0}.jodit_dialog_box .jodit_dialog .jodit_dialog_resizer{position:absolute;bottom:0;right:0;cursor:se-resize;width:7px;height:7px;display:inline-block;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeNpilJGRYcACIoB4ORMuCSCOZMIlga4TRQJZJ4YETCdWCSBmZMIlATIOIMAAEyAPt4RnNx0AAAAASUVORK5CYII=)}.jodit_dialog_box .jodit_dialog .jodit_dialog_resizer:hover{border-color:rgba(0,0,0,.6)}.jodit_dialog_box.jodit_fullsize .jodit_dialog{top:0!important;bottom:0!important;left:0!important;right:0!important;width:100%!important;height:100%!important}.jodit_dialog_box.jodit_fullsize .jodit_dialog .jodit_dialog_resizer{display:none}@media (max-width:768px){.jodit_dialog_header .jodit_input,.jodit_dialog_header .jodit_toolbar_btn-filter,.jodit_dialog_header .jodit_toolbar_btn-separator,.jodit_dialog_header .jodit_toolbar_btn-sort,.jodit_dialog_header_fullsize,.jodit_dialog_header_title{display:none!important}}.jodit_toolbar_list>.jodit_toolbar{max-height:400px;overflow:auto;border-bottom-width:1px;padding:0;margin:auto;text-align:left;box-sizing:border-box;transition:max-height .2s;margin-top:0!important;list-style-type:none;font-size:16px;z-index:10000;position:absolute;left:0;top:100%}.jodit_toolbar_list>.jodit_toolbar,.jodit_toolbar_list>.jodit_toolbar .jodit_toolbar{background:#f9f9f9;flex-direction:column;flex-wrap:nowrap}.jodit_toolbar_list>.jodit_toolbar blockquote,.jodit_toolbar_list>.jodit_toolbar h1,.jodit_toolbar_list>.jodit_toolbar h2,.jodit_toolbar_list>.jodit_toolbar h3,.jodit_toolbar_list>.jodit_toolbar h4,.jodit_toolbar_list>.jodit_toolbar h5,.jodit_toolbar_list>.jodit_toolbar p,.jodit_toolbar_list>.jodit_toolbar pre{font-family:Helvetica,sans-serif,Arial;margin:0;padding:0;font-weight:400}.jodit_toolbar_list>.jodit_toolbar h5{font-size:.8em;line-height:1.4}.jodit_toolbar_list>.jodit_toolbar h3{font-size:1.31em;line-height:1.4}.jodit_toolbar_list>.jodit_toolbar h4,.jodit_toolbar_list>.jodit_toolbar p{font-size:1em;line-height:1.5em}.jodit_toolbar_list>.jodit_toolbar h2{font-size:1.74em;line-height:1.4}.jodit_toolbar_list>.jodit_toolbar h1{font-size:2.17em;line-height:1.4}.jodit_toolbar_list>.jodit_toolbar blockquote,.jodit_toolbar_list>.jodit_toolbar pre{font-family:monospace}.jodit_toolbar_list>.jodit_toolbar li.jodit_toolbar_btn{display:block;cursor:pointer;white-space:nowrap;color:inherit;text-decoration:none;width:100%;height:auto;box-sizing:border-box;text-align:left}.jodit_toolbar_list>.jodit_toolbar li.jodit_toolbar_btn>a{background-image:none;padding:7px 24px;cursor:pointer;line-height:100%;width:auto;height:auto;display:block}.jodit_toolbar_list>.jodit_toolbar li.jodit_toolbar_btn>a>span{display:inline-block}.jodit_toolbar_list>.jodit_toolbar li.jodit_toolbar_btn>a:hover{background-color:#dde4ef}.jodit_toolbar_list>.jodit_toolbar li.jodit_toolbar_btn>a:after{display:none}.jodit_toolbar[dir=rtl] .jodit_toolbar_list>.jodit_toolbar,.jodit_toolbar[dir=rtl] .jodit_toolbar_list>.jodit_toolbar li.jodit_toolbar_btn{text-align:right}.jodit_filebrowser{font-family:Helvetica,sans-serif,Arial;height:100%;display:flex}.jodit_filebrowser_no_files{padding:10px}@media (max-width:480px){.jodit_dialog_box .jodit_dialog .jodit_dialog_resizer{display:none}.jodit_filebrowser{flex-direction:column;flex-flow:column-reverse}}.jodit_filebrowser_loader{height:100%;width:100%;position:absolute;top:0;left:0}.jodit_filebrowser_loader i{position:absolute;top:50%;left:50%;margin-top:-24px;margin-left:-24px;font-style:normal;opacity:.7}.jodit_filebrowser_status{position:absolute;font-size:12px;padding:6px;text-align:right;border-top:1px solid;left:0;right:0;bottom:0;background-color:#4a4a4a;visibility:hidden;opacity:0;transition:opacity .3s linear;color:#b38888;word-break:break-all}.jodit_filebrowser_status.success{color:#c5c5c5}.jodit_filebrowser_status.active{visibility:visible;opacity:1}.jodit_filebrowser_files,.jodit_filebrowser_tree{display:none;vertical-align:top;height:100%;position:relative}.jodit_filebrowser_files .jodit_button,.jodit_filebrowser_tree .jodit_button{border-radius:0}.jodit_filebrowser_files.active,.jodit_filebrowser_tree.active{display:flex}.jodit_filebrowser_files::-webkit-scrollbar,.jodit_filebrowser_tree::-webkit-scrollbar{width:5px}.jodit_filebrowser_files::-webkit-scrollbar-track,.jodit_filebrowser_tree::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.jodit_filebrowser_files::-webkit-scrollbar-thumb,.jodit_filebrowser_tree::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:#708090 solid 1px}.jodit_filebrowser_tree.active{flex-direction:column;width:31%;min-width:200px;max-width:290px;z-index:2;background-color:#3f3f3f;overflow-y:auto}@media (max-width:480px){.jodit_filebrowser_tree.active{max-width:100%;width:auto;height:100px}}.jodit_filebrowser_tree.active::-webkit-scrollbar{width:5px}.jodit_filebrowser_tree.active::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.jodit_filebrowser_tree.active::-webkit-scrollbar-thumb{background-color:hsla(0,0%,49.8%,.5);outline:#708090 solid 1px}.jodit_filebrowser_tree.active .jodit_filebrowser_source_title{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;padding:10px;color:#969696;border-bottom:1px solid #484848;line-height:17px;min-height:38px;position:relative;word-break:break-all;background:#5a5a5a;font-size:16px}.jodit_filebrowser_tree.active .jodit_filebrowser_tree_item{display:flex;justify-content:space-between;align-items:center;min-height:38px;padding:5px 10px;text-decoration:none;color:#b1b1b1;transition:background-color .2s;border-bottom:1px solid #474747;position:relative;word-break:break-all}.jodit_filebrowser_tree.active .jodit_filebrowser_tree_item_title{flex:1}.jodit_filebrowser_tree.active .jodit_filebrowser_tree_item .jodit_icon_folder{margin-left:5px;width:16px;height:16px;display:flex;justify-content:center;align-items:center;opacity:.3}.jodit_filebrowser_tree.active .jodit_filebrowser_tree_item .jodit_icon_folder svg{width:12px;height:12px;stroke:#b1b1b1!important;fill:#b1b1b1!important}.jodit_filebrowser_tree.active .jodit_filebrowser_tree_item .jodit_icon_folder:hover{background:#696969}.jodit_filebrowser_tree.active .jodit_filebrowser_tree_item:hover{color:#222;background-color:#ecebe9}.jodit_filebrowser_tree.active .jodit_filebrowser_tree_item:hover i.jodit_icon_folder{opacity:.6}.jodit_filebrowser_files.active{width:100%;overflow-y:auto;padding:5px;flex-wrap:wrap;align-content:flex-start}.jodit_filebrowser_files.active .jodit_filebrowser_source_title{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:-10px -10px 0;display:block;padding:10px;line-height:17px;min-height:38px;position:relative;word-break:break-all;background:#5a5a5a;font-size:16px;color:#969696}.jodit_filebrowser_files.active a+.jodit_filebrowser_source_title{margin-top:10px}.jodit_filebrowser_files.active .jodit_filebrowser_files_item{width:150px;height:150px;display:flex;justify-content:center;align-items:center;text-align:center;border:1px solid #ddd;margin:5px;font-size:0;overflow:hidden;transition:border .1s linear,bottom .1s linear;position:relative}@media (max-width:480px){.jodit_filebrowser_files.active .jodit_filebrowser_files_item{width:calc(50% - 10px)}}.jodit_filebrowser_files.active .jodit_filebrowser_files_item img{max-width:100%}.jodit_filebrowser_files.active .jodit_filebrowser_files_item:hover{border-color:#433b5c}.jodit_filebrowser_files.active .jodit_filebrowser_files_item-active-true{border-color:#1e88e5;background-color:#b5b5b5}.jodit_filebrowser_files.active .jodit_filebrowser_files_item-info{position:absolute;right:0;left:0;bottom:0;white-space:normal;opacity:.85;overflow:visible;padding:.3em .6em;transition:opacity .4s;background-color:#e9e9e9;color:#333;text-shadow:#eee 0 1px 0;font-size:14px;line-height:16px;text-align:left}.jodit_filebrowser_files.active .jodit_filebrowser_files_item-info>span{display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:.75em}.jodit_filebrowser_files.active .jodit_filebrowser_files_item-info>span.jodit_filebrowser_files_item-info-filename{font-weight:700;font-size:.9em}.jodit_filebrowser_files.active .jodit_filebrowser_files_item-active-true .jodit_filebrowser_files_item-info{background-color:#b5b5b5;color:#fff;text-shadow:none}.jodit_filebrowser_files.active .jodit_filebrowser_files_item:hover:not(.jodit_filebrowser_files_item-active-true) .jodit_filebrowser_files_item-info{bottom:-100px}.jodit_filebrowser_files.active.jodit_filebrowser_files_view-list{scroll-behavior:smooth}.jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a{display:block;width:100%;height:26px;line-height:26px;margin:0;border-width:0 0 1px;text-align:left;white-space:nowrap}.jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a img{min-width:16px;max-width:16px;vertical-align:middle;display:inline-block;margin-left:4px}.jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a .jodit_filebrowser_files_item-info{padding:0;position:static;display:inline-block;width:calc(100% - 20px);margin-left:4px;background-color:transparent;height:100%;line-height:inherit;vertical-align:middle;font-size:0}.jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a .jodit_filebrowser_files_item-info>span{display:inline-block;height:100%;font-size:12px}.jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a .jodit_filebrowser_files_item-info>span.jodit_filebrowser_files_item-info-filename{width:50%}.jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a .jodit_filebrowser_files_item-info>span.jodit_filebrowser_files_item-info-filechanged,.jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a .jodit_filebrowser_files_item-info>span.jodit_filebrowser_files_item-info-filesize{width:25%}.jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a:hover{background-color:#433b5c}.jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a:hover .jodit_filebrowser_files_item-info{color:#fff;text-shadow:none}.jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a:before{height:100%;content:\"\";vertical-align:middle;display:inline-block}.jodit_draghover{background-color:#ecebe9}.jodit_dialog_box .jodit_dialog_header-title .jodit_upload_button{position:relative;width:220px;border:0;padding:25px 0;margin:10px 0;overflow:hidden}.jodit_dialog_box .jodit_dialog_header-title .jodit_upload_button input{cursor:pointer;position:absolute;right:0;top:0;bottom:0;margin:0 -10px 0 0;padding:0;opacity:0;font-size:400px}.jodit_dialog_box .jodit_dialog_header-title.jodit_filebrowser_title_box{display:flex;align-items:center;padding-left:10px}.jodit_filebrowser_preview{text-align:center;min-width:600px;max-width:1000px;min-height:700px;max-height:100%;position:relative;display:flex;justify-content:center;align-items:center}@media (max-width:768px){.jodit_filebrowser_preview{max-width:100%;max-height:100%;min-width:auto;min-height:auto;height:100%}}.jodit_filebrowser_preview_box{flex-grow:1;display:flex;justify-content:center;align-items:center}.jodit_filebrowser_preview_navigation{position:absolute;top:0;height:100%;left:0}.jodit_filebrowser_preview_navigation-next{left:auto;right:0}.jodit_filebrowser_preview_navigation svg{width:45px;height:45px;position:relative;top:50%;margin-top:-22px;transition:fill .3s linear;fill:#9e9ba7}.jodit_filebrowser_preview_navigation:hover svg{fill:#000}.jodit_filebrowser_preview img{max-width:100%;max-height:100%}.jodit_grid{display:flex;width:100%}.jodit_grid [class*=jodit_col-]{flex:1 1 auto}.jodit_grid .jodit_col-lg-5-5{width:100%}.jodit_grid .jodit_col-lg-4-5{width:80%}.jodit_grid .jodit_col-lg-3-5{width:60%}.jodit_grid .jodit_col-lg-2-5{width:40%}.jodit_grid .jodit_col-lg-1-5{width:20%}.jodit_grid .jodit_col-lg-4-4{width:100%}.jodit_grid .jodit_col-lg-3-4{width:75%}.jodit_grid .jodit_col-lg-2-4{width:50%}.jodit_grid .jodit_col-lg-1-4{width:25%}@-webkit-keyframes rotate{to{transform:rotate(1turn)}}@keyframes rotate{to{transform:rotate(1turn)}}.jodit_icon-loader{background:url(data:image/png;base64,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) 50%/100% 100% no-repeat;width:48px;height:48px;will-change:transform;-webkit-animation:2s ease-out infinite rotate;animation:2s ease-out infinite rotate}.jodit_icon,.jodit_icon-loader{display:inline-block;vertical-align:middle}.jodit_icon{font-style:normal;width:14px;height:14px;font-size:8px;fill:#222;transform-origin:0 0!important;overflow:visible;background:50%/contain no-repeat}.jodit_icon_close{stroke:#222}svg.jodit_icon{isolation:isolate;height:auto}.jodit_text_icon{font-size:14px}.jodit_toolbar_size-small .jodit_icon{min-width:12px;height:12px;line-height:12px}.jodit_toolbar_size-large .jodit_icon{min-width:16px;height:16px;line-height:16px}.jodit_image_editor{width:100%;height:100%;padding:10px;overflow:hidden}.jodit_image_editor>div,.jodit_image_editor>div>div{height:100%}@media (max-width:768px){.jodit_image_editor{height:auto}.jodit_image_editor>div,.jodit_image_editor>div>div{height:auto;min-height:200px}}.jodit_image_editor *{box-sizing:border-box}.jodit_image_editor .jodit_image_editor_slider-title{text-shadow:#f3f3f3 0 1px 0;color:#333;border-bottom:1px solid hsla(0,0%,62%,.31);background-color:#f9f9f9;padding:.8em 1em;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:700;line-height:1em}.jodit_image_editor .jodit_image_editor_slider-title svg{margin-right:10px;width:16px;display:inline-block;vertical-align:middle}.jodit_image_editor .jodit_image_editor_slider-content{display:none}.jodit_image_editor .jodit_image_editor_slider.active .jodit_image_editor_slider-title{background-color:#5d5d5d;color:#fff;text-shadow:#000 0 1px 0}.jodit_image_editor .jodit_image_editor_slider.active .jodit_image_editor_slider-title svg{fill:#fff}.jodit_image_editor .jodit_image_editor_slider.active .jodit_image_editor_slider-content{display:block}.jodit_image_editor_area{width:100%;background-color:#eee;background-image:linear-gradient(45deg,#ddd 25%,transparent 0,transparent 75%,#ddd 0,#ddd),linear-gradient(45deg,#ddd 25%,transparent 0,transparent 75%,#ddd 0,#ddd);background-size:30px 30px;background-position:0 0,15px 15px;height:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none}.jodit_image_editor_area.active{display:block}.jodit_image_editor_area .jodit_image_editor_box{overflow:hidden;position:relative;z-index:1;pointer-events:none;height:100%}.jodit_image_editor_area .jodit_image_editor_box img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;max-width:100%;max-height:100%}.jodit_image_editor_area .jodit_image_editor_croper,.jodit_image_editor_area .jodit_image_editor_resizer{z-index:2;width:100px;height:100px;position:absolute;box-shadow:0 0 11px #000;border:1px solid #fff;background-repeat:no-repeat;top:10px;left:20px;pointer-events:none}.jodit_image_editor_area .jodit_image_editor_croper i.jodit_bottomright,.jodit_image_editor_area .jodit_image_editor_resizer i.jodit_bottomright{position:absolute;display:inline-block;border:1px solid #383838;z-index:4;background-color:#8c7878;cursor:se-resize;border-radius:10px;height:20px;width:20px;right:-10px;bottom:-10px;box-shadow:0 0 11px #000;pointer-events:all}.jodit_image_editor_area .jodit_image_editor_croper i.jodit_bottomright:active,.jodit_image_editor_area .jodit_image_editor_resizer i.jodit_bottomright:active{border:1px solid #ff0}.jodit_image_editor_area.jodit_image_editor_area_crop{height:100%;background:#eee;text-align:center;line-height:100%;position:relative}.jodit_image_editor_area.jodit_image_editor_area_crop .jodit_image_editor_box{height:100%;overflow:visible;pointer-events:all;text-align:left;line-height:100%}.jodit_image_editor_area.jodit_image_editor_area_crop .jodit_image_editor_box img{max-width:100%;max-height:100%;width:100%;height:100%}.jodit_image_editor_area.jodit_image_editor_area_crop .jodit_image_editor_box:after{content:\"\";position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;background:hsla(0,0%,100%,.3);z-index:1}.jodit_image_editor_area.jodit_image_editor_area_crop .jodit_image_editor_box .jodit_image_editor_croper{pointer-events:all;cursor:move}.jodit_image_editor_area.jodit_image_editor_area_crop .jodit_image_editor_box .jodit_image_editor_croper i.jodit_sizes{font-size:12px;white-space:pre;position:absolute;bottom:-30px;left:100%;text-align:center;color:#fff;text-shadow:none;background:rgba(0,0,0,.2);border-radius:.4em;padding:9px 6px;display:block}.jodit_image_editor_area.jodit_image_editor_area_crop.active{display:flex;justify-content:center;align-items:center}.jodit_properties{font-family:Helvetica,sans-serif,Arial;font-size:14px}.jodit_properties svg{font-style:normal;display:inline-block;width:14px;height:14px;line-height:14px;font-size:8px;overflow:hidden;vertical-align:middle;fill:#222;transform-origin:0 0!important}.jodit_properties .jodit_properties_view_box{padding:10px}.jodit_properties .jodit_properties_view_box .jodit_properties_image_view{display:flex;align-items:center;justify-content:center;height:150px;padding:0;margin:0 0 10px;background-color:#f6f6f6}.jodit_properties .jodit_properties_view_box .jodit_properties_image_view img{max-width:100%;max-height:100%}.jodit_properties .jodit_properties_view_box .jodit_properties_image_sizes.jodit_form_group{flex-direction:row;align-items:center;padding:0!important;margin:0!important}.jodit_properties .jodit_properties_view_box .jodit_properties_image_sizes.jodit_form_group a{display:inline-block;cursor:pointer}.jodit_properties .jodit_properties_view_box .jodit_properties_image_sizes.jodit_form_group input[type=number]{display:inline-block!important;width:calc(50% - 8px)!important}.jodit_toolbar,.jodit_toolbar *{box-sizing:border-box}.jodit_toolbar{font-family:Helvetica,sans-serif,Arial;position:relative;left:0;top:0;display:flex;flex:0 0 auto;flex-shrink:0;flex-wrap:wrap;margin:0!important;padding:0!important;list-style:none!important;font-size:0;background:#f9f9f9;border:1px solid #ddd;min-height:16px!important}.jodit_toolbar+.jodit_toolbar_dummy{display:none}.jodit_toolbar.jodit_fly{position:absolute;left:0;right:0;z-index:30000;background:#fff}.jodit_toolbar>.jodit_toolbar_btn{margin:0!important;padding:0;list-style:none!important;outline:0;position:relative;text-align:center;cursor:pointer;transition:background-color .2s linear,opacity .1s linear}.jodit_toolbar>.jodit_toolbar_btn.jodit_disabled{background-color:transparent!important;opacity:.3;cursor:default}.jodit_toolbar>.jodit_toolbar_btn.jodit_disabled a{cursor:default}.jodit_toolbar>.jodit_toolbar_btn .jodit_toolbar_btn>a,.jodit_toolbar>.jodit_toolbar_btn>a{width:100%;height:100%;outline:0;text-decoration:none}.jodit_toolbar>.jodit_toolbar_btn .jodit_toolbar_btn>a:focus,.jodit_toolbar>.jodit_toolbar_btn>a:focus{outline:#ddd solid 1px}.jodit_toolbar>.jodit_toolbar_btn>a{line-height:100%}.jodit_toolbar>.jodit_toolbar_btn:not(.jodit_toolbar-input):hover{background-color:#dde4ef;outline:0}.jodit_toolbar>.jodit_toolbar_btn.jodit_active,.jodit_toolbar>.jodit_toolbar_btn:not(.jodit_toolbar-input):active{background-color:hsla(0,0%,86.7%,.4);outline:0}.jodit_toolbar>.jodit_toolbar_btn.jodit-btn-hidden{display:none!important}.jodit_toolbar>.jodit_toolbar_btn.jodit_with_dropdownlist .jodit_with_dropdownlist-trigger{display:inline-block;vertical-align:middle}.jodit_toolbar .jodit_toolbar_btn-separator{border-left:0;border-right:1px solid #e6e6e6;padding:0;margin:2px 5px 0!important;cursor:default}.jodit_toolbar .jodit_toolbar_btn-break{flex-basis:100%;width:0;border-top:1px solid #e6e6e6;height:0!important}.jodit_toolbar .jodit_toolbar_btn{min-width:32px;height:32px;line-height:32px}.jodit_toolbar .jodit_toolbar_btn.jodit_toolbar_btn-separator{height:28px;width:0;min-width:0}.jodit_toolbar .jodit_toolbar_btn.jodit_with_dropdownlist{padding:0 7px}.jodit_toolbar .jodit_toolbar_btn.jodit_with_dropdownlist .jodit_with_dropdownlist-trigger{width:8px;height:8px;margin-left:5.33333333px}.jodit_toolbar_btn>a{color:#000;text-decoration:none;display:flex;justify-content:center;align-items:center;background:50% no-repeat}.jodit_toolbar.jodit_text_icons>.jodit_toolbar_btn>a{line-height:1}.jodit_toolbar_size-small .jodit_toolbar{min-height:12px!important}.jodit_toolbar_size-small .jodit_toolbar .jodit_toolbar_btn{min-width:24px;height:24px;line-height:24px}.jodit_toolbar_size-small .jodit_toolbar .jodit_toolbar_btn.jodit_toolbar_btn-separator{height:20px;width:0;min-width:0}.jodit_toolbar_size-small .jodit_toolbar .jodit_toolbar_btn.jodit_with_dropdownlist{padding:0 5px}.jodit_toolbar_size-small .jodit_toolbar .jodit_toolbar_btn.jodit_with_dropdownlist .jodit_with_dropdownlist-trigger{width:6px;height:6px;margin-left:4px}.jodit_toolbar_size-large .jodit_toolbar{min-height:18px!important}.jodit_toolbar_size-large .jodit_toolbar .jodit_toolbar_btn{min-width:36px;height:36px;line-height:36px}.jodit_toolbar_size-large .jodit_toolbar .jodit_toolbar_btn.jodit_toolbar_btn-separator{height:32px;width:0;min-width:0}.jodit_toolbar_size-large .jodit_toolbar .jodit_toolbar_btn.jodit_with_dropdownlist{padding:0 8px}.jodit_toolbar_size-large .jodit_toolbar .jodit_toolbar_btn.jodit_with_dropdownlist .jodit_with_dropdownlist-trigger{width:9px;height:9px;margin-left:6px}.jodit_toolbar_popup{position:absolute;z-index:10;top:100%;left:0;margin-top:10px;padding-top:0;font-size:14px;line-height:14px!important;background:#fff;border:1px solid rgba(0,0,0,.2)}.jodit_toolbar_popup .jodit_toolbar{box-shadow:none;border-width:0;background-color:transparent}.jodit_toolbar_popup .jodit_toolbar .jodit_toolbar{background-color:#f9f9f9;box-shadow:0 4px 4px -2px rgba(0,0,0,.14);border:1px solid #ddd}.jodit_toolbar_popup>*{margin:10px}.jodit_toolbar_popup .jodit_popup_triangle{position:absolute;top:-5px;left:9px;z-index:6;padding:0;margin:0;width:8px;height:8px;display:inline-block;transform:rotate(45deg);background:#fff;border:solid rgba(0,0,0,.2);border-width:1px 0 0 1px}.jodit_toolbar_popup.jodit_right{left:auto;right:0}.jodit_toolbar_popup.jodit_right:before{left:auto;right:14px}.jodit_toolbar .jodit_toolbar_btn>svg{max-width:50%;vertical-align:middle}.jodit_container>.jodit_toolbar>li:first-child{margin-left:2px!important}.jodit_container[dir=rtl]>.jodit_toolbar>li:first-child{margin-left:0!important;margin-right:2px!important}.jodit_draganddrop_file_box,.jodit_uploadfile_button{position:relative;width:100%;border:1px dashed #ddd;padding:25px 0;margin:10px 0;text-align:center;overflow:hidden}.jodit_draganddrop_file_box:hover,.jodit_uploadfile_button:hover{background-color:#ecebe9}.jodit_draganddrop_file_box input,.jodit_uploadfile_button input{cursor:pointer;position:absolute;right:0;top:0;bottom:0;left:0;margin:0;padding:0;opacity:0;font-size:400px}.jodit_statusbar{font-family:Helvetica,sans-serif,Arial;font-size:11px;display:flex;justify-content:flex-start;border:1px solid #ddd;border-top:0;background-color:#f9f9f9;padding:0 5px}.jodit_statusbar:before{content:\"\";flex:auto;order:1}.jodit_statusbar .jodit_statusbar_item{line-height:1.57142857em;margin:0 10px 0 0;padding:0;order:0}.jodit_statusbar .jodit_statusbar_item.jodit_statusbar_item-right{margin:0 0 0 10px;order:2}.jodit_statusbar .jodit_statusbar_item li,.jodit_statusbar .jodit_statusbar_item ul{position:relative;margin:0;padding:0;list-style:none;display:flex;justify-content:center;align-items:center}.jodit_statusbar .jodit_statusbar_item li li,.jodit_statusbar .jodit_statusbar_item ul li{margin-right:5px}.jodit_statusbar .jodit_statusbar_item ul{justify-content:flex-start}.jodit_statusbar .jodit_statusbar_item a,.jodit_statusbar .jodit_statusbar_item span{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;vertical-align:baseline;text-align:left;white-space:nowrap;padding:2px 3px;line-height:10px;outline:0;border:0;color:#222}.jodit_statusbar .jodit_statusbar_item a span,.jodit_statusbar .jodit_statusbar_item span span{padding:0}.jodit_statusbar .jodit_statusbar_item svg{width:11px;height:11px;display:inline-block;vertical-align:top}.jodit_statusbar .jodit_statusbar_item a{text-decoration:none;cursor:default;border-radius:3px}.jodit_statusbar .jodit_statusbar_item a:hover{background-color:hsla(0,0%,88.2%,.99);text-decoration:none;color:#222}.jodit_disabled .jodit_statusbar{opacity:.4}.jodit_about{padding:20px}.jodit_about a{color:#459ce7;text-decoration:none}.jodit_about a:focus,.jodit_about a:hover{color:#23527c;text-decoration:underline;outline:0}.jodit_about div{margin-bottom:5px}.jodit_colorpicker{min-width:180px;text-align:left;margin:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jodit_colorpicker .jodit_colorpicker_group{margin-bottom:5px;white-space:normal}.jodit_colorpicker a{width:18px;height:18px;line-height:16px;display:inline-block;text-decoration:none;vertical-align:middle;text-align:center}.jodit_colorpicker a:before{content:\"\";display:inline-block;height:100%;vertical-align:middle;width:0}.jodit_colorpicker a svg{display:inline-block;vertical-align:middle;font-smoothing:antialiased;max-width:14px}.jodit_colorpicker a:hover{border-color:#000}.jodit_colorpicker a:active{background:#d6d6d6;color:#b5b5b5}.jodit_colorpicker .jodit_text_icon{width:auto;text-decoration:none;color:#000}.jodit_colorpicker span em{width:16px;height:16px;display:inline-block;margin-right:4px}.jodit_colorpicker span input{width:18px;height:18px;padding:0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.jodit_colorpicker span input[type=color]::-webkit-color-swatch-wrapper{padding:0}.jodit_colorpicker span input input[type=color]::-webkit-color-swatch{border:none}@-webkit-keyframes pulse{30%,to{opacity:.6}60%{opacity:0}}@keyframes pulse{30%,to{opacity:.6}60%{opacity:0}}.jodit_progressbar{position:absolute;top:0;left:0;height:2px;z-index:2147483647;border-radius:1px;opacity:.7}.jodit_progressbar div{position:relative;background:#b91f1f;height:2px;transition:width .5s ease-out,opacity .5s linear;will-change:width,opacity}.jodit_progressbar div:after,.jodit_progressbar div:before{-webkit-animation:2s ease-out infinite pulse;animation:2s ease-out infinite pulse;content:\"\";display:inline-block;position:absolute;top:0;height:2px;box-shadow:1px 0 6px 1px #b91f1f;border-radius:100%;opacity:.6}.jodit_progressbar div:before{width:180px;right:-80px;clip:rect(-6px,90px,14px,-6px)}.jodit_progressbar div:after{width:20px;right:0;clip:rect(-6px,22px,14px,10px)}.jodit_tabs{font-family:Helvetica,sans-serif,Arial;font-size:14px}.jodit_tabs .jodit_tabs_buttons{line-height:18px;margin-bottom:5px;margin-top:4px;display:flex}.jodit_tabs .jodit_tabs_buttons>a{display:flex;align-items:center;justify-content:center;padding:5px 20px;font-size:11px;font-weight:700;text-align:center;white-space:nowrap;height:29px;line-height:27px;text-decoration:none;position:relative;vertical-align:middle;transition:background .1s linear;text-overflow:ellipsis;overflow:hidden;box-shadow:none;background-color:#f5f5f5;color:#737373;border:1px solid rgba(0,0,0,.1);outline:0}.jodit_tabs .jodit_tabs_buttons>a+a{margin-left:-1px}@media (max-width:768px){.jodit_draganddrop_file_box{width:auto;max-width:100%;min-width:180px}.jodit_tabs .jodit_tabs_buttons{display:block}.jodit_tabs .jodit_tabs_buttons>a{width:100%!important;border-radius:0!important}.jodit_tabs .jodit_tabs_buttons>a+a{margin-left:0;margin-top:-1px}}.jodit_tabs .jodit_tabs_buttons>a i,.jodit_tabs .jodit_tabs_buttons>a svg{width:16px;height:16px;display:inline-block;vertical-align:sub;margin-right:5px;fill:#737373}.jodit_tabs .jodit_tabs_buttons>a:hover{border:1px solid #c6c6c6;color:#111;box-shadow:none;background-color:#f8f8f8;outline:0}.jodit_tabs .jodit_tabs_buttons>a:hover i,.jodit_tabs .jodit_tabs_buttons>a:hover svg{fill:#111}.jodit_tabs .jodit_tabs_buttons>a.active,.jodit_tabs .jodit_tabs_buttons>a:active{outline:0;background:#fff;border:1px solid #ccc;color:#333}.jodit_tabs .jodit_tabs_buttons>a.active i,.jodit_tabs .jodit_tabs_buttons>a.active svg,.jodit_tabs .jodit_tabs_buttons>a:active i,.jodit_tabs .jodit_tabs_buttons>a:active svg{fill:#333}.jodit_tabs .jodit_tabs_wrapper .jodit_tab{display:none}.jodit_tabs .jodit_tabs_wrapper .jodit_tab.active{display:block}.jodit_tabs .jodit_tabs_wrapper .jodit_tab .jodit_tab_empty{min-width:220px;min-height:100px}.jodit-add-new-line{z-index:1;position:fixed;height:1px;top:0;outline:0;display:block}.jodit-add-new-line,.jodit-add-new-line *{box-sizing:border-box}.jodit-add-new-line:after{content:\"\";background-color:#ddd;height:1px;display:block;width:calc(100% - 30px)}.jodit-add-new-line span{position:absolute;right:0;display:flex;justify-content:center;align-items:center;width:30px;height:20px;background:rgba(236,235,233,.3);border:1px solid #ddd;cursor:pointer}.jodit-add-new-line span:hover{background:#ecebe9}.jodit-add-new-line_after span{bottom:0}.jodit-add-new-line svg{width:16px;fill:#ddd}.jodit_source_mode .jodit-add-new-line{display:none!important}.jodit_error_box_for_messages{font-family:Helvetica,sans-serif,Arial;font-size:14px;position:absolute;right:0;bottom:0;width:0;height:0;overflow:visible;z-index:3}.jodit_error_box_for_messages>*{position:absolute;right:5px;bottom:0;display:block;transition:opacity .1s linear,bottom .3s linear;opacity:0;background:rgba(255,0,0,.29);color:#e02b2b;padding:2px 7px;border:1px solid rgba(226,117,117,.44);font-size:14px;white-space:pre}.jodit_error_box_for_messages>.active{opacity:1}.jodit_error_box_for_messages>.info{background:rgba(204,229,247,.71);color:#776565;border:1px solid}.jodit_error_box_for_messages>.success{background:rgba(77,236,112,.29);color:#5d5a5a;border:1px solid hsla(0,0%,58%,.44)}.jodit_fullsize_box{z-index:100000!important;position:static!important;overflow:visible!important}body.jodit_fullsize_box,html.jodit_fullsize_box{height:0!important;width:0!important;overflow:initial!important}html.jodit_fullsize_box{position:fixed!important}.jodit_fullsize{position:absolute;top:0;left:0;right:0;bottom:0;z-index:100000;max-width:none!important}.jodit_fullsize .toolbar{width:100%!important}.jodit_fullsize .jodit_area,.jodit_fullsize .jodit_editor{height:100%}.jodit_fullsize .jodit_workflow{height:calc(100% - 24px);overflow:auto}.jodit_fullsize.jodit_toolbar_size-small .jodit_workflow{height:calc(100% - 18px)}.jodit_fullsize.jodit_toolbar_size-large .jodit_workflow{height:calc(100% - 27px)}.jodit_placeholder{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;top:0;left:0;display:block;position:absolute;padding:10px;color:rgba(0,0,0,.35);z-index:1;pointer-events:none}.jodit_toolbar_popup-inline-container{z-index:1300;min-width:700px}.jodit_toolbar_popup-inline-target{position:absolute}.jodit_toolbar_popup-inline-target.jodit_toolbar_popup-inline-target-hidden{display:none}.jodit_toolbar_popup-inline{display:inline-block!important;position:relative!important}.jodit_toolbar_popup-inline>div{color:hsla(0,0%,88.2%,.99);background:padding-box #fff;box-shadow:none;font-family:Helvetica,sans-serif,Arial;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:100001!important;text-align:left;border:1px solid;display:inline-block;vertical-align:top}.jodit_toolbar_popup-inline .jodit_toolbar{z-index:7;border:0;display:block;white-space:nowrap}.jodit_toolbar_popup-inline .jodit_toolbar_btn{display:inline-flex}.jodit_toolbar_popup-inline .jodit_toolbar_btn-break{display:block;width:100%}.jodit_toolbar_popup-inline>div>.jodit_toolbar{box-shadow:none}.jodit_toolbar_popup-inline>.jodit_popup_triangle{position:absolute;padding:0;margin:0 0 0 -4px;width:8px;height:8px;top:-4px;display:inline-block;transform:rotate(45deg);background:#fff;border:solid;border-width:1px 0 0 1px;z-index:6}.jodit_toolbar_popup-inline.jodit_toolbar_popup-inline-top>.jodit_popup_triangle{top:auto;bottom:-4px;border-width:0 1px 1px 0}.jodit_toolbar_popup-inline .buttons{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);padding:0 2px;white-space:nowrap;line-height:0;border-bottom:0}[data-jodit_iframe_wrapper]{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative}[data-jodit_iframe_wrapper]:after{position:absolute;content:\"\";z-index:1;top:0;left:0;right:0;bottom:0;cursor:pointer;display:block;background:0 0}.jodit_resizer{width:100px;height:100px;position:absolute;border:1px solid rgba(3,14,82,.92);top:0;left:0;pointer-events:none;font-size:0}.jodit_resizer *{box-sizing:border-box}.jodit_resizer>span{left:50%;top:50%;height:24px;width:70px;max-width:100%;margin-left:-35px;margin-top:-12px;line-height:24px;font-size:12px;text-align:center;color:#fff;background-color:rgba(0,0,0,.35);opacity:0;transition:opacity .2s linear;overflow:visible}.jodit_resizer>i,.jodit_resizer>span{position:absolute;display:inline-block}.jodit_resizer>i{z-index:4;pointer-events:all;border:1px solid rgba(3,14,82,.92);background-color:hsla(0,0%,88.2%,.99);width:10px;height:10px}.jodit_resizer>i:hover{background-color:#f8f8f8}.jodit_resizer>i:first-child{left:-5px;top:-5px;cursor:nw-resize}.jodit_resizer>i:nth-child(2){right:-5px;top:-5px;cursor:ne-resize}.jodit_resizer>i:nth-child(3){right:-5px;bottom:-5px;cursor:se-resize}.jodit_resizer>i:nth-child(4){left:-5px;bottom:-5px;cursor:sw-resize}@media (max-width:768px){.jodit_resizer>i{width:20px;height:20px}.jodit_resizer>i:first-child{left:-10px;top:-10px;cursor:nw-resize}.jodit_resizer>i:nth-child(2){right:-10px;top:-10px;cursor:ne-resize}.jodit_resizer>i:nth-child(3){right:-10px;bottom:-10px;cursor:se-resize}.jodit_resizer>i:nth-child(4){left:-10px;bottom:-10px;cursor:sw-resize}}.jodit_container{min-height:100px}.jodit_container .jodit_workplace{display:flex;flex-direction:column;height:auto;min-height:50px}.jodit_editor_resize{position:relative}.jodit_editor_resize a{position:absolute;bottom:0;right:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;height:0;overflow:hidden;cursor:se-resize;border:7px dashed transparent}.jodit_source{display:none;position:relative;background-color:#323232;flex:auto;overflow:auto}.jodit_source,.jodit_source .jodit_source_mirror-fake{min-height:100%}.jodit_source *{font:12px Monaco,Menlo,Ubuntu Mono,Consolas,source-code-pro,monospace}.jodit_container.jodit_source_mode .jodit_wysiwyg,.jodit_container.jodit_source_mode .jodit_wysiwyg_iframe{display:none!important}.jodit_container.jodit_source_mode .jodit_source{display:block!important}.jodit_container.jodit_split_mode .jodit_workplace{flex-wrap:nowrap;flex-direction:row}.jodit_container.jodit_split_mode .jodit_source,.jodit_container.jodit_split_mode .jodit_wysiwyg,.jodit_container.jodit_split_mode .jodit_wysiwyg_iframe{width:50%;flex:1}.jodit_source_mirror{border:0;width:100%;height:100%;background:#323232;margin:0;resize:none;box-sizing:border-box;color:#f0f0f0;outline:0;font:12px/1.5 Monaco,Menlo,Ubuntu Mono,Consolas,source-code-pro,monospace;box-shadow:none;overflow:auto;z-index:2;padding:10px;white-space:pre-wrap;-moz-tab-size:2em;-o-tab-size:2em;tab-size:2em;min-height:100%}.jodit_source_mirror::-moz-selection{background:#bdbdbd}.jodit_source_mirror::selection{background:#bdbdbd}.jodit_table_resizer{cursor:col-resize;position:absolute;z-index:3;padding-left:5px;padding-right:5px;margin-left:-5px}.jodit_table_resizer:after{content:\"\";display:block;height:100%;width:0;border:0}.jodit_table_resizer-moved{background-color:#b5d6fd;z-index:2}.jodit_table_resizer-moved:after{border-right:1px solid #1e88e5}.jodit_wysiwyg table{width:100%;border:none;border-collapse:collapse;table-layout:fixed;empty-cells:show;max-width:100%}.jodit_wysiwyg table tr{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jodit_wysiwyg table tr td,.jodit_wysiwyg table tr th{border:1px solid #ddd;text-align:left;vertical-align:middle;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.jodit_wysiwyg table tr td[data-jodit-selected-cell],.jodit_wysiwyg table tr th[data-jodit-selected-cell]{border:1px double #1e88e5}.jodit_form_inserter .jodit_form-table-creator-box{display:flex}.jodit_form_inserter .jodit_form-table-creator-box .jodit_form-container{padding:0;margin:0;min-width:180px;font-size:0}.jodit_form_inserter .jodit_form-table-creator-box .jodit_form-container>div{width:18px;height:18px;box-sizing:border-box;display:inline-block;position:relative;vertical-align:top}.jodit_form_inserter .jodit_form-table-creator-box .jodit_form-container>div:after{content:\"\";position:absolute;top:0;left:0;display:inline-block;width:12px;height:12px;border:1px solid #ccc}.jodit_form_inserter .jodit_form-table-creator-box .jodit_form-container>div.hovered:after{background:#7a450f;border:1px solid #b5b5b5}.jodit_form_inserter .jodit_form-table-creator-box .jodit_form-options{font-size:14px}.jodit_form_inserter .jodit_form-table-creator-box .jodit_form-options label{text-align:left;padding-top:0}.jodit_form_inserter .jodit_form-table-creator-box .jodit_form-options label input{margin-right:10px}.jodit_form_inserter label{text-align:center;font-size:14px;padding:8px;margin:0}.jodit_text_icons .jodit_icon{width:auto;font-size:14px}.jodit_text_icons .jodit_icon:first-letter{text-transform:uppercase}.jodit_text_icons .jodit_tabs .jodit_tabs_buttons>a{width:auto;font-family:Helvetica,sans-serif,Arial}.jodit_text_icons .jodit_tabs .jodit_tabs_buttons>a i,.jodit_text_icons .jodit_toolbar>li{width:auto}.jodit_text_icons .jodit_toolbar>li>a{text-decoration:none;line-height:1}.jodit_text_icons .jodit_toolbar>li>a,.jodit_text_icons.jodit_dialog_box .jodit_dialog .jodit_button,.jodit_text_icons.jodit_dialog_box .jodit_dialog .jodit_dialog_header a{padding:0 12px;font-family:Helvetica,sans-serif,Arial;width:auto;color:rgba(0,0,0,.75)}.jodit_text_icons.jodit_dialog_box .jodit_dialog .jodit_button .jodit_icon,.jodit_text_icons.jodit_dialog_box .jodit_dialog .jodit_dialog_header a .jodit_icon{width:auto}.jodit_widget,.jodit_widget *{box-sizing:border-box}.jodit_search{font-family:Helvetica,sans-serif,Arial;font-size:14px;visibility:hidden;position:absolute;top:0;right:0;width:0;height:0}.jodit_search.jodit_search-active{visibility:visible}.jodit_search .jodit_search_box{width:320px;position:absolute;right:0;background-color:#f9f9f9;border:solid #ddd;border-width:0 0 1px 1px;padding:5px}.jodit_search .jodit_search_box input{margin:0;width:100%;height:100%;border:0;background-color:transparent;outline:0;padding:0 10px}.jodit_search .jodit_search_box input.jodit_search-replace{display:none}.jodit_search .jodit_search_box .jodit_search_buttons,.jodit_search .jodit_search_box .jodit_search_counts,.jodit_search .jodit_search_box .jodit_search_inputs{height:30px;display:inline-block;vertical-align:top}.jodit_search .jodit_search_box .jodit_search_inputs{width:60%;padding-right:5px}.jodit_search .jodit_search_box .jodit_search_counts{width:15%;line-height:100%;text-align:center;color:#ddd;border-left:1px solid #ddd}.jodit_search .jodit_search_box .jodit_search_counts:before{content:\"\";display:inline-block;vertical-align:middle;height:100%}.jodit_search .jodit_search_box .jodit_search_counts span{display:inline-block;vertical-align:middle}.jodit_search .jodit_search_box .jodit_search_buttons{padding-left:0;width:25%}.jodit_search .jodit_search_box .jodit_search_buttons button{outline:0;width:32%;padding:1px 5px;margin-right:1%;transition:transform .1s linear;height:100%;border:1px solid transparent;background-color:transparent}.jodit_search .jodit_search_box .jodit_search_buttons button.jodit_search_buttons-replace{width:100%;border:1px solid #ddd;margin-top:2px;display:none}.jodit_search .jodit_search_box .jodit_search_buttons button:hover{background-color:#ecebe9}.jodit_search .jodit_search_box .jodit_search_buttons button:focus{border:1px solid rgba(181,214,253,.5)}.jodit_search .jodit_search_box .jodit_search_buttons button:active{border:1px solid #b5d6fd;transform:scale(.95)}.jodit_search.jodit_search-and-replace .jodit_search_counts,.jodit_search.jodit_search-and-replace .jodit_search_inputs{height:60px}.jodit_search.jodit_search-and-replace .jodit_search_counts input,.jodit_search.jodit_search-and-replace .jodit_search_inputs input{height:50%;transition:background-color .1s linear}.jodit_search.jodit_search-and-replace .jodit_search_counts input:focus,.jodit_search.jodit_search-and-replace .jodit_search_inputs input:focus{box-shadow:inset 0 0 3px 0 hsla(0,0%,86.7%,.58)}.jodit_search.jodit_search-and-replace .jodit_search_buttons button.jodit_search_buttons-replace,.jodit_search.jodit_search-and-replace .jodit_search_inputs input.jodit_search-replace{display:block}@media (max-width:320px){.jodit_search,.jodit_search .jodit_search_box{width:100%}}.jodit_symbols{width:460px;padding:10px}.jodit_symbols .jodit_symbols-container_preview,.jodit_symbols .jodit_symbols-container_table{display:inline-block;vertical-align:top}.jodit_symbols .jodit_symbols-container_table{width:88%}.jodit_symbols .jodit_symbols-container_preview{width:12%}.jodit_symbols .jodit_symbols-container_preview .jodit_symbols-preview{font-size:34px;text-align:center;padding:20px 0;border:1px solid #ddd}.jodit_symbols table{border:0;border-spacing:0;table-layout:fixed}.jodit_symbols table td{padding:0}.jodit_symbols table td a{font-size:16px;text-decoration:none;color:#000;display:inline-block;box-sizing:border-box;width:21.6px;height:21.6px;border:1px solid transparent;text-align:center;line-height:21.6px;vertical-align:top}.jodit_symbols table td a:focus,.jodit_symbols table td a:hover{border:1px solid #1e88e5}.jodit_sticky-dummy_toolbar{display:none}.jodit_sticky>.jodit_toolbar_container{position:fixed;position:-webkit-sticky;position:sticky;z-index:3;top:0;left:auto}.jodit_sticky .jodit_sticky-dummy_toolbar{display:block}.jodit_paste_storage{padding:10px;max-width:600px}@media (max-width:768px){.jodit_form_inserter .jodit_form-table-creator-box{flex-direction:column}.jodit_paste_storage{max-width:100%}.jodit_tooltip{display:none}}.jodit_paste_storage>div{max-width:100%;max-height:300px;border:1px solid #ddd}.jodit_paste_storage>div:first-child{margin-bottom:10px}.jodit_paste_storage>div:first-child a{outline:0;box-sizing:border-box;display:block;max-width:100%;white-space:pre;overflow:hidden;text-overflow:ellipsis;padding:5px;margin:0;border:1px solid transparent;text-decoration:none;color:#000}.jodit_paste_storage>div:first-child a.jodit_active{color:#fff;background-color:#575757}.jodit_paste_storage>div:first-child a:focus{outline:0}.jodit_paste_storage>div:last-child{padding:10px;overflow:auto}.jodit_paste_storage>div:last-child li,.jodit_paste_storage>div:last-child ul{margin:0}.jodit_tooltip{position:absolute;background:padding-box #727171;color:#fff;font-family:Helvetica,sans-serif,Arial;font-size:11px;line-height:15px;white-space:normal;padding:6px;z-index:10001;max-width:120px;border-radius:2px;width:auto;transition:opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-rendering:optimizelegibility;opacity:0}.jodit_tooltip.jodit_tooltip_visible{opacity:1}.jodit,.jodit *,.jodit_container,.jodit_container *{box-sizing:border-box}.jodit .jodit_workplace,.jodit_container .jodit_workplace{position:relative;overflow:auto}.jodit .jodit_workplace .jodit_wysiwyg,.jodit .jodit_workplace .jodit_wysiwyg_iframe,.jodit_container .jodit_workplace .jodit_wysiwyg,.jodit_container .jodit_workplace .jodit_wysiwyg_iframe{height:100%;width:100%}.jodit_container:not(.jodit_inline){font-family:Helvetica,sans-serif,Arial;font-size:14px;background:#fff}.jodit_container:not(.jodit_inline).jodit_disabled{background:hsla(0,0%,88.2%,.99)}.jodit_container:not(.jodit_inline).jodit_disabled .jodit_workplace{opacity:.4}.jodit_container:not(.jodit_inline) .jodit_workplace{border:1px solid #ddd}.jodit_container:not(.jodit_inline) .jodit_toolbar_container:not(:empty)+.jodit_workplace{border-top-width:0}.jodit_disabled{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.jodit_hidden{display:none!important}.jodit_vertical_middle{display:flex;align-items:center}.jodit_button,.jodit_status_default{background-color:#d8d8d8;color:#212529}.jodit_button svg,.jodit_status_default svg{fill:#212529;stroke:#212529}.jodit_button:hover,.jodit_status_default:hover{background-color:#c9cdd1;color:#212529}.jodit_button:hover svg,.jodit_status_default:hover svg{fill:#212529;stroke:#212529}.jodit_button:active,.jodit_status_default:active{background-color:#dae0e5;color:#212529}.jodit_button:active svg,.jodit_status_default:active svg{fill:#212529;stroke:#212529}.jodit_button_primary,.jodit_status_primary{background-color:#007bff;color:#fff}.jodit_button_primary svg,.jodit_status_primary svg{fill:#fff;stroke:#fff}.jodit_button_primary:hover,.jodit_status_primary:hover{background-color:#0069d9;color:#fff}.jodit_button_primary:hover svg,.jodit_status_primary:hover svg{fill:#fff;stroke:#fff}.jodit_button_primary:active,.jodit_status_primary:active{background-color:#0062cc;color:#fff}.jodit_button_primary:active svg,.jodit_status_primary:active svg{fill:#fff;stroke:#fff}.jodit_button_success,.jodit_status_success{background-color:#28a745;color:#fff}.jodit_button_success svg,.jodit_status_success svg{fill:#fff;stroke:#fff}.jodit_button_success:hover,.jodit_status_success:hover{background-color:#218838;color:#fff}.jodit_button_success:hover svg,.jodit_status_success:hover svg{fill:#fff;stroke:#fff}.jodit_button_success:active,.jodit_status_success:active{background-color:#1e7e34;color:#fff}.jodit_button_success:active svg,.jodit_status_success:active svg{fill:#fff;stroke:#fff}.jodit_button_danger,.jodit_status_danger{background-color:#dc3545;color:#fff}.jodit_button_danger svg,.jodit_status_danger svg{fill:#fff;stroke:#fff}.jodit_button_danger:hover,.jodit_status_danger:hover{background-color:#c82333;color:#fff}.jodit_button_danger:hover svg,.jodit_status_danger:hover svg{fill:#fff;stroke:#fff}.jodit_button_danger:active,.jodit_status_danger:active{background-color:#bd2130;color:#fff}.jodit_button_danger:active svg,.jodit_status_danger:active svg{fill:#fff;stroke:#fff}.jodit_dark_theme .jodit_toolbar_list>.jodit_toolbar,.jodit_dark_theme.jodit_container,.jodit_dark_theme.jodit_container.jodit_disabled{background-color:#575757}.jodit_dark_theme.jodit_container:not(.jodit_inline) .jodit_workplace{border-color:#575757}.jodit_dark_theme .jodit_statusbar{background-color:rgba(95,92,92,.8);border-color:rgba(87,87,87,.8)}.jodit_dark_theme .jodit_statusbar,.jodit_dark_theme .jodit_statusbar .jodit_statusbar_item span{color:#d1cccc}.jodit_dark_theme .jodit_popup_triangle,.jodit_dark_theme .jodit_popup_triangle:before,.jodit_dark_theme .jodit_toolbar_popup,.jodit_dark_theme .jodit_toolbar_popup-inline,.jodit_dark_theme .jodit_toolbar_popup-inline:before,.jodit_dark_theme .jodit_toolbar_popup:before{background:#575757}.jodit_dark_theme .jodit_toolbar{background:#5f5c5c;border-color:rgba(87,87,87,.8)}.jodit_dark_theme .jodit_toolbar li.jodit_toolbar_btn>a{color:#d1cccc}.jodit_dark_theme .jodit_toolbar li.jodit_toolbar_btn>a:hover{background-color:#575757}.jodit_dark_theme .jodit_toolbar li.jodit_toolbar_btn.jodit_toolbar_btn-break{border-top-color:#686767}.jodit_dark_theme .jodit_toolbar li.jodit_toolbar_btn.jodit_toolbar_btn-separator{border-right-color:#686767}.jodit_dark_theme .jodit_toolbar li.jodit_toolbar_btn.active,.jodit_dark_theme .jodit_toolbar li.jodit_toolbar_btn.jodit_active,.jodit_dark_theme .jodit_toolbar li.jodit_toolbar_btn:active,.jodit_dark_theme .jodit_toolbar li.jodit_toolbar_btn:hover{background-color:#575757}.jodit_dark_theme .jodit_icon,.jodit_dark_theme .jodit_toolbar li.jodit_toolbar_btn.jodit_with_dropdownlist .jodit_with_dropdownlist-trigger,.jodit_dark_theme .jodit_upload_button svg{fill:silver}.jodit_dark_theme .jodit_icon_close{stroke:silver}.jodit_dark_theme .jodit_wysiwyg,.jodit_dark_theme .jodit_wysiwyg_iframe{background-color:#575757;color:#d1cccc}.jodit_dark_theme .jodit_wysiwyg [data-jodit-selected-cell],.jodit_dark_theme .jodit_wysiwyg_iframe [data-jodit-selected-cell]{border-color:#152f5f}.jodit_dark_theme .jodit_dropdownlist{background:#5f5c5c}.jodit_dark_theme .jodit_tabs .jodit_tabs_buttons>a{background-color:#686767;color:#d1cccc}.jodit_dark_theme .jodit_tabs .jodit_tabs_buttons>a:hover{background-color:rgba(104,103,103,.8);color:#d1cccc;border-color:rgba(104,103,103,.9)}.jodit_dark_theme .jodit_tabs .jodit_tabs_buttons>a.active{background:rgba(81,81,81,.41);border-color:#686767}.jodit_dark_theme .jodit_tabs .jodit_tabs_buttons>a svg{fill:silver}.jodit_dark_theme .jodit_form input[type=text],.jodit_dark_theme .jodit_form input[type=url],.jodit_dark_theme .jodit_form textarea{background-color:rgba(81,81,81,.41);border-color:#686767;color:#d1cccc}.jodit_dark_theme .jodit_form button{background-color:rgba(104,103,103,.75);color:#d1cccc}.jodit_dark_theme .jodit_placeholder{color:hsla(0,5.2%,81%,.8)}.jodit_dark_theme .jodit_draganddrop_file_box,.jodit_dark_theme .jodit_uploadfile_button{color:#d1cccc}.jodit_dark_theme .jodit_draganddrop_file_box:hover,.jodit_dark_theme .jodit_uploadfile_button:hover{background-color:rgba(104,103,103,.75)}.jodit_dark_theme .jodit-add-new-line:before{border-top-color:#686767}.jodit_dark_theme .jodit-add-new-line span{background:rgba(104,103,103,.75);border-color:#686767}.jodit_dark_theme .jodit-add-new-line span svg{fill:#d1cccc}.jodit_dark_theme .jodit_resizer>i{background:rgba(104,103,103,.75);border-color:silver}.jodit_dark_theme .jodit_input{border-color:hsla(0,5.2%,81%,.5);background-color:#d1cccc}.jodit_dark_theme.jodit_dialog_box .jodit_dialog{background-color:#575757}.jodit_dark_theme.jodit_dialog_box .jodit_dialog .jodit_dialog_header,.jodit_dark_theme.jodit_dialog_box .jodit_dialog .jodit_filebrowser_files.active .jodit_filebrowser_files_item{border-color:#444}.jodit_dark_theme.jodit_dialog_box .jodit_dialog .jodit_filebrowser_files.active .jodit_filebrowser_files_item-info{background-color:#d1cccc}"]
                    }] }
        ];
        /** @nocollapse */
        JoditAngularComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.NgZone }
        ]; };
        JoditAngularComponent.propDecorators = {
            config: [{ type: core.Input }],
            tagName: [{ type: core.Input }],
            id: [{ type: core.Input }],
            defaultValue: [{ type: core.Input }]
        };
        return JoditAngularComponent;
    }(Events));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        JoditAngularComponent.prototype._config;
        /** @type {?} */
        JoditAngularComponent.prototype.tagName;
        /** @type {?} */
        JoditAngularComponent.prototype.id;
        /** @type {?} */
        JoditAngularComponent.prototype.defaultValue;
        /** @type {?} */
        JoditAngularComponent.prototype.element;
        /** @type {?} */
        JoditAngularComponent.prototype.editor;
        /**
         * @type {?}
         * @private
         */
        JoditAngularComponent.prototype.onChangeCallback;
        /**
         * @type {?}
         * @private
         */
        JoditAngularComponent.prototype.onTouchedCallback;
        /**
         * @type {?}
         * @private
         */
        JoditAngularComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        JoditAngularComponent.prototype.ngZone;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/jodit-angular.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var JoditAngularModule = /** @class */ (function () {
        function JoditAngularModule() {
        }
        JoditAngularModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [JoditAngularComponent],
                        exports: [
                            JoditAngularComponent
                        ]
                    },] }
        ];
        return JoditAngularModule;
    }());

    exports.JoditAngularComponent = JoditAngularComponent;
    exports.JoditAngularModule = JoditAngularModule;
    exports.ɵa = Events;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=jodit-angular.umd.js.map
