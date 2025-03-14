const mongoose = require("mongoose");
const reviews = require("./reviews");
const schema = mongoose.Schema;
const Review = require("./reviews.js");
const { types } = require("joi");

const listingSchema = new schema ({
  title :{ 
      type:String,
      required:true,
},
 description : String,
  image :{
     url: String,
     filename:String,
},
  price : Number,
  location : String,
  country : String,
  reviews : [
    {
      type : schema.Types.ObjectId,
      ref :"Review",
    },
  ],
  owner :{
      type : schema.Types.ObjectId,
      ref: "User",
  },
  category :{
    type : String,
    enum : ["beach","farm","mountain","castles"],
  },
});
 

listingSchema.post("findOneAndDelete",async(listing)=>{
  if(listing){
   await Review.deleteMany({_id: {$in: listing.reviews}});
}
});
const Listing = mongoose.model("Listing", listingSchema); 
module.exports = Listing;