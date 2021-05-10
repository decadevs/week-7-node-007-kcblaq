"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectangleValidation = exports.sqaureValidation = exports.triangleValidation = exports.circleValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const circleValidation = (data) => {
    let schema = joi_1.default.object({
        shape: joi_1.default.string().required(),
        dimension: joi_1.default.number().required()
    });
    return schema.validate(data);
};
exports.circleValidation = circleValidation;
const triangleValidation = (data) => {
    let schema = joi_1.default.object({
        shape: joi_1.default.string().required(),
        dimension: joi_1.default.object().min(3).max(3).required()
    });
    return schema.validate(data);
};
exports.triangleValidation = triangleValidation;
const sqaureValidation = (data) => {
    let schema = joi_1.default.object({
        shape: joi_1.default.string().required(),
        dimension: joi_1.default.number().required()
    });
    return schema.validate(data);
};
exports.sqaureValidation = sqaureValidation;
const rectangleValidation = (data) => {
    let schema = joi_1.default.object({
        shape: joi_1.default.string().required(),
        dimension: joi_1.default.object().min(2).max(2).required()
    });
    return schema.validate(data);
};
exports.rectangleValidation = rectangleValidation;
