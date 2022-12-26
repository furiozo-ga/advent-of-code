globalThis.l=console.log


let sp='vzbxkghb', ap=sp.split`` ,p1

while(fail()){}
l(p1=sp)
inc()
while(fail()){}
l(p1,sp)

// for(let i=0; i<1e6; i++) {
//     inc()
// }

function inc(p=7){
    if(ap[p]<'z') ap[p]=String.fromCharCode(1+ap[p].charCodeAt())
    else ap[p]='a',inc(p-1)
    sp=ap.join``
    // l(sp)
}

function fail(){
    let ch=false
    for(let i=0; i<ap.length-2 ;++i)
      if(ap[i].charCodeAt()+1 == ap[i+1].charCodeAt() && ap[i+1].charCodeAt()+1 == ap[i+2].charCodeAt()){
        ch=true;break
      }
    if(!ch){
        inc()
        return true
    }

    let m=sp.match(/i|o|l/)
    if(m){
        ap.splice(m.index+1,8,...Array(7-m.index).fill('a'))
        inc(m.index)
        return true
    }

    m=new Set(sp.match(/(.)\1/g))
    if(m.size<2){
        inc()
        return true
    }
    return false
}