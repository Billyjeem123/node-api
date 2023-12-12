const express =  require('express');
const userRouter = new express.Router();
const {UserCntrol} = require("../../controller/userCtrol/user")



userRouter.post(`/register`, UserCntrol);


  module.exports = userRouter;