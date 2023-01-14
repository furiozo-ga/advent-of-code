globalThis.l=console.log
let onExit=()=>console.log('\x1b(B') , utf , c
if(globalThis.Deno){  // deno
  utf= /UTF-?8$/i.test(Deno.env.get('LC_CTYPE'))
  if(!utf){
    globalThis.addEventListener("unload", onExit);
    globalThis.addEventListener("unhandledrejection", onExit);
  }
}else{  // node.js
  utf= /UTF-?8$/i.test(process.env.LC_CTYPE)
  if(!utf){ (await import('node-cleanup')).default(onExit) }
}

if(utf){  c={l:'┌', w:'┬', k:'┐', t:'├', n:'┼', u:'┤', m:'└', v:'┴', j:'┘', q:'─', x:'│', } }
else   {  c={l:'l', w:'w', k:'k', t:'t', n:'n', u:'u', m:'m', v:'v', j:'j', q:'q', x:'x', } }
c[' ']=' '

// console.log('\x1b(0')             // activate line drawing mode
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
  let vg=[['l','q','q','q'],['x',' ',' ',' ']] , y=0
  for(let x=1; x<this[0].length; ++x){
    vg[y].push( this[y][x]&4 ? 'q' : 'w' )
    vg[y].push( 'q','q','q' )
    vg[1].push( this[y][x]&4 ? ' ' : 'x' )
    vg[1].push( ' ',' ',' ' )
  }
  vg[0].push('k')
  vg[1].push('x')
  ++y
  for(; y<this.length; ++y){
    let x=0
    vg[2*y  ]=this[y][x]&8 ? ['x',' ',' ',' '] : ['t','q','q','q']
    vg[2*y+1]=['x',' ',' ',' ']
    ++x
    for(; x<this[y].length; ++x){
      let b1=this[y  ][x  ] & 12 , c
        , b2=this[y-1][x-1] & 3
      if(b1 == 0){
             if(b2 == 0) c= 'n'
        else if(b2 == 1) c= 'w'
        else if(b2 == 2) c= 't'
        else if(b2 == 3) c= 'l'
      }else if(b1==4){
             if(b2 == 0) c= 'v'
        else if(b2 == 1) c= 'q'
        else if(b2 == 2) c= 'm'
        else if(b2 == 3) c= '1' // impossible
      }else if(b1==8){
             if(b2 == 0) c= 'u'
        else if(b2 == 1) c= 'k'
        else if(b2 == 2) c= 'x'
        else if(b2 == 3) c= '2' // impossible
      }else if(b1==12){
             if(b2 == 0) c= 'j'
        else if(b2 == 1) c= '3' // impossible
        else if(b2 == 2) c= '4' // impossible
        else if(b2 == 3) c= ' ' // internal point, not possible with T or L shapes but possible with 2x2 square 
      }
      vg[2*y  ].push( c )
      vg[2*y  ].push( b1 & 8 ? ' ' : 'q' )
      vg[2*y  ].push( b1 & 8 ? ' ' : 'q' )
      vg[2*y  ].push( b1 & 8 ? ' ' : 'q' )

      vg[2*y+1].push( b1 & 4 ? ' ' : 'x' )
      vg[2*y+1].push( ' ',' ',' ' )
    }
    vg[2*y  ].push( (this[y][x-1] & 8) ? 'x' : 'u' )
    vg[2*y+1].push( 'x' )
  }
  --y
  let vy=2*y+2
  vg[vy]=['m','q','q','q']
  for(let x=1; x<this[y].length; ++x){
    vg[vy].push( this[y][x]&4 ? 'q' : 'v' )
    vg[vy].push( 'q','q','q' )
  }
  vg[vy].push('j')
  
  l((utf?'':'\x1b(0')+vg[y=0].map(h=>c[h]).join``)
  for(; ++y<vg.length-1;){
    l(vg[y].map(h=>c[h]).join``)
  }
  l(vg[y].map(h=>c[h]).join``+(utf?'':'\x1b(B'))
}
Array.prototype.visb=function(){
  let g=this.transpose()
  for(let z=0; z<g.length; ++z){
    l('           layer',z)
    g[z].visl()
  }
}
Array.prototype.transpose=function(){
  let r=[]
  for(let z=0; z<this[0][0].length; ++z){
    r[z]=[]
    for(let y=0; y<this[0].length; ++y){
      r[z][y]=[]
      for(let x=0; x<this.length; ++x){
        let n=this[x][y][z] , m=n&10
        n& 1 && (m|=32)
        n&32 && (m|= 4)
        n& 4 && (m|=16)
        n&16 && (m|= 1)
        r[z][y][x]=m
      }
    }
  }
  return r
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
// let lx=2,ly=4,lz=6
// let lx=2,ly=4,lz=8
// let lx=2,ly=7,lz=8
// let lx=3,ly=3,lz=8
// let lx=3,ly=4,lz=6
// let lx=4,ly=5,lz=6
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
  // l('#'.repeat(z))
  if(z==lz){
    l('        solution',total)
    if(++total==sol || 1){
      g.visb()
    }
    // console.timeLog()
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