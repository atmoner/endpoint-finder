import endpointFinder from '../src/index.js'

describe('Get chains', () => {
  it('Get list of supported chains', () => {
    let initChains = new endpointFinder()    
    initChains.listChains().then(function(result) {
      expect(result).toContain('bitcanna')      
    })
  })
}) 

describe('Get endpoint', () => {
  it('Get valid LCD', () => {
    let getChainEndpoint = new endpointFinder('bitcanna')    
    getChainEndpoint.getLcd().then(function(result) {
      expect(result).toContain('https://lcd.bitcanna.io')
    })
  })
  it('Get valid RPC', () => {
    let getChainEndpoint = new endpointFinder('bitcanna')    
    getChainEndpoint.getRpc().then(function(result) {
      expect(result).toContain('https://rpc.bitcanna.io')
    })
  }) 
  it('Get invalid LCD', () => {
    let getChainEndpoint = new endpointFinder()    
    getChainEndpoint.getLcd().then(function(result) {
      expect(result).toBeUndefined()
    })
  })  
  it('Get invalid RPC', () => {
    let getChainEndpoint = new endpointFinder()    
    getChainEndpoint.getRpc().then(function(result) {
      expect(result).toBeUndefined()
    })
  })   
}) 
