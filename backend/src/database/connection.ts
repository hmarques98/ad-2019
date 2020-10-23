import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@ad-2019.plhnt.mongodb.net/secretfriend?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
