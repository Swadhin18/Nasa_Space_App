"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharkController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("@/auth/guards/jwt.guard");
const apikey_guard_1 = require("@/auth/guards/apikey.guard");
let SharkController = (() => {
    let _classDecorators = [(0, common_1.Controller)('api/v1/sharks')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _registerShark_decorators;
    let _addTracking_decorators;
    let _querySharks_decorators;
    let _getTrack_decorators;
    var SharkController = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _registerShark_decorators = [(0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard), (0, common_1.Post)('register')];
            _addTracking_decorators = [(0, common_1.UseGuards)(apikey_guard_1.ApiKeyGuard), (0, common_1.Post)(':tagId/tracking')];
            _querySharks_decorators = [(0, common_1.Get)()];
            _getTrack_decorators = [(0, common_1.Get)(':tagId')];
            __esDecorate(this, null, _registerShark_decorators, { kind: "method", name: "registerShark", static: false, private: false, access: { has: obj => "registerShark" in obj, get: obj => obj.registerShark }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _addTracking_decorators, { kind: "method", name: "addTracking", static: false, private: false, access: { has: obj => "addTracking" in obj, get: obj => obj.addTracking }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _querySharks_decorators, { kind: "method", name: "querySharks", static: false, private: false, access: { has: obj => "querySharks" in obj, get: obj => obj.querySharks }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _getTrack_decorators, { kind: "method", name: "getTrack", static: false, private: false, access: { has: obj => "getTrack" in obj, get: obj => obj.getTrack }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            SharkController = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        sharkService = __runInitializers(this, _instanceExtraInitializers);
        constructor(sharkService) {
            this.sharkService = sharkService;
        }
        registerShark(dto) {
            return this.sharkService.registerShark(dto);
        }
        addTracking(tagId, body) {
            return this.sharkService.addTrackingData(tagId, body);
        }
        querySharks(query) {
            return this.sharkService.querySharks(query);
        }
        getTrack(tagId) {
            return this.sharkService.getSharkTrack(tagId);
        }
    };
    return SharkController = _classThis;
})();
exports.SharkController = SharkController;
