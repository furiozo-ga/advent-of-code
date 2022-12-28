globalThis.l=console.log

let inp1=`Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8
Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3`
let inp2=`Frosting: capacity 4, durability -2, flavor 0, texture 0, calories 5
Candy: capacity 0, durability 5, flavor -1, texture 0, calories 8
Butterscotch: capacity -1, durability 0, flavor 5, texture 0, calories 6
Sugar: capacity 0, durability 0, flavor -2, texture 2, calories 1`

let inp=inp2.split`\n`.map(r=>r.match(/-?\d+/g).map(Number))
  , task=1


l(opt([],100))
task=2
l(opt([],100))

function opt(ls,left){
    if(ls.length==inp.length-1){
        ls.push(left)

        if(task==2){
            let cal=0
            for(let i=0 ; i< ls.length ;++i){
                cal+=inp[i][4]*ls[i]
            }
            if(cal!=500) return 0
        }

        let sc=1
        for(let q=0 ; q<4 ;++q){
            let ssc=0
            for(let i=0 ; i< ls.length ;++i){
                ssc+=inp[i][q]*ls[i]
            }
            if(ssc<0) ssc=0
            sc*=ssc
        }

        return sc
    }
    let max=0
    for(let q=0; q<=left ;++q){
        let sub=opt([...ls,q],left-q)
        if(sub>max) max=sub
    }
    return max
}
