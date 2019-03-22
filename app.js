const mongoose = require('mongoose');
const fastify = require('fastify')();

fastify.get('/', (req, res) => {
  res.send({ Hello: "World!" })
})
fastify.listen(3000).then(() => console.log(`server listening on ${fastify.server.address().port}`))

// Connect to the db
mongoose.connect("mongodb://localhost:27017/openshiftDB", function (err) {
  console.log('Connected');
  const usersSchema = new mongoose.Schema({
    name: { type: String }
  });

  const User = mongoose.model('User', usersSchema);

  User.create({ name: 'teste' }).then(() => console.log('user Created'))
});




