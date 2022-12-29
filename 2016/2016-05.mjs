import {createHash} from 'node:crypto'

globalThis.l=console.log

function md5(content){
    return createHash('md5').update(content).digest('hex')
}

let inp='ojvtpuvg'
  , c=0 , i=-1
  , p2='________'.split``

process.stdout.write('\r'+p2.join``+'   ')
while(1){
    let m=md5(inp+ ++i)
    if(m.indexOf('00000')!=0) continue
    p2[c]=m[5]
    process.stdout.write('\r'+p2.join``+'   ')
    if(++c>7) break
}

c=0,i=-1,p2='________'.split``
process.stdout.write('\n'+p2.join``+'   ')
while(1){
    let m=md5(inp+ ++i)
    if(m.indexOf('00000')!=0) continue
    if(!/[0-7]/.test(m[5]))continue
    if(p2[+m[5]]!='_')continue
    p2[+m[5]]=m[6]
    process.stdout.write('\r'+p2.join``+'   ')
    if(++c>7) break
}
