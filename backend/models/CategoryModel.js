const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, default: "default category description" },
  image: { type: String, default: "/images/image7.jpg" },
});
categorySchema.index({description: 1})
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
