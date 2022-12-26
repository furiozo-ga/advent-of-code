globalThis.l=console.log

let inp2=`Vixen can fly 19 km/s for 7 seconds, but then must rest for 124 seconds.
Rudolph can fly 3 km/s for 15 seconds, but then must rest for 28 seconds.
Donner can fly 19 km/s for 9 seconds, but then must rest for 164 seconds.
Blitzen can fly 19 km/s for 9 seconds, but then must rest for 158 seconds.
Comet can fly 13 km/s for 7 seconds, but then must rest for 82 seconds.
Cupid can fly 25 km/s for 6 seconds, but then must rest for 145 seconds.
Dasher can fly 14 km/s for 3 seconds, but then must rest for 38 seconds.
Dancer can fly 3 km/s for 16 seconds, but then must rest for 37 seconds.
Prancer can fly 25 km/s for 6 seconds, but then must rest for 143 seconds.`


let inp=inp2.split`\n` , r=[] ,t=2503

inp.forEach(p=>{
    let m=p.match(/^(\w+) can fly (\d+) .+? (\d+) .+? (\d+)/)
    r.push(m.slice(2,5).map(Number))
    r.at(-1).push(0,0)
})

function sc(t){
    let max=0
    r.forEach((p,i)=>{
        let ckl=Math.trunc(t/(p[1]+p[2]))
        , rs=ckl*p[1]
        if(t%(p[1]+p[2])<p[1]){
            rs+=t%(p[1]+p[2])
        }else rs+=p[1]
        p[4]=rs*p[0]
        if(p[4]>max){
            max=p[4]
        }
    })
    r.forEach(p=>{
        if(p[4]==max) p[3]++
    })
}

for(let dt=1 ; dt<=t ;++dt){
    sc(dt)
}

l(r.map(r=>r[4]).sort((a,b)=>a-b).at(-1))
l(r.map(r=>r[3]).sort((a,b)=>a-b).at(-1))