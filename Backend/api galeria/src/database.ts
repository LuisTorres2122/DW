import { connect } from 'mongoose'

export async function startConnection() {
    const db = await connect('mongodb://localhost:27017/photo',{
        useNewUrlParser: true,
        useFindAndModify: false 
    });
    console.log('Database is connected');
}
