globalThis.l=console.log

let inp=`Disc #1 has 17 positions; at time=0, it is at position 1.
Disc #2 has 7 positions; at time=0, it is at position 0.
Disc #3 has 19 positions; at time=0, it is at position 2.
Disc #4 has 5 positions; at time=0, it is at position 0.
Disc #5 has 3 positions; at time=0, it is at position 0.
Disc #6 has 13 positions; at time=0, it is at position 5.`

inp=inp.split`\n`

let a=[]
inp.forEach(r=>{
    let m=r.match(/(\d+) has (\d+) .+ (\d+)\.$/)
    a[+m[1]]=[+m[2],+m[3]]
})

// l(a)
for(let p in [1,2]){
    T: for(let t=0;; ++t){
        for(let i=1; i<a.length; ++i){
            if((t+i+a[i][1])%a[i][0]!=0) continue T
        }
        l(t)
        break
    }
    a.push([11,0])
}