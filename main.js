(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-router/app-router.module.ts":
/*!*************************************************!*\
  !*** ./src/app/app-router/app-router.module.ts ***!
  \*************************************************/
/*! exports provided: AppRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_l2_content_primary_container_widget_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/l2/content/primary-container/widget/widget.component */ "./src/app/components/l2/content/primary-container/widget/widget.component.ts");
/* harmony import */ var _components_l2_content_primary_container_message_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/l2/content/primary-container/message/message.component */ "./src/app/components/l2/content/primary-container/message/message.component.ts");
/* harmony import */ var _components_l2_content_primary_container_intent_box_intent_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/l2/content/primary-container/intent-box/intent-box.component */ "./src/app/components/l2/content/primary-container/intent-box/intent-box.component.ts");
/* harmony import */ var _components_l2_content_command_prompt_command_prompt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/l2/content/command-prompt/command-prompt.component */ "./src/app/components/l2/content/command-prompt/command-prompt.component.ts");
/* harmony import */ var _components_l2_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/l2/sidebar/sidebar.component */ "./src/app/components/l2/sidebar/sidebar.component.ts");
/* harmony import */ var _components_l2_content_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/l2/content/content.component */ "./src/app/components/l2/content/content.component.ts");
/* harmony import */ var _components_l2_content_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/l2/content/modal/modal.component */ "./src/app/components/l2/content/modal/modal.component.ts");
/* harmony import */ var _components_l2_content_primary_container_primary_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/l2/content/primary-container/primary-container.component */ "./src/app/components/l2/content/primary-container/primary-container.component.ts");
/* harmony import */ var _components_l2_content_primary_container_cards_cards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/l2/content/primary-container/cards/cards.component */ "./src/app/components/l2/content/primary-container/cards/cards.component.ts");
/* harmony import */ var _components_l2_content_primary_container_cards_card_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/l2/content/primary-container/cards/card/card.component */ "./src/app/components/l2/content/primary-container/cards/card/card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        children: [
            { path: '', component: _components_l2_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], outlet: 'sidebar' },
            {
                path: '',
                component: _components_l2_content_content_component__WEBPACK_IMPORTED_MODULE_8__["ContentComponent"],
                outlet: 'content',
                children: [
                    { path: '', component: _components_l2_content_command_prompt_command_prompt_component__WEBPACK_IMPORTED_MODULE_6__["CommandPromptComponent"], outlet: 'command-prompt' },
                    { path: '', component: _components_l2_content_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], outlet: 'modal' },
                    {
                        path: '',
                        component: _components_l2_content_primary_container_primary_container_component__WEBPACK_IMPORTED_MODULE_10__["PrimaryContainerComponent"],
                        outlet: 'primary-container',
                        children: [
                            {
                                path: '',
                                component: _components_l2_content_primary_container_cards_cards_component__WEBPACK_IMPORTED_MODULE_11__["CardsComponent"],
                                outlet: 'cards',
                                children: [
                                    { path: '', component: _components_l2_content_primary_container_cards_card_card_component__WEBPACK_IMPORTED_MODULE_12__["CardComponent"], outlet: 'card' },
                                ]
                            },
                            { path: '', component: _components_l2_content_primary_container_intent_box_intent_box_component__WEBPACK_IMPORTED_MODULE_5__["IntentBoxComponent"], outlet: 'intent' },
                            { path: '', component: _components_l2_content_primary_container_message_message_component__WEBPACK_IMPORTED_MODULE_4__["MessageComponent"], outlet: 'message' },
                            { path: '', component: _components_l2_content_primary_container_widget_widget_component__WEBPACK_IMPORTED_MODULE_3__["WidgetComponent"], outlet: 'widget' }
                        ]
                    }
                ]
            }
        ]
    },
    { path: 'appWidget', component: _components_l2_content_primary_container_widget_widget_component__WEBPACK_IMPORTED_MODULE_3__["WidgetComponent"] },
    { path: 'error', component: _components_l2_content_primary_container_message_message_component__WEBPACK_IMPORTED_MODULE_4__["MessageComponent"] },
    { path: 'intent', component: _components_l2_content_primary_container_intent_box_intent_box_component__WEBPACK_IMPORTED_MODULE_5__["IntentBoxComponent"] }
    // { path: 'appWidget', component: WidgetComponent }
];
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRouterModule);
    return AppRouterModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n    /* height: 100%; */\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <router-outlet name=\"sidebar\"></router-outlet>\n    <router-outlet name=\"content\"></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_io_persistence_ops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/io/persistence-ops.service */ "./src/app/services/io/persistence-ops.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node_modules/jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(persistenceOpsService, store) {
        this.persistenceOpsService = persistenceOpsService;
        this.store = store;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.registerEvents();
    };
    AppComponent.prototype.registerEvents = function () {
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__('#btnFavorites').click(function () {
            });
            function hitEnter(command) {
                var commandInputField = node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__('#command');
                if (command)
                    commandInputField.val(command);
                var e = node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__["Event"]('keyup');
                e.which = 13;
                commandInputField.focus();
                commandInputField.trigger(e);
            }
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__('#btnFireCommand').click(function () {
                hitEnter("");
            });
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__('#hideInfoAlert').on('click', function () {
                node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__('#intentBox').addClass('hide');
            });
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__('#hideSuccessAlert').on('click', function () {
                node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__('#successAlert').addClass('hide');
            });
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__('#conversations').on('click', '.close', function () {
                var $target = node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__(this).closest('.card');
                var line = $target.next();
                $target.hide('slow', function () { $target.remove(); });
                line.hide('slow', function () { line.remove(); });
            });
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__('#conversations').on('click', '.btn.btn-info.float-right', function () {
                var parentText = node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__(this).closest('.card-text').text();
                var command = parentText.substring(0, parentText.indexOf('Repeat'));
                hitEnter(command);
            });
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__('#hideDangerAlert').on('click', function () {
                node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__('#dangerAlert').addClass('hide');
            });
            // $('#git_bridge').on('click', () => {
            //   window.location.href = 'https://github.com/login/oauth/authorize?scope=user:email:repo&client_id=f6f649a1fe2dfea082ba';
            // });
            // const localHistory = JSON.parse(window.localStorage.getItem('currentState'));
            // window.onload = initOps();
            function initOps() {
                node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__('#command').focus();
                // dom.loadConversations(helper.concatenateAndSort(localHistory));
            }
            if (window.location.href.match(/\?code=(.*)/)) {
                var code = window.location.href.match(/\?code=(.*)/)[1];
                // app.getToken(code);
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_io_persistence_ops_service__WEBPACK_IMPORTED_MODULE_1__["PersistenceOpsService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_router_app_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-router/app-router.module */ "./src/app/app-router/app-router.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_l2_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/l2/sidebar/sidebar.component */ "./src/app/components/l2/sidebar/sidebar.component.ts");
/* harmony import */ var _components_l1_text_field_text_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/l1/text-field/text-field.component */ "./src/app/components/l1/text-field/text-field.component.ts");
/* harmony import */ var _components_l1_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/l1/button/button.component */ "./src/app/components/l1/button/button.component.ts");
/* harmony import */ var _components_l2_content_command_prompt_command_prompt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/l2/content/command-prompt/command-prompt.component */ "./src/app/components/l2/content/command-prompt/command-prompt.component.ts");
/* harmony import */ var _components_l2_content_primary_container_primary_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/l2/content/primary-container/primary-container.component */ "./src/app/components/l2/content/primary-container/primary-container.component.ts");
/* harmony import */ var _components_l2_content_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/l2/content/content.component */ "./src/app/components/l2/content/content.component.ts");
/* harmony import */ var _components_l2_content_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/l2/content/modal/modal.component */ "./src/app/components/l2/content/modal/modal.component.ts");
/* harmony import */ var _components_l2_content_primary_container_message_message_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/l2/content/primary-container/message/message.component */ "./src/app/components/l2/content/primary-container/message/message.component.ts");
/* harmony import */ var _components_l2_content_primary_container_widget_widget_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/l2/content/primary-container/widget/widget.component */ "./src/app/components/l2/content/primary-container/widget/widget.component.ts");
/* harmony import */ var _components_l2_content_primary_container_cards_card_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/l2/content/primary-container/cards/card/card.component */ "./src/app/components/l2/content/primary-container/cards/card/card.component.ts");
/* harmony import */ var _components_l2_content_primary_container_intent_box_intent_box_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/l2/content/primary-container/intent-box/intent-box.component */ "./src/app/components/l2/content/primary-container/intent-box/intent-box.component.ts");
/* harmony import */ var _components_l2_content_primary_container_cards_cards_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/l2/content/primary-container/cards/cards.component */ "./src/app/components/l2/content/primary-container/cards/cards.component.ts");
/* harmony import */ var _services_github_github_ops_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/github/github-ops.service */ "./src/app/services/github/github-ops.service.ts");
/* harmony import */ var _services_io_json_reader_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/io/json-reader.service */ "./src/app/services/io/json-reader.service.ts");
/* harmony import */ var _services_dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/dom/dom-ops.service */ "./src/app/services/dom/dom-ops.service.ts");
/* harmony import */ var _services_recast_recast_ops_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/recast/recast-ops.service */ "./src/app/services/recast/recast-ops.service.ts");
/* harmony import */ var _services_io_persistence_ops_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/io/persistence-ops.service */ "./src/app/services/io/persistence-ops.service.ts");
/* harmony import */ var _store_cards_reducer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./store/cards.reducer */ "./src/app/store/cards.reducer.ts");
/* harmony import */ var _components_l2_content_primary_container_widget_add_collab_widget_add_collab_widget_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/l2/content/primary-container/widget/add-collab-widget/add-collab-widget.component */ "./src/app/components/l2/content/primary-container/widget/add-collab-widget/add-collab-widget.component.ts");
/* harmony import */ var _components_l2_content_primary_container_widget_add_issue_comment_widget_add_issue_comment_widget_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/l2/content/primary-container/widget/add-issue-comment-widget/add-issue-comment-widget.component */ "./src/app/components/l2/content/primary-container/widget/add-issue-comment-widget/add-issue-comment-widget.component.ts");
/* harmony import */ var _components_l2_content_primary_container_widget_close_issue_widget_close_issue_widget_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/l2/content/primary-container/widget/close-issue-widget/close-issue-widget.component */ "./src/app/components/l2/content/primary-container/widget/close-issue-widget/close-issue-widget.component.ts");
/* harmony import */ var _components_l2_content_primary_container_widget_create_issue_widget_create_issue_widget_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/l2/content/primary-container/widget/create-issue-widget/create-issue-widget.component */ "./src/app/components/l2/content/primary-container/widget/create-issue-widget/create-issue-widget.component.ts");
/* harmony import */ var _components_l2_content_primary_container_widget_create_repo_widget_create_repo_widget_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/l2/content/primary-container/widget/create-repo-widget/create-repo-widget.component */ "./src/app/components/l2/content/primary-container/widget/create-repo-widget/create-repo-widget.component.ts");
/* harmony import */ var _components_l2_content_primary_container_widget_display_last_comment_widget_display_last_comment_widget_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/l2/content/primary-container/widget/display-last-comment-widget/display-last-comment-widget.component */ "./src/app/components/l2/content/primary-container/widget/display-last-comment-widget/display-last-comment-widget.component.ts");
/* harmony import */ var _components_l2_content_primary_container_widget_view_repo_widget_view_repo_widget_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/l2/content/primary-container/widget/view-repo-widget/view-repo-widget.component */ "./src/app/components/l2/content/primary-container/widget/view-repo-widget/view-repo-widget.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_l2_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _components_l1_text_field_text_field_component__WEBPACK_IMPORTED_MODULE_8__["TextFieldComponent"],
                _components_l1_button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"],
                _components_l2_content_command_prompt_command_prompt_component__WEBPACK_IMPORTED_MODULE_10__["CommandPromptComponent"],
                _components_l2_content_content_component__WEBPACK_IMPORTED_MODULE_12__["ContentComponent"],
                _components_l2_content_primary_container_primary_container_component__WEBPACK_IMPORTED_MODULE_11__["PrimaryContainerComponent"],
                _components_l2_content_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["ModalComponent"],
                _components_l2_content_primary_container_message_message_component__WEBPACK_IMPORTED_MODULE_14__["MessageComponent"],
                _components_l2_content_primary_container_widget_widget_component__WEBPACK_IMPORTED_MODULE_15__["WidgetComponent"],
                _components_l2_content_primary_container_cards_card_card_component__WEBPACK_IMPORTED_MODULE_16__["CardComponent"],
                _components_l2_content_primary_container_intent_box_intent_box_component__WEBPACK_IMPORTED_MODULE_17__["IntentBoxComponent"],
                _components_l2_content_primary_container_cards_cards_component__WEBPACK_IMPORTED_MODULE_18__["CardsComponent"],
                _components_l2_content_primary_container_widget_add_collab_widget_add_collab_widget_component__WEBPACK_IMPORTED_MODULE_25__["AddCollabWidgetComponent"],
                _components_l2_content_primary_container_widget_add_issue_comment_widget_add_issue_comment_widget_component__WEBPACK_IMPORTED_MODULE_26__["AddIssueCommentWidgetComponent"],
                _components_l2_content_primary_container_widget_close_issue_widget_close_issue_widget_component__WEBPACK_IMPORTED_MODULE_27__["CloseIssueWidgetComponent"],
                _components_l2_content_primary_container_widget_create_issue_widget_create_issue_widget_component__WEBPACK_IMPORTED_MODULE_28__["CreateIssueWidgetComponent"],
                _components_l2_content_primary_container_widget_create_repo_widget_create_repo_widget_component__WEBPACK_IMPORTED_MODULE_29__["CreateRepoWidgetComponent"],
                _components_l2_content_primary_container_widget_display_last_comment_widget_display_last_comment_widget_component__WEBPACK_IMPORTED_MODULE_30__["DisplayLastCommentWidgetComponent"],
                _components_l2_content_primary_container_widget_view_repo_widget_view_repo_widget_component__WEBPACK_IMPORTED_MODULE_31__["ViewRepoWidgetComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_router_app_router_module__WEBPACK_IMPORTED_MODULE_5__["AppRouterModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({ ioHistory: _store_cards_reducer__WEBPACK_IMPORTED_MODULE_24__["updateHistoryReducer"] })
            ],
            providers: [_services_dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_21__["DomOpsService"], _services_io_json_reader_service__WEBPACK_IMPORTED_MODULE_20__["JsonReaderService"], _services_recast_recast_ops_service__WEBPACK_IMPORTED_MODULE_22__["RecastOpsService"], _services_github_github_ops_service__WEBPACK_IMPORTED_MODULE_19__["GithubOpsService"], _services_io_persistence_ops_service__WEBPACK_IMPORTED_MODULE_23__["PersistenceOpsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/l1/button/button.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/l1/button/button.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  button works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/l1/button/button.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/l1/button/button.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbDEvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/l1/button/button.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/l1/button/button.component.ts ***!
  \**********************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/components/l1/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/components/l1/button/button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/l1/text-field/text-field.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/l1/text-field/text-field.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"{{type}}\" id=\"textFieldId\" placeholder=\"{{placeHolderText}}\">"

/***/ }),

/***/ "./src/app/components/l1/text-field/text-field.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/l1/text-field/text-field.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbDEvdGV4dC1maWVsZC90ZXh0LWZpZWxkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/l1/text-field/text-field.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/l1/text-field/text-field.component.ts ***!
  \******************************************************************/
/*! exports provided: TextFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldComponent", function() { return TextFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextFieldComponent = /** @class */ (function () {
    function TextFieldComponent() {
    }
    TextFieldComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextFieldComponent.prototype, "textFieldId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextFieldComponent.prototype, "placeHolderText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TextFieldComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextFieldComponent.prototype, "maxLength", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextFieldComponent.prototype, "pattern", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TextFieldComponent.prototype, "readOnly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextFieldComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextFieldComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextFieldComponent.prototype, "classes", void 0);
    TextFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-field',
            template: __webpack_require__(/*! ./text-field.component.html */ "./src/app/components/l1/text-field/text-field.component.html"),
            styles: [__webpack_require__(/*! ./text-field.component.scss */ "./src/app/components/l1/text-field/text-field.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TextFieldComponent);
    return TextFieldComponent;
}());



/***/ }),

/***/ "./src/app/components/l2/content/command-prompt/command-prompt.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/l2/content/command-prompt/command-prompt.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\" class=\"headerprompt\" (dragend)=\"showContextMenu($event)\">\n  <!-- <div class=\"prompt listening_indicator\"> -->\n  <div class=\"prompt\">\n    <p class=\"promptext\">$_</p>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"equalizer hide\" viewBox=\"0 0 80 80\">\n        <rect class=\"bar\" transform=\"translate(13,30)\"></rect>\n        <rect class=\"bar\" transform=\"translate(25,30)\"></rect>\n        <rect class=\"bar\" transform=\"translate(37,30)\"></rect>\n        <rect class=\"bar\" transform=\"translate(49,30)\"></rect>\n        <rect class=\"bar\" transform=\"translate(61,30)\"></rect>\n    </svg>\n  </div>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <div class=\"container-fluid\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"What you need...\" \n            name=\"command\" id=\"command\" (keyup)=\"initiateDomOpsOnEnter($event)\" \n            (click)=\"showContextMenu($event)\" #command>\n      <!-- <div id=\"faux\" class=\"form-control\"></div> -->\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" id=\"inputSelectionContextMenu\">\n          <a class=\"dropdown-item\">Fire</a>\n          <a class=\"dropdown-item\" (click)=\"resetCommand();\">Clear</a>\n          <a class=\"dropdown-item\">Add to Favorites</a>\n        </div>\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"nav navbar-nav ml-auto\">\n          <li id=\"btnFavorites\" class=\"nav-item\">\n            <a class=\"nav-link\">\n              <i class=\"far fa-star\" (mouseenter)=\"toggleClass($event)\" (mouseleave)=\"toggleClass($event)\"></i>\n            </a>\n          </li>\n          <li id=\"btnClearCommand\" class=\"nav-item\" (click)=\"resetCommand();\">\n            <a class=\"nav-link\">\n              <i class=\"far fa-trash-alt\" (mouseenter)=\"toggleClass($event)\" (mouseleave)=\"toggleClass($event)\"></i>\n            </a>\n          </li>\n          <li id=\"btnFireCommand\" class=\"nav-item\">\n            <a class=\"nav-link\">\n              <i class=\"far fa-paper-plane\" (mouseenter)=\"toggleClass($event)\" (mouseleave)=\"toggleClass($event)\"></i>\n            </a>\n          </li>\n          <li id=\"btnSTTCommand\" class=\"nav-item\" (click)=\"startSpeechRecognition()\">\n            <a class=\"nav-link\">\n              <i class=\"far fa-microphone fas\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <input type=\"hidden\" id=\"intentHidden\" value=\"createissue\">\n</div>\n"

/***/ }),

