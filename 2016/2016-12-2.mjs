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
jnz c -5`.split`\n`.map(r=>r.split` `)
,fs=[]
let gt=globalThis
gt.pos=0,gt.a=0,gt.b=0,gt.c=0,gt.d=0
build()
run()
l(a)
gt.pos=0,gt.a=0,gt.b=0,gt.c=1,gt.d=0
run()
l(a)

function run(){
    while(pos<fs.length){
        // l(pos,fs[pos].toString())
        fs[pos]()
    }
}

function build(){
    for(let i=0; i<inp.length; ++i){
        let m=inp[i]
        switch(m[0]){
            case 'cpy':
                fs[i]=Function(m[2]+'='+m[1]+';++pos')
                // m=inp[pos][1].split` `
                // eval(m[1]+'='+m[0])
                break
            case 'inc':
                fs[i]=Function('++'+m[1]+';++pos')
                // eval(inp[pos][1]+'++')
                break
            case 'dec':
                fs[i]=Function('--'+m[1]+';++pos')
                // eval(inp[pos][1]+'--')
                break
            case 'jnz':
                fs[i]=Function(`if(${m[1]}) pos+=${m[2]};else ++pos`)
                // m=inp[pos][1].split` `
                // eval(m[0]+'!=0') && (pos+=+m[1]-1)
                break
            default:
                throw Error('unhandled')
        }
    
    }
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