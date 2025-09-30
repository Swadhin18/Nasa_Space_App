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
exports.ProcessResultDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let ObservationDto = (() => {
    let _lat_decorators;
    let _lat_initializers = [];
    let _lat_extraInitializers = [];
    let _lon_decorators;
    let _lon_initializers = [];
    let _lon_extraInitializers = [];
    let _chlorophyll_decorators;
    let _chlorophyll_initializers = [];
    let _chlorophyll_extraInitializers = [];
    let _sst_decorators;
    let _sst_initializers = [];
    let _sst_extraInitializers = [];
    let _eddyStrength_decorators;
    let _eddyStrength_initializers = [];
    let _eddyStrength_extraInitializers = [];
    let _timestamp_decorators;
    let _timestamp_initializers = [];
    let _timestamp_extraInitializers = [];
    return class ObservationDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _lat_decorators = [(0, class_validator_1.IsNumber)()];
            _lon_decorators = [(0, class_validator_1.IsNumber)()];
            _chlorophyll_decorators = [(0, class_validator_1.IsNumber)()];
            _sst_decorators = [(0, class_validator_1.IsNumber)()];
            _eddyStrength_decorators = [(0, class_validator_1.IsNumber)()];
            _timestamp_decorators = [(0, class_validator_1.IsString)()];
            __esDecorate(null, null, _lat_decorators, { kind: "field", name: "lat", static: false, private: false, access: { has: obj => "lat" in obj, get: obj => obj.lat, set: (obj, value) => { obj.lat = value; } }, metadata: _metadata }, _lat_initializers, _lat_extraInitializers);
            __esDecorate(null, null, _lon_decorators, { kind: "field", name: "lon", static: false, private: false, access: { has: obj => "lon" in obj, get: obj => obj.lon, set: (obj, value) => { obj.lon = value; } }, metadata: _metadata }, _lon_initializers, _lon_extraInitializers);
            __esDecorate(null, null, _chlorophyll_decorators, { kind: "field", name: "chlorophyll", static: false, private: false, access: { has: obj => "chlorophyll" in obj, get: obj => obj.chlorophyll, set: (obj, value) => { obj.chlorophyll = value; } }, metadata: _metadata }, _chlorophyll_initializers, _chlorophyll_extraInitializers);
            __esDecorate(null, null, _sst_decorators, { kind: "field", name: "sst", static: false, private: false, access: { has: obj => "sst" in obj, get: obj => obj.sst, set: (obj, value) => { obj.sst = value; } }, metadata: _metadata }, _sst_initializers, _sst_extraInitializers);
            __esDecorate(null, null, _eddyStrength_decorators, { kind: "field", name: "eddyStrength", static: false, private: false, access: { has: obj => "eddyStrength" in obj, get: obj => obj.eddyStrength, set: (obj, value) => { obj.eddyStrength = value; } }, metadata: _metadata }, _eddyStrength_initializers, _eddyStrength_extraInitializers);
            __esDecorate(null, null, _timestamp_decorators, { kind: "field", name: "timestamp", static: false, private: false, access: { has: obj => "timestamp" in obj, get: obj => obj.timestamp, set: (obj, value) => { obj.timestamp = value; } }, metadata: _metadata }, _timestamp_initializers, _timestamp_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        lat = __runInitializers(this, _lat_initializers, void 0);
        lon = (__runInitializers(this, _lat_extraInitializers), __runInitializers(this, _lon_initializers, void 0));
        chlorophyll = (__runInitializers(this, _lon_extraInitializers), __runInitializers(this, _chlorophyll_initializers, void 0));
        sst = (__runInitializers(this, _chlorophyll_extraInitializers), __runInitializers(this, _sst_initializers, void 0));
        eddyStrength = (__runInitializers(this, _sst_extraInitializers), __runInitializers(this, _eddyStrength_initializers, void 0));
        timestamp = (__runInitializers(this, _eddyStrength_extraInitializers), __runInitializers(this, _timestamp_initializers, void 0));
        constructor() {
            __runInitializers(this, _timestamp_extraInitializers);
        }
    };
})();
let ProcessResultDto = (() => {
    let _datasetId_decorators;
    let _datasetId_initializers = [];
    let _datasetId_extraInitializers = [];
    let _observations_decorators;
    let _observations_initializers = [];
    let _observations_extraInitializers = [];
    return class ProcessResultDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _datasetId_decorators = [(0, class_validator_1.IsString)()];
            _observations_decorators = [(0, class_validator_1.IsArray)(), (0, class_validator_1.ValidateNested)({ each: true }), (0, class_transformer_1.Type)(() => ObservationDto)];
            __esDecorate(null, null, _datasetId_decorators, { kind: "field", name: "datasetId", static: false, private: false, access: { has: obj => "datasetId" in obj, get: obj => obj.datasetId, set: (obj, value) => { obj.datasetId = value; } }, metadata: _metadata }, _datasetId_initializers, _datasetId_extraInitializers);
            __esDecorate(null, null, _observations_decorators, { kind: "field", name: "observations", static: false, private: false, access: { has: obj => "observations" in obj, get: obj => obj.observations, set: (obj, value) => { obj.observations = value; } }, metadata: _metadata }, _observations_initializers, _observations_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        datasetId = __runInitializers(this, _datasetId_initializers, void 0);
        observations = (__runInitializers(this, _datasetId_extraInitializers), __runInitializers(this, _observations_initializers, void 0));
        constructor() {
            __runInitializers(this, _observations_extraInitializers);
        }
    };
})();
exports.ProcessResultDto = ProcessResultDto;