/***/ "./src/app/components/l2/content/command-prompt/command-prompt.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/l2/content/command-prompt/command-prompt.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%; }\n\na,\na:hover,\na:focus {\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s;\n  cursor: pointer; }\n\n.navbar {\n  padding: 15px 10px;\n  background: #fff;\n  border: none;\n  border-radius: 0 5px 5px 0;\n  margin-bottom: 40px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); }\n\n.navbar-btn {\n  box-shadow: none;\n  outline: none !important;\n  border: none; }\n\n.line {\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px dashed #ddd;\n  margin: 20px 0; }\n\ni,\nspan {\n  display: inline-block; }\n\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n\n.wrapper {\n  display: flex;\n  align-items: stretch;\n  height: 100%; }\n\n#sidebar {\n  min-width: 250px;\n  max-width: 250px;\n  background: #f39c12;\n  color: #252525;\n  transition: all 0.3s; }\n\n#sidebar.active {\n  min-width: 80px;\n  max-width: 80px;\n  text-align: center; }\n\n#sidebar.active .sidebar-header h3,\n#sidebar.active .CTAs {\n  display: none; }\n\n.sidebar-header h3 {\n  display: inline;\n  padding-left: 0.6em;\n  vertical-align: middle; }\n\n#sidebar.active .sidebar-header strong {\n  display: block; }\n\n#sidebar ul li a {\n  text-align: left; }\n\n#sidebar.active ul li a {\n  padding: 20px 10px;\n  text-align: center;\n  font-size: 0.85em; }\n\n#sidebar.active ul li a i {\n  margin-right: 0;\n  display: block;\n  font-size: 1.8em;\n  margin-bottom: 5px; }\n\n#sidebar.active ul ul a {\n  padding: 10px !important; }\n\n#sidebar.active .dropdown-toggle::after {\n  top: auto;\n  bottom: 10px;\n  right: 50%;\n  -webkit-transform: translateX(50%);\n  transform: translateX(50%); }\n\n#sidebar .sidebar-header {\n  padding: 20px;\n  background: #252525; }\n\n#sidebar .sidebar-header strong {\n  display: none;\n  font-size: 1.8em; }\n\n#sidebar ul.components {\n  padding: 20px 0;\n  border-bottom: 3px solid #252525; }\n\n#sidebar ul li a {\n  padding: 10px;\n  font-size: 1.1em;\n  display: block; }\n\n#sidebar ul li a:hover {\n  color: #7386D5;\n  background: #fff; }\n\n#sidebar ul li a i {\n  margin-right: 10px; }\n\n#sidebar ul li.active > a,\na[aria-expanded=\"true\"] {\n  color: #f39c12;\n  background: #252525; }\n\na[data-toggle=\"collapse\"] {\n  position: relative; }\n\n.collapse:not(.show) {\n  display: flex; }\n\n.dropdown-toggle::after {\n  display: block;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\nul ul a {\n  font-size: 0.9em !important;\n  padding-left: 30px !important;\n  background: white;\n  font-weight: bolder; }\n\nul.CTAs {\n  padding: 20px; }\n\nul.CTAs a {\n  text-align: center;\n  font-size: 0.9em !important;\n  display: block;\n  border-radius: 5px;\n  margin-bottom: 5px; }\n\na.download {\n  background: #fff;\n  color: #7386D5; }\n\na.article,\na.article:hover {\n  background: #6d7fcc !important;\n  color: #fff !important; }\n\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n\n#content {\n  width: 100%;\n  padding: 20px;\n  min-height: 100vh;\n  transition: all 0.3s; }\n\n/* ---------------------------------------------------\n    MEDIAQUERIES\n----------------------------------------------------- */\n\n@media (max-width: 768px) {\n  #header #command {\n    width: 100%; }\n  #header .prompt {\n    display: none !important; }\n  #header .navbar {\n    border-top-left-radius: .25rem;\n    border-bottom-left-radius: .25rem;\n    width: 100%;\n    margin-bottom: 20px; } }\n\n@media (min-width: 576px) {\n  .card-group > .card:first-child {\n    border-top-right-radius: .25rem;\n    border-bottom-right-radius: .25rem; }\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {\n    border-radius: .25rem; }\n  .card-group > .card:last-child {\n    border-top-left-radius: .25rem;\n    border-bottom-left-radius: .25rem; } }\n\n/* -------------------------------------------------\nADDITIONS\n--------------------------------------------------*/\n\n.hide {\n  display: none !important; }\n\n.prompt {\n  display: flex;\n  width: 2em;\n  border-right: 1px solid #c99034;\n  background-color: #f5d38b;\n  width: 8%;\n  margin-bottom: 40px;\n  border-radius: 4px 0 0 4px; }\n\n#header .navbar {\n  width: 92%; }\n\n.promptext {\n  -webkit-animation: blinkingText 0.8s infinite;\n          animation: blinkingText 0.8s infinite;\n  color: #975f04;\n  text-align: center;\n  line-height: 2em;\n  font: 1.5em bolder;\n  margin: auto; }\n\n.good {\n  -webkit-animation: anim .3s ease-in-out;\n          animation: anim .3s ease-in-out; }\n\n.repoLink {\n  color: #000;\n  font-weight: bolder;\n  text-decoration: underline; }\n\n.headerprompt {\n  display: flex;\n  width: 100%; }\n\n.logotext {\n  color: #f39c12; }\n\nnav div.collapse li a.nav-link i.far {\n  color: #f39c12;\n  font-size: 1.8em;\n  padding: 0.2em; }\n\n#loading-img {\n  background: url(http://preloaders.net/preloaders/360/Velocity.gif) center center no-repeat;\n  height: 100%;\n  z-index: 20; }\n\n.overlay {\n  background: #e9e9e9;\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0.5; }\n\n.loader {\n  border: 0px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 2px solid #3498db;\n  border-right: 2px solid #3498db;\n  width: 20px;\n  height: 20px;\n  -webkit-animation: spin 2s linear infinite;\n  /* Safari */\n  animation: spin 2s linear infinite; }\n\n.card:not(.widget) {\n  background: linear-gradient(to right, white, lightblue); }\n\n.light-red {\n  background: linear-gradient(to right, white, #dfc99a); }\n\n.featureRequest {\n  background-color: #007bff;\n  color: white;\n  font-size: 1.5em;\n  padding: 10px 20px;\n  border-radius: 30px; }\n\n#featureRequest {\n  position: fixed;\n  bottom: 2em;\n  right: 2.5em; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@-webkit-keyframes anim {\n  0% {\n    display: none;\n    opacity: 0; }\n  1% {\n    display: block;\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes anim {\n  0% {\n    display: none;\n    opacity: 0; }\n  1% {\n    display: block;\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes blinkingText {\n  0% {\n    color: #000; }\n  49% {\n    color: transparent; }\n  50% {\n    color: transparent; }\n  99% {\n    color: transparent; }\n  100% {\n    color: #000; } }\n\n@keyframes blinkingText {\n  0% {\n    color: #000; }\n  49% {\n    color: transparent; }\n  50% {\n    color: transparent; }\n  99% {\n    color: transparent; }\n  100% {\n    color: #000; } }\n\n/* --------------------------------------------------\n  OVERRIDES\n  --------------------------------------------------*/\n\n.btn:not(.featureRequest) {\n  background-color: #f39c12;\n  color: #252525; }\n\n@media (min-width: 1024px) {\n  #header .navbar {\n    width: 96%; }\n  .prompt {\n    width: 4%; } }\n\n.navbar-form {\n  width: 88%; }\n\n.form-control {\n  padding: .6rem 1em; }\n\n.container-fluid {\n  padding-left: 0.3em; }\n\n.card-group {\n  flex-direction: column; }\n\n#command.form-control {\n  width: 87%; }\n\n#faux {\n  visibility: hidden;\n  margin-right: 0;\n  border-right: 0;\n  padding-right: 0; }\n\n.ml-auto {\n  margin-left: 0 !important; }\n\n.btn-info {\n  border-color: orange; }\n\n.btn-info:hover {\n  border-color: orange;\n  opacity: 1; }\n\n.listening_indicator {\n  background: black; }\n\n.equalizer {\n  height: 100%;\n  width: 100%;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.bar {\n  fill: #00fc00;\n  width: 7px;\n  -webkit-animation: equalize 4s 0s infinite;\n          animation: equalize 4s 0s infinite; }\n\n.bar:nth-child(1) {\n  -webkit-animation-delay: -1.9s;\n          animation-delay: -1.9s; }\n\n.bar:nth-child(2) {\n  -webkit-animation-delay: -2s;\n          animation-delay: -2s; }\n\n.bar:nth-child(3) {\n  -webkit-animation-delay: -2.3s;\n          animation-delay: -2.3s; }\n\n.bar:nth-child(4) {\n  -webkit-animation-delay: -2.4s;\n          animation-delay: -2.4s; }\n\n.bar:nth-child(5) {\n  -webkit-animation-delay: -2.1s;\n          animation-delay: -2.1s; }\n\n@-webkit-keyframes equalize {\n  0% {\n    height: 20px; }\n  4% {\n    height: 16px; }\n  8% {\n    height: 13px; }\n  12% {\n    height: 10px; }\n  16% {\n    height: 20px; }\n  20% {\n    height: 10px; }\n  24% {\n    height: 13px; }\n  28% {\n    height: 3px; }\n  32% {\n    height: 13px; }\n  36% {\n    height: 20px; }\n  40% {\n    height: 7px; }\n  44% {\n    height: 13px; }\n  48% {\n    height: 23px; }\n  52% {\n    height: 10px; }\n  56% {\n    height: 3px; }\n  60% {\n    height: 10px; }\n  64% {\n    height: 17px; }\n  68% {\n    height: 20px; }\n  72% {\n    height: 23px; }\n  76% {\n    height: 27px; }\n  80% {\n    height: 23px; }\n  84% {\n    height: 20px; }\n  88% {\n    height: 17px; }\n  92% {\n    height: 20px; }\n  96% {\n    height: 23px; }\n  100% {\n    height: 27px; } }\n\n@keyframes equalize {\n  0% {\n    height: 20px; }\n  4% {\n    height: 16px; }\n  8% {\n    height: 13px; }\n  12% {\n    height: 10px; }\n  16% {\n    height: 20px; }\n  20% {\n    height: 10px; }\n  24% {\n    height: 13px; }\n  28% {\n    height: 3px; }\n  32% {\n    height: 13px; }\n  36% {\n    height: 20px; }\n  40% {\n    height: 7px; }\n  44% {\n    height: 13px; }\n  48% {\n    height: 23px; }\n  52% {\n    height: 10px; }\n  56% {\n    height: 3px; }\n  60% {\n    height: 10px; }\n  64% {\n    height: 17px; }\n  68% {\n    height: 20px; }\n  72% {\n    height: 23px; }\n  76% {\n    height: 27px; }\n  80% {\n    height: 23px; }\n  84% {\n    height: 20px; }\n  88% {\n    height: 17px; }\n  92% {\n    height: 20px; }\n  96% {\n    height: 23px; }\n  100% {\n    height: 27px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhYXN1L1Byb2plY3RzL01pY3JvYm90L01pY3JvYm90LXYyL3NyYy9hcHAvY29tcG9uZW50cy9sMi9jb250ZW50L2NvbW1hbmQtcHJvbXB0L2NvbW1hbmQtcHJvbXB0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2wyL2NvbnRlbnQvY29tbWFuZC1wcm9tcHQvY29tbWFuZC1wcm9tcHQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS92YWFzdS9Qcm9qZWN0cy9NaWNyb2JvdC9NaWNyb2JvdC12Mi9zcmMvc2Fzcy9fX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsWUFBWSxFQUFBOztBQUdkOzs7RUFHRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQiwwQ0FBMEMsRUFBQTs7QUFHNUM7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGNBQWMsRUFBQTs7QUFHaEI7O0VBRUUscUJBQXFCLEVBQUE7O0FBR3ZCOzt1RENQdUQ7O0FEV3ZEO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CRXJEMEI7RUZzRDFCLGNFeERzQjtFRnlEdEIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHcEI7O0VBRUUsYUFBYSxFQUFBOztBQUdmO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLFVBQVU7RUFDVixrQ0FBa0M7RUFFbEMsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsYUFBYTtFQUNiLG1CRWpIc0IsRUFBQTs7QUZvSHhCO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWU7RUFDZixnQ0UzSHNCLEVBQUE7O0FGOEh4QjtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7O0VBRUUsY0U3STBCO0VGOEkxQixtQkVoSnNCLEVBQUE7O0FGbUp4QjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNDLGFBQWEsRUFBQTs7QUFHZDtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCOztFQUVFLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTs7QUFHeEI7O3VEQ2xDdUQ7O0FEc0N2RDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUd0Qjs7dURDcEN1RDs7QUR3Q3ZEO0VBQ0U7SUFFSSxXQUFXLEVBQUE7RUFGZjtJQU1JLHdCQUF3QixFQUFBO0VBTjVCO0lBVUksOEJBQThCO0lBQzlCLGlDQUFpQztJQUNwQyxXQUFXO0lBQ1gsbUJBQW1CLEVBQUEsRUFDbkI7O0FBSUg7RUFDRTtJQUNFLCtCQUErQjtJQUMvQixrQ0FBa0MsRUFBQTtFQUdwQztJQUNFLHFCQUFxQixFQUFBO0VBR3ZCO0lBQ0UsOEJBQThCO0lBQzlCLGlDQUFpQyxFQUFBLEVBQ2xDOztBQUdIOzttRENuRG1EOztBRHNEbkQ7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIsU0FBUztFQUNULG1CQUFtQjtFQUNuQiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSw2Q0FBcUM7VUFBckMscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSx1Q0FBK0I7VUFBL0IsK0JBQStCLEVBQUE7O0FBR2pDO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0UvUjBCLEVBQUE7O0FGa1M1QjtFQUNFLGNFblMwQjtFRm9TMUIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSwwRkFBMEY7RUFDMUYsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsV0FBQTtFQUNBLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLHVEQUF1RCxFQUFBOztBQUd6RDtFQUVFLHFEQUFxRCxFQUFBOztBQUl2RDtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBR3pCO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUE7O0FBTjdCO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFHekI7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQTs7QUFJN0I7RUFDRTtJQUNFLGFBQWE7SUFDYixVQUFVLEVBQUE7RUFHWjtJQUNFLGNBQWM7SUFDZCxVQUFVO0lBQ1YsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBR3JCO0lBQ0UsVUFBVTtJQUNWLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQSxFQUFBOztBQWR2QjtFQUNFO0lBQ0UsYUFBYTtJQUNiLFVBQVUsRUFBQTtFQUdaO0lBQ0UsY0FBYztJQUNkLFVBQVU7SUFDViwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFHckI7SUFDRSxVQUFVO0lBQ1YsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBLEVBQUE7O0FBSXZCO0VBQ0U7SUFDRSxXQUFXLEVBQUE7RUFHYjtJQUNFLGtCQUFrQixFQUFBO0VBR3BCO0lBQ0Usa0JBQWtCLEVBQUE7RUFHcEI7SUFDRSxrQkFBa0IsRUFBQTtFQUdwQjtJQUNFLFdBQVcsRUFBQSxFQUFBOztBQWxCZjtFQUNFO0lBQ0UsV0FBVyxFQUFBO0VBR2I7SUFDRSxrQkFBa0IsRUFBQTtFQUdwQjtJQUNFLGtCQUFrQixFQUFBO0VBR3BCO0lBQ0Usa0JBQWtCLEVBQUE7RUFHcEI7SUFDRSxXQUFXLEVBQUEsRUFBQTs7QUFJZjs7cURDekZxRDs7QUQ0RnJEO0VBQ0UseUJFblowQjtFRm9aMUIsY0V0WnNCLEVBQUE7O0FGeVp4QjtFQUNFO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxTQUFTLEVBQUEsRUFDVjs7QUFHSDtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLG9CQUFvQjtFQUNwQixVQUNGLEVBQUE7O0FBRUE7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLDBDQUFrQztVQUFsQyxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsOEJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxXQUFXLEVBQUE7RUFHYjtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxXQUFXLEVBQUE7RUFHYjtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFdBQVcsRUFBQTtFQUdiO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUEsRUFBQTs7QUF0R2hCO0VBQ0U7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFdBQVcsRUFBQTtFQUdiO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFdBQVcsRUFBQTtFQUdiO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsV0FBVyxFQUFBO0VBR2I7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVksRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sMi9jb250ZW50L2NvbW1hbmQtcHJvbXB0L2NvbW1hbmQtcHJvbXB0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzXCI7XG4kbWF4OiA2MHB4O1xuXG46aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYSxcbmE6aG92ZXIsXG5hOmZvY3VzIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdmJhciB7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubmF2YmFyLWJ0biB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuaSxcbnNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFNJREVCQVIgU1RZTEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI3NpZGViYXIge1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOiAkdGhlbWUtc3VwcGxlbWVudGVyO1xuICBjb2xvcjogJHRoZW1lQ29sb3ItRGFyaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbiNzaWRlYmFyLmFjdGl2ZSB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNzaWRlYmFyLmFjdGl2ZSAuc2lkZWJhci1oZWFkZXIgaDMsXG4jc2lkZWJhci5hY3RpdmUgLkNUQXMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2lkZWJhci1oZWFkZXIgaDMge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmctbGVmdDogMC42ZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbiNzaWRlYmFyLmFjdGl2ZSAuc2lkZWJhci1oZWFkZXIgc3Ryb25nIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNzaWRlYmFyIHVsIGxpIGEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jc2lkZWJhci5hY3RpdmUgdWwgbGkgYSB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuODVlbTtcbn1cblxuI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEgaSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuI3NpZGViYXIuYWN0aXZlIHVsIHVsIGEge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNzaWRlYmFyLmFjdGl2ZSAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xufVxuXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAkdGhlbWVDb2xvci1EYXJrO1xufVxuXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgc3Ryb25nIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgZm9udC1zaXplOiAxLjhlbTtcbn1cblxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR0aGVtZUNvbG9yLURhcms7XG59XG5cbiNzaWRlYmFyIHVsIGxpIGEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEuMWVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI3NpZGViYXIgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjNzM4NkQ1O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4jc2lkZWJhciB1bCBsaSBhIGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxuYVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSB7XG4gIGNvbG9yOiAkdGhlbWUtc3VwcGxlbWVudGVyO1xuICBiYWNrZ3JvdW5kOiAkdGhlbWVDb2xvci1EYXJrO1xufVxuXG5hW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb2xsYXBzZTpub3QoLnNob3cpIHtcblx0ZGlzcGxheTogZmxleDtcbn1cblxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxudWwgdWwgYSB7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG51bC5DVEFzIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxudWwuQ1RBcyBhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuYS5kb3dubG9hZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjNzM4NkQ1O1xufVxuXG5hLmFydGljbGUsXG5hLmFydGljbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIENPTlRFTlQgU1RZTEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiNjb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgTUVESUFRVUVSSUVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI2hlYWRlciB7XG4gICAgI2NvbW1hbmQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnByb21wdCB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm5hdmJhciB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuMjVyZW07XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuMjVyZW07XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0fVxuICB9XG59XG5cbkBtZWRpYShtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5jYXJkLWdyb3VwPi5jYXJkOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjI1cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuMjVyZW07XG4gIH1cblxuICAuY2FyZC1ncm91cD4uY2FyZDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpOm5vdCg6b25seS1jaGlsZCkge1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgfVxuXG4gIC5jYXJkLWdyb3VwPi5jYXJkOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4yNXJlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuMjVyZW07XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQURESVRJT05TXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnByb21wdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyZW07XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjOTkwMzQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWQzOGI7XG4gIHdpZHRoOiA4JTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG5cbiNoZWFkZXIgLm5hdmJhciB7XG4gIHdpZHRoOiA5MiU7XG59XG5cbi5wcm9tcHRleHQge1xuICBhbmltYXRpb246IGJsaW5raW5nVGV4dCAwLjhzIGluZmluaXRlO1xuICBjb2xvcjogIzk3NWYwNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBmb250OiAxLjVlbSBib2xkZXI7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmdvb2Qge1xuICBhbmltYXRpb246IGFuaW0gLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4ucmVwb0xpbmsge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5oZWFkZXJwcm9tcHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ290ZXh0IHtcbiAgY29sb3I6ICR0aGVtZS1zdXBwbGVtZW50ZXI7XG59XG5cbm5hdiBkaXYuY29sbGFwc2UgbGkgYS5uYXYtbGluayBpLmZhciB7XG4gIGNvbG9yOiAkdGhlbWUtc3VwcGxlbWVudGVyO1xuICBmb250LXNpemU6IDEuOGVtO1xuICBwYWRkaW5nOiAwLjJlbTtcbn1cblxuI2xvYWRpbmctaW1nIHtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHA6Ly9wcmVsb2FkZXJzLm5ldC9wcmVsb2FkZXJzLzM2MC9WZWxvY2l0eS5naWYpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4ub3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5sb2FkZXIge1xuICBib3JkZXI6IDBweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMzQ5OGRiO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMzQ5OGRiO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIC8qIFNhZmFyaSAqL1xuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uY2FyZDpub3QoLndpZGdldCkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlLCBsaWdodGJsdWUpXG59XG5cbi5saWdodC1yZWQge1xuICAvLyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh3aGl0ZSwgbGlnaHRibHVlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB3aGl0ZSwgI2RmYzk5YSlcbn1cblxuLy8gZjNkOThjXG4uZmVhdHVyZVJlcXVlc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuI2ZlYXR1cmVSZXF1ZXN0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDJlbTtcbiAgcmlnaHQ6IDIuNWVtO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYW5pbSB7XG4gIDAlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxJSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYmxpbmtpbmdUZXh0IHtcbiAgMCUge1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG5cbiAgNDklIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICA1MCUge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIDk5JSB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgT1ZFUlJJREVTXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5idG46bm90KC5mZWF0dXJlUmVxdWVzdCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtc3VwcGxlbWVudGVyO1xuICBjb2xvcjogJHRoZW1lQ29sb3ItRGFya1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICNoZWFkZXIgLm5hdmJhciB7XG4gICAgd2lkdGg6IDk2JTtcbiAgfVxuICAucHJvbXB0IHtcbiAgICB3aWR0aDogNCU7XG4gIH1cbn1cblxuLm5hdmJhci1mb3JtIHtcbiAgd2lkdGg6IDg4JTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmc6IC42cmVtIDFlbTtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmctbGVmdDogMC4zZW07XG59XG5cbi5jYXJkLWdyb3VwIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2NvbW1hbmQuZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDg3JTtcbn1cblxuI2ZhdXgge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubWwtYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5idG4taW5mbyB7XG4gIGJvcmRlci1jb2xvcjogb3JhbmdlO1xufVxuXG4uYnRuLWluZm86aG92ZXIge1xuICBib3JkZXItY29sb3I6IG9yYW5nZTtcbiAgb3BhY2l0eTogMVxufVxuXG4ubGlzdGVuaW5nX2luZGljYXRvciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4uZXF1YWxpemVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmJhciB7XG4gIGZpbGw6ICMwMGZjMDA7XG4gIHdpZHRoOiA3cHg7XG4gIGFuaW1hdGlvbjogZXF1YWxpemUgNHMgMHMgaW5maW5pdGU7XG59XG5cbi5iYXI6bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS45cztcbn1cblxuLmJhcjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0ycztcbn1cblxuLmJhcjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IC0yLjNzO1xufVxuXG4uYmFyOm50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTIuNHM7XG59XG5cbi5iYXI6bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMi4xcztcbn1cblxuQGtleWZyYW1lcyBlcXVhbGl6ZSB7XG4gIDAlIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cblxuICA0JSB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICB9XG5cbiAgOCUge1xuICAgIGhlaWdodDogMTNweDtcbiAgfVxuXG4gIDEyJSB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICB9XG5cbiAgMTYlIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cblxuICAyMCUge1xuICAgIGhlaWdodDogMTBweDtcbiAgfVxuXG4gIDI0JSB7XG4gICAgaGVpZ2h0OiAxM3B4O1xuICB9XG5cbiAgMjglIHtcbiAgICBoZWlnaHQ6IDNweDtcbiAgfVxuXG4gIDMyJSB7XG4gICAgaGVpZ2h0OiAxM3B4O1xuICB9XG5cbiAgMzYlIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cblxuICA0MCUge1xuICAgIGhlaWdodDogN3B4O1xuICB9XG5cbiAgNDQlIHtcbiAgICBoZWlnaHQ6IDEzcHg7XG4gIH1cblxuICA0OCUge1xuICAgIGhlaWdodDogMjNweDtcbiAgfVxuXG4gIDUyJSB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICB9XG5cbiAgNTYlIHtcbiAgICBoZWlnaHQ6IDNweDtcbiAgfVxuXG4gIDYwJSB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICB9XG5cbiAgNjQlIHtcbiAgICBoZWlnaHQ6IDE3cHg7XG4gIH1cblxuICA2OCUge1xuICAgIGhlaWdodDogMjBweDtcbiAgfVxuXG4gIDcyJSB7XG4gICAgaGVpZ2h0OiAyM3B4O1xuICB9XG5cbiAgNzYlIHtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gIH1cblxuICA4MCUge1xuICAgIGhlaWdodDogMjNweDtcbiAgfVxuXG4gIDg0JSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgODglIHtcbiAgICBoZWlnaHQ6IDE3cHg7XG4gIH1cblxuICA5MiUge1xuICAgIGhlaWdodDogMjBweDtcbiAgfVxuXG4gIDk2JSB7XG4gICAgaGVpZ2h0OiAyM3B4O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTsgfVxuXG5hLFxuYTpob3ZlcixcbmE6Zm9jdXMge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5uYXZiYXIge1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuXG4ubmF2YmFyLWJ0biB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lOyB9XG5cbi5saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XG4gIG1hcmdpbjogMjBweCAwOyB9XG5cbmksXG5zcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFNJREVCQVIgU1RZTEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuI3NpZGViYXIge1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjM5YzEyO1xuICBjb2xvcjogIzI1MjUyNTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7IH1cblxuI3NpZGViYXIuYWN0aXZlIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4jc2lkZWJhci5hY3RpdmUgLnNpZGViYXItaGVhZGVyIGgzLFxuI3NpZGViYXIuYWN0aXZlIC5DVEFzIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4uc2lkZWJhci1oZWFkZXIgaDMge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmctbGVmdDogMC42ZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxuI3NpZGViYXIuYWN0aXZlIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4jc2lkZWJhciB1bCBsaSBhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4jc2lkZWJhci5hY3RpdmUgdWwgbGkgYSB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuODVlbTsgfVxuXG4jc2lkZWJhci5hY3RpdmUgdWwgbGkgYSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjhlbTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XG5cbiNzaWRlYmFyLmFjdGl2ZSB1bCB1bCBhIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50OyB9XG5cbiNzaWRlYmFyLmFjdGl2ZSAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpOyB9XG5cbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMyNTI1MjU7IH1cblxuI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHN0cm9uZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS44ZW07IH1cblxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMyNTI1MjU7IH1cblxuI3NpZGViYXIgdWwgbGkgYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogIzczODZENTtcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxuXG4jc2lkZWJhciB1bCBsaSBhIGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cblxuI3NpZGViYXIgdWwgbGkuYWN0aXZlID4gYSxcbmFbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xuICBjb2xvcjogI2YzOWMxMjtcbiAgYmFja2dyb3VuZDogIzI1MjUyNTsgfVxuXG5hW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLmNvbGxhcHNlOm5vdCguc2hvdykge1xuICBkaXNwbGF5OiBmbGV4OyB9XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cblxudWwgdWwgYSB7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyOyB9XG5cbnVsLkNUQXMge1xuICBwYWRkaW5nOiAyMHB4OyB9XG5cbnVsLkNUQXMgYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cblxuYS5kb3dubG9hZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjNzM4NkQ1OyB9XG5cbmEuYXJ0aWNsZSxcbmEuYXJ0aWNsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDsgfVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBDT05URU5UIFNUWUxFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuI2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzOyB9XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIE1FRElBUVVFUklFU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjaGVhZGVyICNjb21tYW5kIHtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAjaGVhZGVyIC5wcm9tcHQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAjaGVhZGVyIC5uYXZiYXIge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4yNXJlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuMjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuY2FyZC1ncm91cCA+IC5jYXJkOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjI1cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuMjVyZW07IH1cbiAgLmNhcmQtZ3JvdXAgPiAuY2FyZDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpOm5vdCg6b25seS1jaGlsZCkge1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTsgfVxuICAuY2FyZC1ncm91cCA+IC5jYXJkOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4yNXJlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuMjVyZW07IH0gfVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5BRERJVElPTlNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5wcm9tcHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMmVtO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzk5MDM0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVkMzhiO1xuICB3aWR0aDogOCU7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4OyB9XG5cbiNoZWFkZXIgLm5hdmJhciB7XG4gIHdpZHRoOiA5MiU7IH1cblxuLnByb21wdGV4dCB7XG4gIGFuaW1hdGlvbjogYmxpbmtpbmdUZXh0IDAuOHMgaW5maW5pdGU7XG4gIGNvbG9yOiAjOTc1ZjA0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIGZvbnQ6IDEuNWVtIGJvbGRlcjtcbiAgbWFyZ2luOiBhdXRvOyB9XG5cbi5nb29kIHtcbiAgYW5pbWF0aW9uOiBhbmltIC4zcyBlYXNlLWluLW91dDsgfVxuXG4ucmVwb0xpbmsge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cblxuLmhlYWRlcnByb21wdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5sb2dvdGV4dCB7XG4gIGNvbG9yOiAjZjM5YzEyOyB9XG5cbm5hdiBkaXYuY29sbGFwc2UgbGkgYS5uYXYtbGluayBpLmZhciB7XG4gIGNvbG9yOiAjZjM5YzEyO1xuICBmb250LXNpemU6IDEuOGVtO1xuICBwYWRkaW5nOiAwLjJlbTsgfVxuXG4jbG9hZGluZy1pbWcge1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cDovL3ByZWxvYWRlcnMubmV0L3ByZWxvYWRlcnMvMzYwL1ZlbG9jaXR5LmdpZikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMjA7IH1cblxuLm92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMC41OyB9XG5cbi5sb2FkZXIge1xuICBib3JkZXI6IDBweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMzQ5OGRiO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMzQ5OGRiO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIC8qIFNhZmFyaSAqL1xuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyB9XG5cbi5jYXJkOm5vdCgud2lkZ2V0KSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgd2hpdGUsIGxpZ2h0Ymx1ZSk7IH1cblxuLmxpZ2h0LXJlZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgd2hpdGUsICNkZmM5OWEpOyB9XG5cbi5mZWF0dXJlUmVxdWVzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4OyB9XG5cbiNmZWF0dXJlUmVxdWVzdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyZW07XG4gIHJpZ2h0OiAyLjVlbTsgfVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5cbkBrZXlmcmFtZXMgYW5pbSB7XG4gIDAlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgMSUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxuXG5Aa2V5ZnJhbWVzIGJsaW5raW5nVGV4dCB7XG4gIDAlIHtcbiAgICBjb2xvcjogIzAwMDsgfVxuICA0OSUge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICA1MCUge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICA5OSUge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogIzAwMDsgfSB9XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIE9WRVJSSURFU1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uYnRuOm5vdCguZmVhdHVyZVJlcXVlc3QpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzOWMxMjtcbiAgY29sb3I6ICMyNTI1MjU7IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAjaGVhZGVyIC5uYXZiYXIge1xuICAgIHdpZHRoOiA5NiU7IH1cbiAgLnByb21wdCB7XG4gICAgd2lkdGg6IDQlOyB9IH1cblxuLm5hdmJhci1mb3JtIHtcbiAgd2lkdGg6IDg4JTsgfVxuXG4uZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZzogLjZyZW0gMWVtOyB9XG5cbi5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nLWxlZnQ6IDAuM2VtOyB9XG5cbi5jYXJkLWdyb3VwIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG4jY29tbWFuZC5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogODclOyB9XG5cbiNmYXV4IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgcGFkZGluZy1yaWdodDogMDsgfVxuXG4ubWwtYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7IH1cblxuLmJ0bi1pbmZvIHtcbiAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7IH1cblxuLmJ0bi1pbmZvOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XG4gIG9wYWNpdHk6IDE7IH1cblxuLmxpc3RlbmluZ19pbmRpY2F0b3Ige1xuICBiYWNrZ3JvdW5kOiBibGFjazsgfVxuXG4uZXF1YWxpemVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxuXG4uYmFyIHtcbiAgZmlsbDogIzAwZmMwMDtcbiAgd2lkdGg6IDdweDtcbiAgYW5pbWF0aW9uOiBlcXVhbGl6ZSA0cyAwcyBpbmZpbml0ZTsgfVxuXG4uYmFyOm50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTEuOXM7IH1cblxuLmJhcjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0yczsgfVxuXG4uYmFyOm50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTIuM3M7IH1cblxuLmJhcjpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IC0yLjRzOyB9XG5cbi5iYXI6bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMi4xczsgfVxuXG5Aa2V5ZnJhbWVzIGVxdWFsaXplIHtcbiAgMCUge1xuICAgIGhlaWdodDogMjBweDsgfVxuICA0JSB7XG4gICAgaGVpZ2h0OiAxNnB4OyB9XG4gIDglIHtcbiAgICBoZWlnaHQ6IDEzcHg7IH1cbiAgMTIlIHtcbiAgICBoZWlnaHQ6IDEwcHg7IH1cbiAgMTYlIHtcbiAgICBoZWlnaHQ6IDIwcHg7IH1cbiAgMjAlIHtcbiAgICBoZWlnaHQ6IDEwcHg7IH1cbiAgMjQlIHtcbiAgICBoZWlnaHQ6IDEzcHg7IH1cbiAgMjglIHtcbiAgICBoZWlnaHQ6IDNweDsgfVxuICAzMiUge1xuICAgIGhlaWdodDogMTNweDsgfVxuICAzNiUge1xuICAgIGhlaWdodDogMjBweDsgfVxuICA0MCUge1xuICAgIGhlaWdodDogN3B4OyB9XG4gIDQ0JSB7XG4gICAgaGVpZ2h0OiAxM3B4OyB9XG4gIDQ4JSB7XG4gICAgaGVpZ2h0OiAyM3B4OyB9XG4gIDUyJSB7XG4gICAgaGVpZ2h0OiAxMHB4OyB9XG4gIDU2JSB7XG4gICAgaGVpZ2h0OiAzcHg7IH1cbiAgNjAlIHtcbiAgICBoZWlnaHQ6IDEwcHg7IH1cbiAgNjQlIHtcbiAgICBoZWlnaHQ6IDE3cHg7IH1cbiAgNjglIHtcbiAgICBoZWlnaHQ6IDIwcHg7IH1cbiAgNzIlIHtcbiAgICBoZWlnaHQ6IDIzcHg7IH1cbiAgNzYlIHtcbiAgICBoZWlnaHQ6IDI3cHg7IH1cbiAgODAlIHtcbiAgICBoZWlnaHQ6IDIzcHg7IH1cbiAgODQlIHtcbiAgICBoZWlnaHQ6IDIwcHg7IH1cbiAgODglIHtcbiAgICBoZWlnaHQ6IDE3cHg7IH1cbiAgOTIlIHtcbiAgICBoZWlnaHQ6IDIwcHg7IH1cbiAgOTYlIHtcbiAgICBoZWlnaHQ6IDIzcHg7IH1cbiAgMTAwJSB7XG4gICAgaGVpZ2h0OiAyN3B4OyB9IH1cbiIsIiR0aGVtZUNvbG9yLUxpZ2h0OiAjZjNlMmM3O1xuJHRoZW1lQ29sb3ItRGFyazojMjUyNTI1O1xuJHRoZW1lLWZvbnQ6IHZlcmRhbmEsIHNhbnMtc2VyaWY7XG4kdGhlbWUtc3VwcGxlbWVudGVyOiAjZjM5YzEyO1xuJGZvbnQtc2l6ZS1kZXNrdG9wLWg1OiAxLjI1ZW07XG4kZm9udC1zaXplLW1vYmlsZS1oNTogMC44ZW07XG4kZm9udC1zaXplLWRlc2t0b3AtcDogMS4xZW07XG4kZm9udC1zaXplLW1vYmlsZS1wOiAwLjdlbTsiXX0= */"

/***/ }),

