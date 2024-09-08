import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://trongdat232003:0YJVoBUgyR2t3xS0@cluster0.cgvck.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
