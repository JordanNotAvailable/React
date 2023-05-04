const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
    trim: true,
    match: [/^[A-z][A-z0-9-_]{3,23}$/, 'Must match a vailid username!'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/, 'Must match a vailid password!'],
  },
  chats: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Chat',
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ]
});

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
