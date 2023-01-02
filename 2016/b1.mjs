globalThis.l=console.log
let q=[],a=5
  , set=new Set()
for(let i=0; i<1e6; ++i){
    pick(63,4)
// for(let i=0; i<20; ++i){
//     l(i,i.toString(2) ,pick(i,3))
    // 15,3 == 2.15 sec
}
// while(q.length) q.pop()
// 0110110
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
