globalThis.l=console.log

let inp=`00111101111101000`

let s=stretch(inp,272)
l(cs(s))

s=stretch(inp,35651584)
l(cs(s))

function stretch(s,l){
    let a=s.split``
    while(a.length<l){
        // s=s+'0'+s.split``.reverse().join``.replace(/./g,c=>1-c)
        a=a.concat().concat('0',a.reverse().map(e=>1-e))
    }
    return a.slice(0,l)
}

function cs(s){
    while(s.length % 2 == 0){
        for(let i=0 ; i<s.length; i+=2)
            s[i/2]=s[i]==s[i+1]?1:0
        s=s.slice(0,s.length/2)
        // s=s.match(/../g).map(c=>c[0]==c[1]?1:0).join``
    }
    return s.join``
}