/***/ "./src/app/components/l2/content/command-prompt/command-prompt.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/l2/content/command-prompt/command-prompt.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CommandPromptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandPromptComponent", function() { return CommandPromptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_recast_recast_ops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/recast/recast-ops.service */ "./src/app/services/recast/recast-ops.service.ts");
/* harmony import */ var src_app_services_dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dom/dom-ops.service */ "./src/app/services/dom/dom-ops.service.ts");
/* harmony import */ var src_app_services_cards_card_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cards/card.service.js */ "./src/app/services/cards/card.service.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_store_cards_actions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/cards.actions.js */ "./src/app/store/cards.actions.js");
/* harmony import */ var _configuration_config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../configuration/config.js */ "./src/app/configuration/config.js");
/* harmony import */ var _configuration_config_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_configuration_config_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! node_modules/jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CommandPromptComponent = /** @class */ (function () {
    function CommandPromptComponent(recastOpsService, domOpsService, cardsService, store) {
        this.recastOpsService = recastOpsService;
        this.domOpsService = domOpsService;
        this.cardsService = cardsService;
        this.store = store;
        this.emptyCommandMessage = 'Please type a command or use "Speech" button to speak to the bot.';
    }
    CommandPromptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.domOpsService.repeatRequested.subscribe(function (command) {
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__('#command').val(command);
            _this.executeCommand();
        });
        this.registerSpeechHandlers();
        this.registerMouseAndKeyboardHandlers();
    };
    CommandPromptComponent.prototype.toggleClass = function (event) {
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__(event.target).toggleClass('fas');
    };
    CommandPromptComponent.prototype.initiateDomOpsOnEnter = function (event) {
        var code = (event.keyCode ? event.keyCode : event.which);
        if (code === 13) {
            // this.domOpsService.hideNonCards();
            this.executeCommand();
        }
    };
    CommandPromptComponent.prototype.resetCommand = function () {
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__('#command').val('');
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__('#command').focus();
    };
    CommandPromptComponent.prototype.startSpeechRecognition = function () {
        var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        if (isChrome) {
            this.recognition.start();
        }
        else {
            // this.domOpsService.sho
        }
    };
    CommandPromptComponent.prototype.registerSpeechHandlers = function () {
        var SpeechRecognition;
        var instructions = node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__('#command');
        try {
            // SpeechRecognition = window.SpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.webkitSpeechRecognition;
            //SpeechRecognition = '';
            // this.recognition = new SpeechRecognition();
        }
        catch (e) {
            console.error(e);
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__('.no-browser-support').show();
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__('.app').hide();
        }
        this.recognition.onstart = function () {
            instructions.val('Voice recognition activated. Try speaking into the microphone.');
        };
        this.recognition.onspeechend = function () {
            instructions.val('You were quiet for a while so voice recognition turned itself off.');
        };
        this.recognition.onerror = function (event) {
            if (event.error == 'no-speech') {
                instructions.val('No speech was detected. Try again.');
            }
            ;
        };
        this.recognition.onresult = function (event) {
            var noteContent = "";
            var current = event.resultIndex;
            var transcript = event.results[current][0].transcript;
            var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
            if (!mobileRepeatBug) {
                noteContent += transcript;
                node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__('#command').val(noteContent);
            }
        };
    };
    CommandPromptComponent.prototype.registerMouseAndKeyboardHandlers = function () {
        var _this = this;
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__('#content nav div.collapse li a.nav-link i.far.fa-star').hover(function () {
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__('#content nav div.collapse li a.nav-link i.far.fa-star').toggleClass('fas');
        });
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__('#content nav div.collapse li a.nav-link i.far.fa-trash-alt').hover(function () {
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__('#content nav div.collapse li a.nav-link i.far.fa-trash-alt').toggleClass('fas');
        });
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__('#content nav div.collapse li a.nav-link i.far.fa-paper-plane').hover(function () {
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__('#content nav div.collapse li a.nav-link i.far.fa-paper-plane').toggleClass('fas');
        });
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__('*').on('click', function (event) {
            if (!_this.contextMenuFirstDisplay) {
                node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__("#inputSelectionContextMenu").removeClass("show").hide();
                _this.contextMenuDisplayed = false;
                event.stopPropagation();
            }
            else {
                _this.contextMenuFirstDisplay = false;
                event.stopPropagation();
            }
        });
    };
    CommandPromptComponent.prototype.executeCommand = function () {
        this.domOpsService.hideNonCards();
        var commandVal = this.command.nativeElement.value;
        if (!commandVal) {
            this.domOpsService.showEmptyCommandMessage(this.emptyCommandMessage);
        }
        else {
            var card = this.cardsService.getCommandCard(_configuration_config_js__WEBPACK_IMPORTED_MODULE_6__["intentSlugToOperations"].command.cardTitle, commandVal, {}, "command");
            var commandAction = new src_app_store_cards_actions_js__WEBPACK_IMPORTED_MODULE_5__["Command"](card);
            this.store.dispatch(commandAction);
            var text = { text: commandVal };
            var recastResponse = this.recastOpsService.getRecastResponse(commandVal, text);
            this.processRecastResponse(recastResponse);
        }
    };
    CommandPromptComponent.prototype.processRecastResponse = function (recastResponse) {
        var _this = this;
        var bodyRelevant;
        var intent = "";
        var assuredIntentFactor = 0.6;
        recastResponse.then(function (body) {
            bodyRelevant = body.results;
            var intents = bodyRelevant ? bodyRelevant.intents : "";
            if (intents) {
                if (intents.length == 1) {
                    intent = intents[0];
                }
                else if (intents.length > 1) {
                    var reducer = function (probableIntent, currIntent) { return probableIntent.confidence >= currIntent.confidence ? probableIntent : currIntent; };
                    intent = intents.reduce(reducer, intents[0]);
                }
                else {
                    _this.domOpsService.showEmptyCommandMessage("Intent is either not Identified or is not supported, please try again with a different text.");
                    return;
                }
                if (intent && intent.confidence > assuredIntentFactor) {
                    var intentSlug = intent.slug;
                    if (!Object.keys(_configuration_config_js__WEBPACK_IMPORTED_MODULE_6__["intentSlugToOperations"]).includes(intentSlug)) {
                        _this.domOpsService.showEmptyCommandMessage("Intent is either not Identified or is not supported, please try again with a different text.");
                        return;
                    }
                    // $(`#${$config.constants.hiddenIntentFieldId}`).val(intent);
                    window.localStorage.setItem(_configuration_config_js__WEBPACK_IMPORTED_MODULE_6__["constants"].hiddenIntentFieldId, intentSlug);
                    _this.domOpsService.displayIntentBox(intentSlug);
                    if (intentSlug == "resethistory") {
                        var card = _this.cardsService.getResponseCard(_configuration_config_js__WEBPACK_IMPORTED_MODULE_6__["intentSlugToOperations"].resethistory.cardTitle, _configuration_config_js__WEBPACK_IMPORTED_MODULE_6__["intentSlugToOperations"].resethistory.cardMsg, {}, "response");
                        card.insertionCounter = 0;
                        var resetHistoryResponseAction = new src_app_store_cards_actions_js__WEBPACK_IMPORTED_MODULE_5__["ClearHistory"](card);
                        _this.store.dispatch(resetHistoryResponseAction);
                        return;
                    }
                    _this.domOpsService.widgetIdentified.emit({ widget: intentSlug, bodyRelevant: bodyRelevant });
                    _this.domOpsService.populateRecastData(intentSlug, bodyRelevant);
                    // store.dispatch($config.intentSlugToOperations.addquery.action);
                }
                else {
                    _this.domOpsService.showEmptyCommandMessage("Couldn't conform with the required confidence level of the intent match, please try again.");
                }
            }
            else {
                _this.domOpsService.showEmptyCommandMessage("There seems to be an error in the Recast Response, as intents are not returned.");
                return;
            }
        });
    };
    CommandPromptComponent.prototype.showContextMenu = function (event) {
        if (this.contextMenuDisplayed == true) {
            return;
        }
        var inputField = event.target;
        if (inputField.value.length > 2 && inputField.selectionStart == 0 && inputField.selectionEnd == inputField.value.length) {
            var top = event.pageY - 10;
            var left = event.pageX - 90;
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_7__("#inputSelectionContextMenu").css({
                display: "block",
                top: top,
                left: left
            }).addClass("show");
            this.contextMenuFirstDisplay = true;
            this.contextMenuDisplayed = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('command'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CommandPromptComponent.prototype, "command", void 0);
    CommandPromptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-command-prompt',
            template: __webpack_require__(/*! ./command-prompt.component.html */ "./src/app/components/l2/content/command-prompt/command-prompt.component.html"),
            styles: [__webpack_require__(/*! ./command-prompt.component.scss */ "./src/app/components/l2/content/command-prompt/command-prompt.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_recast_recast_ops_service__WEBPACK_IMPORTED_MODULE_1__["RecastOpsService"],
            src_app_services_dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_2__["DomOpsService"],
            src_app_services_cards_card_service_js__WEBPACK_IMPORTED_MODULE_3__["CardService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], CommandPromptComponent);
    return CommandPromptComponent;
}());



/***/ }),

/***/ "./src/app/components/l2/content/content.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/l2/content/content.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet name=\"command-prompt\"></router-outlet>\n<router-outlet name=\"modal\"></router-outlet>\n<router-outlet name=\"primary-container\"></router-outlet>"

/***/ }),

/***/ "./src/app/components/l2/content/content.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/l2/content/content.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 20px;\n  width: 100%; }\n\n#content {\n  min-height: 100vh;\n  transition: all 0.3s; }\n\n@media (max-width: 768px) {\n  :host {\n    padding: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhYXN1L1Byb2plY3RzL01pY3JvYm90L01pY3JvYm90LXYyL3NyYy9hcHAvY29tcG9uZW50cy9sMi9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBR0ksaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sMi9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI2NvbnRlbnQge1xuICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBhZGRpbmc6IDIwcHg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgOmhvc3Qge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/l2/content/content.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/l2/content/content.component.ts ***!
  \************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dom/dom-ops.service */ "./src/app/services/dom/dom-ops.service.ts");
