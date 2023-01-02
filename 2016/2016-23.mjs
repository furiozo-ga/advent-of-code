globalThis.l=console.log;
let inp1=`cpy a b
dec b
cpy a d
cpy 0 a
cpy b c
inc a
dec c
jnz c -2
dec d
jnz d -5
dec b
cpy b c
cpy c d
dec d
inc c
jnz d -2
tgl c
cpy -16 c
jnz 1 c
cpy 84 c
jnz 71 d
inc a
inc d
jnz d -2
inc c
jnz c -5`
,cnt=1e3,
inp=inp1.split`\n`.map(r=>r.split(/(?<! .+) /))
,pos=0,a=7,b=0,c=0,d=0
while(exec())1
l(a)

inp=inp1.split`\n`.map(r=>r.split(/(?<! .+) /))
pos=0,a=12,b=0,c=0,d=0
while(exec())1
l(a)

function exec(){
    if(pos>=inp.length) return false
    let m
    if(--cnt==0){
        cnt=1e6
        l(a,b,c,d,pos)
    }
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
            eval(m[0]+'!=0') && (pos+=eval(m[1])-1)
            break
        case 'tgl':
            let trg=pos+eval(inp[pos][1])
            if(trg>=inp.length) break
            trg=inp[trg]
            if(trg[1].indexOf` `>-1){ // 2 arg
                if(trg[0]=='jnz') trg[0]='cpy'
                else              trg[0]='jnz'
            }else{  // 1 arg
                if(trg[0]=='inc') trg[0]='dec'
                else              trg[0]='inc'

            }
            break
        default:
            throw Error('unhandled')
    }
    ++pos
    return true
}