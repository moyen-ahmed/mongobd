db.products.updateOne(
  { name: "Wireless Mouse" }, 
    { $set: { stock: 150 } }
)
//push
db.products.updateOne(
    { name: "Mechanical Keyboard" },
    { $push: { tags: "gaming" } }
)
//pull
db.products.updateOne(
    { name: "Mechanical Keyboard" },
    { $pull: { tags: "mechanical" } }
)
//rename
db.products.updateOne(
    { name: "Gaming Laptop" },
    { $rename: { "ratings": "reviewScore" } }
)
//delete
db.products.deleteOne(
    { name: "Wireless Mouse" }
)
db.products.deleteMany(
    { stock: { $lt: 50 } }
)
