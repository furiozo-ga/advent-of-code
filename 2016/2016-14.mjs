import {createHash} from 'node:crypto'

globalThis.l=console.log

function md5(content){
    let r=createHash('md5').update(content).digest('hex')
    for(let i=0; i<stretch; ++i)
        r=createHash('md5').update(r).digest('hex')
    return r
}


let inp='ahsbgdzn' , stretch
// let inp='abc' , stretch

f64(0)
f64(2016)


function f64(s){
    let a=[] , keys=[] ,i
    stretch=s
  
    for(i=0; i<=1000 ;++i){
        a.push(md5(inp+i))
    }

    while(keys.length<64){
        let m=a[0].match(/(.)\1\1/)
        if(m){
            let lf=m[1].repeat(5)
            for(let j=1; j<=1000; ++j)
                if(a[j].indexOf(lf)>-1){
                    keys.push(a[0])
                    l(keys.length)
                    break
                }
        }
        a.shift()
        a.push(md5(inp + i++))
    }
    l('answer',i-1002)
}
