import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/sygnal')
  .then(() => console.log('Connection to database established successfully!'))
  .catch(error => console.log(`Error connecting to database ${error}`));

export default mongoose.connection;
