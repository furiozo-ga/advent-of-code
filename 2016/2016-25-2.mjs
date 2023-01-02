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
,last,pos,a,b,c,d,cnt=0,i

for(i=0; cnt<100; ++i){
    cnt=0,last=1,pos=0,a=i,b=0,c=0,d=0
    // l(i)
    while(exec())1
}
l(i-1)

function exec(){
    // l(pos,a,b,c,d)
    if(pos>=inp.length) throw Error('outside')
    let m=inp[pos]
    switch(m[0]){
        case 'cpy':
            // m=inp[pos][1].split` `
            // eval(m[2]+'='+m[1])
            switch(m[2]){
                case 'a':if(m[1]=='d') a=d; else a=0;break
                case 'b':if(m[1]=='a') b=a; else b=+m[1];break
                case 'c':c=+m[1];break
                case 'd':d=a;break
                default:throw Error('unhandled')
            }
            break
        case 'inc':
            switch(m[1]){
                case 'a':++a;break
                case 'd':++d;break
                default:throw Error('unhandled')
            }
            // eval(m[1]+'++')
            break
        case 'dec':
            // eval(m[1]+'--')
            switch(m[1]){
                case 'b':--b;break
                case 'c':--c;break
                default:throw Error('unhandled')
            }
            break
        case 'out':
            // l(b)
            // if(last!=null){
                if(last==b){
                    // l('no')
                    return false
                }
                // l('yes')
            // }
            last=b
            if(++cnt>100) return false
            break
        case 'jnz':
            // m=inp[pos][1].split` `
            // eval(m[1]+'!=0') && (pos+=+m[2]-1)
            switch(m[1]){
                case '0':break
                case '1':pos+=+m[2]-1;break
                case 'a':if(a)pos+=+m[2]-1;break
                case 'b':if(b)pos+=+m[2]-1;break
                case 'c':if(c)pos+=+m[2]-1;break
                default:throw Error('unhandled')
            }
            break
        default:
            throw Error('unhandled')
    }
    ++pos
    return true
}