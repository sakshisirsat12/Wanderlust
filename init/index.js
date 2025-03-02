const mongoose = require("mongoose");
const Listing = require("../MODELS/listing.js");
const initData = require("./data.js");

let MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

  const initDB = async ()=>{
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj)=>({...obj, owner:"67c03d99755eefe23582f394"}));
  await Listing.insertMany(initData.data);
  console.log("data was initailize");
};

initDB();