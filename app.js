const mongoose = require('mongoose');
const fastify = require('fastify')();

fastify.get('/', (req, res) => {
  res.send({ Hello: "World!" })
})
fastify.listen(8080).then(() => console.log(`server listening on ${fastify.server.address().port}`))

// Connect to the db
mongoose.connect("mongodb://localhost:27017/openshiftDB", function (err) {
  if (err) console.log(err)

  console.log('Connected by Diogo');
  const usersSchema = new mongoose.Schema({
    name: { type: String }
  });

  const User = mongoose.model('User', usersSchema);

  User.create({ name: 'teste' }).then(() => console.log('user Created by Diogo'))
});




