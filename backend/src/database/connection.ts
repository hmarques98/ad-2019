import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect(
  `mongodb+srv://marques98:${process.env.DB_PASS}@ad-2019.plhnt.mongodb.net/secretfriend?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
