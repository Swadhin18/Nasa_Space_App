"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTagDto = void 0;
const class_validator_1 = require("class-validator");
let CreateTagDto = (() => {
    let _tagId_decorators;
    let _tagId_initializers = [];
    let _tagId_extraInitializers = [];
    let _species_decorators;
    let _species_initializers = [];
    let _species_extraInitializers = [];
    let _sex_decorators;
    let _sex_initializers = [];
    let _sex_extraInitializers = [];
    let _lengthCm_decorators;
    let _lengthCm_initializers = [];
    let _lengthCm_extraInitializers = [];
    let _weightKg_decorators;
    let _weightKg_initializers = [];
    let _weightKg_extraInitializers = [];
    let _releaseDate_decorators;
    let _releaseDate_initializers = [];
    let _releaseDate_extraInitializers = [];
    return class CreateTagDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _tagId_decorators = [(0, class_validator_1.IsString)()];
            _species_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _sex_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _lengthCm_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)()];
            _weightKg_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)()];
            _releaseDate_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsDateString)()];
            __esDecorate(null, null, _tagId_decorators, { kind: "field", name: "tagId", static: false, private: false, access: { has: obj => "tagId" in obj, get: obj => obj.tagId, set: (obj, value) => { obj.tagId = value; } }, metadata: _metadata }, _tagId_initializers, _tagId_extraInitializers);
            __esDecorate(null, null, _species_decorators, { kind: "field", name: "species", static: false, private: false, access: { has: obj => "species" in obj, get: obj => obj.species, set: (obj, value) => { obj.species = value; } }, metadata: _metadata }, _species_initializers, _species_extraInitializers);
            __esDecorate(null, null, _sex_decorators, { kind: "field", name: "sex", static: false, private: false, access: { has: obj => "sex" in obj, get: obj => obj.sex, set: (obj, value) => { obj.sex = value; } }, metadata: _metadata }, _sex_initializers, _sex_extraInitializers);
            __esDecorate(null, null, _lengthCm_decorators, { kind: "field", name: "lengthCm", static: false, private: false, access: { has: obj => "lengthCm" in obj, get: obj => obj.lengthCm, set: (obj, value) => { obj.lengthCm = value; } }, metadata: _metadata }, _lengthCm_initializers, _lengthCm_extraInitializers);
            __esDecorate(null, null, _weightKg_decorators, { kind: "field", name: "weightKg", static: false, private: false, access: { has: obj => "weightKg" in obj, get: obj => obj.weightKg, set: (obj, value) => { obj.weightKg = value; } }, metadata: _metadata }, _weightKg_initializers, _weightKg_extraInitializers);
            __esDecorate(null, null, _releaseDate_decorators, { kind: "field", name: "releaseDate", static: false, private: false, access: { has: obj => "releaseDate" in obj, get: obj => obj.releaseDate, set: (obj, value) => { obj.releaseDate = value; } }, metadata: _metadata }, _releaseDate_initializers, _releaseDate_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        tagId = __runInitializers(this, _tagId_initializers, void 0);
        species = (__runInitializers(this, _tagId_extraInitializers), __runInitializers(this, _species_initializers, void 0));
        sex = (__runInitializers(this, _species_extraInitializers), __runInitializers(this, _sex_initializers, void 0));
        lengthCm = (__runInitializers(this, _sex_extraInitializers), __runInitializers(this, _lengthCm_initializers, void 0));
        weightKg = (__runInitializers(this, _lengthCm_extraInitializers), __runInitializers(this, _weightKg_initializers, void 0));
        releaseDate = (__runInitializers(this, _weightKg_extraInitializers), __runInitializers(this, _releaseDate_initializers, void 0));
        constructor() {
            __runInitializers(this, _releaseDate_extraInitializers);
        }
    };
})();
exports.CreateTagDto = CreateTagDto;
