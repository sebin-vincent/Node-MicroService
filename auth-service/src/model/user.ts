import mongoose from 'mongoose';

interface UserAttrs {
    email: string;
    password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
    build(attributes: UserAttrs): UserDoc;
}

interface UserDoc extends mongoose.Document {
    email: string,
    password: string
}

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});


userSchema.statics.build = (attributes: UserAttrs) => {
    return new User(attributes);
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };