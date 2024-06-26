import  mongoose from 'mongoose';
 
const ConnectDB=async ()=>
{
    await mongoose.connect('mongodb+srv://rohitsampannavar:Rohit%402001@cluster0.gcxzdxx.mongodb.net/blogger_app?retryWrites=true&w=majority');
    console.log(`${new Date().toISOString()} =>`, 'DB Connected:');
}
export default ConnectDB;