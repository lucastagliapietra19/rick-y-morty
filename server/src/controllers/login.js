const users = require('../utils/users')

const login = async (req, res) => {
  // forma 1
  const { email, password } = req.query;
  console.log('req.query', req.query);

  // forma 2
  // const email  = req.query.email;
  // const password = req.query.password;

  const user = users.find(user => 
    user.email === email && 
    user.password === password
  );

  if (user) {
    return res.json({ access: true });
  } else {
    return res.status(401).json({ access: false });
  }

};

module.exports = login;