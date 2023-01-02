globalThis.l=console.log
Array.prototype.vis=function(){
    l(this.join`\n`)
}
let inp1=`.^^.^.^^^^`
  , inp2=`...^^^^^..^...^...^^^^^^...^.^^^.^.^.^^.^^^.....^.^^^...^^^^^^.....^.^^...^^^^^...^.^^^.^^......^^^^`
  , inp=inp1

let a=[inp2]
l(build(a,40))
l(build(a,400000))


function build(a,n){
    let safe=a[0].match(/\./g).length
    for(let i=1; i<n; ++i){
        let pr='.'+a[i-1]+'.'
          , tr=['.']
        for(let j=1; j<pr.length-1; ++j){
            let uu=pr.slice(j-1,j+2)
            if(
                uu=='^..'
             || uu=='^^.'
             || uu=='.^^'
             || uu=='..^'
            )       tr[j]='^'
            else    tr[j]='.',++safe
        }
        a[i]=tr.slice(1).join``
    }
    return safe
}