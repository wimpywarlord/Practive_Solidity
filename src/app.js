// THIS TALKS TO THE BC
App = {
    constracts: {},
    load: async () => {
        // LOAD APP...
        await App.loadWeb3();
        await App.loadAccount();
        await App.loadContract();
        console.log("App Loading")
    },

    // WE CONNECT OUR BROWSER WITH BC USING META MASK EXTENTION
    // WE CONNECT OUR CLIENT SIDE WITH BC USING WEB3

    // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
    loadWeb3: async () => {
    if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider
        web3 = new Web3(web3.currentProvider)
    } else {
    window.alert("Please connect to Metamask.")
    }
    // Modern dapp browsers...
    if (window.ethereum) {
    window.web3 = new Web3(ethereum)
    try {
        // Request account access if needed
        await ethereum.enable()
        // Acccounts now exposed
        web3.eth.sendTransaction({/* ... */})
    } catch (error) {
        // User denied account access...
    }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
    App.web3Provider = web3.currentProvider
    window.web3 = new Web3(web3.currentProvider)
      // Acccounts always exposed
      web3.eth.sendTransaction({/* ... */})
    }
    // Non-dapp browsers...
    else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
},
    loadAccount: async() => {
        App.account = web3.eth.accounts;
        console.log("1")
        console.log(App.account);
    },
    loadContract: async () => {
        const todoList = await $.getJSON("TodoList.json");
        App.contracts.TodoList = TruffleContract(todoList)
        App.contracts.TodoList.setProvider(App.web3Provider)
        console.log("2")
        console.log(todoList)
    },
}

$(() => {
$(window).load(() => {
        App.load()
    })
})