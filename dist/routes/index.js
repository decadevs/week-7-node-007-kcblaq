"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller");
var router = express_1.default.Router();
/* GET home page. */
router.get('/fetchRecords', controller_1.fetchRecord);
router.post('/calculate', controller_1.calculate);
exports.default = router;
