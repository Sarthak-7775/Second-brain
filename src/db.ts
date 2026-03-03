import mongoose, {Model, Schema} from 'mongoose';

mongoose.connect("mongodb+srv://sarthakkandpal2005:Sarthak12345@cluster0.gyes1.mongodb.net/?appName=Cluster0");

    const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

export const UserModel = mongoose.model("User", UserSchema);

const ContentSchema = new Schema({
    title: string,
    link: string,
    tags: [{type: mongoose.Types.ObjectId, ref: "Tag"}],
    UserId: {type: mongoose.Types.ObjectId, ref: "User", required: true }
})

export const ContentModel = mongoose.model("Content", ContentSchema);
