globalThis.l=console.log

let inp1=`Valve AA has flow rate=0; tunnels lead to valves DD, II, BB
Valve BB has flow rate=13; tunnels lead to valves CC, AA
Valve CC has flow rate=2; tunnels lead to valves DD, BB
Valve DD has flow rate=20; tunnels lead to valves CC, AA, EE
Valve EE has flow rate=3; tunnels lead to valves FF, DD
Valve FF has flow rate=0; tunnels lead to valves EE, GG
Valve GG has flow rate=0; tunnels lead to valves FF, HH
Valve HH has flow rate=22; tunnel leads to valve GG
Valve II has flow rate=0; tunnels lead to valves AA, JJ
Valve JJ has flow rate=21; tunnel leads to valve II`

let inp2=`Valve TM has flow rate=0; tunnels lead to valves KF, AA
Valve LG has flow rate=8; tunnels lead to valves DD, UA
Valve IZ has flow rate=20; tunnels lead to valves LY, XC
Valve XF has flow rate=0; tunnels lead to valves PB, QD
Valve FE has flow rate=0; tunnels lead to valves ZW, KF
Valve ZP has flow rate=0; tunnels lead to valves MT, AI
Valve CL has flow rate=0; tunnels lead to valves JN, AI
Valve UA has flow rate=0; tunnels lead to valves VW, LG
Valve VP has flow rate=0; tunnels lead to valves MB, GU
Valve KY has flow rate=0; tunnels lead to valves BZ, CJ
Valve AI has flow rate=11; tunnels lead to valves TL, GG, CL, ZP, MM
Valve GD has flow rate=0; tunnels lead to valves KB, QK
Valve GU has flow rate=14; tunnels lead to valves ZK, VP
Valve RO has flow rate=0; tunnels lead to valves KS, TJ
Valve VW has flow rate=0; tunnels lead to valves UA, KS
Valve YE has flow rate=24; tunnel leads to valve DP
Valve AA has flow rate=0; tunnels lead to valves TL, ZU, TM, RL, BZ
Valve RL has flow rate=0; tunnels lead to valves AA, NU
Valve RG has flow rate=0; tunnels lead to valves CJ, KS
Valve ZW has flow rate=0; tunnels lead to valves TJ, FE
Valve OY has flow rate=0; tunnels lead to valves KS, AO
Valve CE has flow rate=0; tunnels lead to valves QK, IQ
Valve JN has flow rate=0; tunnels lead to valves EK, CL
Valve OF has flow rate=0; tunnels lead to valves KS, ZK
Valve LY has flow rate=0; tunnels lead to valves IZ, EJ
Valve DD has flow rate=0; tunnels lead to valves KF, LG
Valve QK has flow rate=15; tunnels lead to valves CE, EJ, UK, GD
Valve XC has flow rate=0; tunnels lead to valves RA, IZ
Valve EK has flow rate=22; tunnel leads to valve JN
Valve JM has flow rate=0; tunnels lead to valves VF, KF
Valve UK has flow rate=0; tunnels lead to valves PB, QK
Valve ZK has flow rate=0; tunnels lead to valves GU, OF
Valve EJ has flow rate=0; tunnels lead to valves LY, QK
Valve CJ has flow rate=10; tunnels lead to valves WS, IQ, RG, KY
Valve MB has flow rate=18; tunnel leads to valve VP
Valve TL has flow rate=0; tunnels lead to valves AA, AI
Valve KS has flow rate=13; tunnels lead to valves OF, OY, RO, RG, VW
Valve QD has flow rate=0; tunnels lead to valves XF, TJ
Valve CU has flow rate=19; tunnels lead to valves AO, DP
Valve PB has flow rate=5; tunnels lead to valves ZU, GG, XF, UK, VF
Valve KF has flow rate=7; tunnels lead to valves DD, JM, ZH, FE, TM
Valve TJ has flow rate=3; tunnels lead to valves QD, ZW, NU, RO, MT
Valve ZH has flow rate=0; tunnels lead to valves KF, WS
Valve BZ has flow rate=0; tunnels lead to valves KY, AA
Valve NU has flow rate=0; tunnels lead to valves RL, TJ
Valve KB has flow rate=21; tunnels lead to valves RA, GD, JW
Valve WS has flow rate=0; tunnels lead to valves ZH, CJ
Valve ZU has flow rate=0; tunnels lead to valves PB, AA
Valve MT has flow rate=0; tunnels lead to valves ZP, TJ
Valve JW has flow rate=0; tunnels lead to valves MM, KB
Valve DP has flow rate=0; tunnels lead to valves CU, YE
Valve AO has flow rate=0; tunnels lead to valves OY, CU
Valve RA has flow rate=0; tunnels lead to valves KB, XC
Valve VF has flow rate=0; tunnels lead to valves PB, JM
Valve IQ has flow rate=0; tunnels lead to valves CE, CJ
Valve GG has flow rate=0; tunnels lead to valves AI, PB
Valve MM has flow rate=0; tunnels lead to valves AI, JW`

Array.prototype.rm=function(e){
  return this.filter(i=>i!=e)
}

let v={},counter=0,vff=[],shpath=new Map()
inp2.split`\n`.forEach(ln=>{
    let m=ln.match(/ (..) .*?=(\d+);.*valves? (.*)/)
    v[m[1]]={
        pr:+m[2],
        to:m[3].split`, `,
    }
    // l(v[m[1]])
})
l(v)
for(let room in v){
    if(v[room].pr) vff.push(room)
}
l('candidates:',vff)
console.time()
l('build shpath')
bshpath()
console.timeLog()

