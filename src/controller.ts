import {Request, Response} from 'express'
import fs from 'fs'
import { createOne, getAll } from './model';
import {circleValidation,sqaureValidation,triangleValidation,rectangleValidation} from './joiValidation'
const path = "/Users/decagon/Documents/works/week-7-node-007-kcblaq/data/database.json"
function calulateCircle(radius:number){
    console.log("circle");
    
}


export async function fetchRecord(req:Request,res:Response){
   let records = await getAll()
   if(!records) {
       return res.status(404).json({error: "there is no record"})
   }
   res.status(200).json(records)
}




export async function calculate(req:Request,res:Response){
    
    const {shape, dimension} = req.body;
    let Area, result;
    switch (shape) {
        case 'triangle':
            let triangleError = triangleValidation(req.body).error
            if(triangleError){
                res.status(400).json({error:triangleError.details[0].message})
            }
            let semiPerimeter = (dimension.length + dimension.breadth + dimension.height)/2;
            
            Area = Math.sqrt(semiPerimeter *(semiPerimeter-dimension.length) * (semiPerimeter - dimension.breadth)*(semiPerimeter-dimension.height));
            result =  {
                shape,
                dimension,
                Area
            }
            break;
        case 'circle':
            let circleError = circleValidation(req.body).error
            if(circleError) res.status(400).json({error: circleError.details[0].message})
            Area = Number((Math.PI * dimension**2).toFixed(2));
            result = {
                shape,
                dimension,
                Area
            }
            break;

        case 'rectangle':
            let rectangleError = rectangleValidation(req.body).error
            if(rectangleError) res.status(400).json({error: rectangleError.details[0].message})
            Area = dimension.length *dimension.breadth;
            result = {
                shape,
                dimension,
                Area
            }
            break; 
        case 'square':
            let squareError = sqaureValidation(req.body).error
            if(squareError) res.status(400).json({error: squareError.details[0].message})
            Area= dimension**2
            result = {
                shape,
                dimension,
                Area
            }
            
             break;
    
        default:
            return res.status(404).json({message: "Enter either triangle, circle, rectangle, or square"})
            break;
    }

    let newResult = await createOne(result)

    res.status(201).json(newResult)


}