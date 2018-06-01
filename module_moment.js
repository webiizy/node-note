// Dung de format date to string 
const moment = require('moment');

console.log(moment("12-25-1995", "MM-DD-YYYY").toDate()); 

const Util = module.exports = {
    now: (format="YYYY-MM-DD HH:mm:ss")=>{return moment().format(format).toString()},
    test: 'hi'
}

console.log(Util.now())

