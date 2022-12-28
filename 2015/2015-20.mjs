globalThis.l=console.log

let inp=29000000
// let inp=160
  , lim=inp/10
  , p=[]
for(let i=1; i<=lim; ++i){
    for(let j=i; j<=lim; j+=i){
        p[j]??=0
        p[j]+=i
    }
}
for(let i=1; i<=lim; ++i)
    if(p[i]>=lim){l(i);break}

lim=Math.ceil(inp/11)
  , p=[]
for(let i=1; i<=lim; ++i){
    for(let j=1; j<=50 && j*i<=lim; j++){
        p[j*i]??=0
        p[j*i]+=i*11
    }
}
for(let i=1; i<=lim; ++i)
    if(p[i]>=inp){l(i);break}
