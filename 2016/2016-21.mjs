globalThis.l=console.log

let inp1=`swap position 4 with position 0
swap letter d with letter b
reverse positions 0 through 4
rotate left 1 step
move position 1 to position 4
move position 3 to position 0
rotate based on position of letter b
rotate based on position of letter d`
,inp2=`rotate right 3 steps
swap position 7 with position 0
rotate left 3 steps
reverse positions 2 through 5
move position 6 to position 3
reverse positions 0 through 4
swap position 4 with position 2
rotate based on position of letter d
rotate right 0 steps
move position 7 to position 5
swap position 4 with position 5
swap position 3 with position 5
move position 5 to position 3
swap letter e with letter f
swap position 6 with position 3
swap letter a with letter e
reverse positions 0 through 1
reverse positions 0 through 4
swap letter c with letter e
reverse positions 1 through 7
rotate right 1 step
reverse positions 6 through 7
move position 7 to position 1
move position 4 to position 0
move position 4 to position 6
move position 6 to position 3
swap position 1 with position 6
swap position 5 with position 7
swap position 2 with position 5
swap position 6 with position 5
swap position 2 with position 4
reverse positions 2 through 6
reverse positions 3 through 5
move position 3 to position 5
reverse positions 1 through 5
rotate left 1 step
move position 4 to position 5
swap letter c with letter b
swap position 2 with position 1
reverse positions 3 through 4
swap position 3 with position 4
reverse positions 5 through 7
swap letter b with letter d
reverse positions 3 through 4
swap letter c with letter h
rotate based on position of letter b
rotate based on position of letter e
rotate right 3 steps
rotate right 7 steps
rotate left 2 steps
move position 6 to position 1
reverse positions 1 through 3
rotate based on position of letter b
reverse positions 0 through 4
swap letter g with letter c
move position 1 to position 5
rotate right 4 steps
rotate left 2 steps
move position 7 to position 2
rotate based on position of letter c
move position 6 to position 1
swap letter f with letter g
rotate right 6 steps
swap position 6 with position 2
reverse positions 2 through 6
swap position 3 with position 1
rotate based on position of letter h
reverse positions 2 through 5
move position 1 to position 3
rotate right 1 step
rotate right 7 steps
move position 6 to position 3
rotate based on position of letter h
swap letter d with letter h
rotate left 0 steps
move position 1 to position 2
swap letter a with letter g
swap letter a with letter g
swap position 4 with position 2
rotate right 1 step
rotate based on position of letter b
swap position 7 with position 1
rotate based on position of letter e
move position 1 to position 4
move position 6 to position 3
rotate left 3 steps
swap letter f with letter g
swap position 3 with position 1
swap position 4 with position 3
swap letter f with letter c
rotate left 3 steps
rotate left 0 steps
rotate right 3 steps
swap letter d with letter e
swap position 2 with position 7
move position 3 to position 6
swap position 7 with position 1
swap position 3 with position 6
rotate left 5 steps
swap position 2 with position 6`


let inp=inp2.split`\n`

l(scr('abcdefgh'))
// l(perm('as'.split``))
let p=perm('abcdefgh'.split``)
for(let i=0; i<p.length; ++i){
    if('fbgdceah' == scr(p[i].join``)) l(p[i].join``)
}

function perm(a){
    if(a.length<2) return [a]
    let ret=[]
    for(let i=0; i<a.length; ++i){
        let wo=a.concat()
          , c=a[i]
        wo.splice(i,1)
        let sub=perm(wo)
        for(let j=0; j<sub.length; ++j){
            sub[j].unshift(c)
            ret.push(sub[j])
        }
    }
    return ret
}

function scr(s){
    s=s.split``
    for(let i=0;i<inp.length; ++i){
        s=step(i,s)
        // l(s.join``)
    }
    return s.join``
}

function step(i,s){
    let m=inp[i].split` `
    let os
    switch(m[0]+' '+m[1]){
        case 'swap position':
            [ s[+m[2]], s[+m[5]] ] = [ s[+m[5]], s[+m[2] ] ]
            break
        case 'swap letter':
            for(let j=0; j<s.length; ++j)
                if(s[j]==m[2]) s[j]=m[5]
                else
                    if(s[j]==m[5]) s[j]=m[2]
            break
        case 'reverse positions':
            s=[ ...s.slice(0,+m[2]) , ...s.slice(+m[2],+m[4]+1).reverse() , ...s.slice(+m[4]+1) ]
            break
        case 'rotate left':
        case 'rotate right':
            if(m[1]=='left') os=+m[2]
            else             os=s.length-m[2]
            s=s.concat(s).slice(os,os+s.length)
            break
        case 'move position':
            s.splice(+m[5], 0, ...s.splice(+m[2],1) )
            break
        case 'rotate based':
            os=s.findIndex(e=>e==m[6])
            if(os>3) ++os
            ++os
            os%=s.length
            os=s.length-os
            s=s.concat(s).slice(os,os+s.length)
            break
        default:
            throw Error('unhandled')
    }
    return s
}