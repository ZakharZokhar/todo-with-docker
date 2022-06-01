const { model } = require('mongoose');

const todoSchema = {
    todo: String
  };

  module.exports = model('TODO', todoSchema);