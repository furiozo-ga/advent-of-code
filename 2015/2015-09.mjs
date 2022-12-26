globalThis.l=console.log

let inp1=`London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141`
let inp2=`Faerun to Tristram = 65
Faerun to Tambi = 129
Faerun to Norrath = 144
Faerun to Snowdin = 71
Faerun to Straylight = 137
Faerun to AlphaCentauri = 3
Faerun to Arbre = 149
Tristram to Tambi = 63
Tristram to Norrath = 4
Tristram to Snowdin = 105
Tristram to Straylight = 125
Tristram to AlphaCentauri = 55
Tristram to Arbre = 14
Tambi to Norrath = 68
Tambi to Snowdin = 52
Tambi to Straylight = 65
Tambi to AlphaCentauri = 22
Tambi to Arbre = 143
Norrath to Snowdin = 8
Norrath to Straylight = 23
Norrath to AlphaCentauri = 136
Norrath to Arbre = 115
Snowdin to Straylight = 101
Snowdin to AlphaCentauri = 84
Snowdin to Arbre = 96
Straylight to AlphaCentauri = 107
Straylight to Arbre = 14
AlphaCentauri to Arbre = 46`

Array.prototype.wo=function(v){
    return this.filter(e=>e!==v)
}

let inp=inp2.split`\n`
  , d=new Map(), loc=new Set()

for(let i=0; i<inp.length; ++i){
    let m=inp[i].match(/(\w+) to (\w+) = (\d+)/)
    loc.add(m[1])
       .add(m[2])
    d.set(m[1]+','+m[2],+m[3])
     .set(m[2]+','+m[1],+m[3])
}

let min=Infinity, max=0
for(let start of [...loc]){
    let rest=shp(start,[...loc].wo(start))
      , resq= lp(start,[...loc].wo(start))
    if(rest<min) min=rest
    if(resq>max) max=resq
}

l(min,max)

function lp(start,dst){
    // l('shp',start,dst)
    if(dst.length==1) return d.get(start+','+dst[0])
    let max=0
    for(let ns of dst){
        let rest=lp(ns,dst.wo(ns))
          , dn=d.get(start+','+ns)
        if(dn+rest>max) max=dn+rest
    }
    return max
}
function shp(start,dst){
    // l('shp',start,dst)
    if(dst.length==1) return d.get(start+','+dst[0])
    let min=Infinity
    for(let ns of dst){
        let rest=shp(ns,dst.wo(ns))
          , dn=d.get(start+','+ns)
        if(dn+rest<min) min=dn+rest
    }
    return min
}

// l(d,loc)