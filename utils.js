var FIBOS = require("fibos.js");
var ssl = require("ssl");
ssl.loadRootCerts();

exports = module.exports

exports.Symbol = "FO";

function newClient(config) {
    return FIBOS({
        chainId: config.chainId,
        keyProvider: config.keyProvider,
        httpEndpoint: config.httpEndpoint,
        verbose: config.verbose,
        logger: {
            log: null,
            error: null
        }
    });
}

exports.newFibosClient = function(config) {
    var config = config || {};
    return newClient({
        chainId: config.chainId || process.env.FIBOS_CHAINID || "6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a",
        keyProvider: config.keyProvider || process.env.FIBOS_PRIKEY,
        httpEndpoint: config.httpEndpoint || process.env.FIBOS_URL || "http://se-rpc.fibos.io:8870",
        verbose: config.verbose || process.env.FIBOS_VERBOSE || false
    });
};

exports.newEosClient = function(config) {
    var config = config || {};
    return newClient({
        chainId: config.chainId || process.env.FIBOS_EOS_CHAINID || "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
        keyProvider: config.keyProvider || process.env.FIBOS_EOS_PRIKEY,
        httpEndpoint: config.httpEndpoint || process.env.FIBOS_EOS_URL || "http://api.eosbeijing.one",
        verbose: config.verbose || process.env.FIBOS_VERBOSE || false
    });
};

exports.checkArgs = function(program) {
    if (!process.argv.slice(2).length) {
      program.outputHelp();
    }
}