/* harmony import */ var src_app_services_helpers_helper_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helpers/helper-service.service */ "./src/app/services/helpers/helper-service.service.ts");
/* harmony import */ var node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node_modules/jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentComponent = /** @class */ (function () {
    function ContentComponent(dom, helper) {
        this.dom = dom;
        this.helper = helper;
    }
    ContentComponent.prototype.ngOnInit = function () {
        var localHistory = JSON.parse(window.localStorage.getItem('currentState'));
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__('#command').focus();
        // $("#conversations").empty();
        // const historyAll = this.helper.concatenateAndSort(store.getState());
        // this.dom.loadConversations(this.helper.concatenateAndSort(localHistory));
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/components/l2/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/components/l2/content/content.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_1__["DomOpsService"], src_app_services_helpers_helper_service_service__WEBPACK_IMPORTED_MODULE_2__["HelperServiceService"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/components/l2/content/modal/modal.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/l2/content/modal/modal.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" id=\"submitConfirm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Confirm!</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n              </button>\n          </div>\n          <div class=\"modal-body\">\n              Are you sure you want to submit?\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" id=\"btnCancelConfirm\" data-dismiss=\"modal\">Cancel</button>\n              <button id=\"submitGitData\" type=\"button\" data-dimsiss=\"modal\" class=\"btn btn-primary\" (click)=\"submitGitData()\">Submit</button>\n          </div>\n      </div>\n  </div>\n</div>\n<div class=\"modal fade\" \n  id=\"emptyCommandMessageModal\" \n  tabindex=\"-1\" \n  role=\"dialog\" \n  aria-labelledby=\"emptyCommandMessageModalTitle\"\n  aria-hidden=\"true\"\n  [hidden]=\"isHidden\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"emptyCommandMessageModalTitle\">No Command!</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div id=\"randomModal\" class=\"modal-body\">\n        Please type some relevant words in the command box.\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n<button style=\"display: none\" id=\"emptyCommandMsgDisplayer\" type=\"submit\" data-toggle=\"modal\" data-target=\"#emptyCommandMessageModal\"></button>\n\n\n"

/***/ }),

/***/ "./src/app/components/l2/content/modal/modal.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/l2/content/modal/modal.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbDIvY29udGVudC9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/l2/content/modal/modal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/l2/content/modal/modal.component.ts ***!
  \****************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dom/dom-ops.service */ "./src/app/services/dom/dom-ops.service.ts");
/* harmony import */ var src_app_services_github_github_ops_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/github/github-ops.service */ "./src/app/services/github/github-ops.service.ts");
/* harmony import */ var _configuration_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../configuration/config */ "./src/app/configuration/config.js");
/* harmony import */ var _configuration_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_configuration_config__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalComponent = /** @class */ (function () {
    function ModalComponent(domOpsService, githubService) {
        this.domOpsService = domOpsService;
        this.githubService = githubService;
        this.isHidden = true;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.domOpsService.commandPromptEnteredEmpty.subscribe(function () {
            _this.isHidden = false;
        });
    };
    ModalComponent.prototype.submitGitData = function () {
        var intent = window.localStorage.getItem(_configuration_config__WEBPACK_IMPORTED_MODULE_3__["constants"].hiddenIntentFieldId);
        if (intent) {
            this.githubService.gitOperationIdentified.emit(_configuration_config__WEBPACK_IMPORTED_MODULE_3__["intentSlugToOperations"][intent].githubOperation);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "isHidden", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/l2/content/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/components/l2/content/modal/modal.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_1__["DomOpsService"],
            src_app_services_github_github_ops_service__WEBPACK_IMPORTED_MODULE_2__["GithubOpsService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/l2/content/primary-container/cards/card/card.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/cards/card/card.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card {{card.cardStyle}}\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">\n      {{card.cardTitle}}\n      <a class=\"btn btn-danger float-right close\" id=\"btnRemove\">Remove</a>\n      <a \n        *ngIf=\"card.type=='command'\"\n        class=\"btn btn-info float-right\" \n        role=\"button\"\n        id=\"btnRepeatCommand{{card.insertionCounter}}\"\n        (click)=\"repeatCommand()\">Repeat</a>\n    </h5>\n    <p class=\"card-text\" id=\"card-content\">\n      {{card.cardContent}}\n    </p>\n  </div>\n  <div class=\"card-footer\"><small class=\"text-muted\">{{displayTime}}</small></div>\n</div>\n<div class=\"line\"></div>"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/cards/card/card.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/cards/card/card.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".line {\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px dashed #ddd;\n  margin: 10px 0; }\n\n.card {\n  width: 80%;\n  border-radius: 15px; }\n\n.command-card {\n  background: linear-gradient(to right, white, #dfc99a);\n  left: 20%; }\n\n.command-card:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 0;\n    height: 0;\n    border: 33px solid transparent;\n    border-right-color: white;\n    border-left: 0;\n    border-bottom: 0;\n    margin-top: -16.5px;\n    margin-left: -33px; }\n\n.response-card {\n  background: linear-gradient(to right, white, lightblue); }\n\n.response-card:after {\n    content: '';\n    position: absolute;\n    right: 0;\n    top: 50%;\n    width: 0;\n    height: 0;\n    border: 33px solid transparent;\n    border-left-color: lightblue;\n    border-right: 0;\n    border-bottom: 0;\n    margin-top: -16.5px;\n    margin-right: -33px; }\n\n.btn.btn-info.float-right, .btn.btn-danger.float-right {\n  color: #252525 !important;\n  background-color: transparent;\n  border-color: #252525;\n  margin-right: 30px; }\n\n.btn.btn-info.float-right:hover, .btn.btn-danger.float-right:hover {\n    background-color: #252525 !important;\n    color: #fff !important; }\n\n.close:not(:disabled):not(.disabled):hover {\n  opacity: 1; }\n\n.close {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5em;\n  text-shadow: unset;\n  opacity: unset; }\n\na#btnRemove, a[id^='btnRepeatCommand'] {\n  display: none; }\n\n@media (min-width: 768px) {\n  a#btnRemove, a[id^='btnRepeatCommand'] {\n    display: block; }\n  .card {\n    border-radius: 35px; }\n  .line {\n    margin: 20px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhYXN1L1Byb2plY3RzL01pY3JvYm90L01pY3JvYm90LXYyL3NyYy9hcHAvY29tcG9uZW50cy9sMi9jb250ZW50L3ByaW1hcnktY29udGFpbmVyL2NhcmRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxVQUFVO0VBQ1YsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kscURBQXFEO0VBQ3JELFNBQVMsRUFBQTs7QUFGYjtJQUlRLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixRQUFRO0lBQ1IsU0FBUztJQUNULDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7O0FBSTFCO0VBQ0ksdURBQXVELEVBQUE7O0FBRDNEO0lBR1EsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBQTs7QUFJM0I7RUFHWSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTs7QUFOOUI7SUFRZ0Isb0NBQW1DO0lBQ25DLHNCQUFxQixFQUFBOztBQU1yQztFQUNJLFVBQVUsRUFBQTs7QUFJZDtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJO0lBQ0ksY0FBYyxFQUFBO0VBRWxCO0lBQ0ksbUJBQW1CLEVBQUE7RUFFdkI7SUFDSSxjQUFjLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2wyL2NvbnRlbnQvcHJpbWFyeS1jb250YWluZXIvY2FyZHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaDUge1xuLy8gICAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gfVxuXG4vLyBwIHtcbi8vICAgICBmb250LXNpemU6IDAuN2VtO1xuLy8gfVxuXG4ubGluZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG4uY2FyZCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uY29tbWFuZC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlLCAjZGZjOTlhKTtcbiAgICBsZWZ0OiAyMCU7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXI6IDMzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTYuNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTMzcHg7XG4gICAgfVxufVxuXG4ucmVzcG9uc2UtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB3aGl0ZSwgbGlnaHRibHVlKTtcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXI6IDMzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBsaWdodGJsdWU7XG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTE2LjVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMzNweDtcbiAgICB9XG59XG5cbi5idG4ge1xuICAgICYuYnRuLWluZm8sICYuYnRuLWRhbmdlciB7XG4gICAgICAgICYuZmxvYXQtcmlnaHQge1xuICAgICAgICAgICAgY29sb3I6ICMyNTI1MjUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjUyNTI1O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmYhaW1wb3J0YW50XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbG9zZTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLy8gT1ZFUlJJREVcbi5jbG9zZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIHRleHQtc2hhZG93OiB1bnNldDtcbiAgICBvcGFjaXR5OiB1bnNldDtcbn1cblxuYSNidG5SZW1vdmUsIGFbaWRePSdidG5SZXBlYXRDb21tYW5kJ10ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgYSNidG5SZW1vdmUsIGFbaWRePSdidG5SZXBlYXRDb21tYW5kJ10ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmNhcmQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgIH1cbiAgICAubGluZSB7XG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/cards/card/card.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/cards/card/card.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dom/dom-ops.service */ "./src/app/services/dom/dom-ops.service.ts");
/* harmony import */ var src_app_services_cards_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cards/card.service */ "./src/app/services/cards/card.service.ts");
/* harmony import */ var _card_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.model */ "./src/app/components/l2/content/primary-container/cards/card/card.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardComponent = /** @class */ (function () {
    function CardComponent(cardService, domOpsService) {
        this.cardService = cardService;
        this.domOpsService = domOpsService;
    }
    // ngOnInit() {
    //   setInterval(() => {
    //     this.displayTime = this.cardService.getDisplayTime(this.card.timestamp)
    //   }, 1000)
    // }
    // updateDisplayTime() {
    //   this.displayTime = this.cardService.getDisplayTime(this.card.timestamp);
    // }
    CardComponent.prototype.ngOnInit = function () {
        this.updateDisplayTime();
    };
    CardComponent.prototype.updateDisplayTime = function () {
        var _this = this;
        // console.log("tracking run " + this.card.insertionCounter + " " + this.displayTime);
        this.displayTime = this.cardService.getDisplayTime(this.card.timestamp);
        var updateInterval = 1000;
        if (this.displayTime.includes('minutes')) {
            updateInterval = updateInterval * 60;
        }
        else if (this.displayTime.includes('hours')) {
            updateInterval = updateInterval * 60 * 60;
        }
        else if (this.displayTime.includes('days')) {
            updateInterval = updateInterval * 60 * 60 * 24;
        }
        setTimeout(function () {
            _this.updateDisplayTime();
        }, updateInterval);
    };
    CardComponent.prototype.repeatCommand = function () {
        this.domOpsService.repeatCommand(this.card);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _card_model__WEBPACK_IMPORTED_MODULE_3__["Card"])
    ], CardComponent.prototype, "card", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "displayTime", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/components/l2/content/primary-container/cards/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/components/l2/content/primary-container/cards/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_cards_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"],
            src_app_services_dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_1__["DomOpsService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/l2/content/primary-container/cards/card/card.model.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/cards/card/card.model.ts ***!
  \**********************************************************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
var Card = /** @class */ (function () {
    function Card(cardTitle, cardContent, data, type, timestamp, cardStyle) {
        this.cardTitle = cardTitle;
        this.cardContent = cardContent;
        this.data = data;
        this.type = type;
        this.timestamp = timestamp;
        this.cardStyle = cardStyle;
    }
    return Card;
}());



/***/ }),

/***/ "./src/app/components/l2/content/primary-container/cards/cards.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/cards/cards.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n    class=\"card-group\" \n    id=\"conversations\">\n    <app-card \n        [card]=\"card\"\n        *ngFor=\"let card of cards;\"\n        [ngStyle]=\"{'display': 'contents'}\">\n    </app-card>\n</div>"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/cards/cards.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/cards/cards.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 576px) {\n  .card-group > .card:first-child {\n    border-top-right-radius: .25rem;\n    border-bottom-right-radius: .25rem; }\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {\n    border-radius: .25rem; }\n  .card-group > .card:last-child {\n    border-top-left-radius: .25rem;\n    border-bottom-left-radius: .25rem; } }\n\n.card-group {\n  flex-direction: column; }\n\n#conversations {\n  margin-left: 3em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhYXN1L1Byb2plY3RzL01pY3JvYm90L01pY3JvYm90LXYyL3NyYy9hcHAvY29tcG9uZW50cy9sMi9jb250ZW50L3ByaW1hcnktY29udGFpbmVyL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSwrQkFBK0I7SUFDL0Isa0NBQWtDLEVBQUE7RUFFdEM7SUFDSSxxQkFBcUIsRUFBQTtFQUV6QjtJQUNJLDhCQUE4QjtJQUM5QixpQ0FBaUMsRUFBQSxFQUNwQzs7QUFHTDtFQUNJLHNCQUFxQixFQUFBOztBQUd6QjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sMi9jb250ZW50L3ByaW1hcnktY29udGFpbmVyL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgICAuY2FyZC1ncm91cD4uY2FyZDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuMjVyZW07XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuMjVyZW07XG4gICAgfVxuICAgIC5jYXJkLWdyb3VwPi5jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCk6bm90KDpvbmx5LWNoaWxkKSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICB9XG4gICAgLmNhcmQtZ3JvdXA+LmNhcmQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4yNXJlbTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjI1cmVtO1xuICAgIH1cbn1cblxuLmNhcmQtZ3JvdXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbn1cblxuI2NvbnZlcnNhdGlvbnMge1xuICAgIG1hcmdpbi1sZWZ0OiAzZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/cards/cards.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/cards/cards.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_helpers_helper_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/helpers/helper-service.service */ "./src/app/services/helpers/helper-service.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardsComponent = /** @class */ (function () {
    function CardsComponent(store, helper) {
        this.store = store;
        this.helper = helper;
    }
    CardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cardsState = this.store.select('ioHistory');
        this.cardsState.subscribe(function (cards) {
            _this.cards = _this.helper.concatenateAndSort(cards);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CardsComponent.prototype, "cardsState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CardsComponent.prototype, "cards", void 0);
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/components/l2/content/primary-container/cards/cards.component.html"),
            styles: [__webpack_require__(/*! ./cards.component.scss */ "./src/app/components/l2/content/primary-container/cards/cards.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], src_app_services_helpers_helper_service_service__WEBPACK_IMPORTED_MODULE_1__["HelperServiceService"]])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/components/l2/content/primary-container/intent-box/intent-box.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/intent-box/intent-box.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n  class=\"alert alert-info alert-dismissible hide good\" \n  id=\"intentBox\" \n  role=\"alert\"\n  [hidden]=\"isHidden\"\n  #intentBox>\n    <button \n      type=\"button\" \n      id=\"hideInfoAlert\" \n      class=\"close\" \n      aria-label=\"Close\"\n      (click)=\"hideParent($event)\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <strong>I understand you intend to: &nbsp;&nbsp;</strong>\n    <span id=\"intentName\"></span>&nbsp;&nbsp;If not, please choose the correct option:\n</div>"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/intent-box/intent-box.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/intent-box/intent-box.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".good {\n  -webkit-animation: anim .3s ease-in-out;\n          animation: anim .3s ease-in-out; }\n\n.hide {\n  display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhYXN1L1Byb2plY3RzL01pY3JvYm90L01pY3JvYm90LXYyL3NyYy9hcHAvY29tcG9uZW50cy9sMi9jb250ZW50L3ByaW1hcnktY29udGFpbmVyL2ludGVudC1ib3gvaW50ZW50LWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUErQjtVQUEvQiwrQkFBK0IsRUFBQTs7QUFHbkM7RUFDSSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbDIvY29udGVudC9wcmltYXJ5LWNvbnRhaW5lci9pbnRlbnQtYm94L2ludGVudC1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ29vZCB7XG4gICAgYW5pbWF0aW9uOiBhbmltIC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/intent-box/intent-box.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/intent-box/intent-box.component.ts ***!
  \********************************************************************************************/
/*! exports provided: IntentBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntentBoxComponent", function() { return IntentBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dom/dom-ops.service */ "./src/app/services/dom/dom-ops.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IntentBoxComponent = /** @class */ (function () {
    function IntentBoxComponent(domOpsService) {
        this.domOpsService = domOpsService;
        this.isHidden = true;
    }
    IntentBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.domOpsService.commandPromptEnteredWithValue.subscribe(function () {
            _this.isHidden = true;
        });
        this.domOpsService.intentIdentified.subscribe(function () {
            _this.isHidden = false;
        });
    };
    IntentBoxComponent.prototype.hideParent = function (event) {
        this.intentBox.nativeElement.classList.add('hide');
        this.isHidden = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], IntentBoxComponent.prototype, "isHidden", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('intentBox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], IntentBoxComponent.prototype, "intentBox", void 0);
    IntentBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intent-box',
            template: __webpack_require__(/*! ./intent-box.component.html */ "./src/app/components/l2/content/primary-container/intent-box/intent-box.component.html"),
            styles: [__webpack_require__(/*! ./intent-box.component.scss */ "./src/app/components/l2/content/primary-container/intent-box/intent-box.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_1__["DomOpsService"]])
    ], IntentBoxComponent);
    return IntentBoxComponent;
}());



/***/ }),

/***/ "./src/app/components/l2/content/primary-container/message/message.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/message/message.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success alert-dismissible fade show hide good\" id=\"successAlert\" role=\"alert\" [hidden]=\"true\" #successTemplate>\n    <strong>Success! </strong>\n    <span id=\"op-msg\"> Repository Added!</span>\n    <button type=\"button\" id=\"hideSuccessAlert\" class=\"close\" aria-label=\"Close\" (click)=\"hideMessage(successTemplate);\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"alert alert-danger alert-dismissible hide good\" id=\"dangerAlert\" role=\"alert\" [hidden]=\"true\" #errorTemplate>\n    <strong>Oh snap!</strong> \n    <span> Change a few things up and try submitting again.</span>\n    <button type=\"button\" id=\"hideDangerAlert\" class=\"close\" aria-label=\"Close\" (click)=\"hideMessage(errorTemplate);\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/message/message.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/message/message.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".good {\n  -webkit-animation: anim .3s ease-in-out;\n          animation: anim .3s ease-in-out; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhYXN1L1Byb2plY3RzL01pY3JvYm90L01pY3JvYm90LXYyL3NyYy9hcHAvY29tcG9uZW50cy9sMi9jb250ZW50L3ByaW1hcnktY29udGFpbmVyL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUErQjtVQUEvQiwrQkFBK0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbDIvY29udGVudC9wcmltYXJ5LWNvbnRhaW5lci9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ29vZCB7XG4gICAgYW5pbWF0aW9uOiBhbmltIC4zcyBlYXNlLWluLW91dDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/message/message.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/message/message.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dom/dom-ops.service */ "./src/app/services/dom/dom-ops.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent(domOpsService) {
        this.domOpsService = domOpsService;
        this.isHidden = true;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.domOpsService.commandPromptEnteredWithValue.subscribe(function () {
            _this.isHidden = true;
        });
    };
    MessageComponent.prototype.hideMessage = function (template) {
        template.hidden = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MessageComponent.prototype, "isHidden", void 0);
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/components/l2/content/primary-container/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.scss */ "./src/app/components/l2/content/primary-container/message/message.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_1__["DomOpsService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/components/l2/content/primary-container/primary-container.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/primary-container.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet name=\"intent\"></router-outlet>\n<router-outlet name=\"message\"></router-outlet>\n<router-outlet name=\"widget\"></router-outlet>\n<router-outlet name=\"cards\"></router-outlet>"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/primary-container.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/primary-container.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbDIvY29udGVudC9wcmltYXJ5LWNvbnRhaW5lci9wcmltYXJ5LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/primary-container.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/primary-container.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PrimaryContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryContainerComponent", function() { return PrimaryContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrimaryContainerComponent = /** @class */ (function () {
    function PrimaryContainerComponent() {
    }
    PrimaryContainerComponent.prototype.ngOnInit = function () {
    };
    PrimaryContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-primary-container',
            template: __webpack_require__(/*! ./primary-container.component.html */ "./src/app/components/l2/content/primary-container/primary-container.component.html"),
            styles: [__webpack_require__(/*! ./primary-container.component.scss */ "./src/app/components/l2/content/primary-container/primary-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrimaryContainerComponent);
    return PrimaryContainerComponent;
}());



/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/add-collab-widget/add-collab-widget.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/add-collab-widget/add-collab-widget.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"addcollab\" class=\"card hide widget good\" [hidden]=\"isHidden\">\n  <!-- <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"> -->\n  <div class=\"card-body\">\n      <h5 class=\"card-title\">Create Collaborator</h5>\n      <form>\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3\">\n                  <label for=\"collaboratorName\">Collaborator Name</label>\n                  <input type=\"text\" class=\"form-control\" id=\"collaboratorName\" placeholder=\"Collaborator ID\">\n              </div>\n              <div class=\"form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3\">\n                  <label for=\"repoForCollab\">Repository Name</label>\n                  <input type=\"text\" class=\"form-control\" id=\"repoForCollab\" placeholder=\"Repository To Add collaborator on ....\">\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"comment\">Comment:</label>\n              <textarea class=\"form-control\" rows=\"3\" id=\"comment\"></textarea>\n          </div>\n          <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"modal\" data-dismiss=\"modal\" id=\"btnSubmitAddCollab\" data-target=\"#submitConfirm\">Submit</button>\n      </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/add-collab-widget/add-collab-widget.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/add-collab-widget/add-collab-widget.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbDIvY29udGVudC9wcmltYXJ5LWNvbnRhaW5lci93aWRnZXQvYWRkLWNvbGxhYi13aWRnZXQvYWRkLWNvbGxhYi13aWRnZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/add-collab-widget/add-collab-widget.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/add-collab-widget/add-collab-widget.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AddCollabWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCollabWidgetComponent", function() { return AddCollabWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddCollabWidgetComponent = /** @class */ (function () {
    function AddCollabWidgetComponent() {
    }
    AddCollabWidgetComponent.prototype.ngOnInit = function () {
        this.isHidden = true;
        // console.log('add collab on init fired');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AddCollabWidgetComponent.prototype, "isHidden", void 0);
    AddCollabWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-collab-widget',
            template: __webpack_require__(/*! ./add-collab-widget.component.html */ "./src/app/components/l2/content/primary-container/widget/add-collab-widget/add-collab-widget.component.html"),
            styles: [__webpack_require__(/*! ./add-collab-widget.component.scss */ "./src/app/components/l2/content/primary-container/widget/add-collab-widget/add-collab-widget.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddCollabWidgetComponent);
    return AddCollabWidgetComponent;
}());



/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/add-issue-comment-widget/add-issue-comment-widget.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/add-issue-comment-widget/add-issue-comment-widget.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"addissuecomment\" class=\"card hide widget good\" [hidden]=\"isHidden\">\n  <!-- <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"> -->\n  <div class=\"card-body\">\n      <h5 class=\"card-title\">Add Comment</h5>\n      <form>\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3\">\n                  <label for=\"repoForIssueComment\">Repository Name</label>\n                  <input type=\"text\" class=\"form-control\" id=\"repoForIssueComment\" placeholder=\"Repository Name....\">\n              </div>\n              <div class=\"form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3\">\n                  <label for=\"issueNumber\">Issue Number</label>\n                  <input type=\"text\" class=\"form-control\" id=\"issueNumber\" placeholder=\"Issue To Comment On...\">\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"issueComment\">Comment:</label>\n              <textarea class=\"form-control\" rows=\"3\" id=\"issueComment\"></textarea>\n          </div>\n          <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"modal\" data-dismiss=\"modal\" id=\"btnSubmitAddComment\" data-target=\"#submitConfirm\">Submit</button>\n      </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/add-issue-comment-widget/add-issue-comment-widget.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/add-issue-comment-widget/add-issue-comment-widget.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbDIvY29udGVudC9wcmltYXJ5LWNvbnRhaW5lci93aWRnZXQvYWRkLWlzc3VlLWNvbW1lbnQtd2lkZ2V0L2FkZC1pc3N1ZS1jb21tZW50LXdpZGdldC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/add-issue-comment-widget/add-issue-comment-widget.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/add-issue-comment-widget/add-issue-comment-widget.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: AddIssueCommentWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIssueCommentWidgetComponent", function() { return AddIssueCommentWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddIssueCommentWidgetComponent = /** @class */ (function () {
    function AddIssueCommentWidgetComponent() {
    }
    AddIssueCommentWidgetComponent.prototype.ngOnInit = function () {
        this.isHidden = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AddIssueCommentWidgetComponent.prototype, "isHidden", void 0);
    AddIssueCommentWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-issue-comment-widget',
            template: __webpack_require__(/*! ./add-issue-comment-widget.component.html */ "./src/app/components/l2/content/primary-container/widget/add-issue-comment-widget/add-issue-comment-widget.component.html"),
            styles: [__webpack_require__(/*! ./add-issue-comment-widget.component.scss */ "./src/app/components/l2/content/primary-container/widget/add-issue-comment-widget/add-issue-comment-widget.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddIssueCommentWidgetComponent);
    return AddIssueCommentWidgetComponent;
}());



/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/close-issue-widget/close-issue-widget.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/close-issue-widget/close-issue-widget.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"closeissue\" class=\"card hide widget good\" [hidden]=\"isHidden\">\n  <div class=\"card-body\">\n      <h5 class=\"card-title\">Close Issue</h5>\n      <form>\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3\">\n                  <label for=\"repoForIssueClose\">Repository Name</label>\n                  <input type=\"text\" class=\"form-control\" id=\"repoForIssueClose\" placeholder=\"Repository Name....\">\n              </div>\n              <div class=\"form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3\">\n                  <label for=\"issueNumerToClose\">Issue To Close</label>\n                  <input type=\"text\" class=\"form-control\" id=\"issueNumerToClose\" placeholder=\"Specify issue number...\">\n              </div>\n          </div>\n          <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"modal\" data-dismiss=\"modal\" id=\"btnSubmitCloseIssue\" data-target=\"#submitConfirm\">Submit</button>\n      </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/close-issue-widget/close-issue-widget.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/close-issue-widget/close-issue-widget.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbDIvY29udGVudC9wcmltYXJ5LWNvbnRhaW5lci93aWRnZXQvY2xvc2UtaXNzdWUtd2lkZ2V0L2Nsb3NlLWlzc3VlLXdpZGdldC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/close-issue-widget/close-issue-widget.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/close-issue-widget/close-issue-widget.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: CloseIssueWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIssueWidgetComponent", function() { return CloseIssueWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CloseIssueWidgetComponent = /** @class */ (function () {
    function CloseIssueWidgetComponent() {
    }
    CloseIssueWidgetComponent.prototype.ngOnInit = function () {
        this.isHidden = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CloseIssueWidgetComponent.prototype, "isHidden", void 0);
    CloseIssueWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-close-issue-widget',
            template: __webpack_require__(/*! ./close-issue-widget.component.html */ "./src/app/components/l2/content/primary-container/widget/close-issue-widget/close-issue-widget.component.html"),
            styles: [__webpack_require__(/*! ./close-issue-widget.component.scss */ "./src/app/components/l2/content/primary-container/widget/close-issue-widget/close-issue-widget.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CloseIssueWidgetComponent);
    return CloseIssueWidgetComponent;
}());



/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/create-issue-widget/create-issue-widget.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/create-issue-widget/create-issue-widget.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"createissue\" class=\"card hide widget good\" [hidden]=\"isHidden\">\n  <!-- <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"> -->\n  <div class=\"card-body\">\n      <h5 class=\"card-title\">Create Issue</h5>\n      <form>\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3\">\n                  <label for=\"issueTitle\">Issue Title</label>\n                  <input type=\"text\" class=\"form-control\" id=\"issueTitle\" placeholder=\"Issue title\">\n              </div>\n              <div class=\"form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3\">\n                  <label for=\"issueRepository\">Issue Repository</label>\n                  <input type=\"text\" class=\"form-control\" id=\"issueRepository\" placeholder=\"Issue's Repository here\">\n              </div>\n          </div>\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3\">\n                  <label for=\"assignees\">Assignees</label>\n                  <input type=\"text\" class=\"form-control\" id=\"assignees\" placeholder=\"Comma Separated user IDs...\">\n              </div>\n              <div class=\"form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3\">\n                  <label for=\"labels\">Issue Labels</label>\n                  <input type=\"text\" class=\"form-control\" id=\"labels\" placeholder=\"Comma Separated Labels...\">\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"description\">Issue Description:</label>\n              <textarea class=\"form-control\" rows=\"3\" id=\"description\"></textarea>\n          </div>\n          <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"modal\" data-dismiss=\"modal\" id=\"btnSubmitConfirm\" data-target=\"#submitConfirm\">Submit</button>\n      </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/create-issue-widget/create-issue-widget.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/create-issue-widget/create-issue-widget.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbDIvY29udGVudC9wcmltYXJ5LWNvbnRhaW5lci93aWRnZXQvY3JlYXRlLWlzc3VlLXdpZGdldC9jcmVhdGUtaXNzdWUtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/create-issue-widget/create-issue-widget.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/create-issue-widget/create-issue-widget.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: CreateIssueWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIssueWidgetComponent", function() { return CreateIssueWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateIssueWidgetComponent = /** @class */ (function () {
    function CreateIssueWidgetComponent() {
    }
    CreateIssueWidgetComponent.prototype.ngOnInit = function () {
        this.isHidden = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CreateIssueWidgetComponent.prototype, "isHidden", void 0);
    CreateIssueWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-issue-widget',
            template: __webpack_require__(/*! ./create-issue-widget.component.html */ "./src/app/components/l2/content/primary-container/widget/create-issue-widget/create-issue-widget.component.html"),
            styles: [__webpack_require__(/*! ./create-issue-widget.component.scss */ "./src/app/components/l2/content/primary-container/widget/create-issue-widget/create-issue-widget.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateIssueWidgetComponent);
    return CreateIssueWidgetComponent;
}());



/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/create-repo-widget/create-repo-widget.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/create-repo-widget/create-repo-widget.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n  id=\"createrepo\" \n  [ngClass]=\"{'card widget good': true, 'hide': isHidden}\"\n  [hidden]=\"isHidden\"\n  #widget>\n    <div class=\"card-body\">\n        <div class=\"card-title\">Create Repository</div>\n        <form>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3\">\n                    <label for=\"repositoryName\">Repository Name</label>\n                    <input type=\"text\" id=\"repositoryName\" placeholder=\"Repository Name... \" class=\"form-control\">\n                </div>\n                <div class=\"form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3\">\n                    <label for=\"homePageURL\">Home Page URL</label>\n                    <input type=\"text\" id=\"homePageURL\" placeholder=\"Home Page URL... \" class=\"form-control\">\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-3 col-sm-3 col-lg-3 col-xs-3 mb-3\">\n                    <div class=\"form-check form-check-inline\">\n                        <input type=\"checkbox\" id=\"privateRepoChk\" value=\"Option 1\" class=\"form-check-input\">\n                        <label for=\"privateRepoChk\" class=\"form-check-label\">Private</label>\n                    </div>\n                </div>\n                <div class=\"form-group col-md-4 col-sm-4 col-lg-4 col-xs-4 mb-3\">\n                    <div class=\"form-check form-check-inline\">\n                        <input type=\"checkbox\" id=\"issuesChk\" value=\"Option 2\" class=\"form-check-input\">\n                        <label for=\"issuesChk\" class=\"form-check-label\">Allow Adding Issues?</label>\n                    </div>\n                </div>\n                <div class=\"form-group col-md-4 col-sm-4 col-lg-4 col-xs-4 mb-3\">\n                    <div class=\"form-check form-check-inline\">\n                        <input type=\"checkbox\" id=\"wikiChk\" value=\"Option 3\" class=\"form-check-input\">\n                        <label for=\"wikiChk\" class=\"form-check-label\">Add Wiki?</label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\">Add some Description for this repository:</label>\n                <textarea rows=\"3\" class=\"form-control\" id=\"description\"></textarea>\n            </div>\n            <button type=\"button\" data-toggle=\"modal\" data-target=\"#submitConfirm\" id=\"submitForm\" class=\"btn btn-primary\">Submit</button>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/create-repo-widget/create-repo-widget.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/create-repo-widget/create-repo-widget.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbDIvY29udGVudC9wcmltYXJ5LWNvbnRhaW5lci93aWRnZXQvY3JlYXRlLXJlcG8td2lkZ2V0L2NyZWF0ZS1yZXBvLXdpZGdldC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/create-repo-widget/create-repo-widget.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/create-repo-widget/create-repo-widget.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: CreateRepoWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRepoWidgetComponent", function() { return CreateRepoWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateRepoWidgetComponent = /** @class */ (function () {
    function CreateRepoWidgetComponent() {
    }
    CreateRepoWidgetComponent.prototype.ngOnInit = function () {
        this.isHidden = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CreateRepoWidgetComponent.prototype, "isHidden", void 0);
    CreateRepoWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-repo-widget',
            template: __webpack_require__(/*! ./create-repo-widget.component.html */ "./src/app/components/l2/content/primary-container/widget/create-repo-widget/create-repo-widget.component.html"),
            styles: [__webpack_require__(/*! ./create-repo-widget.component.scss */ "./src/app/components/l2/content/primary-container/widget/create-repo-widget/create-repo-widget.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateRepoWidgetComponent);
    return CreateRepoWidgetComponent;
}());



/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/display-last-comment-widget/display-last-comment-widget.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/display-last-comment-widget/display-last-comment-widget.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"displaylastcomment\" class=\"card hide widget good\" [hidden]=\"isHidden\">\n  <div class=\"card-body\">\n      <h5 class=\"card-title\">Display Last Comment</h5>\n      <form>\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3\">\n                  <label for=\"repoForCommentView\">Repository Name</label>\n                  <input type=\"text\" class=\"form-control\" id=\"repoForCommentView\" placeholder=\"Repository Name....\">\n              </div>\n              <div class=\"form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3\">\n                  <label for=\"issueNumberForCommentView\">Issue To Close</label>\n                  <input type=\"text\" class=\"form-control\" id=\"issueNumberForCommentView\" placeholder=\"Specify issue number...\">\n              </div>\n          </div>\n          <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"modal\" data-dismiss=\"modal\" id=\"btnSubmitCommentView\" data-target=\"#submitConfirm\">Submit</button>\n      </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/display-last-comment-widget/display-last-comment-widget.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/display-last-comment-widget/display-last-comment-widget.component.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbDIvY29udGVudC9wcmltYXJ5LWNvbnRhaW5lci93aWRnZXQvZGlzcGxheS1sYXN0LWNvbW1lbnQtd2lkZ2V0L2Rpc3BsYXktbGFzdC1jb21tZW50LXdpZGdldC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/display-last-comment-widget/display-last-comment-widget.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/display-last-comment-widget/display-last-comment-widget.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: DisplayLastCommentWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayLastCommentWidgetComponent", function() { return DisplayLastCommentWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisplayLastCommentWidgetComponent = /** @class */ (function () {
    function DisplayLastCommentWidgetComponent() {
    }
    DisplayLastCommentWidgetComponent.prototype.ngOnInit = function () {
        this.isHidden = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DisplayLastCommentWidgetComponent.prototype, "isHidden", void 0);
    DisplayLastCommentWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-last-comment-widget',
            template: __webpack_require__(/*! ./display-last-comment-widget.component.html */ "./src/app/components/l2/content/primary-container/widget/display-last-comment-widget/display-last-comment-widget.component.html"),
            styles: [__webpack_require__(/*! ./display-last-comment-widget.component.scss */ "./src/app/components/l2/content/primary-container/widget/display-last-comment-widget/display-last-comment-widget.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DisplayLastCommentWidgetComponent);
    return DisplayLastCommentWidgetComponent;
}());



/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/view-repo-widget/view-repo-widget.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/view-repo-widget/view-repo-widget.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"viewrepos\" class=\"card hide widget good\" [hidden]=\"isHidden\">\n  <div class=\"card-body\">\n      <h5 class=\"card-title\">View Repositories</h5>\n      <form>\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3\">\n                  <p>View Repositories for the user mohiit1502?</p>\n              </div>\n          </div>\n          <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"modal\" data-dismiss=\"modal\" id=\"btnSubmitViewRepo\" data-target=\"#submitConfirm\">Submit</button>\n      </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/view-repo-widget/view-repo-widget.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/view-repo-widget/view-repo-widget.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbDIvY29udGVudC9wcmltYXJ5LWNvbnRhaW5lci93aWRnZXQvdmlldy1yZXBvLXdpZGdldC92aWV3LXJlcG8td2lkZ2V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/view-repo-widget/view-repo-widget.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/view-repo-widget/view-repo-widget.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ViewRepoWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRepoWidgetComponent", function() { return ViewRepoWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewRepoWidgetComponent = /** @class */ (function () {
    function ViewRepoWidgetComponent() {
    }
    ViewRepoWidgetComponent.prototype.ngOnInit = function () {
        this.isHidden = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ViewRepoWidgetComponent.prototype, "isHidden", void 0);
    ViewRepoWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-repo-widget',
            template: __webpack_require__(/*! ./view-repo-widget.component.html */ "./src/app/components/l2/content/primary-container/widget/view-repo-widget/view-repo-widget.component.html"),
            styles: [__webpack_require__(/*! ./view-repo-widget.component.scss */ "./src/app/components/l2/content/primary-container/widget/view-repo-widget/view-repo-widget.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewRepoWidgetComponent);
    return ViewRepoWidgetComponent;
}());



/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/widget.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/widget.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-add-collab-widget></app-add-collab-widget>\n<app-add-issue-comment-widget></app-add-issue-comment-widget>\n<app-close-issue-widget></app-close-issue-widget>\n<app-create-issue-widget></app-create-issue-widget>\n<app-create-repo-widget></app-create-repo-widget>\n<app-display-last-comment-widget></app-display-last-comment-widget>\n<app-view-repo-widget></app-view-repo-widget>\n<div class=\"line hide\" id=\"underWidgetLine\" #underWidgetLine></div>"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/widget.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/widget.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".line {\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px dashed #ddd;\n  margin: 20px 0; }\n\n.hide {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhYXN1L1Byb2plY3RzL01pY3JvYm90L01pY3JvYm90LXYyL3NyYy9hcHAvY29tcG9uZW50cy9sMi9jb250ZW50L3ByaW1hcnktY29udGFpbmVyL3dpZGdldC93aWRnZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sMi9jb250ZW50L3ByaW1hcnktY29udGFpbmVyL3dpZGdldC93aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/l2/content/primary-container/widget/widget.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/l2/content/primary-container/widget/widget.component.ts ***!
  \************************************************************************************/
/*! exports provided: WidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetComponent", function() { return WidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dom/dom-ops.service */ "./src/app/services/dom/dom-ops.service.ts");
/* harmony import */ var src_app_services_github_github_ops_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/github/github-ops.service */ "./src/app/services/github/github-ops.service.ts");
/* harmony import */ var src_app_services_cards_card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cards/card.service */ "./src/app/services/cards/card.service.ts");
/* harmony import */ var src_app_store_cards_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/cards.actions */ "./src/app/store/cards.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _add_collab_widget_add_collab_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-collab-widget/add-collab-widget.component */ "./src/app/components/l2/content/primary-container/widget/add-collab-widget/add-collab-widget.component.ts");
/* harmony import */ var _add_issue_comment_widget_add_issue_comment_widget_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-issue-comment-widget/add-issue-comment-widget.component */ "./src/app/components/l2/content/primary-container/widget/add-issue-comment-widget/add-issue-comment-widget.component.ts");
/* harmony import */ var _create_repo_widget_create_repo_widget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-repo-widget/create-repo-widget.component */ "./src/app/components/l2/content/primary-container/widget/create-repo-widget/create-repo-widget.component.ts");
/* harmony import */ var _close_issue_widget_close_issue_widget_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./close-issue-widget/close-issue-widget.component */ "./src/app/components/l2/content/primary-container/widget/close-issue-widget/close-issue-widget.component.ts");
/* harmony import */ var _create_issue_widget_create_issue_widget_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-issue-widget/create-issue-widget.component */ "./src/app/components/l2/content/primary-container/widget/create-issue-widget/create-issue-widget.component.ts");
/* harmony import */ var _display_last_comment_widget_display_last_comment_widget_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./display-last-comment-widget/display-last-comment-widget.component */ "./src/app/components/l2/content/primary-container/widget/display-last-comment-widget/display-last-comment-widget.component.ts");
/* harmony import */ var _view_repo_widget_view_repo_widget_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-repo-widget/view-repo-widget.component */ "./src/app/components/l2/content/primary-container/widget/view-repo-widget/view-repo-widget.component.ts");
/* harmony import */ var _configuration_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../configuration/config */ "./src/app/configuration/config.js");
/* harmony import */ var _configuration_config__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_configuration_config__WEBPACK_IMPORTED_MODULE_13__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var WidgetComponent = /** @class */ (function () {
    function WidgetComponent(domOpsService, githubService, cardsService, store) {
        this.domOpsService = domOpsService;
        this.githubService = githubService;
        this.cardsService = cardsService;
        this.store = store;
    }
    WidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.intentmap = {
            'createrepo': this.createRepoWidgetComponent,
            'createissue': this.createIssueWidgetComponent,
            'closeissue': this.closeIssueWidgetComponent,
            'addissuecomment': this.addIssueCommentWidgetComponent,
            'displaylastcomment': this.displayLastCommentWidgetComponent,
            'addcollab': this.addCollabWidgetComponent,
            'viewrepos': this.viewRepoWidgetComponent,
        };
        this.domOpsService.commandPromptEnteredWithValue.subscribe(function () {
            Object.keys(_this.intentmap).forEach(function (key) {
                _this.intentmap[key].isHidden = true;
            });
            _this.underWidgetLine.nativeElement.classList.add('hide');
        });
        this.domOpsService.widgetIdentified.subscribe(function (intent) {
            _this.intentmap[intent.widget].isHidden = false;
            _this.underWidgetLine.nativeElement.classList.remove('hide');
            // this.domOpsService.populateRecastData(intent.widget.slug, );
        });
        this.githubService.gitOperationIdentified.subscribe(function (gitOperation) {
            var data = _this.domOpsService.getDataFromFormAsJSON();
            var intent = window.localStorage.getItem(_configuration_config__WEBPACK_IMPORTED_MODULE_13__["constants"].hiddenIntentFieldId);
            data.intent = intent;
            _this.githubService[gitOperation](data);
            var card = _this.cardsService.getResponseCard(_configuration_config__WEBPACK_IMPORTED_MODULE_13__["intentSlugToOperations"][intent].successMessage, "", data, "response");
            var commandAction = new src_app_store_cards_actions__WEBPACK_IMPORTED_MODULE_4__["Command"](card);
            _this.store.dispatch(commandAction);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('widget'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WidgetComponent.prototype, "widget", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('underWidgetLine'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WidgetComponent.prototype, "underWidgetLine", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_add_collab_widget_add_collab_widget_component__WEBPACK_IMPORTED_MODULE_6__["AddCollabWidgetComponent"]),
        __metadata("design:type", _add_collab_widget_add_collab_widget_component__WEBPACK_IMPORTED_MODULE_6__["AddCollabWidgetComponent"])
    ], WidgetComponent.prototype, "addCollabWidgetComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_add_issue_comment_widget_add_issue_comment_widget_component__WEBPACK_IMPORTED_MODULE_7__["AddIssueCommentWidgetComponent"]),
        __metadata("design:type", _add_issue_comment_widget_add_issue_comment_widget_component__WEBPACK_IMPORTED_MODULE_7__["AddIssueCommentWidgetComponent"])
    ], WidgetComponent.prototype, "addIssueCommentWidgetComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_close_issue_widget_close_issue_widget_component__WEBPACK_IMPORTED_MODULE_9__["CloseIssueWidgetComponent"]),
        __metadata("design:type", _close_issue_widget_close_issue_widget_component__WEBPACK_IMPORTED_MODULE_9__["CloseIssueWidgetComponent"])
    ], WidgetComponent.prototype, "closeIssueWidgetComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_create_issue_widget_create_issue_widget_component__WEBPACK_IMPORTED_MODULE_10__["CreateIssueWidgetComponent"]),
        __metadata("design:type", _create_issue_widget_create_issue_widget_component__WEBPACK_IMPORTED_MODULE_10__["CreateIssueWidgetComponent"])
    ], WidgetComponent.prototype, "createIssueWidgetComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_create_repo_widget_create_repo_widget_component__WEBPACK_IMPORTED_MODULE_8__["CreateRepoWidgetComponent"]),
        __metadata("design:type", _create_repo_widget_create_repo_widget_component__WEBPACK_IMPORTED_MODULE_8__["CreateRepoWidgetComponent"])
    ], WidgetComponent.prototype, "createRepoWidgetComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_display_last_comment_widget_display_last_comment_widget_component__WEBPACK_IMPORTED_MODULE_11__["DisplayLastCommentWidgetComponent"]),
        __metadata("design:type", _display_last_comment_widget_display_last_comment_widget_component__WEBPACK_IMPORTED_MODULE_11__["DisplayLastCommentWidgetComponent"])
    ], WidgetComponent.prototype, "displayLastCommentWidgetComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_view_repo_widget_view_repo_widget_component__WEBPACK_IMPORTED_MODULE_12__["ViewRepoWidgetComponent"]),
        __metadata("design:type", _view_repo_widget_view_repo_widget_component__WEBPACK_IMPORTED_MODULE_12__["ViewRepoWidgetComponent"])
    ], WidgetComponent.prototype, "viewRepoWidgetComponent", void 0);
    WidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget',
            template: __webpack_require__(/*! ./widget.component.html */ "./src/app/components/l2/content/primary-container/widget/widget.component.html"),
            styles: [__webpack_require__(/*! ./widget.component.scss */ "./src/app/components/l2/content/primary-container/widget/widget.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_1__["DomOpsService"],
            src_app_services_github_github_ops_service__WEBPACK_IMPORTED_MODULE_2__["GithubOpsService"],
            src_app_services_cards_card_service__WEBPACK_IMPORTED_MODULE_3__["CardService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], WidgetComponent);
    return WidgetComponent;
}());



/***/ }),

/***/ "./src/app/components/l2/sidebar/sidebar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/l2/sidebar/sidebar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"sidebar\" class=\"active\">\n  <span class=\"triangle animation\" id=\"pullOutButton\"></span>\n  <div class=\"sidebar-header\">\n    <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info\">\n      <i class=\"fas fa-align-justify\"></i>\n    </button>\n    <h3 class=\"logotext\">Microbot</h3>\n    <!-- <strong>MB</strong> -->\n  </div>\n\n  <ul class=\"list-unstyled components\">\n    <li class=\"active\">\n      <!-- data-toggle=\"collapse\"  -->\n      <a href=\"#homeSubmenu\">\n        <i class=\"fas fa-home\"></i>\n        <span class=\"hideable hide\">Home</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"#\">\n        <i class=\"fas fa-briefcase\"></i>\n        <span class=\"hideable hide\">About</span>\n      </a>\n      <a href=\"#pageSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">\n        <i class=\"fas fa-copy\"></i>\n        <span class=\"hideable hide\">Tasks</span>\n      </a>\n      <ul class=\"collapse list-unstyled\" id=\"pageSubmenu\">\n        <li>\n          <a href=\"#\">Repo</a>\n        </li>\n        <li>\n          <a href=\"#\">Issues</a>\n        </li>\n        <li>\n          <a href=\"#\">Admin</a>\n        </li>\n      </ul>\n    </li>\n    <li>\n      <a href=\"#\">\n        <i class=\"fas fa-image\"></i>\n        <span class=\"hideable hide\">Favorites</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"#\">\n        <i class=\"fas fa-question\"></i>\n        <span class=\"hideable hide\">FAQ</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"#\">\n        <i class=\"fas fa-paper-plane\"></i>\n        <span class=\"hideable hide\">Contact</span>\n      </a>\n    </li>\n    <li>\n        <a href=\"#\">\n          <i class=\"fas fa-cogs\"></i>\n          <span class=\"hideable hide\">Settings</span>\n        </a>\n      </li>\n  </ul>\n\n  <!-- <ul class=\"list-unstyled CTAs\">\n      <li>\n          <a href=\"https://bootstrapious.com/tutorial/files/sidebar.zip\" class=\"download\">Download source</a>\n      </li>\n      <li>\n          <a href=\"https://bootstrapious.com/p/bootstrap-sidebar\" class=\"article\">Back to article</a>\n      </li>\n  </ul> -->\n</nav>\n"

/***/ }),

/***/ "./src/app/components/l2/sidebar/sidebar.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/l2/sidebar/sidebar.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%; }\n\na,\na:hover,\na:focus {\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s; }\n\n.navbar {\n  padding: 15px 10px;\n  background: #fff;\n  border: none;\n  border-radius: 0 5px 5px 0;\n  margin-bottom: 40px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); }\n\n.navbar-btn {\n  box-shadow: none;\n  outline: none !important;\n  border: none; }\n\n.line {\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px dashed #ddd;\n  margin: 20px 0; }\n\ni,\nspan {\n  display: inline-block; }\n\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n\n#sidebar {\n  min-width: 250px;\n  max-width: 250px;\n  background: #f39c12;\n  color: #252525;\n  transition: all 0.3s;\n  height: 100%;\n  position: fixed;\n  z-index: 10;\n  left: -255px; }\n\n#sidebar .triangle {\n    position: absolute;\n    background-color: #f39c12;\n    opacity: 0.8;\n    text-align: left;\n    left: 6em;\n    top: 50%;\n    cursor: pointer; }\n\n#sidebar .triangle:before {\n      content: '';\n      width: 20px;\n      height: 50px;\n      -webkit-transform: skewY(25deg);\n              transform: skewY(25deg);\n      background-color: #f39c12;\n      position: absolute;\n      top: 40px;\n      border-radius: 8px; }\n\n#sidebar .triangle:after {\n      content: '';\n      width: 20px;\n      height: 50px;\n      -webkit-transform: skewY(155deg);\n              transform: skewY(155deg);\n      background-color: #f39c12;\n      position: absolute;\n      top: 60px;\n      border-radius: 8px; }\n\n#sidebar .triangle.animation {\n      animation: pulse 2s infinite;\n      -ms-animation: pulse 2s infinite;\n      -moz-animation: pulse 2s infinite;\n      -webkit-animation: pulse 2s infinite; }\n\n#sidebar.active {\n    min-width: 80px;\n    max-width: 80px;\n    text-align: center;\n    left: -85px; }\n\n#sidebar.active .sidebar-header h3, #sidebar.active .CTAs {\n      display: none; }\n\n@-webkit-keyframes pulse {\n  from {\n    background-color: #f39c12;\n    box-shadow: 0 0 9px rgba(255, 255, 255, 0.5); }\n  50% {\n    background-color: rgba(255, 255, 255, 0.5);\n    box-shadow: 0 0 18px #f39c12; }\n  to {\n    background-color: #f39c12;\n    box-shadow: 0 0 9px rgba(255, 255, 255, 0.5); } }\n\n@keyframes pulse {\n  from {\n    background-color: #f39c12;\n    box-shadow: 0 0 9px rgba(255, 255, 255, 0.5); }\n  50% {\n    background-color: rgba(255, 255, 255, 0.5);\n    box-shadow: 0 0 18px #f39c12; }\n  to {\n    background-color: #f39c12;\n    box-shadow: 0 0 9px rgba(255, 255, 255, 0.5); } }\n\n.sidebar-header h3 {\n  display: inline;\n  padding-left: 0.6em;\n  vertical-align: middle; }\n\n#sidebar.active .sidebar-header strong {\n  display: block; }\n\n#sidebar ul li a {\n  text-align: left; }\n\n#sidebar.active ul li a {\n  padding: 20px 10px;\n  text-align: center;\n  font-size: 0.85em; }\n\n#sidebar.active ul li a i {\n  margin-right: 0;\n  display: block;\n  font-size: 1.8em;\n  margin-bottom: 5px; }\n\n#sidebar.active ul ul a {\n  padding: 10px !important; }\n\n#sidebar.active .dropdown-toggle::after {\n  top: auto;\n  bottom: 10px;\n  right: 50%;\n  -webkit-transform: translateX(50%);\n  transform: translateX(50%); }\n\n#sidebar .sidebar-header {\n  padding: 20px;\n  background: #252525; }\n\n#sidebar .sidebar-header strong {\n  display: none;\n  font-size: 1.8em; }\n\n#sidebar ul.components {\n  padding: 20px 0;\n  border-bottom: 3px solid #252525; }\n\n#sidebar ul li a {\n  padding: 10px;\n  font-size: 1.1em;\n  display: block; }\n\n#sidebar ul li a:hover {\n  color: #7386D5;\n  background: #fff; }\n\n#sidebar ul li a i {\n  margin-right: 10px; }\n\n#sidebar ul li.active > a,\na[aria-expanded=\"true\"] {\n  color: #f39c12;\n  background: #252525; }\n\na[data-toggle=\"collapse\"] {\n  position: relative; }\n\n.dropdown-toggle::after {\n  display: block;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\nul ul a {\n  font-size: 0.9em !important;\n  padding-left: 30px !important;\n  background: white;\n  font-weight: bolder; }\n\nul.CTAs {\n  padding: 20px; }\n\nul.CTAs a {\n  text-align: center;\n  font-size: 0.9em !important;\n  display: block;\n  border-radius: 5px;\n  margin-bottom: 5px; }\n\na.download {\n  background: #fff;\n  color: #7386D5; }\n\na.article,\na.article:hover {\n  background: #6d7fcc !important;\n  color: #fff !important; }\n\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n\n#content {\n  width: 100%;\n  padding: 20px;\n  min-height: 100vh;\n  transition: all 0.3s; }\n\n/* ---------------------------------------------------\n    MEDIAQUERIES\n----------------------------------------------------- */\n\n@media (max-width: 768px) {\n  #sidebar {\n    min-width: 80px;\n    max-width: 80px;\n    text-align: center;\n    margin-left: -80px !important; }\n  .dropdown-toggle::after {\n    top: auto;\n    bottom: 10px;\n    right: 50%;\n    -webkit-transform: translateX(50%);\n    transform: translateX(50%); }\n  #sidebar.active {\n    margin-left: 0 !important; }\n  #sidebar .sidebar-header h3,\n  #sidebar .CTAs {\n    display: none; }\n  #sidebar .sidebar-header strong {\n    display: block; }\n  #sidebar ul li a {\n    padding: 20px 10px; }\n  #sidebar ul li a span {\n    font-size: 0.85em; }\n  #sidebar ul li a i {\n    margin-right: 0;\n    display: block; }\n  #sidebar ul ul a {\n    padding: 10px !important; }\n  #sidebar ul li a i {\n    font-size: 1.3em; }\n  #sidebar {\n    margin-left: 0; }\n  #sidebarCollapse span {\n    display: none; }\n  .text-muted {\n    color: #bcb !important; } }\n\n@media (min-width: 576px) {\n  .card-group > .card:first-child {\n    border-top-right-radius: .25rem;\n    border-bottom-right-radius: .25rem; }\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {\n    border-radius: .25rem; }\n  .card-group > .card:last-child {\n    border-top-left-radius: .25rem;\n    border-bottom-left-radius: .25rem; } }\n\n/* -------------------------------------------------\nADDITIONS\n--------------------------------------------------*/\n\n.hide {\n  display: none; }\n\n.prompt {\n  display: flex;\n  width: 2em;\n  border-right: 1px solid #c99034;\n  background-color: #f5d38b;\n  width: 4%;\n  margin-bottom: 40px;\n  border-radius: 4px 0 0 4px; }\n\n.promptext {\n  -webkit-animation: blinkingText 0.8s infinite;\n          animation: blinkingText 0.8s infinite;\n  color: #975f04;\n  text-align: center;\n  line-height: 2em;\n  font: 1.5em bolder;\n  margin: auto; }\n\n.good {\n  -webkit-animation: anim .3s ease-in-out;\n          animation: anim .3s ease-in-out; }\n\n.repoLink {\n  color: #000;\n  font-weight: bolder;\n  text-decoration: underline; }\n\n.headerprompt {\n  display: flex;\n  width: 100%; }\n\n.logotext {\n  color: #f39c12; }\n\n#content nav div.collapse li a.nav-link i.far {\n  color: #f39c12;\n  font-size: 1.8em;\n  padding: 0.2em; }\n\n#loading-img {\n  background: url(http://preloaders.net/preloaders/360/Velocity.gif) center center no-repeat;\n  height: 100%;\n  z-index: 20; }\n\n.overlay {\n  background: #e9e9e9;\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0.5; }\n\n.loader {\n  border: 0px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 2px solid #3498db;\n  border-right: 2px solid #3498db;\n  width: 20px;\n  height: 20px;\n  -webkit-animation: spin 2s linear infinite;\n  /* Safari */\n  animation: spin 2s linear infinite; }\n\n.card:not(.widget) {\n  background: linear-gradient(to right, white, lightblue); }\n\n.light-red {\n  background: linear-gradient(to right, white, #dfc99a); }\n\n.featureRequest {\n  background-color: #007bff;\n  color: white;\n  font-size: 1.5em;\n  padding: 10px 20px;\n  border-radius: 30px; }\n\n#featureRequest {\n  position: fixed;\n  bottom: 2em;\n  right: 2.5em; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@-webkit-keyframes anim {\n  0% {\n    display: none;\n    opacity: 0; }\n  1% {\n    display: block;\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes anim {\n  0% {\n    display: none;\n    opacity: 0; }\n  1% {\n    display: block;\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes blinkingText {\n  0% {\n    color: #000; }\n  49% {\n    color: transparent; }\n  50% {\n    color: transparent; }\n  99% {\n    color: transparent; }\n  100% {\n    color: #000; } }\n\n@keyframes blinkingText {\n  0% {\n    color: #000; }\n  49% {\n    color: transparent; }\n  50% {\n    color: transparent; }\n  99% {\n    color: transparent; }\n  100% {\n    color: #000; } }\n\n/* --------------------------------------------------\n  OVERRIDES\n  --------------------------------------------------*/\n\n.btn:not(.featureRequest) {\n  background-color: #f39c12;\n  color: #252525; }\n\n#content #header .navbar {\n  width: 96%; }\n\n.navbar-form {\n  width: 88%; }\n\n.form-control {\n  padding: .6rem 1em; }\n\n.container-fluid {\n  padding-left: 0.3em; }\n\n.card-group {\n  flex-direction: column; }\n\n#command.form-control {\n  width: 87%; }\n\n.ml-auto {\n  margin-left: 0 !important; }\n\n.btn-info {\n  border-color: orange; }\n\n.btn-info:hover {\n  border-color: orange;\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhYXN1L1Byb2plY3RzL01pY3JvYm90L01pY3JvYm90LXYyL3NyYy9hcHAvY29tcG9uZW50cy9sMi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbDIvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdmFhc3UvUHJvamVjdHMvTWljcm9ib3QvTWljcm9ib3QtdjIvc3JjL3Nhc3MvX192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7OztFQUdJLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQiwwQ0FBMEMsRUFBQTs7QUFHOUM7RUFDSSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixjQUFjLEVBQUE7O0FBR2xCOztFQUVJLHFCQUFxQixFQUFBOztBQUd6Qjs7dURDTnVEOztBRFN2RDtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJFNUN3QjtFRjZDeEIsY0UvQ29CO0VGZ0RwQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGVBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQVRoQjtJQVdRLGtCQUFrQjtJQUNsQix5QkVyRG9CO0lGc0RwQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZUFBZSxFQUFBOztBQWpCdkI7TUFtQlksV0FBVztNQUNYLFdBQVc7TUFDWCxZQUFZO01BQ1osK0JBQXVCO2NBQXZCLHVCQUF1QjtNQUN2Qix5QkVoRWdCO01GaUVoQixrQkFBa0I7TUFDbEIsU0FBUztNQUNULGtCQUFrQixFQUFBOztBQTFCOUI7TUE2QlksV0FBVztNQUNYLFdBQVc7TUFDWCxZQUFZO01BQ1osZ0NBQXdCO2NBQXhCLHdCQUF3QjtNQUN4Qix5QkUxRWdCO01GMkVoQixrQkFBa0I7TUFDbEIsU0FBUztNQUNULGtCQUFrQixFQUFBOztBQXBDOUI7TUF1Q1ksNEJBQTRCO01BQzVCLGdDQUFnQztNQUNoQyxpQ0FBaUM7TUFDakMsb0NBQW9DLEVBQUE7O0FBMUNoRDtJQThDUSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7O0FBakRuQjtNQW1EWSxhQUFhLEVBQUE7O0FBS3pCO0VBQ0k7SUFBTyx5QkVsR2lCO0lGa0dzQiw0Q0FBNEMsRUFBQTtFQUMxRjtJQUFNLDBDQUEwQztJQUFFLDRCRW5HMUIsRUFBQTtFRm9HeEI7SUFBSyx5QkVwR21CO0lGb0dvQiw0Q0FBNEMsRUFBQSxFQUFBOztBQUg1RjtFQUNJO0lBQU8seUJFbEdpQjtJRmtHc0IsNENBQTRDLEVBQUE7RUFDMUY7SUFBTSwwQ0FBMEM7SUFBRSw0QkVuRzFCLEVBQUE7RUZvR3hCO0lBQUsseUJFcEdtQjtJRm9Hb0IsNENBQTRDLEVBQUEsRUFBQTs7QUFHNUY7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQixFQUFBOztBQUd4QjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLFNBQVM7RUFDVCxZQUFZO0VBQ1osVUFBVTtFQUNWLGtDQUFrQztFQUVsQywwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxhQUFhO0VBQ2IsbUJFbkpvQixFQUFBOztBRnNKeEI7RUFDSSxhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZTtFQUNmLGdDRTdKb0IsRUFBQTs7QUZnS3hCO0VBQ0ksYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0Qjs7RUFFSSxjRS9Ld0I7RUZnTHhCLG1CRWxMb0IsRUFBQTs7QUZxTHhCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2xCOztFQUVJLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTs7QUFHMUI7O3VEQzdCdUQ7O0FEaUN2RDtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUd4Qjs7dURDL0J1RDs7QURtQ3ZEO0VBQ0k7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw2QkFBNkIsRUFBQTtFQUdqQztJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osVUFBVTtJQUNWLGtDQUFrQztJQUVsQywwQkFBMEIsRUFBQTtFQUU5QjtJQUNJLHlCQUF5QixFQUFBO0VBRTdCOztJQUVJLGFBQWEsRUFBQTtFQUVqQjtJQUNJLGNBQWMsRUFBQTtFQUVsQjtJQUNJLGtCQUFrQixFQUFBO0VBRXRCO0lBQ0ksaUJBQWlCLEVBQUE7RUFFckI7SUFDSSxlQUFlO0lBQ2YsY0FBYyxFQUFBO0VBRWxCO0lBQ0ksd0JBQXdCLEVBQUE7RUFFNUI7SUFDSSxnQkFBZ0IsRUFBQTtFQUVwQjtJQUNJLGNBQWMsRUFBQTtFQUVsQjtJQUNJLGFBQWEsRUFBQTtFQUVqQjtJQUNJLHNCQUFzQixFQUFBLEVBQ3pCOztBQUdMO0VBQ0k7SUFDSSwrQkFBK0I7SUFDL0Isa0NBQWtDLEVBQUE7RUFFdEM7SUFDSSxxQkFBcUIsRUFBQTtFQUV6QjtJQUNJLDhCQUE4QjtJQUM5QixpQ0FBaUMsRUFBQSxFQUNwQzs7QUFFTDs7bURDbERtRDs7QURxRG5EO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDViwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsNkNBQW9DO1VBQXBDLHFDQUFvQztFQUNwQyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdkO0VBQ0ksdUNBQStCO1VBQS9CLCtCQUErQixFQUFBOztBQUduQztFQUNJLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0UsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNFeFYwQixFQUFBOztBRjJWNUI7RUFDRSxjRTVWMEI7RUY2VjFCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0ksMEZBQTBGO0VBQzFGLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDBDQUEwQztFQUFFLFdBQUE7RUFDNUMsa0NBQWtDLEVBQUE7O0FBRXRDO0VBQ0ksdURBQXVELEVBQUE7O0FBRTNEO0VBRUkscURBQXFELEVBQUE7O0FBSXpEO0VBQ0kseUJBQTBCO0VBQzFCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJO0lBQUssK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBQzVCO0lBQU8saUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUE7O0FBRnBDO0VBQ0k7SUFBSywrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFDNUI7SUFBTyxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQTs7QUFHcEM7RUFDSTtJQUNFLGFBQWE7SUFDYixVQUFVLEVBQUE7RUFFWjtJQUNFLGNBQWM7SUFDZCxVQUFVO0lBQ1YsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsVUFBVTtJQUNWLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQSxFQUFBOztBQVp6QjtFQUNJO0lBQ0UsYUFBYTtJQUNiLFVBQVUsRUFBQTtFQUVaO0lBQ0UsY0FBYztJQUNkLFVBQVU7SUFDViwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSxVQUFVO0lBQ1YsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBLEVBQUE7O0FBR3pCO0VBQ0U7SUFBUSxXQUFXLEVBQUE7RUFDbkI7SUFBUSxrQkFBa0IsRUFBQTtFQUMxQjtJQUFRLGtCQUFrQixFQUFBO0VBQzFCO0lBQVEsa0JBQWlCLEVBQUE7RUFDekI7SUFBUSxXQUFXLEVBQUEsRUFBQTs7QUFMckI7RUFDRTtJQUFRLFdBQVcsRUFBQTtFQUNuQjtJQUFRLGtCQUFrQixFQUFBO0VBQzFCO0lBQVEsa0JBQWtCLEVBQUE7RUFDMUI7SUFBUSxrQkFBaUIsRUFBQTtFQUN6QjtJQUFRLFdBQVcsRUFBQSxFQUFBOztBQUdyQjs7cURDOURxRDs7QURpRW5EO0VBQ0UseUJFbmJ3QjtFRm9ieEIsY0V0Ym9CLEVBQUE7O0FGeWJ0QjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHNCQUFxQixFQUFBOztBQUd2QjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHlCQUF3QixFQUFBOztBQUc1QjtFQUNJLG9CQUFvQixFQUFBOztBQUd4QjtFQUNFLG9CQUFvQjtFQUNwQixVQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2wyL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3NyYy9zYXNzL192YXJpYWJsZXMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5hLFxuYTpob3ZlcixcbmE6Zm9jdXMge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm5hdmJhciB7XG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubmF2YmFyLWJ0biB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ubGluZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuXG5pLFxuc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBTSURFQkFSIFNUWUxFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuI3NpZGViYXIge1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtc3VwcGxlbWVudGVyO1xuICAgIGNvbG9yOiAkdGhlbWVDb2xvci1EYXJrO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBsZWZ0OiAtMjU1cHg7XG4gICAgLnRyaWFuZ2xlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtc3VwcGxlbWVudGVyO1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGxlZnQ6IDZlbTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2tld1koMjVkZWcpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLXN1cHBsZW1lbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNrZXdZKDE1NWRlZyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtc3VwcGxlbWVudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA2MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICB9XG4gICAgICAgICYuYW5pbWF0aW9uIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG4gICAgICAgICAgICAtbXMtYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbiAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxlZnQ6IC04NXB4O1xuICAgICAgICAuc2lkZWJhci1oZWFkZXIgaDMsIC5DVEFzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAgIGZyb20geyBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtc3VwcGxlbWVudGVyOyBib3gtc2hhZG93OiAwIDAgOXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxuICAgIDUwJSB7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgYm94LXNoYWRvdzogMCAwIDE4cHggJHRoZW1lLXN1cHBsZW1lbnRlcjsgfVxuICAgIHRvIHsgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLXN1cHBsZW1lbnRlcjsgYm94LXNoYWRvdzogMCAwIDlweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cbn1cblxuLnNpZGViYXItaGVhZGVyIGgzIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nLWxlZnQ6IDAuNmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4jc2lkZWJhci5hY3RpdmUgLnNpZGViYXItaGVhZGVyIHN0cm9uZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNzaWRlYmFyIHVsIGxpIGEge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbiNzaWRlYmFyLmFjdGl2ZSB1bCBsaSBhIHtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xufVxuXG4jc2lkZWJhci5hY3RpdmUgdWwgbGkgYSBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbiNzaWRlYmFyLmFjdGl2ZSB1bCB1bCBhIHtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNzaWRlYmFyLmFjdGl2ZSAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICByaWdodDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xufVxuXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZDokdGhlbWVDb2xvci1EYXJrO1xufVxuXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgc3Ryb25nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG59XG5cbiNzaWRlYmFyIHVsLmNvbXBvbmVudHMge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJHRoZW1lQ29sb3ItRGFyaztcbn1cblxuI3NpZGViYXIgdWwgbGkgYSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzczODZENTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4jc2lkZWJhciB1bCBsaSBhIGkge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuI3NpZGViYXIgdWwgbGkuYWN0aXZlPmEsXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcbiAgICBjb2xvcjogJHRoZW1lLXN1cHBsZW1lbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiR0aGVtZUNvbG9yLURhcms7XG59XG5cbmFbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxudWwgdWwgYSB7XG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbnVsLkNUQXMge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbnVsLkNUQXMgYSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5hLmRvd25sb2FkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiAjNzM4NkQ1O1xufVxuXG5hLmFydGljbGUsXG5hLmFydGljbGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBDT05URU5UIFNUWUxFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgTUVESUFRVUVSSUVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAjc2lkZWJhciB7XG4gICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtODBweCAhaW1wb3J0YW50O1xuICAgICAgICAvLyBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICByaWdodDogNTAlO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICAgIH1cbiAgICAjc2lkZWJhci5hY3RpdmUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAjc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgaDMsXG4gICAgI3NpZGViYXIgLkNUQXMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAjc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgc3Ryb25nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgICNzaWRlYmFyIHVsIGxpIGEge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgfVxuICAgICNzaWRlYmFyIHVsIGxpIGEgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgIH1cbiAgICAjc2lkZWJhciB1bCBsaSBhIGkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAjc2lkZWJhciB1bCB1bCBhIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAjc2lkZWJhciB1bCBsaSBhIGkge1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIH1cbiAgICAjc2lkZWJhciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgICAjc2lkZWJhckNvbGxhcHNlIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAudGV4dC1tdXRlZCB7XG4gICAgICAgIGNvbG9yOiAjYmNiICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEobWluLXdpZHRoOiA1NzZweCkge1xuICAgIC5jYXJkLWdyb3VwPi5jYXJkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC4yNXJlbTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC4yNXJlbTtcbiAgICB9XG4gICAgLmNhcmQtZ3JvdXA+LmNhcmQ6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKTpub3QoOm9ubHktY2hpbGQpIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIH1cbiAgICAuY2FyZC1ncm91cD4uY2FyZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjI1cmVtO1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuMjVyZW07XG4gICAgfVxufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQURESVRJT05TXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcm9tcHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMmVtO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzk5MDM0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVkMzhiO1xuICB3aWR0aDogNCU7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG4ucHJvbXB0ZXh0IHtcbiAgYW5pbWF0aW9uOmJsaW5raW5nVGV4dCAwLjhzIGluZmluaXRlO1xuICBjb2xvcjogIzk3NWYwNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBmb250OiAxLjVlbSBib2xkZXI7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmdvb2Qge1xuICAgIGFuaW1hdGlvbjogYW5pbSAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5yZXBvTGluayB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmhlYWRlcnByb21wdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9nb3RleHQge1xuICBjb2xvcjogJHRoZW1lLXN1cHBsZW1lbnRlcjtcbn1cblxuI2NvbnRlbnQgbmF2IGRpdi5jb2xsYXBzZSBsaSBhLm5hdi1saW5rIGkuZmFyIHtcbiAgY29sb3I6ICR0aGVtZS1zdXBwbGVtZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIHBhZGRpbmc6IDAuMmVtO1xufVxuXG4jbG9hZGluZy1pbWcge1xuICAgIGJhY2tncm91bmQ6IHVybChodHRwOi8vcHJlbG9hZGVycy5uZXQvcHJlbG9hZGVycy8zNjAvVmVsb2NpdHkuZ2lmKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMjA7XG59XG5cbi5vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5sb2FkZXIge1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICNmM2YzZjM7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMzQ5OGRiO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMzNDk4ZGI7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgLyogU2FmYXJpICovXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuLmNhcmQ6bm90KC53aWRnZXQpIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlLCBsaWdodGJsdWUpXG59XG4ubGlnaHQtcmVkIHtcbiAgICAvLyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh3aGl0ZSwgbGlnaHRibHVlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlLCAjZGZjOTlhKVxufVxuICBcbi8vIGYzZDk4Y1xuLmZlYXR1cmVSZXF1ZXN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogIzAwN2JmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbiAgXG4gICNmZWF0dXJlUmVxdWVzdCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMmVtO1xuICAgIHJpZ2h0OiAyLjVlbTtcbiAgfVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGFuaW0ge1xuICAgIDAlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxJSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgYmxpbmtpbmdUZXh0IHtcbiAgMCV7ICAgICBjb2xvcjogIzAwMDsgICAgfVxuICA0OSV7ICAgIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICA1MCV7ICAgIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICA5OSV7ICAgIGNvbG9yOnRyYW5zcGFyZW50OyAgfVxuICAxMDAleyAgIGNvbG9yOiAjMDAwOyAgICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIE9WRVJSSURFU1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC5idG46bm90KC5mZWF0dXJlUmVxdWVzdCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1zdXBwbGVtZW50ZXI7XG4gICAgY29sb3I6ICR0aGVtZUNvbG9yLURhcmtcbiAgfVxuXG4gICNjb250ZW50ICNoZWFkZXIgLm5hdmJhciB7XG4gICAgd2lkdGg6IDk2JTtcbiAgfVxuXG4gIC5uYXZiYXItZm9ybSB7XG4gICAgd2lkdGg6IDg4JTtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHBhZGRpbmc6IC42cmVtIDFlbTtcbiAgfVxuXG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmctbGVmdDogMC4zZW07XG4gIH1cblxuICAuY2FyZC1ncm91cCB7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICB9XG5cbiAgI2NvbW1hbmQuZm9ybS1jb250cm9sIHtcbiAgICAgIHdpZHRoOiA4NyU7XG4gIH1cblxuICAubWwtYXV0byB7XG4gICAgICBtYXJnaW4tbGVmdDogMCFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnRuLWluZm8ge1xuICAgICAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XG4gIH1cblxuICAuYnRuLWluZm86aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogb3JhbmdlO1xuICAgIG9wYWNpdHk6IDFcbn0iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTsgfVxuXG5hLFxuYTpob3ZlcixcbmE6Zm9jdXMge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zczsgfVxuXG4ubmF2YmFyIHtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cblxuLm5hdmJhci1idG4ge1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG4ubGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xuICBtYXJnaW46IDIwcHggMDsgfVxuXG5pLFxuc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBTSURFQkFSIFNUWUxFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuI3NpZGViYXIge1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjM5YzEyO1xuICBjb2xvcjogIzI1MjUyNTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDtcbiAgbGVmdDogLTI1NXB4OyB9XG4gICNzaWRlYmFyIC50cmlhbmdsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzljMTI7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGVmdDogNmVtO1xuICAgIHRvcDogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICNzaWRlYmFyIC50cmlhbmdsZTpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHRyYW5zZm9ybTogc2tld1koMjVkZWcpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzOWMxMjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsgfVxuICAgICNzaWRlYmFyIC50cmlhbmdsZTphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgdHJhbnNmb3JtOiBza2V3WSgxNTVkZWcpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzOWMxMjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsgfVxuICAgICNzaWRlYmFyIC50cmlhbmdsZS5hbmltYXRpb24ge1xuICAgICAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbiAgICAgIC1tcy1hbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xuICAgICAgLW1vei1hbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlOyB9XG4gICNzaWRlYmFyLmFjdGl2ZSB7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogLTg1cHg7IH1cbiAgICAjc2lkZWJhci5hY3RpdmUgLnNpZGViYXItaGVhZGVyIGgzLCAjc2lkZWJhci5hY3RpdmUgLkNUQXMge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzOWMxMjtcbiAgICBib3gtc2hhZG93OiAwIDAgOXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMThweCAjZjM5YzEyOyB9XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM5YzEyO1xuICAgIGJveC1zaGFkb3c6IDAgMCA5cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9IH1cblxuLnNpZGViYXItaGVhZGVyIGgzIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nLWxlZnQ6IDAuNmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG5cbiNzaWRlYmFyLmFjdGl2ZSAuc2lkZWJhci1oZWFkZXIgc3Ryb25nIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuI3NpZGViYXIgdWwgbGkgYSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjg1ZW07IH1cblxuI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEgaSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIG1hcmdpbi1ib3R0b206IDVweDsgfVxuXG4jc2lkZWJhci5hY3RpdmUgdWwgdWwgYSB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDsgfVxuXG4jc2lkZWJhci5hY3RpdmUgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTsgfVxuXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjUyNTI1OyB9XG5cbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xuICBkaXNwbGF5OiBub25lO1xuICBmb250LXNpemU6IDEuOGVtOyB9XG5cbiNzaWRlYmFyIHVsLmNvbXBvbmVudHMge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMjUyNTI1OyB9XG5cbiNzaWRlYmFyIHVsIGxpIGEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEuMWVtO1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4jc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICM3Mzg2RDU7XG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cblxuI3NpZGViYXIgdWwgbGkgYSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG5cbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZSA+IGEsXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcbiAgY29sb3I6ICNmMzljMTI7XG4gIGJhY2tncm91bmQ6ICMyNTI1MjU7IH1cblxuYVtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cblxudWwgdWwgYSB7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyOyB9XG5cbnVsLkNUQXMge1xuICBwYWRkaW5nOiAyMHB4OyB9XG5cbnVsLkNUQXMgYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cblxuYS5kb3dubG9hZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjNzM4NkQ1OyB9XG5cbmEuYXJ0aWNsZSxcbmEuYXJ0aWNsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDsgfVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBDT05URU5UIFNUWUxFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuI2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzOyB9XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIE1FRElBUVVFUklFU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjc2lkZWJhciB7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IC04MHB4ICFpbXBvcnRhbnQ7IH1cbiAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDEwcHg7XG4gICAgcmlnaHQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTsgfVxuICAjc2lkZWJhci5hY3RpdmUge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7IH1cbiAgI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIGgzLFxuICAjc2lkZWJhciAuQ1RBcyB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAjc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgc3Ryb25nIHtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAjc2lkZWJhciB1bCBsaSBhIHtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7IH1cbiAgI3NpZGViYXIgdWwgbGkgYSBzcGFuIHtcbiAgICBmb250LXNpemU6IDAuODVlbTsgfVxuICAjc2lkZWJhciB1bCBsaSBhIGkge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAjc2lkZWJhciB1bCB1bCBhIHtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7IH1cbiAgI3NpZGViYXIgdWwgbGkgYSBpIHtcbiAgICBmb250LXNpemU6IDEuM2VtOyB9XG4gICNzaWRlYmFyIHtcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxuICAjc2lkZWJhckNvbGxhcHNlIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLnRleHQtbXV0ZWQge1xuICAgIGNvbG9yOiAjYmNiICFpbXBvcnRhbnQ7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmNhcmQtZ3JvdXAgPiAuY2FyZDpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC4yNXJlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjI1cmVtOyB9XG4gIC5jYXJkLWdyb3VwID4gLmNhcmQ6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKTpub3QoOm9ubHktY2hpbGQpIHtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07IH1cbiAgLmNhcmQtZ3JvdXAgPiAuY2FyZDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuMjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjI1cmVtOyB9IH1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQURESVRJT05TXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLnByb21wdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyZW07XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjOTkwMzQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWQzOGI7XG4gIHdpZHRoOiA0JTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7IH1cblxuLnByb21wdGV4dCB7XG4gIGFuaW1hdGlvbjogYmxpbmtpbmdUZXh0IDAuOHMgaW5maW5pdGU7XG4gIGNvbG9yOiAjOTc1ZjA0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIGZvbnQ6IDEuNWVtIGJvbGRlcjtcbiAgbWFyZ2luOiBhdXRvOyB9XG5cbi5nb29kIHtcbiAgYW5pbWF0aW9uOiBhbmltIC4zcyBlYXNlLWluLW91dDsgfVxuXG4ucmVwb0xpbmsge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cblxuLmhlYWRlcnByb21wdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5sb2dvdGV4dCB7XG4gIGNvbG9yOiAjZjM5YzEyOyB9XG5cbiNjb250ZW50IG5hdiBkaXYuY29sbGFwc2UgbGkgYS5uYXYtbGluayBpLmZhciB7XG4gIGNvbG9yOiAjZjM5YzEyO1xuICBmb250LXNpemU6IDEuOGVtO1xuICBwYWRkaW5nOiAwLjJlbTsgfVxuXG4jbG9hZGluZy1pbWcge1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cDovL3ByZWxvYWRlcnMubmV0L3ByZWxvYWRlcnMvMzYwL1ZlbG9jaXR5LmdpZikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMjA7IH1cblxuLm92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMC41OyB9XG5cbi5sb2FkZXIge1xuICBib3JkZXI6IDBweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMzQ5OGRiO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMzQ5OGRiO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIC8qIFNhZmFyaSAqL1xuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyB9XG5cbi5jYXJkOm5vdCgud2lkZ2V0KSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgd2hpdGUsIGxpZ2h0Ymx1ZSk7IH1cblxuLmxpZ2h0LXJlZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgd2hpdGUsICNkZmM5OWEpOyB9XG5cbi5mZWF0dXJlUmVxdWVzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4OyB9XG5cbiNmZWF0dXJlUmVxdWVzdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyZW07XG4gIHJpZ2h0OiAyLjVlbTsgfVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5cbkBrZXlmcmFtZXMgYW5pbSB7XG4gIDAlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgMSUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxuXG5Aa2V5ZnJhbWVzIGJsaW5raW5nVGV4dCB7XG4gIDAlIHtcbiAgICBjb2xvcjogIzAwMDsgfVxuICA0OSUge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICA1MCUge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICA5OSUge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogIzAwMDsgfSB9XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIE9WRVJSSURFU1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uYnRuOm5vdCguZmVhdHVyZVJlcXVlc3QpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzOWMxMjtcbiAgY29sb3I6ICMyNTI1MjU7IH1cblxuI2NvbnRlbnQgI2hlYWRlciAubmF2YmFyIHtcbiAgd2lkdGg6IDk2JTsgfVxuXG4ubmF2YmFyLWZvcm0ge1xuICB3aWR0aDogODglOyB9XG5cbi5mb3JtLWNvbnRyb2wge1xuICBwYWRkaW5nOiAuNnJlbSAxZW07IH1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmctbGVmdDogMC4zZW07IH1cblxuLmNhcmQtZ3JvdXAge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbiNjb21tYW5kLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiA4NyU7IH1cblxuLm1sLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50OyB9XG5cbi5idG4taW5mbyB7XG4gIGJvcmRlci1jb2xvcjogb3JhbmdlOyB9XG5cbi5idG4taW5mbzpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogb3JhbmdlO1xuICBvcGFjaXR5OiAxOyB9XG4iLCIkdGhlbWVDb2xvci1MaWdodDogI2YzZTJjNztcbiR0aGVtZUNvbG9yLURhcms6IzI1MjUyNTtcbiR0aGVtZS1mb250OiB2ZXJkYW5hLCBzYW5zLXNlcmlmO1xuJHRoZW1lLXN1cHBsZW1lbnRlcjogI2YzOWMxMjtcbiRmb250LXNpemUtZGVza3RvcC1oNTogMS4yNWVtO1xuJGZvbnQtc2l6ZS1tb2JpbGUtaDU6IDAuOGVtO1xuJGZvbnQtc2l6ZS1kZXNrdG9wLXA6IDEuMWVtO1xuJGZvbnQtc2l6ZS1tb2JpbGUtcDogMC43ZW07Il19 */"

/***/ }),

/***/ "./src/app/components/l2/sidebar/sidebar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/l2/sidebar/sidebar.component.ts ***!
  \************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node_modules/jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__('#sidebarCollapse').on('click', function () {
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__('#sidebar').toggleClass('active');
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__('.hideable').toggleClass('hide');
        });
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__('#sidebar.active > span').on('click', function () {
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__('#sidebar').css('transform', 'translateX(85px)');
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__('#sidebar').css('box-shadow', 'rgb(224, 151, 32) 10px 10px 30px');
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__('.triangle').removeClass('animation');
        });
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__('*').on('click', function (e) {
            //       console.log(e.target);
            e.stopPropagation();
            if (e.target.id !== 'pullOutButton' && e.target.id !== 'sidebar') {
                node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__('#sidebar').css('transform', 'translateX(0px)');
                node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__('#sidebar').css('box-shadow', '');
                node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__('.triangle').addClass('animation');
            }
        });
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/l2/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/l2/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/configuration/config.js":
/*!*****************************************!*\
  !*** ./src/app/configuration/config.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  gitToken: '96ead73c54cbbf023a73ee57af145b205d460851',
  recasttoken: '26021d055040a9d9f1ad48476efab4a0',
  intentSlugToOperations: {
    command: {
      cardTitle: 'You Said'
    },
    createrepo: {
      requestMethod: 'post',
      intentMessage: 'Create a Repository in Github',
      getDataOperation: 'getCreateRepoJson',
      githubOperation: 'createRepository',
      showWidgetOperation: 'showCreateRepoWidget',
      populateDataOperation: 'populateCreateRepoData',
      successMessage: 'Repository Added!',
      cardMsg: 'Requested Repository has been added and is available at ',
      cardDataUrl: 'html_url',
      cardDataName: 'name',
      action: { type: 'ADD_REPO' },
      response_action: { type: 'ADD_REPO_RESPONSE' },
    },
    createissue: {
      requestMethod: 'post',
      intentMessage: 'Raise an issue in Github',
      getDataOperation: 'getCreateIssueJson',
      githubOperation: 'createIssue',
      showWidgetOperation: 'showCreateIssueWidget',
      populateDataOperation: 'populateCreateIssueData',
      successMessage: 'Issue Created!',
      cardMsg: 'Issue Created as requested, issue details available at ',
      cardDataUrl: 'html_url',
      cardDataName: 'title',
      action: { type: 'ADD_ISSUE' },
      response_action: { type: 'ADD_ISSUE_RESPONSE' },
    },
    closeissue: {
      requestMethod: 'post',
      intentMessage: 'Close an issue in Github',
      getDataOperation: 'getCloseIssueJson',
      githubOperation: 'closeIssue',
      showWidgetOperation: 'showCloseIssueWidget',
      populateDataOperation: 'populateCloseIssueData',
      successMessage: 'Issue Closed!',
      cardMsg: 'Issue Closed as requested, closed issue available at: ',
      cardDataUrl: 'html_url',
      cardDataName: 'title',
      action: { type: 'CLOSE_ISSUE' },
      response_action: { type: 'CLOSE_ISSUE_RESPONSE' },
    },
    addissuecomment: {
      requestMethod: 'post',
      intentMessage: 'Add a comment on an issue in Github',
      getDataOperation: 'getAddCommentJson',
      githubOperation: 'addIssueComment',
      showWidgetOperation: 'showAddCommentWidget',
      populateDataOperation: 'populateAddCommentData',
      successMessage: 'Comment Added!',
      cardMsg: 'Comment Added as Requested, view here: ',
      cardDataUrl: 'html_url',
      cardDataName: 'title',
      action: { type: 'ADD_COMMENT' },
      response_action: { type: 'ADD_ISSUE_COMMENT_RESPONSE' },
    },
    displaylastcomment: {
      requestMethod: 'get',
      intentMessage: 'Display last comment of an issue in Github',
      getDataOperation: 'getDisplayCommentJson',
      githubOperation: 'displayLastComment',
      showWidgetOperation: 'showDisplayCommentWidget',
      populateDataOperation: 'populateDisplayCommentData',
      successMessage: 'Comment Retrieved!',
      cardMsg: 'Please find requested comment below: ',
      cardDataUrl: 'html_url',
      cardDataName: 'title',
      action: { type: 'SHOW_LAST_COMMENT' },
      response_action: { type: 'SHOW_LAST_COMMENT_RESPONSE' },
    },
    addcollab: {
      requestMethod: 'post',
      intentMessage: 'Add a collaborator',
      getDataOperation: 'getAddCollaboratorJson',
      githubOperation: 'addCollaborator',
      showWidgetOperation: 'showAddCollaboratorWidget',
      populateDataOperation: 'populateAddCollaboratorData',
      successMessage: 'Collaborator Added!',
      cardMsg: 'Collaborator added, details available at ',
      cardDataUrl: 'html_url',
      cardDataName: 'invitee,login',
      action: { type: 'ADD_COLLAB' },
      response_action: { type: 'ADD_COLLAB_RESPONSE' },
    },
    viewrepos: {
      requestMethod: 'get',
      intentMessage: 'View Repositories for current user',
      getDataOperation: 'getViewRepositoryJson',
      githubOperation: 'viewRepositories',
      showWidgetOperation: 'showViewRepoWidget',
      populateDataOperation: 'populateViewRepoData',
      successMessage: 'Showing repositories',
      cardMsg: 'Repository Details available below: ',
      cardDataUrl: 'html_url',
      cardDataName: 'invitee,login',
      action: { type: 'VIEW_REPO' },
      response_action: { type: 'VIEW_REPO_RESPONSE' },
    },
    resethistory: {
      requestMethod: 'purge',
      intentMessage: 'Clear all Operations History',
      successMessage: 'Purged!',
      cardTitle: 'Operation Completed',
      cardMsg: 'Purged history of all Operations and Commands!',
      action: { type: 'CLEAR_HISTORY' },
      response_action: { type: 'CLEAR_HISTORY_RESPONSE' },
    },
    addquery: {
      action: { type: 'ADD_QUERY' },
    },
  },
  constants: {
    hiddenIntentFieldId: 'intentHidden',
  },
};


/***/ }),

/***/ "./src/app/services/cards/card.service.js":
/*!************************************************!*\
  !*** ./src/app/services/cards/card.service.js ***!
  \************************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/dom-ops.service */ "./src/app/services/dom/dom-ops.service.ts");
/* harmony import */ var _helpers_helper_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/helper-service.service */ "./src/app/services/helpers/helper-service.service.ts");
/* harmony import */ var src_app_components_l2_content_primary_container_cards_card_card_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/l2/content/primary-container/cards/card/card.model */ "./src/app/components/l2/content/primary-container/cards/card/card.model.ts");
/* harmony import */ var node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node_modules/jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardService = /** @class */ (function () {
    function CardService(domOpsService, helperService) {
        this.domOpsService = domOpsService;
        this.helperService = helperService;
        this.cards = [];
    }
    CardService.prototype.renderCards = function () {
        var localHistory = JSON.parse('{"createrepo":[],"createissue":[],"closeissue":[],"addissuecomment":[],"displaylastcomment":[],"addcollab":[],"viewrepos":[],"queries":[{"command":"create repo","type":"command","insertionCounter":1},{"command":"create repo","type":"command","insertionCounter":2}],"messages":[],"insertionCounter":2}');
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_4__("#conversations").empty();
        // const historyAll = this.helper.concatenateAndSort(this.store.select('ioHistory'));
        var historyAll = this.helperService.concatenateAndSort(localHistory);
        this.domOpsService.loadConversations(historyAll);
    };
    CardService.prototype.getCommandCard = function (cardTitle, cardContent, data, type) {
        return new src_app_components_l2_content_primary_container_cards_card_card_model__WEBPACK_IMPORTED_MODULE_3__["Card"](cardTitle, cardContent, data, type, Date.now() / 1000, 'command-card');
    };
    CardService.prototype.getResponseCard = function (cardTitle, cardContent, data, type) {
        return new src_app_components_l2_content_primary_container_cards_card_card_model__WEBPACK_IMPORTED_MODULE_3__["Card"](cardTitle, cardContent, data, type, Date.now() / 1000, 'response-card');
    };
    CardService.prototype.getDisplayTime = function (timestamp) {
        var start = timestamp;
        var current = Date.now() / 1000;
        var difference = current - start;
        var days = Math.floor(difference / 86400);
        var hours = Math.floor((difference - (days * 86400)) / 3600);
        var minutes = Math.floor((difference - (days * 86400) - (hours * 3600)) / 60);
        var secs = Math.floor((difference - (days * 86400) - (hours * 3600) - (minutes * 60)));
        var displayTime = "";
        if (days != 0) {
            displayTime = displayTime + days + " days ago";
            if (days == 1) {
                return 'Yesterday';
            }
            else {
                return displayTime;
            }
        }
        if (hours != 0) {
            displayTime = displayTime + hours + " hours ago";
            if (hours == 1) {
                return 'an hour ago';
            }
            else {
                return displayTime;
            }
        }
        if (minutes != 0) {
            displayTime = displayTime + minutes + " minutes ago";
            if (minutes == 1) {
                return 'a minute ago';
            }
            else {
                return displayTime;
            }
        }
        displayTime = displayTime + secs + " seconds ago";
        return displayTime;
    };
    CardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_1__["DomOpsService"], _helpers_helper_service_service__WEBPACK_IMPORTED_MODULE_2__["HelperServiceService"]])
    ], CardService);
    return CardService;
}());

