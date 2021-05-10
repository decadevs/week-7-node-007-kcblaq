
import express from 'express'
import app from '../app';
import { fetchRecord, calculate } from '../controller';


var router = express.Router();

/* GET home page. */
router.get('/fetchRecords', fetchRecord);

router.post('/calculate', calculate)





export default router;
