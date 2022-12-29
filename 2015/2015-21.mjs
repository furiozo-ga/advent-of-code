globalThis.l=console.log
let i1=`Dagger        8     4       0
Shortsword   10     5       0
Warhammer    25     6       0
Longsword    40     7       0
Greataxe     74     8       0`.split`\n`.map(r=>r.split(/\s+/).slice(1).map(Number))
let i2=`noth 0 0 0
Leather      13     0       1
Chainmail    31     0       2
Splintmail   53     0       3
Bandedmail   75     0       4
Platemail   102     0       5`.split`\n`.map(r=>r.split(/\s+/).slice(1).map(Number))
let i3=`noth +0 0 0 0
noth +0 0 0 0
Damage +1    25     1       0
Damage +2    50     2       0
Damage +3   100     3       0
Defense +1   20     0       1
Defense +2   40     0       2
Defense +3   80     0       3`.split`\n`.map(r=>r.split(/\s+/).slice(2).map(Number))

// l(i1,i2,i3)

let combo=[],dup=new Set()
for(let w of i1){
    for(let a of i2){
        for(let r1 of i3){
            for(let r2 of i3){
                if(r1==r2) continue
                let dem=w[1]+r1[1]+r2[1]
                  , arm=a[2]+r1[2]+r2[2]
                  , price=w[0]+a[0]+r1[0]+r2[0]
                  , key=''+price+','+dem+','+arm
                if(dup.has(key)) continue
                combo.push([price,dem,arm])
                dup.add(key)
                // l(dem,arm,price)
            }
        }
    }
}

let boshp=109,bosd=8,bosa=2,mehp=100

combo.sort((a,b)=>a[0]-b[0])
for(let i=0; i<combo.length; ++i){
    if(win(i)){l('win',combo[i]);break}
    else{
        // l('lose',combo[i])
    }
}

combo.sort((a,b)=>b[0]-a[0])
for(let i=0; i<combo.length; ++i){
    if(win(i)){
        // l('win',combo[i])
    }else{l('lose',combo[i]);break}
}



function win(i){
    let h1=mehp , h2=boshp , med = combo[i][1] , mea=combo[i][2]
    while(true){
        h2-=(med-bosa)>1 ? (med-bosa) : 1
        if(h2<1) return true
        h1-=(bosd-mea)>1 ? (bosd-mea) : 1
        if(h1<1) return false
        // l(h1,h2)
    }
}