//# sourceMappingURL=card.service.js.map

/***/ }),

/***/ "./src/app/services/cards/card.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/cards/card.service.ts ***!
  \************************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/dom-ops.service */ "./src/app/services/dom/dom-ops.service.ts");
/* harmony import */ var _helpers_helper_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/helper-service.service */ "./src/app/services/helpers/helper-service.service.ts");
/* harmony import */ var src_app_components_l2_content_primary_container_cards_card_card_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/l2/content/primary-container/cards/card/card.model */ "./src/app/components/l2/content/primary-container/cards/card/card.model.ts");
/* harmony import */ var node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node_modules/jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardService = /** @class */ (function () {
    function CardService(domOpsService, helperService) {
        this.domOpsService = domOpsService;
        this.helperService = helperService;
        this.cards = [];
    }
    CardService.prototype.renderCards = function () {
        var localHistory = JSON.parse('{"createrepo":[],"createissue":[],"closeissue":[],"addissuecomment":[],"displaylastcomment":[],"addcollab":[],"viewrepos":[],"queries":[{"command":"create repo","type":"command","insertionCounter":1},{"command":"create repo","type":"command","insertionCounter":2}],"messages":[],"insertionCounter":2}');
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_4__("#conversations").empty();
        // const historyAll = this.helper.concatenateAndSort(this.store.select('ioHistory'));
        var historyAll = this.helperService.concatenateAndSort(localHistory);
        this.domOpsService.loadConversations(historyAll);
    };
    CardService.prototype.getCommandCard = function (cardTitle, cardContent, data, type) {
        return new src_app_components_l2_content_primary_container_cards_card_card_model__WEBPACK_IMPORTED_MODULE_3__["Card"](cardTitle, cardContent, data, type, Date.now() / 1000, 'command-card');
    };
    CardService.prototype.getResponseCard = function (cardTitle, cardContent, data, type) {
        return new src_app_components_l2_content_primary_container_cards_card_card_model__WEBPACK_IMPORTED_MODULE_3__["Card"](cardTitle, cardContent, data, type, Date.now() / 1000, 'response-card');
    };
    CardService.prototype.getDisplayTime = function (timestamp) {
        var start = timestamp;
        var current = Date.now() / 1000;
        var difference = current - start;
        var days = Math.floor(difference / 86400);
        var hours = Math.floor((difference - (days * 86400)) / 3600);
        var minutes = Math.floor((difference - (days * 86400) - (hours * 3600)) / 60);
        var secs = Math.floor((difference - (days * 86400) - (hours * 3600) - (minutes * 60)));
        var displayTime = "";
        if (days != 0) {
            displayTime = displayTime + days + " days ago";
            if (days == 1) {
                return 'Yesterday';
            }
            else {
                return displayTime;
            }
        }
        if (hours != 0) {
            displayTime = displayTime + hours + " hours ago";
            if (hours == 1) {
                return 'an hour ago';
            }
            else {
                return displayTime;
            }
        }
        if (minutes != 0) {
            displayTime = displayTime + minutes + " minutes ago";
            if (minutes == 1) {
                return 'a minute ago';
            }
            else {
                return displayTime;
            }
        }
        displayTime = displayTime + secs + " seconds ago";
        return displayTime;
    };
    CardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_1__["DomOpsService"], _helpers_helper_service_service__WEBPACK_IMPORTED_MODULE_2__["HelperServiceService"]])
    ], CardService);
    return CardService;
}());



