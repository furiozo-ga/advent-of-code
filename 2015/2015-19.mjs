globalThis.l=console.log

let inp=
`Al => ThF
Al => ThRnFAr
B => BCa
B => TiB
B => TiRnFAr
Ca => CaCa
Ca => PB
Ca => PRnFAr
Ca => SiRnFYFAr
Ca => SiRnMgAr
Ca => SiTh
F => CaF
F => PMg
F => SiAl
H => CRnAlAr
H => CRnFYFYFAr
H => CRnFYMgAr
H => CRnMgYFAr
H => HCa
H => NRnFYFAr
H => NRnMgAr
H => NTh
H => OB
H => ORnFAr
Mg => BF
Mg => TiMg
N => CRnFAr
N => HSi
O => CRnFYFAr
O => CRnMgAr
O => HP
O => NRnFAr
O => OTi
P => CaP
P => PTi
P => SiRnFAr
Si => CaSi
Th => ThCa
Ti => BP
Ti => TiTi
e => HF
e => NAl
e => OMg

ORnPBPMgArCaCaCaSiThCaCaSiThCaCaPBSiRnFArRnFArCaCaSiThCaCaSiThCaCaCaCaCaCaSiRnFYFArSiRnMgArCaSiRnPTiTiBFYPBFArSiRnCaSiRnTiRnFArSiAlArPTiBPTiRnCaSiAlArCaPTiTiBPMgYFArPTiRnFArSiRnCaCaFArRnCaFArCaSiRnSiRnMgArFYCaSiRnMgArCaCaSiThPRnFArPBCaSiRnMgArCaCaSiThCaSiRnTiMgArFArSiThSiThCaCaSiRnMgArCaCaSiRnFArTiBPTiRnCaSiAlArCaPTiRnFArPBPBCaCaSiThCaPBSiThPRnFArSiThCaSiThCaSiThCaPTiBSiRnFYFArCaCaPRnFArPBCaCaPBSiRnTiRnFArCaPRnFArSiRnCaCaCaSiThCaRnCaFArYCaSiRnFArBCaCaCaSiThFArPBFArCaSiRnFArRnCaCaCaFArSiRnFArTiRnPMgArF`

let r={}, rr=[]
  , [t,med]=inp.split`\n\n`
if(process.argv[2]) med=process.argv[2]
t.split`\n`.forEach(e => {
    let m=e.match(/(\w+) => (\w+)/)
    r[m[1]] || (r[m[1]]=[])
    r[m[1]].push(m[2])
    rr.push(m[2],m[1])
});
inp=med.split(/\B(?=[A-Z])/)
let bad=/Rn(Ca)+Rn/


l(opt(med,0),'<===== part 2')
l(repl(),'<===== part 1')


function repl(){
    let res=new Set()
    for(let i=0; i<inp.length ;++i){
        if(!r[inp[i]]) continue
        r[inp[i]].forEach(sub => res.add([...inp.slice(0,i) , sub  , ...inp.slice(i+1)].join``) )
    }
    return res.size
}

function opt(s,steps){
    if(s=='e') return steps
    l(s,steps)
    if(bad.test(s)) return Infinity
    // for(let j=0 ;j<bad.length; ++j) if(bad[j].test(s)) return Infinity
    for(let i=0; i<rr.length; i+=2){
        let m,sub,re=new RegExp(rr[i],'g')
        while(m=re.exec(s)){
            sub=opt(s.slice(0,m.index) + rr[i+1] + s.slice(m.index+rr[i].length),steps+1)
            if(sub!=Infinity) return sub
        }
    }
}
