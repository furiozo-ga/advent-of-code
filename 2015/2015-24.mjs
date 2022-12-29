globalThis.l=console.log
Array.prototype.wo=function(...v){
    // l(v)
    if(v.length==0) return this.slice()
    if(Array.isArray(v[0])) return this.wo(...v[0])
    if(v.length==1) return this.filter(e=>e!==v[0])
    return this.wo(v[0]).wo(v.slice(1))
}
Array.prototype.sum=function(n){
    let sum=0
    for(let i=0; i<n; ++i) sum+=this[i]
    return sum
}
Array.prototype.mul=function(){
    let mul=1
    for(let i=0; i<this.length; ++i) mul*=this[i]
    return mul
}

let inp=`1
2
3
7
11
13
17
19
23
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
101
103
107
109
113`.split`\n`.map(Number).reverse()

let gn=3
let goal=inp.reduce((e,a)=>e+a)/gn
// l('goal1',goal)

let set=pick(inp,6,goal)
// l(set)

// let set2=pick(inp.wo(set),8,goal)
// l(set2)

l('qe1',set.mul())



gn=4
goal=inp.reduce((e,a)=>e+a)/gn
// l('goal2', goal)

set=pick(inp,4,goal)
// l(set)

l('qe2',set.mul())




function pick(items,num, goal){
    if(items.sum(num)<goal) return null
    if(num==1)
        if(items.includes(goal)) return [goal]
        else                     return null
    let vr=[]
    for(let i=0; i<items.length ;++i){
        if(items[i]>=goal) continue
        let ret=pick(items.slice(i+1), num-1, goal-items[i])
        if(ret) vr.push([items[i], ...ret])
    }
    if(vr.length){
        vr.sort((a,b)=>a.mul()-b.mul())     // pick quantum entanglement
        return vr[0]
    }
    return null
}