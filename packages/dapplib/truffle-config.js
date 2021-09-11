require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note meadow common inflict perfect forget senior'; 
let testAccounts = [
"0x2d7b8d6b0c422110218047b2647276c468b2f1a89a943f23aaaa9198f89de7d5",
"0xc63e12540ffce6e33014ff9a01767f39170e7cb7657a7b293fcb338982a98bd6",
"0x48f59315c1aa06fe69491e801fecb3da77f5f04967bd4de3c230a1354298b646",
"0x0ff3a8727d918292ba0753d89dbe22414c3eaebd37464185da8cac1f9999f05c",
"0x1802f3bd854142dcb3c15f3a2feaa3eb72c46d0569a7909e28d267db427211f1",
"0x6d758971d6cda51d984caa81779c8d273300b35a6a8fbef5aed4303cbf131a86",
"0xa4a45fdf4a63aca448e9625882f69a56683c05dff4a5fa9af56a2abc6c42e9ce",
"0xbdb14e92a1aadb8d95ead45e257e889fe9662f1fdc64bb9c050f4a8677d6b9c0",
"0x79f300ba028dcfb7276b924b6ea4e7af082df7ace56c166ce5bf7986af2e5b0f",
"0xdcda164885088e637db10abb795bb6ee1a0571907653ef87097f93d0328775e6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


