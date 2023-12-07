const express =  require('express');
const userRouter = new express.Router();



userRouter.post(`/register`, async (req, res) => {
  
  try {
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


  module.exports = userRouter;