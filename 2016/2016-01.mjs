globalThis.l=console.log

let inp1='R8, R4, R4, R8'
let inp2=`L3, R1, L4, L1, L2, R4, L3, L3, R2, R3, L5, R1, R3, L4, L1, L2, R2, R1, L4, L4, R2, L5, R3, R2, R1, L1, L2, R2, R2, L1, L1, R2, R1, L3, L5, R4, L3, R3, R3, L5, L190, L4, R4, R51, L4, R5, R5, R2, L1, L3, R1, R4, L3, R1, R3, L5, L4, R2, R5, R2, L1, L5, L1, L1, R78, L3, R2, L3, R5, L2, R2, R4, L1, L4, R1, R185, R3, L4, L1, L1, L3, R4, L4, L1, R5, L5, L1, R5, L1, R2, L5, L2, R4, R3, L2, R3, R1, L3, L5, L4, R3, L2, L4, L5, L4, R1, L1, R5, L2, R4, R2, R3, L1, L1, L4, L3, R4, L3, L5, R2, L5, L1, L1, R2, R3, L5, L3, L2, L1, L4, R4, R4, L2, R3, R1, L2, R1, L2, L2, R3, R3, L1, R4, L5, L3, R4, R4, R1, L2, L5, L3, R1, R4, L2, R5, R4, R2, L5, L3, R4, R1, L1, R5, L3, R1, R5, L2, R1, L5, L2, R2, L2, L3, R3, R3, R1`


let dirs=[[-1,0],[0,1],[1,0],[0,-1]]
let inp=inp2.split`, `.map(s=>s.split(/(?<=[RL])\B/).map((e,i)=>i%2?+e:e))

// l(inp)
asd(1)
asd(2)

function asd(task){
    let cd=0,x=0,y=0, vtd=new Set(['0,0'])
    M: for(let [i,d] of inp){
        if(i=='R') cd=(cd+1)%4
        else       cd=cd?cd-1:3
        for(let s=0; s<d; ++s){
            y+=dirs[cd][0]
            x+=dirs[cd][1]
            if(task==2 && vtd.has(x+','+y)){
                // l('visited',x,y,cd)
                break M
            }
            vtd.add(x+','+y)
        }
    }
    let d=Math.abs(x)+Math.abs(y)
    l(task,d)
}
