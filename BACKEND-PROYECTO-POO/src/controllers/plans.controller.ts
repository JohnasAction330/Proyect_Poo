import {Request, Response} from 'express';
import Plan from '../models/plans.mongo.js';

export const getPlans = async (req: Request, res : Response )=>{
    const plans = await Plan.find();
    res.json(plans);
}