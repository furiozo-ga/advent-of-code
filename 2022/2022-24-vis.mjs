Object.prototype.cp=function(){
    return JSON.parse(JSON.stringify(this))
}

import vis from './vis.mjs'
vis.init()
vis.log=vis.box(10,'100%',{scrollable:true, alwaysScroll:true, scrollbar:{ch:'@'}, left:0, bottom:0})
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
globalThis.l=function(...p){
    p.forEach(q=>vis.log.insertBottom(
        Array.isArray(q)   ? q
      : typeof q=='string' ? q
      : typeof q=='boolean'? q+''
      : q+''))
    vis.log.setScrollPerc(100)
    vis.scr.render()
}

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

let bak=inp1.split`\n`.map(r=>r.split``)
function reinp(){
    inp=bak.cp()
    inp.forEach((row,r)=>{
        row.forEach((e,c)=>{
            if(e=='#')  inp[r][c]=new C(r,c,'#')
            else        inp[r][c]=new C(r,c,'.')
            if(!e.match(/\.|#/)) inp[r][c].s[0]={'v':0,'>':1,'^':2,'<':3,}[e]
        })
    })
    cr=0; cc=1
}
let lr=bak.length-2,lc=bak[0].length-2
  , cr, cc, inp , q=[] , ss=[] , sts=[] , cs=0 , run=false
q.toString=function(){
    return this.map(r=>r.join``).join`|`
}
// inp.me2=function([dr,dc]){
//     this[ this.me[0] ][ this.me[1] ].me=false;    this.me[0]+=dr;     this.me[1]+=dc
//     this[ this.me[0] ][ this.me[1] ].me=true;
// }
// inp.me2([0,0])
vis.scr.key(['s'],step)
l(bak)

// while(q.length){
    reinp();ivis();
    // sts=q.shift()
    // l(sts)

// }

vis.scr.key('space',function(){
    if(run){
        clearInterval(run)
        run=null
    }else{
        run=setInterval(step, 0);
    }

})

// run=setInterval(step, 0);


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

ivis()
return
    if(cs>sts.length-1){
        for(let d=0;d<5;++d){
            let [dr,dc] = dirs[d]
            let nr=cr+dr,nc=cc+dc
            if(nr<0 || nr>lr || nc<1 || nc>lc || inp[nr][nc]=='#' || inp[nr][nc].s.length || (nr==0 && cr==1)) continue
            q.push([...sts , d])
        }
        vis.putchar(cc,cr,'X')
        reinp()
        rep()
        sts=q.shift();sts.toString=()=>sts.join``
        cs=0
        return
    }

    // move elves
    let s=sts[cs]
    cr+=dirs[s][0]
    cc+=dirs[s][1]
    rep()
    ivis()
    cs++
    if(cr==lr && cc==lc){
        l(`done ! ${sts.length+1} ${sts}`)
        vis.scr.unkey('s',step)
        clearInterval(run);run=null
    }
}

function rep(){
    // l(`step [${[cr,cc]}] ${cs}/${sts} q=${q}`)
    l(`step [${[cr,cc]}] ${cs+1}/${sts}`)
}

function ivis(){
    vis.show(inp)
}
