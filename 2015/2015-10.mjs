globalThis.l=console.log

let inp='1113122113'

for(let i = 1; i <= 50; i++){
    inp=las(inp);
    if(i==40 || i==50) l(inp.length)
}

function las(s){
    let ns='', p=0 , lc=s[0] , lcc=1
    while(++p<s.length){
        if(lc == s[p])  lcc++
        else{
            ns+=lcc+lc
            lc=s[p]
            lcc=1
        }
    }
    ns+=lcc+lc
    return ns
}