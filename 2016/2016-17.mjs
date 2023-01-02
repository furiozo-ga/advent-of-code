globalThis.l=console.log

// md5
import {createHash} from 'node:crypto'
function md5(content){
    return createHash('md5').update(content).digest('hex')
}

let dirs=[
        [ 0,-1,'U'],
        [ 0, 1,'D'],
        [-1, 0,'L'],
        [ 1, 0,'R'],
    ]

track('ihgpwlah')
track('kglvqrro')
track('ulqzkmiv')
track('pvhmgsws')

function track(inp){
    let q=[[0,0,'']]
      , all=[]
    while(q.length){
        let [x,y,p]=q.shift()
          , ds=md5(inp+p)
        for(let d=0 ;d<4 ;++d){
            if(ds[d]<'b') continue
            let nx=x+dirs[d][0]
              , ny=y+dirs[d][1]
            if(nx<0 || nx>3 || ny<0 || ny>3) continue
            if(nx==3 && ny==3) all.push(p+dirs[d][2])
            else q.push([nx,ny,p+dirs[d][2]])
        }
    }
    l(inp,all.length,'\n shortest',all[0].length,all[0],'\n longest',all.at(-1).length,all.at(-1),'\n')
}