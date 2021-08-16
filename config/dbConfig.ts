import mongoose from "mongoose";

const connect = () => {
    const uri = 'mongodb+srv://rohithkye:UfAO1zCfpJWmJ7a0@cluster0.lqhsr.mongodb.net/shop?retryWrites=true&w=majority';
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