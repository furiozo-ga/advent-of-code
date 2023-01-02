globalThis.l=console.log
Array.prototype.cp=function(){
    let r=[]
    for(let i=1; i<this.length; ++i)
        r[i]=[...this[i]]
    return r
}
//                tm
//             tg    rg rm cg cm
// sg sm pg pm

let cnt=1,
b1=[
    1,
    [ 0b11000,0b11000 ],
    [ 0b00111,0b00011 ],
    [ 0b00000,0b00100 ],
    [ 0b00000,0b00000 ],
]
,b2=[
    1,
    [ 0b111000,0b111000 ],
    [    0b111,   0b011 ],
    [        0,   0b100 ],
    [        0,       0 ],
]
,b3=[
    1,
    [ 0b1111000,0b1111000 ],
    [     0b111,    0b011 ],
    [         0,    0b100 ],
    [         0,        0 ],
]
// let lim=3,b=[
//     1,
// //    [ 0b00000,0b00000 ],
// //    [ 0b00000,0b00000 ],
//     [ 0b00,0b11 ],
//     [ 0b11,0b00 ],
// ]

// for(let i=1; i<b.length ;++i){
//     l(chf(...b[i]))
// }
// l('===')
function chf(a,b){
    return a && b-(a&b)
}
let popcnt = (await WebAssembly.instantiate(Uint8Array.from(
    '0061736d0100000001060160017f017f03020100070a0106706f70636e7400000a070105002000690b000c046e616d6502050100010000'
    .match(/../g).map(b=>parseInt(b,16))),{})).instance.exports.popcnt;
    
function score(b){
    let s=0
    for(let i=0; i<b.length-1; ++i){
        s+=(popcnt(b[b.length-1-i][0]+b[b.length-1-i][1]))*(i+1)
    }
    return s
}

function score2(b){
    let s=0
    for(let i=1; i<b.length; ++i){
        s+=(popcnt(b[i][0])+popcnt(b[i][1]))*(i)
    }
    return s
}

function flood(){
    let [b,steps]=q.shift()
    let f=b[0]
    // mem=new Set(mem)
    // mem.add(b.join`,`)

    if(--cnt==0){
        cnt=1e4
        l(steps, q.length , mem.size, bs)
    }
    for(let dir of [1,-1]){
        if(f==1 && dir==-1 || f==b.length-1 && dir==1) continue
        for(let [ng,nm] of [
            [2,0],
            [0,2],
            [1,1],
            [1,0],
            [0,1],
        ]){
            for(let tg of pick(b[f][0],ng)){
                for(let tm of pick(b[f][1],nm)){
                    // l(f,dir,'=',ng,nm,'---',tg,tm)
                    if(chf(b[f    ][0]-tg , b[f    ][1]-tm)){
                        // l('fail src');
                        continue }
                    if(chf(b[f+dir][0]+tg , b[f+dir][1]+tm)){
                        // l('fail dst');
                        continue }
                    let newb=b.cp()
                    newb[0]=f+dir
                    newb[f    ][0]-=tg
                    newb[f    ][1]-=tm
                    newb[f+dir][0]+=tg
                    newb[f+dir][1]+=tm
                    let scor=score(newb)
                    // if(scor+4<bs){
                    if(scor>2*bs){
                        // l('skip for score',scor,bs)
                        continue
                    }
                    if(scor<bs) bs=scor
                    if(mem.has(newb.join`,`)){
                        // l('been there')
                        continue } // been there
                    mem.add(newb.join`,`)
                    // l('dst',newb)
                    if(newb.at(-1)[0]==lim && newb.at(-1)[1]==lim){
                        l('done',steps+1)
                        q=[]
                        return }
                    q.push([newb,steps+1])
                }
            }
        }
    }
    return
}

let mem=new Set([b1.join`,`])
  , q=[[b1,0]]
  , lim=31
  , bs=Infinity
while(q.length) flood()

mem=new Set([b2.join`,`])
  , q=[[b2,0]]
  , lim=63
  , bs=Infinity
while(q.length) flood()

mem=new Set([b3.join`,`])
  , q=[[b3,0]]
  , lim=127
  , bs=Infinity
while(q.length) flood()

// for(let i=0; i<20; ++i){
//     l(i,i.toString(2),pick(i,2))
// }

// function pick(n,b){
//     if(b==0) return [0]
//     let r=new Set()
//     if(b==1){
//         for(let p=1; p<=n ; p<<=1)
//             if(p&n) r.add(p)
//         return r
//     }
//     for(let p=1; p<=n ; p<<=1)
//         if(p&n) pick(n-p,b-1).forEach(v=>r.add(p+v))
//     return r
// }
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