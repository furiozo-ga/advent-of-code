globalThis.l=console.log
Array.prototype.cp2d=function(){
  let r=[]
  for(let y=0; y<this.length; ++y){
    r[y]=this[y].concat()
  }
  return r
}
Array.prototype.cp3d=function(){
  let r=[]
  for(let z=0; z<this.length; ++z){
    r[z]=[]
    for(let y=0; y<this[z].length; ++y){
      r[z][y]=this[z][y].concat()
    }
  }
  return r
}
Array.prototype.visl=function(){
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
Array.prototype.visb=function(){
  for(let z=0; z<this.length; ++z){
    l('layer',z)
    this[z].visl()
  }
}

/*
  8    16 up
4 x 1  32 down
  2
   1       2   3       4       5     6     7     8    9   11  12
+-+-+-+   +-+ +-+     +-+   +-+-+-+ +-+ +-+-+-+ +-+ +-+-+ +-+ +-+
|     |   | | | |     | |   | |U| | | | | |D| | | | | |E| | | |N|
+-+ +-+ +-+ + + +-+ +-+ +-+ +-+-+-+ +-+ +-+-+-+ +-+ +-+-+ +-+ +-+
  | |   |   | |   | |     |         |U|         |D|   10  |S| | |
  +-+   +-+ + + +-+ +-+-+-+         +-+         +-+ +-+-+ +-+ +-+
          | | | |                   | |         | | |W| |
          +-+ +-+                   +-+         +-+ +-+-+
*/
let lx=2,ly=6,lz=6
  , total=0, sol=4
  , fig32T=[
      [[0,0,0, 1],[0,0,1, 7],[0,0, 2, 4],[0, 1, 1, 8]],  // 1
      [[0,0,0, 2],[0,1,0,14],[0,2, 0, 8],[0, 1,-1, 1]],  // 2
      [[0,0,0, 2],[0,1,0,11],[0,2, 0, 8],[0, 1, 1, 4]],  // 3
      [[0,0,0, 2],[0,1,0,13],[0,1,-1, 1],[0, 1, 1, 4]],  // 4
      [[0,0,0, 1],[0,0,1,21],[0,0, 2, 4],[1, 0, 1,32]],  // 5
      [[0,0,0, 2],[0,1,0,26],[0,2, 0, 8],[1, 1, 0,32]],  // 6
      [[0,0,0,16],[1,0,0,37],[1,0,-1, 1],[1, 0, 1, 4]],  // 7
      [[0,0,0,16],[1,1,0, 8],[1,0, 0,42],[1,-1, 0, 2]],  // 8
      [[0,0,0,16],[1,0,0,49],[2,0, 0,32],[1, 0, 1, 4]],  // 9
      [[0,0,0,16],[1,0,0,52],[2,0, 0,32],[1, 0,-1, 1]],  //10
      [[0,0,0,16],[1,0,0,50],[2,0, 0,32],[1, 1, 0, 8]],  //11
      [[0,0,0,16],[1,0,0,56],[2,0, 0,32],[1,-1, 0, 2]],  //12

    ]
  , fig31=[
      [[0,0,0, 1],[0,0,1, 5],[0,0,2, 4]],
      [[0,0,0, 2],[0,1,0,10],[0,2,0, 8]],
      [[0,0,0,16],[1,0,0,48],[2,0,0,32]],
    ]
  , fig21=[
      [[0,0,0, 1],[0,0,1, 4]],
      [[0,0,0, 2],[0,1,0, 8]],
      [[0,0,0,16],[1,0,0,32]],
    ]
  , g=[],fig=fig32T

for(let z=0; z<lz; ++z){
  g[z]=[]
  for(let y=0; y<ly; ++y){
    g[z][y]=Array(lx).fill(0)
  }
}

// g.visg()
console.time()
fit(0,0,0,g)
l('\n\n total :',total)
function fit(z,y,x,g){
  if(z==lz){
    if(++total==sol){
      g.visb()
    }
    console.timeLog()
    l(total,'                        found')
    return 1
  }
  FIG: for(let f=0; f<fig.length; ++f){
    let ng=g.cp3d()
    for(let p=0; p<fig[f].length; ++p){
      let [dz,dy,dx,v]=fig[f][p]
      let nx=x+dx, ny=y+dy, nz=z+dz
      if(nx<0 || ny<0 || nx>=lx || ny>=ly || nz>=lz)  continue FIG  // outside
      if(g[nz][ny][nx])               continue FIG  // overlap
      ng[nz][ny][nx]=v
    }
    fit(...nextEmplty(z,y,x,ng),ng)
  }
}

function nextEmplty(z,y,x,g){
  ++x
  for(; z<lz; ++z){
    for(; y<ly; ++y){
      for(; x<lx; ++x){
        if(g[z][y][x]==0) return [z,y,x]
      }
      x=0
    }
    y=0
  }
  return [z,y,x]
}