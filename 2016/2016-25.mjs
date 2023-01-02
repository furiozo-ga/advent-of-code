globalThis.l=console.log

let inp=`cpy a d
cpy 7 c
cpy 362 b
inc d
dec b
jnz b -2
dec c
jnz c -5
cpy d a
jnz 0 0
cpy a b
cpy 0 a
cpy 2 c
jnz b 2
jnz 1 6
dec b
dec c
jnz c -4
inc a
jnz 1 -7
cpy 2 b
jnz c 2
jnz 1 4
dec b
dec c
jnz 1 -4
jnz 0 0
out b
jnz a -19
jnz 1 -21`.split`\n`.map(r=>r.split(/(?<! .+) /))
,last=null
,pos=0,a,b=0,c=0,d=0,cnt=0
for(let i=0; cnt<100; ++i){
    cnt=0,last=null,pos=0,a=i,b=0,c=0,d=0
    l(i)
    while(exec())1
}

function exec(){
    if(pos>=inp.length) return false
    let m
    switch(inp[pos][0]){
        case 'cpy':
            m=inp[pos][1].split` `
            eval(m[1]+'='+m[0])
            break
        case 'inc':
            eval(inp[pos][1]+'++')
            break
        case 'dec':
            eval(inp[pos][1]+'--')
            break
        case 'out':
            // l(last ,b)
            if(last!=null){
                if(last!=1-b){
                    return false
                }
            }
            last=b
            if(++cnt>100) return false
            break
        case 'jnz':
            m=inp[pos][1].split` `
            eval(m[0]+'!=0') && (pos+=+m[1]-1)
            break
        default:
            throw Error('unhandled')
    }
    ++pos
    return true
}