"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.capabilities = exports.batch = exports.create = exports.search = exports.history = exports.destroy = exports.patch = exports.update = exports.vread = exports.read = void 0;
function read(request, reply) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            throw new Error("Not Implemented");
        });
    });
}
exports.read = read;
function vread(request, reply) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            throw new Error("Not Implemented");
        });
    });
}
exports.vread = vread;
function update(request, reply) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            throw new Error("Not Implemented");
        });
    });
}
exports.update = update;
function patch(request, reply) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            throw new Error("Not Implemented");
        });
    });
}
exports.patch = patch;
function destroy(request, reply) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            throw new Error("Not Implemented");
        });
    });
}
exports.destroy = destroy;
function history(request, reply) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            throw new Error("Not Implemented");
        });
    });
}
exports.history = history;
function search(request, reply) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            throw new Error("Not Implemented");
        });
    });
}
exports.search = search;
function create(request, reply) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            throw new Error("Not Implemented");
        });
    });
}
exports.create = create;
function batch(request, reply) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            throw new Error("Not Implemented");
        });
    });
}
exports.batch = batch;
var version = "0.0.0";
var name = "Timber Server Conformance Statement";
var CapabilityStatement = {
    resourceType: "CapabilityStatement",
    status: "draft",
    publisher: "Automate Medical Inc.",
    kind: "instance",
    name: name,
    software: {
        name: "fhir.ts",
        version: version
    },
    implementation: {
        description: "FHIR Server"
    },
    fhirVersion: "4.0.1",
    version: version,
    format: [
        "application/fhir+json"
    ],
    rest: []
};
var TerminologyCapabilities = {
    resourceType: "TerminologyCapabilities",
    status: "draft",
    version: version,
    name: name,
    codeSystem: []
};
function capabilities(request, reply) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // @ts-expect-error
            switch (request.query.mode) {
                case "normative":
                    // the entirety of the capability statement is normative today
                    reply.send(CapabilityStatement);
                    break;
                case "terminology":
                    reply.send(TerminologyCapabilities);
                    break;
                default:
                    // default is to send the full statement
                    reply.send(CapabilityStatement);
                    break;
            }
            return [2 /*return*/];
        });
    });
}
exports.capabilities = capabilities;
