
globalThis.l=console.log
let n=20151125, r=1, c=1

do{
    next()
}while(r!=2978 || c!=3083)

l(n)


function next(){
    n=n*252533%33554393
    if(r==1) r=c+1, c=1
    else     r--  , c++
}