"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = exports.fetchRecord = void 0;
const model_1 = require("./model");
const joiValidation_1 = require("./joiValidation");
const path = "/Users/decagon/Documents/works/week-7-node-007-kcblaq/data/database.json";
function calulateCircle(radius) {
    console.log("circle");
}
async function fetchRecord(req, res) {
    let records = await model_1.getAll();
    if (!records) {
        return res.status(404).json({ error: "there is no record" });
    }
    res.status(200).json(records);
}
exports.fetchRecord = fetchRecord;
async function calculate(req, res) {
    const { shape, dimension } = req.body;
    let Area, result;
    switch (shape) {
        case 'triangle':
            let triangleError = joiValidation_1.triangleValidation(req.body).error;
            if (triangleError) {
                res.status(400).json({ error: triangleError.details[0].message });
            }
            let semiPerimeter = (dimension.length + dimension.breadth + dimension.height) / 2;
            Area = Math.sqrt(semiPerimeter * (semiPerimeter - dimension.length) * (semiPerimeter - dimension.breadth) * (semiPerimeter - dimension.height));
            result = {
                shape,
                dimension,
                Area
            };
            break;
        case 'circle':
            let circleError = joiValidation_1.circleValidation(req.body).error;
            if (circleError)
                res.status(400).json({ error: circleError.details[0].message });
            Area = Number((Math.PI * dimension ** 2).toFixed(2));
            result = {
                shape,
                dimension,
                Area
            };
            break;
        case 'rectangle':
            let rectangleError = joiValidation_1.rectangleValidation(req.body).error;
            if (rectangleError)
                res.status(400).json({ error: rectangleError.details[0].message });
            Area = dimension.length * dimension.breadth;
            result = {
                shape,
                dimension,
                Area
            };
            break;
        case 'square':
            let squareError = joiValidation_1.sqaureValidation(req.body).error;
            if (squareError)
                res.status(400).json({ error: squareError.details[0].message });
            Area = dimension ** 2;
            result = {
                shape,
                dimension,
                Area
            };
            break;
        default:
            return res.status(404).json({ message: "Enter either triangle, circle, rectangle, or square" });
            break;
    }
    let newResult = await model_1.createOne(result);
    res.status(201).json(newResult);
}
exports.calculate = calculate;
