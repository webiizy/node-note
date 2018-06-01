const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open',()=>{
    console.log('connect to mongoose successful')
})

/* const kittySchema = mongoose.Schema({
    name : String
})

const Kitten = mongoose.model('Kitten',kittySchema);

const silence = new Kitten({name: 'Silence'});
console.log(silence.name)
 */
