globalThis.l=console.log
import { createHash } from 'node:crypto'
function md5(content){
  return createHash('md5').update(content).digest('hex')
}

let inp='bgvyzdsv'

l(sol('00000'))
l(sol('000000'))

function sol(sw){
    for(let i=1; ; ++i){
        if(md5(inp+i).indexOf(sw)==0){
            return i
        }
    }
}
