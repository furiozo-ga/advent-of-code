globalThis.l=console.log

let inp1=`Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`.split`\n`

let inp2=`abcccaaaaaaccccccccaaaaaccccccaaaaaaccccccaaaaaaaacccaaaaaaaccaaaacccccccccccccccccccccccccaaaaaacccccccccccccccccccccccccccccaaaaaa
abcccaaaaaacccccccaaaaaaccccaaaaaaaacccccccaaaaaaaaaaaaaaaaccaaaaacccccccccccccccccccccccccaaaaaacccccccccccccccccccccccccccccaaaaaa
abccccaaaaacaaaccaaaaaaaacccaaaaaaaaacccccccaaaaaaaaaaaaaaaacaaaaaacccccccccaaacccccccccccaaaaaaaaccccccccccaaccccccccccccccccaaaaaa
abccccaaaaccaaaaaaaaaaaaacccaaaaaaaaaacccccaaaaaaaaaaaaaaaaaaacaaaacccccccccaaaacccccccccaaaaaaaaaacccccccccaaaccccccccccccccccccaaa
abcccccccccaaaaaacccaacccccccccaaacaaaccccccaacccccccaaaaaaaaacaacccccccccccaaaacccccccccaaaaaaaaaacccccccccaaaccacaaccccccccccccaaa
abcccccccccaaaaaacccaacccccccccaaacccccccccccccccccccaaaacaaaacccccccaacaaccaaaccccccccccaccaaaaacacccccccccaaaacaaaaccccccccccccaac
abccccccccccaaaaacccccccccccccccacccaaaacccccccccccccaaaacccccccccccccaaaacccccccccccaacccccaaaaccccccccjjjjaaaaaaaaaccccccccccccccc
abccccccccccaaaacccccccccccccccccccaaaaacccccccccccccaaaccccccccccccccaaaaacccccccccaaaaaacccaaccccccccjjjjjjkkaaaacccccccccaacccccc
abcccccaaccccccccccccccccccccccccccaaaaaacccccccccccccaacccccccccccccaaaaaaccccccccccaaaaaccccccccccccjjjjjjjkkkkaacccccaacaaacccccc
abccaaaacccccccccccccccccccccccccccaaaaaaccccccccccccccccccccccccccccaaaacaccccccccaaaaaaaccccaacccccjjjjoooookkkkkkkklllaaaaaaacccc
abccaaaaaacccccccccccccccccccccccccaaaaacccccccccccccccccccccccccccccccaaccccccccccaaaaaaaaccaaaaccccjjjoooooookkkkkkkllllaaaaaacccc
abcccaaaaacccccccccccccccccccccccccccaaaccccccccaaaacccccccccccccccccccccccccccccccaaaaaaaaccaaaaccccjjooooooooppkkppplllllaccaacccc
abccaaaaaccccccccccccaccccccccccccccccccccccccccaaaacccccccccccccccccccccccccccccccccaaacacccaaaacccijjooouuuuoppppppppplllccccccccc
abcccccaacccccccccccaaaaaaaaccccccccccccccccccccaaaaccccaaccccccccaaacccccccccccccaacaaccccccccccccciijoouuuuuuppppppppplllcccaccccc
abcccccccccccccccccccaaaaaaccccccccccccccccccccccaaccccaaaacccccccaaaaccccccccccaaaaaaccccccccccccciiiiootuuuuuupuuuvvpppllccccccccc
abcccccccccccccccccccaaaaaaccaaaaacccccccccccccccccccccaaaacccccccaaaaccccccccccaaaaaaccccccccccccciiinnotuuxxxuuuuvvvpppllccccccccc
abccccccccccccccacccaaaaaaaacaaaaaaacccccccccccccccccccaaaacccccccaaacccccaaaaccaaaaaccccaaccccccciiiinnnttxxxxuuyyyvvqqqllccccccccc
abcccccccccccaaaaccaaaaaaaaaaaaaaaaaaccaacccccccccccccccccccccccccccccccccaaaacccaaaaaccaaacccccciiinnnnnttxxxxxyyyyvvqqqllccccccccc
abaaaacccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccaaaacccaaaaaacaaaccccciiinnnnttttxxxxxyyyyvvqqmmmccccccccc
abaaaaccccccccaaaaacccaaaaacaaaaaacaaaaaaccccccccccccccccaaccccccccccccccccaacccccccaaaaaaaaaaciiinnnnttttxxxxxyyyyvvqqqmmmccccccccc
SbaaaacccccccaaaaaccccaaaaaccaaaaaaaaaaaccccccccccccccccaaacaacccccccccccccccccccccccaaaaaaaaachhhnnntttxxxEzzzzyyvvvqqqmmmccccccccc
abaaaacccccccaacaacccccaaaaaaaacaaaaaaaaaccccccccccccccccaaaaaccccccccccccccccccccccccaaaaaaacchhhnnntttxxxxxyyyyyyvvvqqmmmdddcccccc
abaaaacccccccccccccccccccaaaaaacaaaaaaaaaacccccccccccccaaaaaaccccccccaaaccccccccccccccaaaaaaccchhhnnntttxxxxywyyyyyyvvvqqmmmdddccccc
abaacccccccccccccccccccaaaaaaacccccaaaaaaacccccccccccccaaaaaaaacccccaaaacccccccccccccaaaaaaacaahhhmmmttttxxwwyyyyyyyvvvqqmmmdddccccc
abcccccccccccccccccccccaaaaaaacaaccaaacccccccccccccccccaacaaaaacccccaaaacccccccccccccaaacaaaaaahhhmmmmtsssswwyywwwwvvvvqqqmmdddccccc
abcccccccccccccccaaaccccaaaaaaaaaacaaccaaccccccccccccccccaaacaccccccaaaacccccccccccccccccaaaaacahhhmmmmmsssswwywwwwwvvrrqqmmdddccccc
abcccccccccccccaaaaaaccccaaaaaaaaaccaaaacccccccccccccccccaacccccccccccccccccccccccaaaccccaaaaaaahhhhhmmmmssswwwwwrrrrrrrrmmmmddccccc
abcccccccccccccaaaaaaccccaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccaaaaaacccccaaaaachhhhhmmmmsswwwwrrrrrrrrrkkmdddccccc
abccccccccccccccaaaaaccccccaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccaaaaaaccccaaaaacccchhggmmmssswwrrrrrkkkkkkkkdddacccc
abccaaaacccccccaaaaacccccccccaaaaaacaaaaacccccccccccccccccccccccccccccccccccccccaaaaaaccccaacaaaccccggggmmsssssrrlkkkkkkkkkdddaccccc
abccaaaacccccccaaaaacccccccccaaaaaaccccaacccccccccccccccccccccccccccccccccccccccaaaaaccccccccaaccccccgggmllssssrllkkkkkkkeeeddaccccc
abccaaaacccccccaaacccccccccccaaaaaacccccccccccccccccccaacccccccccccccccccccccccaaaaaacccccccccccccccccggllllssslllkkeeeeeeeeeaaacccc
abcccaaccccccccaaacaaaccccccaaaaaaaaaaacccccccccccccaaaaaacccccccccccccccccccccaaacaaacccccaacccccccccggglllllllllfeeeeeeeeaaaaacccc
abccccccccccaaaaaaaaaaccccccccccccaccaaaccacccccccccaaaaaaccccaaccaacccaaccccccaaaaaaacccccaaccccccccccggglllllllfffeeecccaaaaaacccc
abccccccccccaaaaaaaaacccccccccccccccaaaaaaaccccccccccaaaaaccccaaaaaacccaaaaaaccaaaaaacccaaaaaaaacccccccggggllllfffffccccccaacccccccc
abcccccccccccaaaaaaacccccccccccccccccaaaaaaccaacccccaaaaaccccccaaaaacccaaaaaacaaaaaaacccaaaaaaaaccccccccgggffffffffccccccccccccccccc
abccccccccccccaaaaaaacccccccccccccaaaaaaaaacaaaaccccaaaaacaaaaaaaaaacaaaaaaacaaaaaaaaaccccaaaacccccccccccggffffffacccccccccccccccaaa
abccccccccccccaaaaaaacaaccccccccccaaaaaaaaacaaaacccccaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaacccaaaaacccccccccccaffffaaaaccccccccccccccaaa
abccccccccccccaaacaaaaaacccccccccccaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaacccaaacaaaccaaaaaacccccccccccccccccaaaccccccccccccccaaa
abccccccccccccaaccaaaaaccccccccccccccaaaaaaaccccaaaaaaaaaaaaccccaacccccaaaaaacccaaaccccccaaccaacccccccccccccccccaaacccccccccccaaaaaa
abcccccccccccccccaaaaaaaaccccccccccccaacccacccccccaaaaaaaaaaccccaacccccaaccccccccaccccccccccccccccccccccccccccccccccccccccccccaaaaaa`
.split`\n`

