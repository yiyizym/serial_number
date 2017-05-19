const { SerialNumber } = require('./serialNumber.js')

let sn = new SerialNumber();

console.log('initail serial number is : ',sn.showCurrentNumber());

sn.increaseNumber();

var start = sn.showCurrentNumber();

console.log('increase serial number by one, now serial number is : ',start);

var end = sn.getNumber(start, 1000);

console.log('get the 1000 next serial number: ', end);

console.log(`the counts between ${start} and ${end} is: `, sn.getCount(start, end));