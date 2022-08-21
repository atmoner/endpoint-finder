import lcdFinder from './src/index.js'
 
let lcd = new lcdFinder('osmosis')

lcd.getLcd().then(function(result) {
  console.log(result)
})
 
