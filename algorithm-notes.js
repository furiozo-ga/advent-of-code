globalThis.l=console.log
Array.prototype.vis = function(){
    for(let i=0;i<this.length; ++i){
        l(this[i].join``)
    }
}

// md5
import {createHash} from 'node:crypto'
function md5(content){
    return createHash('md5').update(content).digest('hex')
}


// combinations : generate all possible bit-vectors having k-bits set from bit-vector v
function pick(v,k,lb=1){
    if(k==0) return [0]
    let r=[]
    if(k==1){   // this part for speed improvement
        for(let p=lb; p<=v; p<<=1)
            if(p&v) r.push(p)
        return r
    }
    for(let p=lb; p<=v; p<<=1)
        if(p&v){
            v-=p
            let s=pick(v,k-1,p<<1)
            for(let i=0 ;i<s.length; ++i)
                r.push(p+s[i])
        }
    return r
}
function pick1(n,b){
    if(b==0) return [0]
    let r=new Set()
    if(b==1){
        for(let p=1; p<=n ; p<<=1)
            if(p&n) r.add(p)
        return r
    }
    for(let p=1; p<=n ; p<<=1)
        if(p&n) pick1(n-p,b-1).forEach(v=>r.add(p+v))
    return r
}

//permutations of an array
function perm(a){
    if(a.length<2) return [a]
    let ret=[]
    for(let i=0; i<a.length; ++i){
        let wo=a.concat()
          , c=a[i]
        wo.splice(i,1)
        let sub=perm(wo)
        for(let j=0; j<sub.length; ++j){
            sub[j].unshift(c)
            ret.push(sub[j])
        }
    }
    return ret
}



// popcnt webassembly
let popcnt = (await WebAssembly.instantiate(Uint8Array.from(
'0061736d0100000001060160017f017f03020100070a0106706f70636e7400000a070105002000690b000c046e616d6502050100010000'
.match(/../g).map(b=>parseInt(b,16))),{})).instance.exports.popcnt;

// popcnt with bit magic
function bitCount(n){
  n -= ((n >> 1) & 0x55555555)
  n  = (n & 0x33333333) + ((n >> 2) & 0x33333333)
  return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
}