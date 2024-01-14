const mongoose = require("mongoose");
const bcrybt=require("bcrypt")
const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
});

userSchema.pre("save",async function(){
    this.email=this.email.toLowerCase()
    this.password=await bcrybt.hash(this.password,7)
})

module.exports = mongoose.model("User", userSchema);
