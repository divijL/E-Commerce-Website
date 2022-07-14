import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@mongodb://Flipkart:<password>@ac-mejvcu7-shard-00-00.vbfmeny.mongodb.net:27017,ac-mejvcu7-shard-00-01.vbfmeny.mongodb.net:27017,ac-mejvcu7-shard-00-02.vbfmeny.mongodb.net:27017/?ssl=true&replicaSet=atlas-12c379-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;