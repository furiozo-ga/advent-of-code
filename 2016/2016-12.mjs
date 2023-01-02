globalThis.l=console.log

let inp=`cpy 1 a
cpy 1 b
cpy 26 d
jnz c 2
jnz 1 5
cpy 7 c
inc d
dec c
jnz c -2
cpy a c
inc a
dec b
jnz b -2
cpy c b
dec d
jnz d -6
cpy 13 c
cpy 14 d
inc a
dec d
jnz d -2
dec c
jnz c -5`.split`\n`.map(r=>r.split(/(?<! .+) /))
,
pos=0,a=0,b=0,c=0,d=0
while(exec())1
l(a)

pos=0,a=0,b=0,c=1,d=0
while(exec())1
l(a)

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