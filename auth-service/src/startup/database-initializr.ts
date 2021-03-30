import mongoose from 'mongoose';


export const initializeDb = async () => {
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/authDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('Connected to mongodb.');

    } catch (err) {
        console.error(err);
    }

}