let up=2**vff.length-1
  , bitlimit=Math.floor(vff.length/2)
  , mp=0
for(let i=15; i<up; ++i){
  // if(bitcount(i)>bitlimit) continue            // exhaustive
  if(bitcount(i)!=7) continue            // speculative but works
  let v1=[],v2=[]
  for(let j=0; j<vff.length ;++j){
    let mask= 1<<j;
    if(i & mask) v1.push(vff[j])
    else         v2.push(vff[j])
  }
  let pr1=mkch1('AA',26,['AA'],[],v1)
    , pr2=mkch1('AA',26,['AA'],[],v2)
    , sum=pr1[0]+pr2[0]
  if(sum > mp) mp=sum
  l(i.toString(2),`${v1} , ${v2}`,pr1[0],pr2[0],sum,mp)
}
l('with elefant : ',mp)
// for(let r in v){
//     l(shpath('AA',r))
// }
console.timeLog()
l('alone : ',mkch1( 'AA', 30 ) )
console.timeLog()



function   mkch1(room , min_left  , bp=['AA']       , fp=[]      , voff=[...vff], curr_rate=0         , total=0        ){
  if( fp.length ){
    return mkch1(fp[0], min_left-1, [...bp,room], fp.slice(1), voff, curr_rate           , total+curr_rate)
  }
  if(bp.at(-1) != room){
    return mkch1(room , min_left-1, [...bp,room], []         , voff, curr_rate+v[room].pr, total+curr_rate) //open valve
  } // !!!!
  let max_subtotal=total+curr_rate*min_left, mstrp=bp, r
  for(let i=0 ; i<voff.length; ++i){
    let shp=shpath.get(room+','+voff[i])
    if(shp.length > min_left-2){
      r=[total+curr_rate*min_left,bp]
    }else{
      r=   mkch1(shp[0],min_left-1, [...bp,room], shp.slice(1),voff.rm(voff[i]), curr_rate , total+curr_rate)
    }
    if(max_subtotal<r[0]){
      max_subtotal=r[0]
      mstrp=r[1]
    }
  }
  return [max_subtotal, mstrp]
}

function bitcount(n){
  let count = 0;
  while(n){
    count += n & 1;
    n >>= 1;
  }
  return count;
}

// function mkch1(rooms, min_left, bp, fp, voff=[...candidates], curr_rate=0, total=0){
//     let goon=false, nrm=[], next_rate=curr_rate
//     for(let p=0 ;p<rooms.length; ++p){
//         if( fp[p].length   ){ nrm[p]=fp[p].shift(); goon=true; continue}        // move on
//         if( v[rooms[p]].pr ){ next_rate+=v[rooms[p]].pr ; goon=true; continue}  // open valve
//     }
// }

function bmkch1(arr,m){
    let bp=[],fp=[]
    for(let i=0; i<arr.length; ++i){
        bp[i]=[]
        fp[i]=[]
    }
    return mkch1(add, m, bp, fp)
}

function bshpath(){
  for(let a of ['AA',...vff])
    for(let b of vff)
      addshpath(a,b)
}

function addshpath(s,d){
    if(s==d) return shpath.set(s+','+s, [])
    // if(shpathchache.has(s+','+d)) return shpathchache.get(s+','+d)
    if(shpath.has(d+','+s)) return shpath.set(s+','+d,[d,...shpath.get(d+','+s)].reverse().slice(1) ).get(s+','+d)

    // l('fill cache ',s,d,shpathchache)
    let q=[ [s] ]
      , vd=new Set([s])
    while(q.length){
        let cp=q.shift()
        for(let i=0 ; i<v[cp[0]].to.length ; ++i){
            let nr=v[cp[0]].to[i]
            if(vd.has(nr)) continue
            if(nr==d){ cp.pop();cp.unshift(d);return shpath.set(s+','+d, cp.reverse() ).get(s+','+d) }
            q.push([nr, ...cp])
            vd.add(nr)
        }
    }
    l('no path ',s,d)
    process.exit(3)
}

// l('final : ',make_choice('AA'),counter)

function make_choice(room, curr_rate=0, total=0, min_left=30, von=[], rpath=[], rslvon=[]){

    let max_subtotal=0, mstrp, r
    if(v[room].pr!=0 && !von.includes(room)){
        // l('von:',room)
        if(min_left==2){
            ++counter
            return [total+curr_rate+curr_rate+v[room].pr, rpath]
        }
        ;[max_subtotal,mstrp]=make_choice(room,     curr_rate+v[room].pr, total+curr_rate, min_left-1, [...von, room], [...rpath,room], [room])
    }

    if(min_left==2){
        ++counter
        return [total+curr_rate+curr_rate, rpath]
    }
    for(let i=0 ; i<v[room].to.length; ++i){
        // l('to:',v[room].to[i])
        if(rslvon.includes(v[room].to[i])) continue
        r=make_choice(v[room].to[i],curr_rate           , total+curr_rate, min_left-1, von           , [...rpath,room], [...rslvon, room])
        // l(`subtotal ${room} minutes=${min_left} ${r[0]} von=${von} rpath=${r[1]}`)
        if(r[0]>max_subtotal){
            max_subtotal=r[0]
            mstrp=r[1]
        }
    }
    return [max_subtotal, mstrp]
}