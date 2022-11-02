import { connect } from 'mongoose'

export async function startConnection() {
    const db = await connect('mongodb+srv://admin:admin12345@cluster0.cynunb4.mongodb.net/photo',{
        useNewUrlParser: true,
        useFindAndModify: false 
    });
    console.log('Database is connected');
}
