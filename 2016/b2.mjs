globalThis.l=console.log

let bytespopcnt = Uint8Array.from(
 `0061736d0100000001060160017f017f03020100070a0106706f70636e740000
  0a070105002000690b000c046e616d6502050100010000`
  .match(/\w\w/g).map(b=>parseInt(b,16))
);

let popcnt = (await WebAssembly.instantiate(Uint8Array.from(
'0061736d0100000001060160017f017f03020100070a0106706f70636e7400000a070105002000690b000c046e616d6502050100010000'
.match(/../g).map(b=>parseInt(b,16))),{})).instance.exports.popcnt;


l(popcnt(23451),bitCount(23451))

// console.time()
// bench(popcnt)
// console.timeEnd()
// console.time()
// bench(bitCount)
// console.timeEnd()

function bench(f){
    for(let i=0; i<9e7; ++i)
        f(0xffffffff)
}

function bitCount (n) {
    n = n - ((n >> 1) & 0x55555555)
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
    return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
}