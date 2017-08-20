const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5999a733f3cfa90f651934ff';

if (!ObjectID.isValid(id)) {
  console.log('Id not valid');
}

/*
Todo.find({
  _id: id
}).then((todos) => {
  console.log("Todos: ", todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log("Todo: ", todo);
});
*/

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo By Id: ', todo);
}).catch((e) => console.log(e));

User.findById('5996e0f48a4ff86fac7fd055').then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log('User By Id: ', user);
}).catch((e) => console.log(e));

