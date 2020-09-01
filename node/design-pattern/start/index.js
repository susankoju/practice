var logger = require('./Logger');
var Shopper = require('./Shopper');
var Store = require('./Store');

// var logger = new Logger().getInstance();

logger.log('Starting app...');

var alex = new Shopper('Alex', 250);
var ski_shop = new Store('Steep supplies', [
    {
        item: "Downhill Skis",
        qty: 5,
        price: 750
    },
    {
        item: 'Knit Hat',
        qty: 20,
        price: 5
    }
])

logger.log('Finished config...');

console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(`    ${log.message}`))
