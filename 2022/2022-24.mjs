Object.prototype.cp=function(){
    return JSON.parse(JSON.stringify(this))
}
Array.prototype.vis = function(){
    for(let i=0;i<this.length; ++i){
        l(this[i].join``)
    }
}
// import vis from './vis.mjs'
// vis.init()
// vis.log=vis.box(10,'100%',{scrollable:true, alwaysScroll:true, scrollbar:{ch:'@'}, left:0, bottom:0})
//scrollable and alwaysScroll

let inp1=
`#.######
#>>.<^<#
#.<..<<#
#>v.><>#
#<^v^^>#
######.#`
,inp2=
`#.##########
#.......v..#
#.<..v.....#
#..........#
#...>.....<#
#..........#
#...v.^....#
#..........#
#<.........#
#..........#
##########.#`
,inp3=`#.########################################################################################################################
#.<^>v^v>v>^.><v.>><.>><v^v^v<<>.v^<v^.<>v<^v..>.><v<^v>v<>v.vv^v>^vvvv>>><><.v<<v>><<<.^^><v^vvv^v^>.^<^>v<>vv>v.>^^^<^<#
#>^^vv.>^v^>.v^^<^v<>.v><>v><v..v>><>>v^vv<....^>^v^v<<<<.><><v^v<v^<.vv.<v^.<v.^><<vv^v.v.^v<>^>.<><.v^v><.v<<.>>v<v>^^<#
#><>^<^^^^<^^>>^^^^v<v<>>^^.v<>v<v.><v><v^<^>><^>v^^.<<v>v<^>>.^vv<^.^vv>v>>vvv<>v<>.>>><<^<>..v<v<>><><>^^<<.vv>>><><>.<#
#>v^v^<>v^^>^>><<^<<.v><v.v<v><^<^<v^>^<^>^<<<.^^v<>vv>v<.vvv<>^..^.^<>^v><.v^.>v>v<vv^><.<>vvv.^<v<>^>>^<<vv<<^<.^<><>^<#
#>^^>v>>v.>><>vvvv><vv><><>v^^vvv.<^v>^<^>^^>><<v.v><.><<^^.v><>^v^^vv^^vv^<^<^<>v<vvvv<^<.>v<.vv.^>v^<vv^^.<vv><vv.^^><>#
#<.v<<v>v^<vv><^<^v>.<^>^v.<^<.>v^<v^v>v><v<v<><>>^^><.>..>v<>.><v^><>><^^>^^^>v^v^.^<^<^vv>v<.v.<<vv>>^v.>vv<.>><^^><vv<#
#>v^v><>v<^.>>.v^>.>v<>^>v<<>>vv<^^<>^>^v.<>>^v><^v<<<<^v<..^>v>v><<^vv<>^>.v<>>v.^<.<<>>><<vv^<.^>v.vv<<v^v><><<>^.^^>^<#
#<vv.^<v<v>^^<^.<<.^>>v^v^>^.<>>^>v.<vv<>^>v.v>>><>>.v>>vv^v>v<>><^<<<<^vv.v<>^.^<>v.v>><<..<^v>.^>vv<v<<vv>.v>^<<>><>>v<#
#<^>>v^<^.><vv^v><vv.<^<><^<v^vv<<.<^<v>^>.^<^.<>^.>>>v.v^.vv><<v<^<^^<^^v<^v^<..v^><<vv<>^<<^><>><.^v>>>v.<<^^><>^^^><<>#
#><^>v.^<v^>^<^<<v^<^<v><vv>v^>^><<^^<v^>vvvv><>.^^v>v.>>v>v^.>v^v>v^>.<v><^^^>vv^.>>>^<^>>v<><^vv^<><vv^>^>vv.><^<vv^<<<#
#>><^>^<^v<>>.v>^^^>>^<<^>v<<^<<>>.v^<v.<^<vv><v<>>v^vv>.v>^.^v.><<^<^<<v<v.v.^><.v<<^>>><^.v^<<^<<^>>^>v>v.v^^>^><vv<vv<#
#<vv>^v<<<>>.vvv><v^<<>v^^v.v>vv><^v<<<v<>^v<v<vv^^<>v<v^<<..^><<^^v>>>vv.^>^<>v>vv><<..<v^v<v.>v>v.>>>v>>v.v<<v.v>.>v.v>#
#<<.^^<.<^><><vv<>>v<.<<^v^^v^<<>v.<vv^>.<.^vvvv.<>^^^v<v>v^<^^^<>vv>>.v>>^v<^^v>..<^<>^v^^<>v<>>v^.<..<^<<>^v^<.<^vv.<v<#
#>^.><<.^>>>>>^.vv>^.<.<.^v>.<v<<><<vv.^v<v>><^^^^.<^^v<<v><>.^<>v.>^<^<<<>v<<<.>v^^.^^>.v><><<^.><>^<<>^<^<^<v^>v^>.^^v<#
#<v><>.v>^.vv><^>^^>>^^^>.^^>vv^><^><>><^<<<><>^.v>>v^><^>.^^v<>>^<>>v.v.<><v.v^<^>.^>>.>><.v>.<>>v.v^>^<^>>.^><<>v<<^>>>#
#>^.^v>^>>.^>v^.>>>v<vv^^vv<<<^.<<<>>.v>v>>v>.^<>vv^.><^.v>v^v><>v>v>vv<.^.v.>v^vvv^<><v^<<<v^v.^>v>.v>>^v<<v.>>>..v.v>^<#
#>v><v.<^<<^<<<<<<^<<.<v^v.<>v<>>>^<v^...^>^v^v.>>^vv<..<v<v^^.vv>.v<<>>v<<<^>^^.vvvv><v^v<<.^v<><>>^^^^v^^^^<<<v<<v>>>v>#
#><<<.^v>...^<>^.^^><v^vv^^<^>v>>.<<v^^<>><vvv>>^v^^v^^v<><<^v.^><<v.vv.<.>>vv>^vv.^<<<<>v^v^.^v<<<^^^v^>v^<<vv<>^<<^v>><#
#<^v.^v<.v<<v^v<<v<<>>.><vv>^^<^>vv.vv<v>.^v^<<>><><<.v^><><.>>vv>v>^^.>.v<<^>>v>vvv.^<v^v^v><^<<.<<<<v>><<^>>><v><>>v^>>#
#><<v><^^^>^.<^v^^^><.^^<v<<><><v<v^v^<.^^^vvv^<^^>>v<^>^>.v^<^>^>^>^v.^>>^v<>^v>^<<<.>.v<v^^v><v^><<.>v^><>v^>v>>>>^v^.>#
#>><v^>vv^v<v><<.^><^>.<<>vvv>>v^^^><^>.><^v^^v>v^>vv>^<><v>^v<v<<<.>><.<v<<>><^>^<.v>>^><^v^<vvv<.vv><^v^v>.^<.>v^^<v>^<#
#>v>>v>^^<<>><<>^.v.>>^^<^<<>^v<^.<^^.<.vv^<<<<<..>.v<.<^<>v<><>.>v..>>><^>^<><^^><v><<vv<<><^vv^><>^><^^<^v><vv.<.vv>>v>#
#<><>v>.>>.>.>^>^<^v>.<vv><<^.vv.v.><<^>v>^<>v^v>><.v<<>>vv^v^<v>^>^>^<<v^<>^.v^><<<>.^.v^v.<<>vv>.vv>><^...<v<v>>v>>v<.>#
#<.>>.<><^<>^>.^>>>v<><v<<.^^v.>^.^>>vvv<<<^><<.v^.v>^<<>vvv^v^vvv^v.^^^..<^v<v><<vv.<.<<^.^^^^>>>v^v<.>^^<>>^><>><>>v^v.#
#><<>>vvvv><.<.>>^>^.^<^<.v>v>^^<<<><^^>>><^><^^^>>vv<>v<>^v^v^>>.^>v^<<<v<^<^^^^<>>.v><<>v^vvv^>v^.>^.^v<<>^v<^>>><>vv.<#
########################################################################################################################.#`

