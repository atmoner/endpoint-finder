import { chains } from 'chain-registry'
import fetch from 'node-fetch'

let endpointFinder = class {

  constructor(chainToFind) {
    this.chainToFind = chainToFind
    this.finalLcd = ''
    this.finalRpc = ''
  }  
  async listChains() {
    let allChains = []
    chains.forEach(function(item) {
      allChains.push(item.chain_name)
    })
    return allChains
  }    
  async getLcd() {
    let finder = chains.find(
      ({chain_name}) => chain_name === this.chainToFind
    ) 
    
    if (typeof finder !== 'undefined' && typeof finder.apis !== 'undefined') {      
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
  async getRpc() {
    let finder = chains.find(
      ({chain_name}) => chain_name === this.chainToFind
    ) 
    
    if (typeof finder !== 'undefined' && typeof finder.apis !== 'undefined') {   
      for (const rpcs of finder.apis.rpc) {      
        try {
          const response = await fetch(rpcs.address)
          if (response.status == 200) {
            this.finalRpc = rpcs.address
            break
          } 
        } catch (err) {
          console.error(err)
        }        
      }      
    }
    return this.finalRpc
  }   
}
export default endpointFinder
 
