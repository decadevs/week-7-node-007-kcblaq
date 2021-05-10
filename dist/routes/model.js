"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOne = exports.getAll = void 0;
const fs_1 = __importDefault(require("fs"));
let database = require("../../data/database.json");
const path = "/Users/decagon/Documents/works/week-7-node-007-kcblaq/data/database.json";
const getAll = () => {
    return new Promise((resolve, reject) => {
        resolve(database);
    });
};
exports.getAll = getAll;
const createOne = (data) => {
    return new Promise((resolve, reject) => {
        let newData = database.push(data);
        fs_1.default.writeFileSync(path, JSON.stringify(newData));
        resolve(data);
    });
};
exports.createOne = createOne;