/***/ }),

/***/ "./src/app/services/dom/dom-ops.service.js":
/*!*************************************************!*\
  !*** ./src/app/services/dom/dom-ops.service.js ***!
  \*************************************************/
/*! exports provided: DomOpsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomOpsService", function() { return DomOpsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_helper_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper-service.service */ "./src/app/services/helpers/helper-service.service.ts");
/* harmony import */ var _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../configuration/config.js */ "./src/app/configuration/config.js");
/* harmony import */ var _configuration_config_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_configuration_config_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node_modules/jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DomOpsService = /** @class */ (function () {
    function DomOpsService(helper) {
        this.helper = helper;
        this.createRepoWidgetCreated = false;
        this.commandCardCounter = 1;
        this.widgets = node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#widgets");
        this.commandPromptEnteredWithValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commandPromptEnteredEmpty = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.intentIdentified = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.widgetIdentified = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.repeatRequested = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DomOpsService.prototype.displayIntentBox = function (intent) {
        var intentBox = document.getElementById("intentBox");
        if (!this.isVisible(intentBox)) {
            intentBox.classList.remove("hide");
            this.intentIdentified.emit();
        }
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#intentName").text(_configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].intentMessage + " [slug: " + intent + "].");
    };
    DomOpsService.prototype.showEmptyCommandMessage = function (message) {
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#randomModal").text(message);
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#emptyCommandMsgDisplayer").click();
        this.commandPromptEnteredEmpty.emit();
    };
    DomOpsService.prototype.populateRecastData = function (widgetName, recastResponse) {
        var operation = _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][widgetName].populateDataOperation;
        if (typeof this[operation] === "function") {
            this[operation](recastResponse);
        }
    };
    DomOpsService.prototype.populateCreateRepoData = function (recastResponse) {
        var repoNameTextField = document.getElementById("repositoryName");
        if (repoNameTextField && recastResponse && recastResponse.entities["git-repository"] && recastResponse.entities["git-repository"].length > 0
            && recastResponse.entities["git-repository"]["0"].value) {
            var repoName = recastResponse.entities["git-repository"]["0"].value;
            repoNameTextField.value = repoName;
        }
    };
    DomOpsService.prototype.populateCreateIssueData = function (recastResponse) {
        var issueTitleTextField = document.getElementById("issueTitle");
        var issueRepositoryTextField = document.getElementById("issueRepository");
        if (issueTitleTextField && recastResponse && recastResponse.entities.issue_title && recastResponse.entities.issue_title.length > 0
            && recastResponse.entities.issue_title["0"].value) {
            var issueTitle = recastResponse.entities.issue_title["0"].value;
            issueTitleTextField.value = issueTitle;
        }
        if (issueRepositoryTextField && recastResponse && recastResponse.entities["git-repository"] && recastResponse.entities["git-repository"].length > 0
            && recastResponse.entities["git-repository"]["0"].value) {
            var repoName = recastResponse.entities["git-repository"]["0"].value;
            issueRepositoryTextField.value = repoName;
        }
    };
    DomOpsService.prototype.populateCloseIssueData = function (recastResponse) {
        var issueNumberTextField = document.getElementById("issueNumerToClose");
        var issueRepositoryTextField = document.getElementById("repoForIssueClose");
        if (issueNumberTextField && recastResponse && recastResponse.entities.issue_id && recastResponse.entities.issue_id.length > 0
            && recastResponse.entities.issue_id["0"].value) {
            var issueNumber = recastResponse.entities.issue_id["0"].value;
            issueNumberTextField.value = issueNumber;
        }
        if (issueRepositoryTextField && recastResponse && recastResponse.entities["git-repository"] && recastResponse.entities["git-repository"].length > 0
            && recastResponse.entities["git-repository"]["0"].value) {
            var repoName = recastResponse.entities["git-repository"]["0"].value;
            issueRepositoryTextField.value = repoName;
        }
    };
    DomOpsService.prototype.populateAddCollaboratorData = function (recastResponse) {
        var collaboratorNameTextField = document.getElementById("collaboratorName");
        var repoForCollabTextField = document.getElementById("repoForCollab");
        if (collaboratorNameTextField && recastResponse && recastResponse.entities.git_collaborator && recastResponse.entities.git_collaborator.length > 0
            && recastResponse.entities.git_collaborator["0"].value) {
            var collaboratorName = recastResponse.entities.git_collaborator["0"].value;
            collaboratorNameTextField.value = collaboratorName;
        }
        if (repoForCollabTextField && recastResponse && recastResponse.entities["git-repository"] && recastResponse.entities["git-repository"].length > 0
            && recastResponse.entities["git-repository"]["0"].value) {
            var repoName = recastResponse.entities["git-repository"]["0"].value;
            repoForCollabTextField.value = repoName;
        }
    };
    DomOpsService.prototype.populateAddCommentData = function (recastResponse) {
        var repoForIssueCommentTextField = document.getElementById("repoForIssueComment");
        var issueNumberTextField = document.getElementById("issueNumber");
        var issueCommentTextArea = document.getElementById("issueComment");
        if (repoForIssueCommentTextField && recastResponse && recastResponse.entities["git-repository"] && recastResponse.entities["git-repository"].length > 0
            && recastResponse.entities["git-repository"]["0"].value) {
            var repoForIssueComment = recastResponse.entities["git-repository"]["0"].value;
            repoForIssueCommentTextField.value = repoForIssueComment;
        }
        if (issueNumberTextField && recastResponse && recastResponse.entities.issue_id && recastResponse.entities.issue_id.length > 0
            && recastResponse.entities.issue_id["0"].value) {
            var issueNumber = recastResponse.entities.issue_id["0"].value;
            issueNumberTextField.value = issueNumber;
        }
        if (issueCommentTextArea && recastResponse && recastResponse.entities.issue_comment && recastResponse.entities.issue_comment.length > 0
            && recastResponse.entities.issue_comment["0"].value) {
            var issueComment = recastResponse.entities.issue_comment["0"].value;
            issueCommentTextArea.value = issueComment;
        }
    };
    DomOpsService.prototype.populateDisplayCommentData = function (recastResponse) {
        var issueNumberTextField = document.getElementById("issueNumberForCommentView");
        var issueRepositoryTextField = document.getElementById("repoForCommentView");
        if (issueNumberTextField && recastResponse && recastResponse.entities.issue_id && recastResponse.entities.issue_id.length > 0
            && recastResponse.entities.issue_id["0"].value) {
            var issueNumber = recastResponse.entities.issue_id["0"].value;
            issueNumberTextField.value = issueNumber;
        }
        if (issueRepositoryTextField && recastResponse && recastResponse.entities["git-repository"] && recastResponse.entities["git-repository"].length > 0
            && recastResponse.entities["git-repository"]["0"].value) {
            var repoName = recastResponse.entities["git-repository"]["0"].value;
            issueRepositoryTextField.value = repoName;
        }
    };
    DomOpsService.prototype.isVisible = function (element) {
        return element ? !element.classList.contains("hide") : false;
    };
    DomOpsService.prototype.getDataFromFormAsJSON = function () {
        var data = {};
        // const intent = $(`#${$config.constants.hiddenIntentFieldId}`).val();
        var intent = window.localStorage.getItem(_configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["constants"].hiddenIntentFieldId);
        var requestMethod = _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].requestMethod;
        if (intent) {
            var operation = _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].getDataOperation;
            if (typeof this[operation] === "function") {
                data = this[operation]();
            }
        }
        return data;
    };
    DomOpsService.prototype.getCreateRepoJson = function () {
        var data = {};
        var request = {};
        if (this.isVisible(document.getElementById("createrepo"))) {
            request.name = document.getElementById("repositoryName").value;
            request.description = document.getElementById("description").value;
            request.homepage = document.getElementById("homePageURL").value;
            request.private = document.getElementById("privateRepoChk").checked;
            request.has_issues = document.getElementById("issuesChk").checked;
            request.has_wiki = document.getElementById("wikiChk").checked;
        }
        data.request = request;
        return data;
    };
    DomOpsService.prototype.getCreateIssueJson = function () {
        var data = {};
        data.urlParams = {};
        var request = {};
        if (this.isVisible(document.getElementById("createissue"))) {
            request.title = document.getElementById("issueTitle").value;
            request.body = document.getElementById("description").value;
            request.assignees = document.getElementById("assignees").value ? document.getElementById("assignees").value.split(",") : [];
            request.labels = document.getElementById("labels").value ? document.getElementById("labels").value.split(",") : [];
            data.urlParams.repoName = document.getElementById("issueRepository").value;
        }
        data.request = request;
        return data;
    };
    DomOpsService.prototype.getCloseIssueJson = function () {
        var data = {};
        data.urlParams = {};
        if (this.isVisible(document.getElementById("closeissue"))) {
            data.urlParams.issueId = document.getElementById("issueNumerToClose").value;
            data.urlParams.repoName = document.getElementById("repoForIssueClose").value;
        }
        return data;
    };
    DomOpsService.prototype.getAddCollaboratorJson = function () {
        var data = {};
        data.urlParams = {};
        if (this.isVisible(document.getElementById("addcollab"))) {
            data.urlParams.collaborator = document.getElementById("collaboratorName").value;
            data.urlParams.repoName = document.getElementById("repoForCollab").value;
        }
        return data;
    };
    DomOpsService.prototype.getAddCommentJson = function () {
        var data = {};
        data.urlParams = {};
        var request = {};
        if (this.isVisible(document.getElementById("addissuecomment"))) {
            request.body = document.getElementById("issueComment").value;
            data.urlParams.issueId = document.getElementById("issueNumber").value;
            data.urlParams.repoName = document.getElementById("repoForIssueComment").value;
        }
        data.request = request;
        return data;
    };
    DomOpsService.prototype.getDisplayCommentJson = function () {
        var data = {};
        data.urlParams = {};
        if (this.isVisible(document.getElementById("displaylastcomment"))) {
            data.urlParams.issueId = document.getElementById("issueNumberForCommentView").value;
            data.urlParams.repoName = document.getElementById("repoForCommentView").value;
        }
        return data;
    };
    DomOpsService.prototype.addGitOperationHistory = function (data) {
        var intent = data.intent;
        // const intent = "createrepo";
        var requestMethod = "";
        if (intent) {
            requestMethod = _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].requestMethod;
        }
        var conversations = document.getElementById("conversations");
        var table;
        var comment;
        // Create Elements
        var card = document.createElement("div");
        var cardBody = document.createElement("div");
        var cardTitle = document.createElement("h5");
        var closeAnchor = document.createElement("a");
        var closeHeader = document.createElement("h6");
        var cardText = document.createElement("p");
        var cardFooter = document.createElement("div");
        var textMuted = document.createElement("small");
        var underCardLine = document.createElement("div");
        // Add Attributes
        card.classList.add("card");
        cardBody.classList.add("card-body");
        cardTitle.classList.add("card-title");
        closeAnchor.classList.add("close");
        // closeAnchor.setAttribute('href', '#');
        cardText.classList.add("card-text");
        cardFooter.classList.add("card-footer");
        textMuted.classList.add("text-muted");
        underCardLine.classList.add("line");
        // Add content
        closeHeader.innerHTML = "x";
        // const x = this.display_ct(0, textMuted);
        if (data.type === "command") {
            // Add content
            cardTitle.innerHTML = "You Said";
            cardText.innerHTML = data.command;
            card.classList.add("light-red");
            var repeat = document.createElement("a");
            repeat.classList.add("btn", "btn-info", "float-right");
            repeat.setAttribute("role", "button");
            repeat.setAttribute("href", "#");
            repeat.setAttribute("id", "btnRepeatCommand" + data.insertionCounter);
            repeat.innerHTML = "Repeat";
            cardText.appendChild(repeat);
        }
        else if (data.type === "response") {
            // Add content
            cardTitle.innerHTML = "Server Responded As..";
            if (requestMethod == "post") {
                cardText.innerHTML = _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].cardMsg + "<a class='repoLink' href='" + data[_configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].cardDataUrl] + "'>" + this.getVariable(data, _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].cardDataName) + "</a>";
            }
            else if (requestMethod == "get") {
                cardText.innerHTML = _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].cardMsg;
                if (data && data.length && data.length > 0) {
                    if (intent === "viewrepos") {
                        table = this.createRepoTable(data);
                    }
                    else if (intent === "displaylastcomment") {
                        comment = this.createCommentBody(data);
                    }
                }
            }
            else if (requestMethod == "purge") {
                cardTitle.innerHTML = "Operation Completed!";
                cardText.innerHTML = data.command;
            }
        }
        else if (data.type = 'widget') {
            cardTitle.innerHTML = "Operation recorded with below data, click submit to repeat.";
            cardText.innerHTML = _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].cardMsg;
            if (data && data.length && data.length > 0) {
                if (intent === "viewrepos") {
                    table = this.createRepoTable(data);
                }
                else if (intent === "displaylastcomment") {
                    comment = this.createCommentBody(data);
                }
            }
        }
        else {
            cardTitle.innerHTML = "Server Responded As..";
            cardText.innerHTML = "Operation failed with status: " + data.status;
        }
        // Associations
        closeAnchor.appendChild(closeHeader);
        cardTitle.appendChild(closeAnchor);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        if (comment) {
            cardBody.appendChild(comment);
        }
        cardFooter.appendChild(textMuted);
        card.appendChild(cardBody);
        if (table) {
            card.appendChild(table);
        }
        card.appendChild(cardFooter);
        conversations.insertBefore(underCardLine, conversations.firstChild);
        conversations.insertBefore(card, conversations.firstChild);
    };
    DomOpsService.prototype.getVariable = function (data, commaSeparatedValue) {
        var arr = commaSeparatedValue.split(",");
        for (var i = 0; i < arr.length; i++) {
            data = data[arr[i]];
        }
        return data;
    };
    // Create table of repositories ==================================================================================================
    DomOpsService.prototype.createRepoTable = function (data) {
        // Create Elements
        var table = document.createElement("table");
        var thead = document.createElement("thead");
        var tr_head = document.createElement("tr");
        var th_1 = document.createElement("th");
        var th_2 = document.createElement("th");
        var th_3 = document.createElement("th");
        var th_4 = document.createElement("th");
        var th_5 = document.createElement("th");
        var th_6 = document.createElement("th");
        var th_7 = document.createElement("th");
        // Add Attributes
        table.classList.add("table", "tabled-bordered", "table-striped", "table-hover");
        thead.classList.add("thead-dark");
        th_1.setAttribute("scope", "col");
        th_2.setAttribute("scope", "col");
        th_3.setAttribute("scope", "col");
        th_4.setAttribute("scope", "col");
        th_5.setAttribute("scope", "col");
        th_6.setAttribute("scope", "col");
        th_7.setAttribute("scope", "col");
        // Add Inner HTML
        th_1.innerHTML = "#";
        th_2.innerHTML = "Repository Name";
        th_3.innerHTML = "Repository ID";
        th_4.innerHTML = "Created On";
        th_5.innerHTML = "Created By";
        th_6.innerHTML = "View Raw";
        th_7.innerHTML = "Delete Repository";
        // Associations
        tr_head.appendChild(th_1);
        tr_head.appendChild(th_2);
        tr_head.appendChild(th_3);
        tr_head.appendChild(th_4);
        tr_head.appendChild(th_5);
        tr_head.appendChild(th_6);
        tr_head.appendChild(th_7);
        thead.appendChild(tr_head);
        table.appendChild(thead);
        for (var i = 0; i < data.length; i++) {
            var currentRepo = data[i];
            // Create Elements
            var tbody = document.createElement("tbody");
            var tr_body = document.createElement("tr");
            var th_vertical = document.createElement("th");
            var td_1 = document.createElement("td");
            var td_2 = document.createElement("td");
            var td_3 = document.createElement("td");
            var td_4 = document.createElement("td");
            var td_5 = document.createElement("td");
            var td_6 = document.createElement("td");
            // Add Attributes
            th_vertical.setAttribute("scope", "row");
            tr_body.setAttribute("id", "repoRow" + i);
            // Add Inner HTML
            th_vertical.innerHTML = i + 1 + "";
            td_1.innerHTML = currentRepo.name;
            td_2.innerHTML = "<a href='" + currentRepo.html_url + "' class='repoLink'>" + currentRepo.id + "</a>";
            td_3.innerHTML = currentRepo.created_at;
            td_4.innerHTML = "<a href='" + currentRepo.owner.html_url + "' class='btn btn-info'>" + currentRepo.owner.login + "</a>";
            td_5.innerHTML = "<a href='" + currentRepo.url + "' class='btn btn-info'>View</a>";
            td_6.innerHTML = "<a href='" + currentRepo.owner.html_url + "' class='btn btn-danger'>Delete</a>";
            // Associations
            tr_body.appendChild(th_vertical);
            tr_body.appendChild(td_1);
            tr_body.appendChild(td_2);
            tr_body.appendChild(td_3);
            tr_body.appendChild(td_4);
            tr_body.appendChild(td_5);
            tr_body.appendChild(td_6);
            tbody.appendChild(tr_body);
            table.appendChild(tbody);
        }
        return table;
    };
    DomOpsService.prototype.loadConversations = function (historyAll) {
        var _this = this;
        if (historyAll) {
            historyAll.forEach(function (element) {
                _this.addGitOperationHistory(element);
            });
        }
    };
    DomOpsService.prototype.createCommentBody = function (data) {
        var commentPara = document.createElement("p");
        var lastComment = this.helper.getLatestComment(data);
        commentPara.classList.add("card-text");
        commentPara.innerHTML = "<strong style='color:black'>COMMENT:</strong> <i>" + lastComment + "</i>";
        return commentPara;
    };
    DomOpsService.prototype.concealCodeInUrl = function () {
        var location = new Location();
        location.href = "http://localhost:8080";
        window.location = location;
    };
    DomOpsService.prototype.toggleModals = function (response) {
        var self = this;
        var promise = response.json();
        var intent = node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#" + _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["constants"].hiddenIntentFieldId).val();
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#submitConfirm").addClass("hide");
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#btnCancelConfirm").click();
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__(".modal-backdrop").removeClass("modal-backdrop");
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#underWidgetLine").addClass("hide");
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#intentBox").addClass("hide");
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#widgets").children().addClass("hide");
        if (response && response.status && (response.status === 201 || response.status === 200 || response.status === 204)) {
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#successAlert").removeClass("hide");
            promise.then(function (body) {
                node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#op-msg").text(_configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].successMessage);
                node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#successAlert").removeClass("hide");
                var action = _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].response_action;
                body.intent = intent;
                action.payload = body;
                // this.store.dispatch(action);
                // self.addGitOperationHistory(body, 'response');
            });
        }
        else {
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#dangerAlert").removeClass("hide");
            // self.addGitOperationHistory(response.status);
        }
        // clear intent
        // $(`#${$config.constants.hiddenIntentFieldId}`).val("");
        window.localStorage.setItem(_configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["constants"].hiddenIntentFieldId, "");
    };
    // V2
    DomOpsService.prototype.repeatCommand = function (card) {
        var command = card.cardContent;
        this.repeatRequested.emit(command);
    };
    // Angular Specific code here
    DomOpsService.prototype.hideNonCards = function () {
        this.commandPromptEnteredWithValue.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DomOpsService.prototype, "commandPromptEnteredWithValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DomOpsService.prototype, "commandPromptEnteredEmpty", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DomOpsService.prototype, "intentIdentified", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DomOpsService.prototype, "widgetIdentified", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DomOpsService.prototype, "repeatRequested", void 0);
    DomOpsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_helpers_helper_service_service__WEBPACK_IMPORTED_MODULE_1__["HelperServiceService"]])
    ], DomOpsService);
    return DomOpsService;
}());

