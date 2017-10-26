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
var foto_service_1 = require('../foto/foto.service');
var ListagemComponent = (function () {
    function ListagemComponent(service) {
        var _this = this;
        this.mensagem = '';
        this.fotos = [];
        this.service = service;
        service.listar()
            .subscribe(function (fotos) {
            _this.fotos = fotos;
        }, function (err) { return console.log(err); });
    }
    ListagemComponent.prototype.remover = function (foto) {
        var _this = this;
        this.service.remove(foto)
            .subscribe(function () {
            _this.mensagem = "Foto " + foto.titulo + " Removida com sucesso";
            var cloneArray = _this.fotos.slice(0);
            var index = _this.fotos.indexOf(foto);
            cloneArray.splice(index, 1);
            _this.fotos = cloneArray;
        }, function (erro) { return console.log(erro); });
    };
    ListagemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listagem',
            templateUrl: './listagem.component.html'
        }), 
        __metadata('design:paramtypes', [foto_service_1.FotoService])
    ], ListagemComponent);
    return ListagemComponent;
}());
exports.ListagemComponent = ListagemComponent;
//# sourceMappingURL=listagem.component.js.map