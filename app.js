const mongoose = require('mongoose');
const fastify = require('fastify')();

fastify.get('/', (req, res) => {
  res.send({ Hello: "World!" })
})
fastify.listen('http://nodejs-mongo-persistent-openshiftpocdiogo.7e14.starter-us-west-2.openshiftapps.com/').then(() => console.log(`server listening on ${fastify.server.address().port}`))

// Connect to the db
mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@mongodb.openshiftpocdiogo.svc.cluster.local:27017/openshiftDB`, function (err) {
  if (err) console.log(err)

  console.log('Connected in DB by Diogo');
  const usersSchema = new mongoose.Schema({
    name: { type: String }
  });

  const User = mongoose.model('User', usersSchema);

  User.create({ name: 'teste' }).then(() => console.log('user Created by Diogo'))
});




