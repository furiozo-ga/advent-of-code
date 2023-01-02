globalThis.l=console.log


let a=Array(3014387).fill(1)
// let a=Array(555555).fill(1)
  , pos=0

l(play())

for(let i=0; i<a.length; ++i){
    a[i]=i+1
}

pos=0
while(a.length>1){
    let v=(pos+Math.floor(a.length/2))%a.length
    a.splice(v,1)
    if(v>pos) ++pos
    else if(pos==a.length) pos=0
    if(a.length%1000==0)l(a.length)
    // l(a)
}
l(a[0])

function play(){
    while(true){
        // if(pos==a.length) pos=0
        let t=fp(pos)
        , v=fp(t+1)
        if(t==v) return t+1
        a[t]+=a[v]
        a[v]=0
        pos=fp(v+1)
    }
}

function fp(p){
    for(; ;++p){
        if(p==a.length) p=0
        if(a[p]>0) return p
        // l(p)
    }
}

// l(pos+1)