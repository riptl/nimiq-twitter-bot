#!/usr/bin/env node

const WebSocket = require('ws');

let {
    STREAM_TX
} = process.env;

if (!STREAM_TX)
    STREAM_TX = "ws://localhost:8648/streamBlocks?includeTransactions";

const txWs = new WebSocket(STREAM_TX);

txWs.on('message', data => {
    const obj = JSON.parse(data);
    const txs = obj.transactions;
    for (const tx of txs) {
        console.log(tx.value);
    }
});
