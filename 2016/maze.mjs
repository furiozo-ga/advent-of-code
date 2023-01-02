globalThis.l=function(...p){
    p.forEach(q=>vis.log.insertBottom(
        Array.isArray(q)   ? q.join` `
      : typeof q=='string' ? q
      : typeof q=='boolean'? q+''
      : q+''))
    vis.log.setScrollPerc(100)
    vis.scr.render()
}

Array.prototype.vis = function(){
    for(let i=0;i<this.length; ++i){
        l(this[i].join``)
    }
}
let popcnt = (await WebAssembly.instantiate(Uint8Array.from(
    '0061736d0100000001060160017f017f03020100070a0106706f70636e7400000a070105002000690b000c046e616d6502050100010000'
    .match(/../g).map(b=>parseInt(b,16))),{})).instance.exports.popcnt;

function w(x,y){
    return (((ky*Math.cos(x)+kx*Math.sin(y))**3 + kx*x**2 + ky**2*y**3 + offset) & 15) < 5
}

import vis from '../2022/vis.mjs'
vis.init()
vis.log=vis.box(10,'100%',{scrollable:true, alwaysScroll:true, scrollbar:{ch:'@'}, left:0, bottom:0})

let a=[],lx=270, ly=70, offset=0 ,kx=0,ky=0//1358
  , tick=0, skip=1000

// maze()
// flood()

vis.scr.key('pagedown',()=>{++ky ; maze(); flood()})
vis.scr.key('pageup'  ,()=>{--ky ; maze(); flood()})
vis.scr.key('right'   ,()=>{++kx ; maze(); flood()})
vis.scr.key('left'    ,()=>{--kx ; maze(); flood()})
vis.scr.key('up',  ()=>{offset++ ; maze(); flood()})
vis.scr.key('down',()=>{offset-- ; maze(); flood()})
vis.scr.key('z',maze)
vis.scr.key('space',flood)

function maze(){
    vis.scr.fillRegion(0<<9,' ',0,lx,0,ly)
    for(let y=0;y<ly;++y){
        a[y]=[]
        for(let x=0;x<lx;++x){
            a[y][x]= w(x,y) ? ' ' : 0
        }
    }
    vis.show(a,4)
    l([kx,ky,offset])
}

async function flood(){
    let q=[[1,1,0,[1,1]]] , vtd=new Set(['1,1'])

    while(q.length){
        let [x,y,steps,path]=q.shift()
        if(   x==lx-1 && y==0
            ||x==0    && y==ly-1
            ||x==lx-1 && y==ly-1){
               trace(path)
        }
        for(let [dx,dy] of [[1,0],[0,1],[-1,0],[0,-1]]){
            let nx=x+dx, ny=y+dy
            if(nx<0 || ny<0 || nx>=lx || ny>=ly) continue
            if(vtd.has(nx+','+ny)) continue
            if(w(nx,ny)) continue
            vtd.add(nx+','+ny)
            // if(nx==31 && ny==39){
            //     l('part 1',steps+1)
            //     q=[];break
            // }

            q.push([nx,ny,steps+1,[...path,nx,ny]])
            vis.putchar(nx,ny,' ',6)
            ++tick % skip == 0 && await sleep(0)
        }
    }
}

async function trace(p){
    for(let i=0; i<p.length; i+=2){
        vis.putchar(p[i],p[i+1],' ',7)
        // await sleep(0)
    }
}

function sleep(ms){
    return new Promise(res=>setTimeout(res,ms))
}