globalThis.l=console.log

// globalThis.l=function(...p){
//     p.forEach(q=>vis.log.insertBottom(
//         Array.isArray(q)   ? q
//       : typeof q=='string' ? q
//       : typeof q=='boolean'? q+''
//       : q+''))
//     vis.log.setScrollPerc(100)
//     vis.scr.render()
// }

let dirs=[[1,0],[0,1],[-1,0],[0,-1],[0,0]]
  , ar  =[ 'v' , '>' ,  '^' , '<'  ]

class C{
    constructor(r,c,ch){
        this.r=r;this.c=c;this.ch=ch
        this.s=[];this.ns=[]
    }
    [Symbol.toPrimitive](hint){
        if(hint=='default') return this.ch
        if(hint=='string'){
            if(this.s.length===0)
                 if(cr==this.r && cc==this.c) return this.ch=='.'?'E':this.ch
                 else return this.ch
            else if(cr==this.r && cc==this.c) l('STORM !!! '+cr+':'+cc+' '+inp[cr][cc].s)
            if(this.s.length===1) return ar[this.s[0]]
            if(this.s.length<10 ) return this.s.length
            return 'X'
        }
        throw Error('boza')
    }
}

let bak=inp3.split`\n`.map(r=>r.split``)
function reinp(){
    inp=bak.cp()
    inp.forEach((row,r)=>{
        row.forEach((e,c)=>{
            if(e=='#')  inp[r][c]=new C(r,c,'#')
            else        inp[r][c]=new C(r,c,'.')
            if(!e.match(/\.|#/)) inp[r][c].s[0]={'v':0,'>':1,'^':2,'<':3,}[e]
        })
    })
    cr=0; cc=-1
}
let lr=bak.length-2,lc=bak[0].length-2
  , cr, cc, inp , q=[] , sl , cs , ps=-1 , st , run=true , qb=[]
q.toString=function(){
    return this.map(r=>r.join``).join`|`
}

reinp();

l(inp.length-2,inp[0].length-2)

let goals=[[lr+1,lc],[0,1]],cg=0
let cnt=0, lcm=600

do{
    p2q()
    // l(cnt)
    // qb.at(-1).vis()
    step()
}while(++cnt<lcm)
// inp.vis()
// for(let i=0;i<qb.length;++i){
//     l(i)
//     qb[i].vis()
// }

cnt=0
q=[[0,1,cnt]]
RE: while(q.length){
    [cr,cc,cs]=q.shift()
    let ns=cs+1
    if(cs<lcm-1){
        sl=ns
        if(cs!=ps){
            st=new Set()
            // qb[sl].vis()
        }
        // if(!st.has('0,1')){
        //     q.push([0,1,ns])
        //     st.add('0,1')
        // }
    }else{
        if(cs!=ps){
            st=new Set()
            // qb[sl].vis()       
            qb.push(qb.shift())
        }
    }

    // if(cs%1000==0)
    //     l(cr,cc,cs,ns,sl)

    for(let d=0; d<5 ;++d){
        let [dr,dc] = dirs[d]
        let nr=cr+dr , nc=cc+dc
        // l(`chk ns=${ns} d=${d} ${[nr,nc]}`,nr<1 || nc<1 || nr>lr || nc>lc || qb[sl][nr][nc]!='.')
        // l(`chk ns=${ns} d=${d} ${[nr,nc]}`,qb[sl][nr][nc])
        if(nr<0 || nc<1 || nr>lr+1 || nc>lc || qb[sl][nr][nc]!='.' || st.has(nr+','+nc)){
            continue
        }
        if(nr==goals[cg%2][0] && nc==goals[cg%2][1]){
            l('done',cg,ns)
            if(cg<100){
                cg++
                q=[[nr,nc,ns]]
                continue RE
            }else{
                break RE
            }
        }
        // l(`enq ns=${ns} d=${d} ${[nr,nc]}`)
        q.push([nr,nc,ns])
        st.add(nr+','+nc)
        // if(ns>2)process.exit(1)
    }
    ps=cs
}


function p2q(){
    let s=[]
    qb.push(s)
    for(let r=0;r<=lr+1; ++r){
        s[r]=[]
        for(let c=0;c<=lc+1; ++c)
            s[r][c]=String(inp[r][c])
    }
}

function step(){
    // plan storms
    for(let r=1;r<=lr; ++r)
        for(let c=1;c<=lc; ++c)
            while(inp[r][c].s.length){
                let s=inp[r][c].s.shift()
                  , [dr,dc]=dirs[ s ]
                  , nr=r+dr, nc=c+dc
                if(nr<1 ) nr=lr
                if(nr>lr) nr=1
                if(nc<1 ) nc=lc
                if(nc>lc) nc=1
                inp[nr][nc].ns.push(s)
            }

    // switch storms
    for(let r=1;r<=lr; ++r)
        for(let c=1;c<=lc; ++c)
            if(inp[r][c].ns.length){ inp[r][c].s = inp[r][c].ns ; inp[r][c].ns=[] }

}
