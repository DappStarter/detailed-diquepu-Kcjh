require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remain minor imitate private foster turtle'; 
let testAccounts = [
"0xfa1238a39659e860f796ae46ff921853e755f6fcac601c661644133bc37894f1",
"0x5a4b52b92620bf869fe9ab50983837d0299f6910cffdb0856d03727678c780aa",
"0x683b7fc784efe6249c20a3e5645231eb2ad693ef004e48f85ba99b3dbc814e6d",
"0x2db3b369335d6e2c8bab7268ef8bbc2c8c51d1acfe78949b80c9ccead337ad9d",
"0x2eff9aa6cef03678445e739f022f020289008b615c0867315d6577527adb438b",
"0x1b625af0462ffdc13656a392b191b5ec75bf29b5a27c74f40543b41f1b140591",
"0x081fba2480aa27bb6e516a28a9fcc8faa295d3c0795d9bbd3be83a9ee1d0d4f2",
"0xad037d1ac0e08f5c88dc18a4dcb84e951e1ea908ac127fb35e307734c515f047",
"0x516b3be43b150fc9eb2c49ed14c7edd636e3844409283fafe0cb18fdeb833e79",
"0x85d50467d3dec510880c2593b73bb0525e49c1ccfc928f8a76a26ac57ed00494"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

