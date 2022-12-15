globalThis.l=console.log

let inp1=`Sensor at x=2, y=18: closest beacon is at x=-2, y=15
Sensor at x=9, y=16: closest beacon is at x=10, y=16
Sensor at x=13, y=2: closest beacon is at x=15, y=3
Sensor at x=12, y=14: closest beacon is at x=10, y=16
Sensor at x=10, y=20: closest beacon is at x=10, y=16
Sensor at x=14, y=17: closest beacon is at x=10, y=16
Sensor at x=8, y=7: closest beacon is at x=2, y=10
Sensor at x=2, y=0: closest beacon is at x=2, y=10
Sensor at x=0, y=11: closest beacon is at x=2, y=10
Sensor at x=20, y=14: closest beacon is at x=25, y=17
Sensor at x=17, y=20: closest beacon is at x=21, y=22
Sensor at x=16, y=7: closest beacon is at x=15, y=3
Sensor at x=14, y=3: closest beacon is at x=15, y=3
Sensor at x=20, y=1: closest beacon is at x=15, y=3`

let inp2=`Sensor at x=2765643, y=3042538: closest beacon is at x=2474133, y=3521072
Sensor at x=2745662, y=2324735: closest beacon is at x=2491341, y=1883354
Sensor at x=2015742, y=2904055: closest beacon is at x=2474133, y=3521072
Sensor at x=3375262, y=3203288: closest beacon is at x=3321219, y=3415236
Sensor at x=3276468, y=3892409: closest beacon is at x=3321219, y=3415236
Sensor at x=952573, y=3147055: closest beacon is at x=-41010, y=2905006
Sensor at x=1823659, y=1779343: closest beacon is at x=1592718, y=2000000
Sensor at x=1156328, y=865741: closest beacon is at x=1592718, y=2000000
Sensor at x=3938443, y=271482: closest beacon is at x=4081274, y=1177185
Sensor at x=2815232, y=1641178: closest beacon is at x=2491341, y=1883354
Sensor at x=3984799, y=3424711: closest beacon is at x=3321219, y=3415236
Sensor at x=1658825, y=3999931: closest beacon is at x=2474133, y=3521072
Sensor at x=3199859, y=1285962: closest beacon is at x=4081274, y=1177185
Sensor at x=3538649, y=2788193: closest beacon is at x=3725736, y=2414539
Sensor at x=3522208, y=3336284: closest beacon is at x=3321219, y=3415236
Sensor at x=3093758, y=3492396: closest beacon is at x=3321219, y=3415236
Sensor at x=2464979, y=562119: closest beacon is at x=2491341, y=1883354
Sensor at x=3665010, y=1556840: closest beacon is at x=3735739, y=2128164
Sensor at x=207525, y=3893957: closest beacon is at x=-41010, y=2905006
Sensor at x=3894678, y=1974599: closest beacon is at x=3735739, y=2128164
Sensor at x=2185146, y=3822275: closest beacon is at x=2474133, y=3521072
Sensor at x=31166, y=1467978: closest beacon is at x=-41010, y=2905006
Sensor at x=3242364, y=3335961: closest beacon is at x=3321219, y=3415236
Sensor at x=3773718, y=3999789: closest beacon is at x=3321219, y=3415236
Sensor at x=423046, y=2227938: closest beacon is at x=-41010, y=2905006
Sensor at x=1600225, y=2529059: closest beacon is at x=1592718, y=2000000
Sensor at x=3291752, y=2241389: closest beacon is at x=3735739, y=2128164
Sensor at x=2741333, y=3984346: closest beacon is at x=2474133, y=3521072
Sensor at x=3935288, y=2292902: closest beacon is at x=3725736, y=2414539
Sensor at x=291635, y=140996: closest beacon is at x=212146, y=-1154950
Sensor at x=3966296, y=2600346: closest beacon is at x=3725736, y=2414539
Sensor at x=2228916, y=1461096: closest beacon is at x=2491341, y=1883354`

let inp=inp2.split`\n`.map(l=>l.match(/-?\d+/g).map(Number))
//   , line=10
  , line=2000000

inp.forEach(s=>s[4]=Math.abs(s[0]-s[2])+Math.abs(s[1]-s[3]))
inp.sort((a,b)=>b[4]-a[4])

let [xn,yn,xx,yx]=[...inp[0]]

inp.forEach(s=>{
    if(s[0]-s[4]<xn) xn=s[0]-s[4]
    if(s[0]+s[4]>xx) xx=s[0]+s[4]
    if(s[1]-s[4]<yn) yn=s[1]-s[4]
    if(s[1]+s[4]>yx) yx=s[1]+s[4]
})

function noton(xn,xx,line){
    let count=0
    for(let i=xn; i<=xx; ++i){
        let could=true
        for(let s of inp){
            if(Math.abs(i-s[0])+Math.abs(line-s[1])<=s[4]){
                could=false
                if(i==s[2] && line==s[3]){
                    l('beacon on ',i,line)
                    break
                }
                ++count
                // l('no',i)
                break
            }
        }
        // could && l('yes',i)
    }
    return count
}
let bx,by

function yeson(xn,xx,line){
    let count=0
    NP: for(let i=xn; i<=xx; ++i){
        let could=true
        for(let si=0; si<inp.length; ++si){
            if(Math.abs(i-inp[si][0])+Math.abs(line-inp[si][1])<=inp[si][4]){
                let ni=inp[si][0]+inp[si][4]-Math.abs(inp[si][1]-line)          // magic
                count+=ni-i+1
                if(line==inp[si][3] && (i==inp[si][2] || ni==inp[si][2])){
                    l('beacon on ',i,line)
                    --count
                }
                i=ni
                continue NP
            }
        }
        bx=i;by=line
    }
    return count
}
l(inp,xn,xx,yn,yx)
console.time()
// l(noton(xn,xx,line))
// console.timeLog()
l('not on : ',yeson(xn,xx,line), ' <=====================================')
console.timeLog()

for(let y=0; y<=4000000; ++y){
    // y%100000==0 && l('check ',y)
    yeson(0,4000000,y)
}

console.timeLog()
l('found on:',bx,by,bx*4000000+by,' <=====================================')