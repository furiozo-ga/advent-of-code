let inp=`jio a, +22
inc a
tpl a
tpl a
tpl a
inc a
tpl a
inc a
tpl a
inc a
inc a
tpl a
inc a
inc a
tpl a
inc a
inc a
tpl a
inc a
inc a
tpl a
jmp +19
tpl a
tpl a
tpl a
tpl a
inc a
inc a
tpl a
inc a
tpl a
inc a
inc a
tpl a
inc a
inc a
tpl a
inc a
tpl a
tpl a
jio a, +8
inc b
jie a, +4
tpl a
inc a
jmp +2
hlf a
jmp -7`
globalThis.l=console.log

inp=inp.split`\n`.map(r=>r.split(/(?<!,) /))

let reg={a:0,b:0},pos=0
// l(inp)

while(exec()) 1
l(reg.b)
reg={a:1,b:0},pos=0
while(exec()) 1
l(reg.b)


function exec(){
    if(pos>=inp.length) return false
    let [ins,val]=inp[pos]
    switch(ins){
        case 'hlf': reg[val]/=2;break
        case 'tpl': reg[val]*=3;break
        case 'inc': reg[val]++ ;break
        case 'jmp': pos+=+val-1;break
        case 'jie': val=val.split`, `;if(reg[val[0]] %2 == 0) pos+=+val[1]-1;break
        case 'jio': val=val.split`, `;if(reg[val[0]]    == 1) pos+=+val[1]-1;break
        default: throw Error('unhandled')
    }
    ++pos
    // l(pos,reg)
    return true
}