# FIBOS CLI

fibos-cli is the command line tool for fibos, just like cleos for eos.

## Installation

### Install with Docker

It is recommended that install fibos-cli with docker:
```shell
git clone https://github.com/adshao/fibos-cli && cd fibos-cli && alias fibos-cli="docker run -it --rm -v `pwd`:/usr/src/app -w /usr/src/app --env PATH=/usr/src/app:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin --env FIBOS_PUBKEY --env FIBOS_PRIKEY --env FIBOS_EOS_PUBKEY --env FIBOS_EOS_PRIKEY adshao/fibos fibos-cli"
```

### Install on Host

Make sure you have installed fibos:
```shell
curl -s https://fibos.io/download/installer.sh | sh
```

Add current dir to PATH:
```shell
chmod 755 fibos-cli* && export PATH=$(pwd):$PATH
```

## Usage

```shell
$ fibos-cli

  Usage: fibos-cli [options] [command]

  Options:

    -V, --version          Output the version number
    -u, --url <url>        The http/https URL where nodeos is running: http://se-rpc.fibos.io:8870
    --chain-id <chain-id>  The chain id of fibos: 6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a
    -h, --help             Output usage information

  Commands:

    create                 Create various items, on and off the blockchain
    get                    Retrieve various items and information from the blockchain
    transfer               Transfer FO from account to account
    deposite               Deposite EOS from mainnet to FIBOS
    withdraw               Withdraw EOS from FIBOS to mainnet
    exchange               Exchange EOF with FO
    system                 Send eosio.system contract action to the blockchain.
    help                   Display help for [cmd]
```

### Prepare Key File

Save your public/private keys pairs in secure.key:
```shell
# FIBOS keys are only required if you want to do any signed operations
export FIBOS_PUBKEY=xxx
export FIBOS_PRIKEY=xxx
# EOS keys are only requried if you want to deposite EOS
export FIBOS_EOS_PUBKEY=xxx
export FIBOS_EOS_PRIKEY=xxx
```
```shell
source secure.key
```

### Create Key Pair

Create a new key pair:
```shell
fibos-cli create key
```

### Get Exchange Info

Get current exchange price:
```shell
fibos-cli get exchangeinfo

fo price: 522.4158 FO/EOS
```

### Get Ram Price

```shell
fibos-cli get ramprice

ram prices: 0.692225270681258 FO/KB
```

### Deposite EOS

Deposite EOS from mainnet to FIBOS:
```shell
fibos-cli deposite adshaoadshao adshaoadshao "1.0000 EOS"
```

### Withdraw EOS

Withdraw EOS from FIBOS to mainnet:
```shell
fibos-cli withdraw adshaoadshao adshaoadshao "0.0002 EOS"
```

### Check Balance

```shell
fibos-cli get table eosio.token adshaoadshao accounts
```

### Exchange EOS to FO

```shell
fibos-cli exchange adshaoadshao "0.0001 EOS" "0.0000 FO"
```

### Exchange FO to EOS

```shell
fibos-cli exchange adshaoadshao "1.0000 FO" "0.0000 EOS"
```

### Buy Ram

```shell
fibos-cli system buyram adshaoadshao adshaoadshao "1.0000 FO"
```

### Sell Ram

```shell
fibos-cli system sellram adshaoadshao 1024
```

### Get Account

```shell
fibos-cli get account adshaoadshao
```

### Create Account

Create an account for your friend:
```shell
fibos-cli system newaccount --stake-net '1.0000 FO' --stake-cpu '1.0000 FO' --buy-ram-kbytes 5 adshaoadshao adshaoadsha2 FO8ju91D8wdjuucrtty5uQ8fCdBVP2WFKrBZ5LwNg5m8T6Fko7PY
```
