globalThis.l=console.log

let popcnt = (await WebAssembly.instantiate(Uint8Array.from(
    '0061736d0100000001060160017f017f03020100070a0106706f70636e7400000a070105002000690b000c046e616d6502050100010000'
    .match(/../g).map(b=>parseInt(b,16))),{})).instance.exports.popcnt;

function w(x,y){
    return popcnt((x+y)**2 + 3*x + y + 1358) & 1
}

let q=[[1,1,0]] , vtd=new Set(['1,1']) , p2=0

while(q.length){
    let [x,y,steps]=q.shift()
    for(let [dx,dy] of [[1,0],[0,1],[-1,0],[0,-1]]){
        let nx=x+dx, ny=y+dy
        if(nx<0 || ny<0) continue
        if(vtd.has(nx+','+ny)) continue
        if(w(nx,ny)) continue
        if(steps==50 && !p2) p2=vtd.size
        vtd.add(nx+','+ny)
        if(nx==31 && ny==39){
            l('part 1',steps+1)
            q=[];break
        }
        q.push([nx,ny,steps+1])
    }
}
l('part 2',p2)