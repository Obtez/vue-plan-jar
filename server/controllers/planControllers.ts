import { Request, Response } from 'express';
import Plan from "../models/planModel";

const getAllPlans = async (req: Request, res: Response) => {
  try {
    const plans = await Plan.find();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get plans' });
  }
};

const getPlanById = async (req: Request, res: Response) => { 
  try {
    const plan = await Plan.findById(req.params.id);
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get plan' });
  }
};

const createPlan = async (req: Request, res: Response) => { 
  try {
    const plan = new Plan(req.body);
    await plan.save();
    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create plan' });
  }
};

const updatePlan = async (req: Request, res: Response) => { 
  try {
    const plan = await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update plan' });
  }
};

const deletePlan = async (req: Request, res: Response) => { 
  try {
    await Plan.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Plan deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete plan' });
  }
};

export default {
  getAllPlans,
  getPlanById,
  createPlan,
  updatePlan,
  deletePlan,
};
