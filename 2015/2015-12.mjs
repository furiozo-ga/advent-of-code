globalThis.l=console.log
import {open} from 'node:fs/promises'

let fh=await open('./2015-12.in')
  , inp=await fh.readFile('utf8')
  , re=/-?\d+\.?\d*/g
  , m , sum=0
// l(inp)

fh.close()

while(m=re.exec(inp)){
    sum+=+m[0]
}

l(sum)

let o=JSON.parse(inp)
trim(o)
inp=JSON.stringify(o)
sum=0
while(m=re.exec(inp)){
    sum+=+m[0]
}
l(sum)


function trim(o){
    if(typeof o != 'object') return
    if(!Array.isArray(o)){
        if(Object.values(o).includes('red'))
            Object.keys(o).forEach(k=>delete o[k])
    }
    Object.values(o).forEach(e=>trim(e))    
}