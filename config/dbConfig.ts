import mongoose from "mongoose";

const connect = () => {
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.lqhsr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
    mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
        .then((result) =>
            console.log("DB Connected")
        )
        .catch((err) => {
            console.error(err);
            process.exit(1);
        }
        );
}
export default connect;