globalThis.l=console.log;let inp=`cpy a d
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
jnz 1 -21`.split`\n`.map(r=>r.split` `)

let gt=globalThis,fs=[],i
gt.cnt=0
build()
for(i=0; cnt<100 ; ++i){
    gt.cnt=0,gt.last=1,gt.pos=0,gt.a=i,gt.b=0,gt.c=0,gt.d=0
    // l(a)
    run()
}
l(i-1)

function run(){
    while(pos<fs.length){
        if(!fs[pos]()) break
    }
}

function build(){
    for(let i=0; i<inp.length; ++i){
        let m=inp[i]
        switch(m[0]){
            case 'cpy':
                fs[i]=Function(m[2]+'='+m[1]+';++pos;return 1');break
            case 'inc':
                fs[i]=Function('++'+m[1]+';++pos;return 1')
                break
            case 'dec':
                fs[i]=Function('--'+m[1]+';++pos;return 1')
                break
            case 'jnz':
                fs[i]=Function(`if(${m[1]}) pos+=${m[2]};else ++pos;return 1`)
                break
            case 'out':
                fs[i]=Function(`
                // l(b)
                if(last==b) return 0
                last=b
                ++pos
                if(++cnt>100) return 0
                return 1`)
                break
            default:
                throw Error('unhandled')
        }
    
    }
}
