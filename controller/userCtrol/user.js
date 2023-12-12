const registeUser  = async (req, res) => {
  
    try {
      res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }


  module.exports = {
    registeUser
  }