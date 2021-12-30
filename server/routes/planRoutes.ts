import express from 'express';
import planController from './controllers/planController';

const router = express.Router();

router.get('/', planController.getAllPlans);

router.get('/:id', planController.getPlanById);

router.post('/', planController.createPlan);

router.put('/:id', planController.updatePlan);

router.delete('/:id', planController.deletePlan);

export default router;
