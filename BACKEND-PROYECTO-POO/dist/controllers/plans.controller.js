import Plan from '../models/plans.mongo.js';
export const getPlans = async (req, res) => {
    const plans = await Plan.find();
    res.json(plans);
};
//# sourceMappingURL=plans.controller.js.map