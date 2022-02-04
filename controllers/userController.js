const models = require('../models');
const userModel = models.user
const userController = {
    index: async (req, res) => {
        const users = await userModel.findAll({});
        res.json({
            status: "success",
            data: users

        })
    }
}
module.exports = userController