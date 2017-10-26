"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var foto_component_1 = require('../foto/foto.component');
var forms_1 = require('@angular/forms');
var foto_service_1 = require('../foto/foto.service');
var router_1 = require('@angular/router');
var CadastroComponent = (function () {
    function CadastroComponent(fb, service, route, router) {
        var _this = this;
        this.foto = new foto_component_1.FotoComponent();
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        route.params.subscribe(function (param) {
            var id = param["id"];
            if (id) {
                _this.service
                    .buscaPorId(id)
                    .subscribe(function (foto) { return _this.foto = foto; }, function (erro) { return console.log(erro); });
            }
        });
    }
    CadastroComponent.prototype.ngOnInit = function () {
        this.fotoForm = this.fb.group({
            titulo: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            url: ['', forms_1.Validators.required],
            descricao: ['']
        });
    };
    Object.defineProperty(CadastroComponent.prototype, "titulo", {
        get: function () {
            return this.fotoForm.get("titulo");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CadastroComponent.prototype, "url", {
        get: function () {
            return this.fotoForm.get("url");
        },
        enumerable: true,
        configurable: true
    });
    CadastroComponent.prototype.cadastrar = function (event) {
        var _this = this;
        event.preventDefault();
        this.service.cadastra(this.foto)
            .subscribe(function (foto) {
            _this.router.navigate(['']);
            _this.foto = new foto_component_1.FotoComponent();
            console.log("Foto enviada com sucesso!");
        }, function (erro) { return console.error(erro); });
    };
    CadastroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastro',
            templateUrl: './cadastro.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, foto_service_1.FotoService, router_1.ActivatedRoute, router_1.Router])
    ], CadastroComponent);
    return CadastroComponent;
}());
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map