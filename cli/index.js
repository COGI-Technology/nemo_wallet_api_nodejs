#!/usr/bin/env node

const { Command } = require('commander')
const { dsa } = require('./dsa')

const program = new Command()

program.version('1.0.0').description('Nemo-API CLI tool')

//#region DSA
program
    .command('dsa')
    .description('DSA key pair utils')
    .requiredOption('-A, --algorithm <algorithm>', 'algorithm is secp256k1 or Ed25519', 'Ed25519')
    .requiredOption('-a, --action <action>', 'generate | sign | verify', 'generate')
    .option('-k, --key <key>')
    .option('-m, --message <message>')
    .action(dsa)

//#endregion

program.parse(process.argv)
