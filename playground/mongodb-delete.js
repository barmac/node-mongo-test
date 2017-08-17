const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');
/*
  db.collection('Todos').deleteMany({completed: true}).then((result) => {
    console.log(result);
  });

  db.collection('Todos').deleteOne({completed: false}).then((result) => {
    console.log(result);
  });
*/
//  Return the deleted object as result.value
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });

  db.close();
});
