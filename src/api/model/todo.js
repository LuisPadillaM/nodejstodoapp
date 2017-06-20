let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;

// Create a schema
// let todoSchema = new Schema({
//   task: { type: String, required: true, unique: true },
//   created_at: Date,
//   updated_at: Date
// });

let todoSchema = new Schema({
  task: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});

todoSchema.pre('save', function(next) {

  // get the current date
  let currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

module.exports = mongoose.model("todo_app", todoSchema);
