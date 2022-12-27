globalThis.l=console.log

let inp=`43
3
4
10
21
44
4
6
47
41
34
17
17
44
36
31
46
9
27
38`.split`\n`.map(Number)

let lim=1<<inp.length , cnt=0 , cc=[]

for(let i=0; i<lim ;++i){
    let sum=0, v=[]
    for(let p=0; p<inp.length ;++p){
        let mask=1<<p
        if(i&mask){
            sum+=inp[p]
            v.push(inp[p])
        }
    }
    if(sum==150){
        ++cnt
        cc[v.length] || (cc[v.length]=0)
        cc[v.length]++
    }
}

l(cnt)
l(Object.values(cc)[0])