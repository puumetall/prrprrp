require('./styles.scss');
const logger = require('./log.js');
logger.log("hello");
require('./index.ts');

class hello {
    hello(){
        console.log("hello")
    }
}

let helloObj = new hello();
helloObj.hello();