"";
//# sourceMappingURL=dom-ops.service.js.map

/***/ }),

/***/ "./src/app/services/dom/dom-ops.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/dom/dom-ops.service.ts ***!
  \*************************************************/
/*! exports provided: DomOpsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomOpsService", function() { return DomOpsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_helper_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper-service.service */ "./src/app/services/helpers/helper-service.service.ts");
/* harmony import */ var _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../configuration/config.js */ "./src/app/configuration/config.js");
/* harmony import */ var _configuration_config_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_configuration_config_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node_modules/jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DomOpsService = /** @class */ (function () {
    function DomOpsService(helper) {
        this.helper = helper;
        this.createRepoWidgetCreated = false;
        this.commandCardCounter = 1;
        this.widgets = node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#widgets");
        this.commandPromptEnteredWithValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commandPromptEnteredEmpty = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.intentIdentified = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.widgetIdentified = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.repeatRequested = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DomOpsService.prototype.displayIntentBox = function (intent) {
        var intentBox = document.getElementById("intentBox");
        if (!this.isVisible(intentBox)) {
            intentBox.classList.remove("hide");
            this.intentIdentified.emit();
        }
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#intentName").text(_configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].intentMessage + " [slug: " + intent + "].");
    };
    DomOpsService.prototype.showEmptyCommandMessage = function (message) {
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#randomModal").text(message);
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#emptyCommandMsgDisplayer").click();
        this.commandPromptEnteredEmpty.emit();
    };
    DomOpsService.prototype.populateRecastData = function (widgetName, recastResponse) {
        var operation = _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][widgetName].populateDataOperation;
        if (typeof this[operation] === "function") {
            this[operation](recastResponse);
        }
    };
    DomOpsService.prototype.populateCreateRepoData = function (recastResponse) {
        var repoNameTextField = document.getElementById("repositoryName");
        if (repoNameTextField && recastResponse && recastResponse.entities["git-repository"] && recastResponse.entities["git-repository"].length > 0
            && recastResponse.entities["git-repository"]["0"].value) {
            var repoName = recastResponse.entities["git-repository"]["0"].value;
            repoNameTextField.value = repoName;
        }
    };
    DomOpsService.prototype.populateCreateIssueData = function (recastResponse) {
        var issueTitleTextField = document.getElementById("issueTitle");
        var issueRepositoryTextField = document.getElementById("issueRepository");
        if (issueTitleTextField && recastResponse && recastResponse.entities.issue_title && recastResponse.entities.issue_title.length > 0
            && recastResponse.entities.issue_title["0"].value) {
            var issueTitle = recastResponse.entities.issue_title["0"].value;
            issueTitleTextField.value = issueTitle;
        }
        if (issueRepositoryTextField && recastResponse && recastResponse.entities["git-repository"] && recastResponse.entities["git-repository"].length > 0
            && recastResponse.entities["git-repository"]["0"].value) {
            var repoName = recastResponse.entities["git-repository"]["0"].value;
            issueRepositoryTextField.value = repoName;
        }
    };
    DomOpsService.prototype.populateCloseIssueData = function (recastResponse) {
        var issueNumberTextField = document.getElementById("issueNumerToClose");
        var issueRepositoryTextField = document.getElementById("repoForIssueClose");
        if (issueNumberTextField && recastResponse && recastResponse.entities.issue_id && recastResponse.entities.issue_id.length > 0
            && recastResponse.entities.issue_id["0"].value) {
            var issueNumber = recastResponse.entities.issue_id["0"].value;
            issueNumberTextField.value = issueNumber;
        }
        if (issueRepositoryTextField && recastResponse && recastResponse.entities["git-repository"] && recastResponse.entities["git-repository"].length > 0
            && recastResponse.entities["git-repository"]["0"].value) {
            var repoName = recastResponse.entities["git-repository"]["0"].value;
            issueRepositoryTextField.value = repoName;
        }
    };
    DomOpsService.prototype.populateAddCollaboratorData = function (recastResponse) {
        var collaboratorNameTextField = document.getElementById("collaboratorName");
        var repoForCollabTextField = document.getElementById("repoForCollab");
        if (collaboratorNameTextField && recastResponse && recastResponse.entities.git_collaborator && recastResponse.entities.git_collaborator.length > 0
            && recastResponse.entities.git_collaborator["0"].value) {
            var collaboratorName = recastResponse.entities.git_collaborator["0"].value;
            collaboratorNameTextField.value = collaboratorName;
        }
        if (repoForCollabTextField && recastResponse && recastResponse.entities["git-repository"] && recastResponse.entities["git-repository"].length > 0
            && recastResponse.entities["git-repository"]["0"].value) {
            var repoName = recastResponse.entities["git-repository"]["0"].value;
            repoForCollabTextField.value = repoName;
        }
    };
    DomOpsService.prototype.populateAddCommentData = function (recastResponse) {
        var repoForIssueCommentTextField = document.getElementById("repoForIssueComment");
        var issueNumberTextField = document.getElementById("issueNumber");
        var issueCommentTextArea = document.getElementById("issueComment");
        if (repoForIssueCommentTextField && recastResponse && recastResponse.entities["git-repository"] && recastResponse.entities["git-repository"].length > 0
            && recastResponse.entities["git-repository"]["0"].value) {
            var repoForIssueComment = recastResponse.entities["git-repository"]["0"].value;
            repoForIssueCommentTextField.value = repoForIssueComment;
        }
        if (issueNumberTextField && recastResponse && recastResponse.entities.issue_id && recastResponse.entities.issue_id.length > 0
            && recastResponse.entities.issue_id["0"].value) {
            var issueNumber = recastResponse.entities.issue_id["0"].value;
            issueNumberTextField.value = issueNumber;
        }
        if (issueCommentTextArea && recastResponse && recastResponse.entities.issue_comment && recastResponse.entities.issue_comment.length > 0
            && recastResponse.entities.issue_comment["0"].value) {
            var issueComment = recastResponse.entities.issue_comment["0"].value;
            issueCommentTextArea.value = issueComment;
        }
    };
    DomOpsService.prototype.populateDisplayCommentData = function (recastResponse) {
        var issueNumberTextField = document.getElementById("issueNumberForCommentView");
        var issueRepositoryTextField = document.getElementById("repoForCommentView");
        if (issueNumberTextField && recastResponse && recastResponse.entities.issue_id && recastResponse.entities.issue_id.length > 0
            && recastResponse.entities.issue_id["0"].value) {
            var issueNumber = recastResponse.entities.issue_id["0"].value;
            issueNumberTextField.value = issueNumber;
        }
        if (issueRepositoryTextField && recastResponse && recastResponse.entities["git-repository"] && recastResponse.entities["git-repository"].length > 0
            && recastResponse.entities["git-repository"]["0"].value) {
            var repoName = recastResponse.entities["git-repository"]["0"].value;
            issueRepositoryTextField.value = repoName;
        }
    };
    DomOpsService.prototype.isVisible = function (element) {
        return element ? !element.classList.contains("hide") : false;
    };
    DomOpsService.prototype.getDataFromFormAsJSON = function () {
        var data = {};
        // const intent = $(`#${$config.constants.hiddenIntentFieldId}`).val();
        var intent = window.localStorage.getItem(_configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["constants"].hiddenIntentFieldId);
        var requestMethod = _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].requestMethod;
        if (intent) {
            var operation = _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].getDataOperation;
            if (typeof this[operation] === "function") {
                data = this[operation]();
            }
        }
        return data;
    };
    DomOpsService.prototype.getCreateRepoJson = function () {
        var data = {};
        var request = {};
        if (this.isVisible(document.getElementById("createrepo"))) {
            request.name = document.getElementById("repositoryName").value;
            request.description = document.getElementById("description").value;
            request.homepage = document.getElementById("homePageURL").value;
            request.private = document.getElementById("privateRepoChk").checked;
            request.has_issues = document.getElementById("issuesChk").checked;
            request.has_wiki = document.getElementById("wikiChk").checked;
        }
        data.request = request;
        return data;
    };
    DomOpsService.prototype.getCreateIssueJson = function () {
        var data = {};
        data.urlParams = {};
        var request = {};
        if (this.isVisible(document.getElementById("createissue"))) {
            request.title = document.getElementById("issueTitle").value;
            request.body = document.getElementById("description").value;
            request.assignees = document.getElementById("assignees").value ? document.getElementById("assignees").value.split(",") : [];
            request.labels = document.getElementById("labels").value ? document.getElementById("labels").value.split(",") : [];
            data.urlParams.repoName = document.getElementById("issueRepository").value;
        }
        data.request = request;
        return data;
    };
    DomOpsService.prototype.getCloseIssueJson = function () {
        var data = {};
        data.urlParams = {};
        if (this.isVisible(document.getElementById("closeissue"))) {
            data.urlParams.issueId = document.getElementById("issueNumerToClose").value;
            data.urlParams.repoName = document.getElementById("repoForIssueClose").value;
        }
        return data;
    };
    DomOpsService.prototype.getAddCollaboratorJson = function () {
        var data = {};
        data.urlParams = {};
        if (this.isVisible(document.getElementById("addcollab"))) {
            data.urlParams.collaborator = document.getElementById("collaboratorName").value;
            data.urlParams.repoName = document.getElementById("repoForCollab").value;
        }
        return data;
    };
    DomOpsService.prototype.getAddCommentJson = function () {
        var data = {};
        data.urlParams = {};
        var request = {};
        if (this.isVisible(document.getElementById("addissuecomment"))) {
            request.body = document.getElementById("issueComment").value;
            data.urlParams.issueId = document.getElementById("issueNumber").value;
            data.urlParams.repoName = document.getElementById("repoForIssueComment").value;
        }
        data.request = request;
        return data;
    };
    DomOpsService.prototype.getDisplayCommentJson = function () {
        var data = {};
        data.urlParams = {};
        if (this.isVisible(document.getElementById("displaylastcomment"))) {
            data.urlParams.issueId = document.getElementById("issueNumberForCommentView").value;
            data.urlParams.repoName = document.getElementById("repoForCommentView").value;
        }
        return data;
    };
    DomOpsService.prototype.addGitOperationHistory = function (data) {
        var intent = data.intent;
        // const intent = "createrepo";
        var requestMethod = "";
        if (intent) {
            requestMethod = _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].requestMethod;
        }
        var conversations = document.getElementById("conversations");
        var table;
        var comment;
        // Create Elements
        var card = document.createElement("div");
        var cardBody = document.createElement("div");
        var cardTitle = document.createElement("h5");
        var closeAnchor = document.createElement("a");
        var closeHeader = document.createElement("h6");
        var cardText = document.createElement("p");
        var cardFooter = document.createElement("div");
        var textMuted = document.createElement("small");
        var underCardLine = document.createElement("div");
        // Add Attributes
        card.classList.add("card");
        cardBody.classList.add("card-body");
        cardTitle.classList.add("card-title");
        closeAnchor.classList.add("close");
        // closeAnchor.setAttribute('href', '#');
        cardText.classList.add("card-text");
        cardFooter.classList.add("card-footer");
        textMuted.classList.add("text-muted");
        underCardLine.classList.add("line");
        // Add content
        closeHeader.innerHTML = "x";
        // const x = this.display_ct(0, textMuted);
        if (data.type === "command") {
            // Add content
            cardTitle.innerHTML = "You Said";
            cardText.innerHTML = data.command;
            card.classList.add("light-red");
            var repeat = document.createElement("a");
            repeat.classList.add("btn", "btn-info", "float-right");
            repeat.setAttribute("role", "button");
            repeat.setAttribute("href", "#");
            repeat.setAttribute("id", "btnRepeatCommand" + data.insertionCounter);
            repeat.innerHTML = "Repeat";
            cardText.appendChild(repeat);
        }
        else if (data.type === "response") {
            // Add content
            cardTitle.innerHTML = "Server Responded As..";
            if (requestMethod == "post") {
                cardText.innerHTML = _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].cardMsg + "<a class='repoLink' href='" + data[_configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].cardDataUrl] + "'>" + this.getVariable(data, _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].cardDataName) + "</a>";
            }
            else if (requestMethod == "get") {
                cardText.innerHTML = _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].cardMsg;
                if (data && data.length && data.length > 0) {
                    if (intent === "viewrepos") {
                        table = this.createRepoTable(data);
                    }
                    else if (intent === "displaylastcomment") {
                        comment = this.createCommentBody(data);
                    }
                }
            }
            else if (requestMethod == "purge") {
                cardTitle.innerHTML = "Operation Completed!";
                cardText.innerHTML = data.command;
            }
        }
        else if (data.type = 'widget') {
            cardTitle.innerHTML = "Operation recorded with below data, click submit to repeat.";
            cardText.innerHTML = _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].cardMsg;
            if (data && data.length && data.length > 0) {
                if (intent === "viewrepos") {
                    table = this.createRepoTable(data);
                }
                else if (intent === "displaylastcomment") {
                    comment = this.createCommentBody(data);
                }
            }
        }
        else {
            cardTitle.innerHTML = "Server Responded As..";
            cardText.innerHTML = "Operation failed with status: " + data.status;
        }
        // Associations
        closeAnchor.appendChild(closeHeader);
        cardTitle.appendChild(closeAnchor);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        if (comment) {
            cardBody.appendChild(comment);
        }
        cardFooter.appendChild(textMuted);
        card.appendChild(cardBody);
        if (table) {
            card.appendChild(table);
        }
        card.appendChild(cardFooter);
        conversations.insertBefore(underCardLine, conversations.firstChild);
        conversations.insertBefore(card, conversations.firstChild);
    };
    DomOpsService.prototype.getVariable = function (data, commaSeparatedValue) {
        var arr = commaSeparatedValue.split(",");
        for (var i = 0; i < arr.length; i++) {
            data = data[arr[i]];
        }
        return data;
    };
    // Create table of repositories ==================================================================================================
    DomOpsService.prototype.createRepoTable = function (data) {
        // Create Elements
        var table = document.createElement("table");
        var thead = document.createElement("thead");
        var tr_head = document.createElement("tr");
        var th_1 = document.createElement("th");
        var th_2 = document.createElement("th");
        var th_3 = document.createElement("th");
        var th_4 = document.createElement("th");
        var th_5 = document.createElement("th");
        var th_6 = document.createElement("th");
        var th_7 = document.createElement("th");
        // Add Attributes
        table.classList.add("table", "tabled-bordered", "table-striped", "table-hover");
        thead.classList.add("thead-dark");
        th_1.setAttribute("scope", "col");
        th_2.setAttribute("scope", "col");
        th_3.setAttribute("scope", "col");
        th_4.setAttribute("scope", "col");
        th_5.setAttribute("scope", "col");
        th_6.setAttribute("scope", "col");
        th_7.setAttribute("scope", "col");
        // Add Inner HTML
        th_1.innerHTML = "#";
        th_2.innerHTML = "Repository Name";
        th_3.innerHTML = "Repository ID";
        th_4.innerHTML = "Created On";
        th_5.innerHTML = "Created By";
        th_6.innerHTML = "View Raw";
        th_7.innerHTML = "Delete Repository";
        // Associations
        tr_head.appendChild(th_1);
        tr_head.appendChild(th_2);
        tr_head.appendChild(th_3);
        tr_head.appendChild(th_4);
        tr_head.appendChild(th_5);
        tr_head.appendChild(th_6);
        tr_head.appendChild(th_7);
        thead.appendChild(tr_head);
        table.appendChild(thead);
        for (var i = 0; i < data.length; i++) {
            var currentRepo = data[i];
            // Create Elements
            var tbody = document.createElement("tbody");
            var tr_body = document.createElement("tr");
            var th_vertical = document.createElement("th");
            var td_1 = document.createElement("td");
            var td_2 = document.createElement("td");
            var td_3 = document.createElement("td");
            var td_4 = document.createElement("td");
            var td_5 = document.createElement("td");
            var td_6 = document.createElement("td");
            // Add Attributes
            th_vertical.setAttribute("scope", "row");
            tr_body.setAttribute("id", "repoRow" + i);
            // Add Inner HTML
            th_vertical.innerHTML = i + 1 + "";
            td_1.innerHTML = currentRepo.name;
            td_2.innerHTML = "<a href='" + currentRepo.html_url + "' class='repoLink'>" + currentRepo.id + "</a>";
            td_3.innerHTML = currentRepo.created_at;
            td_4.innerHTML = "<a href='" + currentRepo.owner.html_url + "' class='btn btn-info'>" + currentRepo.owner.login + "</a>";
            td_5.innerHTML = "<a href='" + currentRepo.url + "' class='btn btn-info'>View</a>";
            td_6.innerHTML = "<a href='" + currentRepo.owner.html_url + "' class='btn btn-danger'>Delete</a>";
            // Associations
            tr_body.appendChild(th_vertical);
            tr_body.appendChild(td_1);
            tr_body.appendChild(td_2);
            tr_body.appendChild(td_3);
            tr_body.appendChild(td_4);
            tr_body.appendChild(td_5);
            tr_body.appendChild(td_6);
            tbody.appendChild(tr_body);
            table.appendChild(tbody);
        }
        return table;
    };
    DomOpsService.prototype.loadConversations = function (historyAll) {
        var _this = this;
        if (historyAll) {
            historyAll.forEach(function (element) {
                _this.addGitOperationHistory(element);
            });
        }
    };
    DomOpsService.prototype.createCommentBody = function (data) {
        var commentPara = document.createElement("p");
        var lastComment = this.helper.getLatestComment(data);
        commentPara.classList.add("card-text");
        commentPara.innerHTML = "<strong style='color:black'>COMMENT:</strong> <i>" + lastComment + "</i>";
        return commentPara;
    };
    DomOpsService.prototype.concealCodeInUrl = function () {
        var location = new Location();
        location.href = "http://localhost:8080";
        window.location = location;
    };
    DomOpsService.prototype.toggleModals = function (response) {
        var self = this;
        var promise = response.json();
        var intent = node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#" + _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["constants"].hiddenIntentFieldId).val();
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#submitConfirm").addClass("hide");
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#btnCancelConfirm").click();
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__(".modal-backdrop").removeClass("modal-backdrop");
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#underWidgetLine").addClass("hide");
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#intentBox").addClass("hide");
        node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#widgets").children().addClass("hide");
        if (response && response.status && (response.status === 201 || response.status === 200 || response.status === 204)) {
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#successAlert").removeClass("hide");
            promise.then(function (body) {
                node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#op-msg").text(_configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].successMessage);
                node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#successAlert").removeClass("hide");
                var action = _configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["intentSlugToOperations"][intent].response_action;
                body.intent = intent;
                action.payload = body;
                // this.store.dispatch(action);
                // self.addGitOperationHistory(body, 'response');
            });
        }
        else {
            node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#dangerAlert").removeClass("hide");
            // self.addGitOperationHistory(response.status);
        }
        // clear intent
        // $(`#${$config.constants.hiddenIntentFieldId}`).val("");
        window.localStorage.setItem(_configuration_config_js__WEBPACK_IMPORTED_MODULE_2__["constants"].hiddenIntentFieldId, "");
    };
    // V2
    DomOpsService.prototype.repeatCommand = function (card) {
        var command = card.cardContent;
        this.repeatRequested.emit(command);
    };
    // Angular Specific code here
    DomOpsService.prototype.hideNonCards = function () {
        this.commandPromptEnteredWithValue.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DomOpsService.prototype, "commandPromptEnteredWithValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DomOpsService.prototype, "commandPromptEnteredEmpty", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DomOpsService.prototype, "intentIdentified", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DomOpsService.prototype, "widgetIdentified", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DomOpsService.prototype, "repeatRequested", void 0);
    DomOpsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_helpers_helper_service_service__WEBPACK_IMPORTED_MODULE_1__["HelperServiceService"]])
    ], DomOpsService);
    return DomOpsService;
}());

