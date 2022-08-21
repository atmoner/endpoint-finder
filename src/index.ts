import { chains } from 'chain-registry';
import fetch from 'node-fetch';

let lcdFinder = class {
  
  chainToFind: string
  finalLcd: string
  
  constructor(chainToFind: string) {
    this.chainToFind = chainToFind
  }  
  
  async getLcd() {
    let finder = chains.find(
      ({chain_name}) => chain_name === this.chainToFind
    )
 
    if(typeof finder !== 'undefined' && typeof finder.apis !== 'undefined') {      
      for (const lcds of finder.apis.rest) {      
        try {
          const response = await fetch(lcds.address + '/node_info')
          if (response.status == 200) {
            this.finalLcd = lcds.address
            break
          } 
        } catch (err) {
          console.error(err)
        }        
      }      
    }

    return this.finalLcd
  }      
}
export default lcdFinder
