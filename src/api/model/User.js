let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  username:
  {
      type: String,
      unique: true,
      required: true
  },
  password: String,
  picture: String,
  created_at: Date,
  updated_at: Date
});

UserSchema.pre('save', function(next) {

  // get the current date
  let currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

module.exports = mongoose.model("users", UserSchema);