"";


/***/ }),

/***/ "./src/app/services/github/github-ops.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/github/github-ops.service.ts ***!
  \*******************************************************/
/*! exports provided: GithubOpsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubOpsService", function() { return GithubOpsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _io_persistence_ops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../io/persistence-ops.service */ "./src/app/services/io/persistence-ops.service.ts");
/* harmony import */ var _dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/dom-ops.service */ "./src/app/services/dom/dom-ops.service.ts");
/* harmony import */ var _node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var _node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _configuration_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../configuration/config */ "./src/app/configuration/config.js");
/* harmony import */ var _configuration_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_configuration_config__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GithubOpsService = /** @class */ (function () {
    function GithubOpsService(persistenceOpsService, domOpsService) {
        this.persistenceOpsService = persistenceOpsService;
        this.domOpsService = domOpsService;
        this.authorizationToken = "token " + _configuration_config__WEBPACK_IMPORTED_MODULE_4__["gitToken"];
        this.gitOperationIdentified = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GithubOpsService.prototype.getToken = function (code) {
        var _this = this;
        var token = "";
        // let self = this;
        _node_modules_jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__["getJSON"]("https://micobot.herokuapp.com/authenticate/" + code, function (data) {
            console.log(data.token);
            token = data.token;
            // set cookie here
            _this.persistenceOpsService.setCookie("gitToken", token, 30);
            // self.authorizationToken = "token " + persistentOps.getCookie('gitToken');
            _this.domOpsService.concealCodeInUrl();
        });
        return token;
    };
    GithubOpsService.prototype.getCurrentUser = function () {
        var _this = this;
        var repositories = "";
        var url = "https://api.github.com/user/";
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        })
            .then(function (response) {
            response.json().then(function (body) {
                repositories = body;
                console.log(repositories);
                return repositories;
            });
            _this.domOpsService.toggleModals(response);
        })
            .catch(function (error) { return console.error("Fetch Error =\n", error); });
        return repositories;
    };
    GithubOpsService.prototype.authenticate = function () {
    };
    GithubOpsService.prototype.viewRepositories = function () {
        var _this = this;
        var repositories = "";
        var url = "https://api.github.com/user/repos";
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: this.authorizationToken,
            },
        })
            .then(function (response) {
            // response.json().then(function(body){
            //     repositories = body;
            //     console.log(repositories);
            //     return repositories;
            // });
            _this.domOpsService.toggleModals(response);
        })
            .catch(function (error) { return console.error("Fetch Error =\n", error); });
        return repositories;
    };
    GithubOpsService.prototype.createRepository = function (requestData) {
        var _this = this;
        var requestJson = requestData.request;
        // this.store.dispatch($config.intentSlugToOperations.createrepo.action);
        var url = "https://api.github.com/user/repos";
        // const responsePromise = "";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: this.authorizationToken,
            },
            body: JSON.stringify(requestJson),
        })
            .then(function (response) {
            _this.domOpsService.toggleModals(response);
        })
            .catch(function (error) { return console.error("Fetch Error =\n", error); });
    };
    GithubOpsService.prototype.updateRepository = function (updateRepoJson, repoName) {
        repoName = "Hello-World3";
        var url = "https://api.github.com/repos/mohiit1502/" + repoName;
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: this.authorizationToken,
            },
            body: JSON.stringify(updateRepoJson),
        })
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.error("Fetch Error =\n", error); });
    };
    GithubOpsService.prototype.deleteRepository = function (repoName) {
        repoName = "Hello-World2";
        var url = "https://api.github.com/repos/mohiit1502/" + repoName;
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: this.authorizationToken,
            },
        })
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.error("Fetch Error =\n", error); });
    };
    GithubOpsService.prototype.createIssue = function (newIssueJson, repoName) {
        var _this = this;
        var url = "https://api.github.com/repos/mohiit1502/" + repoName + "/issues";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: this.authorizationToken,
            },
            body: JSON.stringify(newIssueJson),
        })
            .then(function (response) {
            _this.domOpsService.toggleModals(response);
        })
            .catch(function (error) { return console.error("Fetch Error =\n", error); });
    };
    GithubOpsService.prototype.updateIssue = function (updateIssueJson, repoName, issueNumber) {
        repoName = "stack_route_prj7";
        issueNumber = 2;
        var url = "https://api.github.com/repos/mohiit1502/" + repoName + "/issues/" + issueNumber;
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: this.authorizationToken,
            },
            body: JSON.stringify(updateIssueJson),
        })
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.error("Fetch Error =\n", error); });
    };
    GithubOpsService.prototype.closeIssue = function (closeIssueJson, repoName, issueNumber) {
        var _this = this;
        var url = "https://api.github.com/repos/mohiit1502/" + repoName + "/issues/" + issueNumber;
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: this.authorizationToken,
            },
            body: JSON.stringify(closeIssueJson),
        })
            .then(function (response) {
            _this.domOpsService.toggleModals(response);
        })
            .catch(function (error) { return console.error("Fetch Error =\n", error); });
    };
    GithubOpsService.prototype.reopenIssue = function (reopenIssueJson, repoName, issueNumber) {
        repoName = "stack_route_prj7";
        issueNumber = 2;
        var url = "https://api.github.com/repos/mohiit1502/" + repoName + "/issues/" + issueNumber;
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: this.authorizationToken,
            },
            body: JSON.stringify(reopenIssueJson),
        })
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.error("Fetch Error =\n", error); });
    };
    GithubOpsService.prototype.displayIssue = function (repoName, issueNumber) {
        repoName = "stack_route_prj7";
        issueNumber = 2;
        var url = "https://api.github.com/repos/mohiit1502/" + repoName + "/issues/" + issueNumber;
        var issues = "";
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: this.authorizationToken,
            },
        })
            .then(function (response) {
            response.json().then(function (body) {
                issues = body;
                console.log(issues);
                return issues;
            });
        })
            .catch(function (error) { return console.error("Fetch Error =\n", error); });
        return issues;
    };
    GithubOpsService.prototype.addIssueComment = function (commentBodyJson, repoName, issueId) {
        var _this = this;
        var url = "https://api.github.com/repos/mohiit1502/" + repoName + "/issues/" + issueId + "/comments";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: this.authorizationToken,
            },
            body: JSON.stringify(commentBodyJson),
        })
            .then(function (response) {
            _this.domOpsService.toggleModals(response);
        })
            .catch(function (error) { return console.error("Fetch Error =\n", error); });
    };
    GithubOpsService.prototype.displayLastComment = function (repoName, issueNumber) {
        var _this = this;
        var url = "https://api.github.com/repos/mohiit1502/" + repoName + "/issues/" + issueNumber + "/comments";
        var comments = [];
        var latestComment = "";
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: this.authorizationToken,
            },
        })
            .then(function (response) {
            _this.domOpsService.toggleModals(response);
            // response.json().then(function(body){
            //     comments = body;
            //     latestComment = githubHelper.getLatestComment(comments);
            //     console.log(comments);
            //     console.log(latestComment);
            // });
        })
            .catch(function (error) { return console.error("Fetch Error =\n", error); });
    };
    GithubOpsService.prototype.displayIssuesForUser = function () {
        var url = "https://api.github.com/user/issues";
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: this.authorizationToken,
            },
        })
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.error("Fetch Error =\n", error); });
    };
    GithubOpsService.prototype.displayIssuesOnRepo = function () {
        var repoName = "stack_route_prj7";
        var issueNumber = 2;
        var url = "https://api.github.com/repos/mohiit1502/" + repoName + "/issues/";
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: this.authorizationToken,
            },
        })
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.error("Fetch Error =\n", error); });
    };
    GithubOpsService.prototype.addCollaborator = function (repoName, collaborator) {
        var _this = this;
        repoName = "stack_route_prj7";
        collaborator = "swat1508";
        var url = "https://api.github.com/repos/mohiit1502/" + repoName + "/collaborators/" + collaborator;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: this.authorizationToken,
            },
        })
            .then(function (response) {
            _this.domOpsService.toggleModals(response);
        })
            .catch(function (error) { return console.error("Fetch Error =\n", error); });
    };
    GithubOpsService.prototype.removeCollaborator = function (repoName, collaborator) {
        repoName = "stack_route_prj7";
        collaborator = "swat1508";
        var url = "https://api.github.com/repos/mohiit1502/" + repoName + "/collaborators/" + collaborator;
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: this.authorizationToken,
            },
        })
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.error("Fetch Error =\n", error); });
    };
    GithubOpsService.prototype.createUser = function (newuserJson) {
    };
    GithubOpsService.prototype.updateUser = function (updateUserJson) {
    };
    GithubOpsService.prototype.deleteUser = function (userId) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GithubOpsService.prototype, "gitOperationIdentified", void 0);
    GithubOpsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_io_persistence_ops_service__WEBPACK_IMPORTED_MODULE_1__["PersistenceOpsService"], _dom_dom_ops_service__WEBPACK_IMPORTED_MODULE_2__["DomOpsService"]])
    ], GithubOpsService);
    return GithubOpsService;
}());



/***/ }),

/***/ "./src/app/services/helpers/helper-service.service.js":
/*!************************************************************!*\
  !*** ./src/app/services/helpers/helper-service.service.js ***!
  \************************************************************/
/*! exports provided: HelperServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperServiceService", function() { return HelperServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelperServiceService = /** @class */ (function () {
    function HelperServiceService() {
    }
    HelperServiceService.prototype.getLatestComment = function (comments) {
        if (comments && comments.length > 0) {
            return comments[comments.length - 1].body;
        }
    };
    HelperServiceService.prototype.compareByProperty = function (property) {
        return function (a, b) {
            if (a[property] > b[property])
                return -1;
            if (a[property] < b[property])
                return 1;
            return 0;
        };
    };
    HelperServiceService.prototype.clone = function (obj) {
        if (obj == null || typeof obj !== "object")
            return obj;
        var copy = Object.assign({}, obj);
        return copy;
    };
    HelperServiceService.prototype.concatenateAndSort = function (history) {
        // let counter = 1;
        var historyAll = [];
        for (var property in history) {
            if (history.hasOwnProperty(property) && Array.isArray(history[property])) {
                historyAll = historyAll.concat(history[property]);
            }
        }
        historyAll.sort(this.compareByProperty("insertionCounter"));
        return historyAll;
    };
    HelperServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HelperServiceService);
    return HelperServiceService;
}());

//# sourceMappingURL=helper-service.service.js.map

/***/ }),

/***/ "./src/app/services/helpers/helper-service.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/helpers/helper-service.service.ts ***!
  \************************************************************/
/*! exports provided: HelperServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperServiceService", function() { return HelperServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelperServiceService = /** @class */ (function () {
    function HelperServiceService() {
    }
    HelperServiceService.prototype.getLatestComment = function (comments) {
        if (comments && comments.length > 0) {
            return comments[comments.length - 1].body;
        }
    };
    HelperServiceService.prototype.compareByProperty = function (property) {
        return function (a, b) {
            if (a[property] > b[property])
                return -1;
            if (a[property] < b[property])
                return 1;
            return 0;
        };
    };
    HelperServiceService.prototype.clone = function (obj) {
        if (obj == null || typeof obj !== "object")
            return obj;
        var copy = Object.assign({}, obj);
        return copy;
    };
    HelperServiceService.prototype.concatenateAndSort = function (history) {
        // let counter = 1;
        var historyAll = [];
        for (var property in history) {
            if (history.hasOwnProperty(property) && Array.isArray(history[property])) {
                historyAll = historyAll.concat(history[property]);
            }
        }
        historyAll.sort(this.compareByProperty("insertionCounter"));
        return historyAll;
    };
    HelperServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HelperServiceService);
    return HelperServiceService;
}());



/***/ }),

/***/ "./src/app/services/io/json-reader.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/io/json-reader.service.ts ***!
  \****************************************************/
/*! exports provided: JsonReaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonReaderService", function() { return JsonReaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JsonReaderService = /** @class */ (function () {
    function JsonReaderService() {
    }
    JsonReaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], JsonReaderService);
    return JsonReaderService;
}());



/***/ }),

/***/ "./src/app/services/io/persistence-ops.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/io/persistence-ops.service.ts ***!
  \********************************************************/
/*! exports provided: PersistenceOpsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistenceOpsService", function() { return PersistenceOpsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_helper_service_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper-service.service.js */ "./src/app/services/helpers/helper-service.service.js");
/* harmony import */ var _dom_dom_ops_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/dom-ops.service.js */ "./src/app/services/dom/dom-ops.service.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersistenceOpsService = /** @class */ (function () {
    function PersistenceOpsService(helper, dom, store) {
        this.helper = helper;
        this.dom = dom;
        this.store = store;
    }
    PersistenceOpsService.prototype.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + " =" + cvalue + ";" + expires + ";path=/";
    };
    PersistenceOpsService.prototype.getCookie = function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    PersistenceOpsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_helpers_helper_service_service_js__WEBPACK_IMPORTED_MODULE_1__["HelperServiceService"], _dom_dom_ops_service_js__WEBPACK_IMPORTED_MODULE_2__["DomOpsService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], PersistenceOpsService);
    return PersistenceOpsService;
}());



/***/ }),

/***/ "./src/app/services/recast/recast-ops.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/recast/recast-ops.service.ts ***!
  \*******************************************************/
/*! exports provided: RecastOpsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecastOpsService", function() { return RecastOpsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configuration_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configuration/config */ "./src/app/configuration/config.js");
/* harmony import */ var _configuration_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configuration_config__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecastOpsService = /** @class */ (function () {
    // store: any = PersistenceOpsService.store;
    function RecastOpsService() {
        this.recastToken = _configuration_config__WEBPACK_IMPORTED_MODULE_1__["recasttoken"];
        this.requestUrl = "https://api.recast.ai/v2/request";
    }
    RecastOpsService.prototype.getRecastResponse = function (command, text) {
        var url = this.requestUrl + "?text=" + command;
        var requestInit = {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: "Token " + this.recastToken,
            },
            data: text,
        };
        return new Promise(function (resolve, reject) {
            fetch(url, requestInit)
                .then(function (response) {
                resolve(response.json());
            })
                .catch(function (error) {
                // console.error("Fetch Error =\n", error);
                reject(error.json());
            });
            // resolve({results: {intents: [{slug: 'createrepo', confidence: 0.7}]}});
        });
    };
    RecastOpsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RecastOpsService);
    return RecastOpsService;
}());



/***/ }),

/***/ "./src/app/store/cards.actions.js":
/*!****************************************!*\
  !*** ./src/app/store/cards.actions.js ***!
  \****************************************/
/*! exports provided: ADD_REPO_RESPONSE, ADD_ISSUE_RESPONSE, ADD_COLLAB_RESPONSE, ADD_COMMENT_RESPONSE, CLOSE_ISSUE_RESPONSE, SHOW_LAST_COMMENT_RESPONSE, VIEW_REPO_RESPONSE, COMMAND, CLEAR_HISTORY, AddRepoResponse, AddIssueResponse, AddCollabResponse, AddCommentResponse, CloseIssueResponse, ShowLastCommentResponse, ViewRepoResponse, Command, ClearHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REPO_RESPONSE", function() { return ADD_REPO_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ISSUE_RESPONSE", function() { return ADD_ISSUE_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COLLAB_RESPONSE", function() { return ADD_COLLAB_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_RESPONSE", function() { return ADD_COMMENT_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_ISSUE_RESPONSE", function() { return CLOSE_ISSUE_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_LAST_COMMENT_RESPONSE", function() { return SHOW_LAST_COMMENT_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_REPO_RESPONSE", function() { return VIEW_REPO_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND", function() { return COMMAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_HISTORY", function() { return CLEAR_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRepoResponse", function() { return AddRepoResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIssueResponse", function() { return AddIssueResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCollabResponse", function() { return AddCollabResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentResponse", function() { return AddCommentResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIssueResponse", function() { return CloseIssueResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowLastCommentResponse", function() { return ShowLastCommentResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRepoResponse", function() { return ViewRepoResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearHistory", function() { return ClearHistory; });
var ADD_REPO_RESPONSE = "ADD_REPO_RESPONSE";
var ADD_ISSUE_RESPONSE = "ADD_ISSUE_RESPONSE";
var ADD_COLLAB_RESPONSE = "ADD_COLLAB_RESPONSE";
var ADD_COMMENT_RESPONSE = "CLOSE_ISSUE_RESPONSE";
var CLOSE_ISSUE_RESPONSE = "CLOSE_ISSUE_RESPONSE";
var SHOW_LAST_COMMENT_RESPONSE = "SHOW_LAST_COMMENT_RESPONSE";
var VIEW_REPO_RESPONSE = "VIEW_REPO_RESPONSE";
var COMMAND = "COMMAND";
var CLEAR_HISTORY = "CLEAR_HISTORY";
var AddRepoResponse = /** @class */ (function () {
    function AddRepoResponse() {
        this.type = ADD_REPO_RESPONSE;
    }
    return AddRepoResponse;
}());

var AddIssueResponse = /** @class */ (function () {
    function AddIssueResponse(payload) {
        this.payload = payload;
        this.type = ADD_ISSUE_RESPONSE;
    }
    return AddIssueResponse;
}());

var AddCollabResponse = /** @class */ (function () {
    function AddCollabResponse(payload) {
        this.payload = payload;
        this.type = ADD_COLLAB_RESPONSE;
    }
    return AddCollabResponse;
}());

var AddCommentResponse = /** @class */ (function () {
    function AddCommentResponse(payload) {
        this.payload = payload;
        this.type = ADD_COMMENT_RESPONSE;
    }
    return AddCommentResponse;
}());

var CloseIssueResponse = /** @class */ (function () {
    function CloseIssueResponse(payload) {
        this.payload = payload;
        this.type = CLOSE_ISSUE_RESPONSE;
    }
    return CloseIssueResponse;
}());

var ShowLastCommentResponse = /** @class */ (function () {
    function ShowLastCommentResponse(payload) {
        this.payload = payload;
        this.type = SHOW_LAST_COMMENT_RESPONSE;
    }
    return ShowLastCommentResponse;
}());

var ViewRepoResponse = /** @class */ (function () {
    function ViewRepoResponse(payload) {
        this.payload = payload;
        this.type = VIEW_REPO_RESPONSE;
    }
    return ViewRepoResponse;
}());

var Command = /** @class */ (function () {
    function Command(payload) {
        this.payload = payload;
        this.type = COMMAND;
    }
    return Command;
}());

var ClearHistory = /** @class */ (function () {
    function ClearHistory(payload) {
        this.payload = payload;
        this.type = CLEAR_HISTORY;
    }
    return ClearHistory;
}());

//# sourceMappingURL=cards.actions.js.map

/***/ }),

/***/ "./src/app/store/cards.actions.ts":
/*!****************************************!*\
  !*** ./src/app/store/cards.actions.ts ***!
  \****************************************/
/*! exports provided: ADD_REPO_RESPONSE, ADD_ISSUE_RESPONSE, ADD_COLLAB_RESPONSE, ADD_COMMENT_RESPONSE, CLOSE_ISSUE_RESPONSE, SHOW_LAST_COMMENT_RESPONSE, VIEW_REPO_RESPONSE, COMMAND, CLEAR_HISTORY, AddRepoResponse, AddIssueResponse, AddCollabResponse, AddCommentResponse, CloseIssueResponse, ShowLastCommentResponse, ViewRepoResponse, Command, ClearHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REPO_RESPONSE", function() { return ADD_REPO_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ISSUE_RESPONSE", function() { return ADD_ISSUE_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COLLAB_RESPONSE", function() { return ADD_COLLAB_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_RESPONSE", function() { return ADD_COMMENT_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_ISSUE_RESPONSE", function() { return CLOSE_ISSUE_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_LAST_COMMENT_RESPONSE", function() { return SHOW_LAST_COMMENT_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_REPO_RESPONSE", function() { return VIEW_REPO_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND", function() { return COMMAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_HISTORY", function() { return CLEAR_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRepoResponse", function() { return AddRepoResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIssueResponse", function() { return AddIssueResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCollabResponse", function() { return AddCollabResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentResponse", function() { return AddCommentResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIssueResponse", function() { return CloseIssueResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowLastCommentResponse", function() { return ShowLastCommentResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRepoResponse", function() { return ViewRepoResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearHistory", function() { return ClearHistory; });
var ADD_REPO_RESPONSE = "ADD_REPO_RESPONSE";
var ADD_ISSUE_RESPONSE = "ADD_ISSUE_RESPONSE";
var ADD_COLLAB_RESPONSE = "ADD_COLLAB_RESPONSE";
var ADD_COMMENT_RESPONSE = "CLOSE_ISSUE_RESPONSE";
var CLOSE_ISSUE_RESPONSE = "CLOSE_ISSUE_RESPONSE";
var SHOW_LAST_COMMENT_RESPONSE = "SHOW_LAST_COMMENT_RESPONSE";
var VIEW_REPO_RESPONSE = "VIEW_REPO_RESPONSE";
var COMMAND = "COMMAND";
var CLEAR_HISTORY = "CLEAR_HISTORY";
var AddRepoResponse = /** @class */ (function () {
    function AddRepoResponse() {
        this.type = ADD_REPO_RESPONSE;
    }
    return AddRepoResponse;
}());

var AddIssueResponse = /** @class */ (function () {
    function AddIssueResponse(payload) {
        this.payload = payload;
        this.type = ADD_ISSUE_RESPONSE;
    }
    return AddIssueResponse;
}());

var AddCollabResponse = /** @class */ (function () {
    function AddCollabResponse(payload) {
        this.payload = payload;
        this.type = ADD_COLLAB_RESPONSE;
    }
    return AddCollabResponse;
}());

var AddCommentResponse = /** @class */ (function () {
    function AddCommentResponse(payload) {
        this.payload = payload;
        this.type = ADD_COMMENT_RESPONSE;
    }
    return AddCommentResponse;
}());

var CloseIssueResponse = /** @class */ (function () {
    function CloseIssueResponse(payload) {
        this.payload = payload;
        this.type = CLOSE_ISSUE_RESPONSE;
    }
    return CloseIssueResponse;
}());

var ShowLastCommentResponse = /** @class */ (function () {
    function ShowLastCommentResponse(payload) {
        this.payload = payload;
        this.type = SHOW_LAST_COMMENT_RESPONSE;
    }
    return ShowLastCommentResponse;
}());

var ViewRepoResponse = /** @class */ (function () {
    function ViewRepoResponse(payload) {
        this.payload = payload;
        this.type = VIEW_REPO_RESPONSE;
    }
    return ViewRepoResponse;
}());

var Command = /** @class */ (function () {
    function Command(payload) {
        this.payload = payload;
        this.type = COMMAND;
    }
    return Command;
}());

var ClearHistory = /** @class */ (function () {
    function ClearHistory(payload) {
        this.payload = payload;
        this.type = CLEAR_HISTORY;
    }
    return ClearHistory;
}());



/***/ }),

/***/ "./src/app/store/cards.reducer.ts":
/*!****************************************!*\
  !*** ./src/app/store/cards.reducer.ts ***!
  \****************************************/
/*! exports provided: initialState, updateHistoryReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHistoryReducer", function() { return updateHistoryReducer; });
/* harmony import */ var _cards_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.actions */ "./src/app/store/cards.actions.ts");
/* harmony import */ var _services_helpers_helper_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/helpers/helper-service.service */ "./src/app/services/helpers/helper-service.service.ts");


var helper = new _services_helpers_helper_service_service__WEBPACK_IMPORTED_MODULE_1__["HelperServiceService"]();
var initialState = {
    responses: [],
    // createrepo: [],
    // createissue: [],
    // closeissue: [],
    // addissuecomment: [],
    // displaylastcomment: [],
    // addcollab: [],
    // viewrepos: [],
    queries: [],
    messages: [],
    insertionCounter: 0,
};
function updateHistoryReducer(currentState, action) {
    if (currentState === void 0) { currentState = initialState; }
    var nextState = getCardsFromState(currentState);
    var card;
    var response = {};
    switch (action.type) {
        case _cards_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_REPO_RESPONSE"]:
        case _cards_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_ISSUE_RESPONSE"]:
        case _cards_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_COLLAB_RESPONSE"]:
        case _cards_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_COMMENT_RESPONSE"]:
        case _cards_actions__WEBPACK_IMPORTED_MODULE_0__["CLOSE_ISSUE_RESPONSE"]:
        case _cards_actions__WEBPACK_IMPORTED_MODULE_0__["SHOW_LAST_COMMENT_RESPONSE"]:
        case _cards_actions__WEBPACK_IMPORTED_MODULE_0__["VIEW_REPO_RESPONSE"]:
            response = action.payload;
            nextState = getCardsFromState(currentState);
            card = response;
            card.type = "response";
            // card.action = action.type;
            card.insertionCounter = ++nextState.insertionCounter;
            if (nextState.messages) {
                nextState.messages = nextState.messages.concat([card]);
            }
            else {
                nextState.messages = [card];
            }
            window.localStorage.setItem("currentState", JSON.stringify(nextState));
            return nextState;
        // case "ADD_REPO":
        // case "ADD_COLLAB":
        // case "ADD_ISSUE":
        // case "ADD_COMMENT":
        // case "CLOSE_ISSUE":
        // case "SHOW_LAST_COMMENT":
        // case "VIEW_REPO":
        //     response = action.payload;
        //     nextState = window.localStorage.getItem('currentState') ? JSON.parse(window.localStorage.getItem('currentState')) : currentState;
        //     card = response;
        //     card.type = 'widget';
        //     card.insertionCounter = ++nextState.insertionCounter;
        //     if (response.intent) {
        //         let intent = response.intent;
        //         if (nextState[intent]) {
        //             nextState[intent] = [...nextState[intent], card];
        //         } else {
        //             nextState[intent] = [card];
        //         }
        //     }
        //     window.localStorage.setItem('currentState', JSON.stringify(nextState));
        //     return nextState;
        case _cards_actions__WEBPACK_IMPORTED_MODULE_0__["COMMAND"]:
            nextState = getCardsFromState(currentState);
            card = action.payload;
            card.insertionCounter = ++nextState.insertionCounter;
            if (nextState.queries) {
                nextState.queries = nextState.queries.concat([card]);
            }
            else {
                nextState.queries = [card];
            }
            window.localStorage.setItem("currentState", JSON.stringify(nextState));
            return nextState;
        case _cards_actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_HISTORY"]:
            nextState = helper.clone(initialState);
            // card.command = $config.intentSlugToOperations.resethistory.cardMsg;
            card = action.payload;
            // card.message = $config.intentSlugToOperations.resethistory.cardMsg;
            // card.type = "response";
            // card.insertionCounter = 0;
            // card.intent = $(`#${$config.constants.hiddenIntentFieldId}`).val();
            // card.intent = window.localStorage.getItem('intent');
            nextState.messages = [card];
            window.localStorage.setItem("currentState", JSON.stringify(nextState));
            return nextState;
        default:
            return nextState;
    }
}
function getCardsFromState(currentState) {
    var cards = window.localStorage.getItem("currentState") ? JSON.parse(window.localStorage.getItem("currentState")) : currentState;
    if (cards && !cards.hasOwnProperty('insertionCounter')) {
        cards = initialState;
    }
    // console.log("Cards from reducer function : " + JSON.stringify(cards));
    return cards;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vaasu/Projects/Microbot/Microbot-v2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map