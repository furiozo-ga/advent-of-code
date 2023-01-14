globalThis.l=console.log
Array.prototype.cp=function(){
  let r=[]
  for(let y=0; y<this.length; ++y){
    r[y]=this[y].concat()
  }
  return r
}
Array.prototype.visg=function(){
  let vg=[[]]
  for(let x=0; x<this[0].length; ++x){
    vg[0][2*x  ]='+'
    vg[0][2*x+1]='-'
  }
  vg[0].push('+')
  for(let y=0; y<this.length; ++y){
    vg[2*y+1]=['|']
    vg[2*y+2]=['+']
    for(let x=0; x<this[y].length; ++x){
      vg[2*y+1][2*x+2]= ( this[y][x] & 1 ) ? ' ' : '|'
      vg[2*y+1][2*x+1]= ' '
      vg[2*y+2][2*x+1]= ( this[y][x] & 2 ) ? ' ' : '-'
      vg[2*y+2][2*x+2]= '+'
    }
  }
  // l(vg)
  for(let y=0; y<vg.length; ++y){
    l(vg[y].join``)
  }
}

/*8
4 x 1
  2
+-+-+-+
|     |
+-+-+-+
|     |
+-+-+-+
*/
let lx=8,ly=4
  , total=0, g=[]
  , fig32T=[    // fits 4x4 etc
      [[0,0,1],[0,1, 7],[0,2,4],[1, 1,8]],
      [[0,0,2],[1,0,11],[2,0,8],[1, 1,4]],
      [[0,0,2],[1,0,14],[2,0,8],[1,-1,1]],
      [[0,0,2],[1,0,13],[1,1,4],[1,-1,1]],
    ]
  , fig21=[
      [[0,0,1],[0,1,4]],
      [[0,0,2],[1,0,8]],
    ]
  , fig31=[
      [[0,0,1],[0,1, 5],[0,2,4]],
      [[0,0,2],[1,0,10],[2,0,8]],
    ]
  , fig=fig32T

for(let i=0; i<ly; ++i){
  g[i]=Array(lx).fill(0)
}

// g.visg()

fit(0,0,g)
// l('\n\n total :',total)
function fit(y,x,g){
  if(y==ly){
    // ++total
    l(++total,'                                      found')
    g.visg()
    return 1
  }
  FIG: for(let f=0; f<fig.length; ++f){
    let ng=g.cp()
    for(let p=0; p<fig[f].length; ++p){
      let [dy,dx,v]=fig[f][p]
      let nx=x+dx, ny=y+dy
      if(nx>=lx || ny>=ly)  continue FIG  // outside
      if(g[ny][nx])         continue FIG  // overlap
      ng[ny][nx]=v
    }
    fit(...nextEmplty(y,x,ng),ng)
  }
}

function nextEmplty(y,x,g){
  ++x
  for(; y<ly; ++y){
    for(;x<lx;++x){
      if(g[y][x]==0) return [y,x]
    }
    x=0
  }
  return [y,x]
}