import vis from './vis.mjs'

String.prototype.ele=function(){
    if(this[0]=='S') return 1
    if(this[0]=='E') return 26
    return this.charCodeAt()-96
}

let inp=inp2, ds, q, lens=[], lenS
  , lx=inp.length-1
  , ly=inp[0].length-1
  , va=Array(lx+1)
  , cn=4<<9
  , cv=4<<9|3<<18   // 8<<18 - reverse, 1-bold, 2-underline
  , speed=6n
  , spstep=2n
//   , cv=6<<9|8<<18   // 8<<18 - reverse

for(let i=0; i<va.length ; ++i) va[i]=Array(ly+1).fill('0')


// l(inp)

vis.init()
vis.scr.key([']'],function(){speed+=spstep})
vis.scr.key(['['],function(){speed-=spstep;speed<=0n?speed=1n:1})
// vis.box(lx+3,ly+3)

// vis.scr.fillRegion(6, 'X', 0, 1, 10, 13)
// vis.r()
initvis()
// visvis()
// l(vis)

// process.exit(0)

for(let i=0; i<=lx; ++i){
    for(let j=0; j<=ly; ++j){
        if(inp[i][j].ele()!=1) continue
        ds=Array(lx+1)
        q=[]
        for(let i=0; i<ds.length ; ++i) ds[i]=Array(inp[0].length).fill(Infinity)

        initvis()
        q.push([i,j,0, inp[i][j].ele()])

        let c=0n
        while(q.length){
            let steps=step2(q.shift())
            // l(steps)
            if(++c % speed == 0n){
                vis.r()
                // await sleep(0)
                await new Promise(res=>setTimeout(res,0))
                c%=1000000n
            }

            if(steps>-1 && steps<Infinity){
                // l(i,j,steps)
                if(inp[i][j]=='S') lenS=steps
                lens.push([steps,i,j])
                break
            }
        }
    }
}
vis.scr.destroy()
lens.sort((a,b)=>a[0]-b[0])
l(lens)
l('from S='+lenS+' from best='+lens[0][0])

function step2([x,y,stepn,preele]){
    // l(x,y,stepn)
    if(x<0 || y<0 || x>lx || y>ly) return Infinity
    let ele=inp[x][y].ele()
    if(ele-preele > 1) return Infinity

    if(inp[x][y]=='E') return stepn
    if(ds[x][y]<=stepn) return Infinity
    ds[x][y]=stepn


    // va[x][y]='\x1b[1m'+va[x][y]+'\x1b[m'
    q.length
        ? vis.scr.fillRegion(cv, inp[x][y], y, y+1, x, x+1)
        : vis.scr.fillRegion(1 , inp[x][y], y, y+1, x, x+1)
    // vis.r()
    // await sleep(0)
    

    for(let [dx,dy] of [[0,1],[1,0],[0,-1],[-1,0]]){
        let nx=x+dx, ny=y+dy
        q.push([nx,ny,stepn+1,ele])
    }
    return -1
}

function initvis(){
    for(let i=0; i<=lx; ++i)
        for(let j=0; j<=ly; ++j)
            // 1
            vis.scr.fillRegion(cn, inp[i][j], j, j+1, i, i+1)

            // va[i][j]=inp[i][j]
    vis.r()
}
// function visvis(){
    // process.stdout.write(
    //     va.map(r=>r.join``).join` `
    // )
    // process.stdout.write('\n\n')
// }
// setTimeout(_=>1,99999)

function sleep(ms){
    return new Promise(res=>setTimeout(res,ms))
}