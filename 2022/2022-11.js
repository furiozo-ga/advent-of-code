let inp1=`Monkey 0:
Starting items: 79, 98
Operation: new = old * 19
Test: divisible by 23
  If true: throw to monkey 2
  If false: throw to monkey 3

Monkey 1:
Starting items: 54, 65, 75, 74
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 2
  If false: throw to monkey 0

Monkey 2:
Starting items: 79, 60, 97
Operation: new = old * old
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 3

Monkey 3:
Starting items: 74
Operation: new = old + 3
Test: divisible by 17
  If true: throw to monkey 0
  If false: throw to monkey 1`.split`\n\n`

let inp2=`Monkey 0:
Starting items: 97, 81, 57, 57, 91, 61
Operation: new = old * 7
Test: divisible by 11
  If true: throw to monkey 5
  If false: throw to monkey 6

Monkey 1:
Starting items: 88, 62, 68, 90
Operation: new = old * 17
Test: divisible by 19
  If true: throw to monkey 4
  If false: throw to monkey 2

Monkey 2:
Starting items: 74, 87
Operation: new = old + 2
Test: divisible by 5
  If true: throw to monkey 7
  If false: throw to monkey 4

Monkey 3:
Starting items: 53, 81, 60, 87, 90, 99, 75
Operation: new = old + 1
Test: divisible by 2
  If true: throw to monkey 2
  If false: throw to monkey 1

Monkey 4:
Starting items: 57
Operation: new = old + 6
Test: divisible by 13
  If true: throw to monkey 7
  If false: throw to monkey 0

Monkey 5:
Starting items: 54, 84, 91, 55, 59, 72, 75, 70
Operation: new = old * old
Test: divisible by 7
  If true: throw to monkey 6
  If false: throw to monkey 3

Monkey 6:
Starting items: 95, 79, 79, 68, 78
Operation: new = old + 3
Test: divisible by 3
  If true: throw to monkey 1
  If false: throw to monkey 3

Monkey 7:
Starting items: 61, 97, 67
Operation: new = old + 4
Test: divisible by 17
  If true: throw to monkey 0
  If false: throw to monkey 5`.split`\n\n`

globalThis.l=console.log
let inp=inp2

class monkey{
  constructor(t){
    t=t.split`\n`
    this.n=+t[0].match(/\d+/)[0]
    this.items=t[1].match(/\d+/g).map(e=>+e)
    this.op=t[2].match(/new = (.+)/)[1]
    this.div=+t[3].match(/\d+/)[0]
    this.dst={true : +t[4].match(/\d+/)[0],
              false: +t[5].match(/\d+/)[0],}
    this.inspects=0
  }
  inspect(){
    let old=this.items[0]
    eval('old='+this.op)
    if(task==1) this.items[0]=Math.trunc(old/3)
    else        this.items[0]=old % cm
    ++this.inspects
  }
  test(){
    return this.items[0] % this.div === 0
  }
  throw(){
    this.inspect()
    m[this.dst[this.test()]].items.push(this.items.shift())
  }
  throwAll(){
    while(this.items.length) this.throw()
  }
  report(){ l('Monkey '+this.n+': '+this.items.join`, `+' ('+this.inspects+')')}
}

let m,cm,task

function fu(tsk,rounds){
  m=[],task=tsk
  inp.forEach(e=>m.push(new monkey(e)))
  cm=m.reduce((a,e)=>a*e.div,1)
  for(let i=1; i<=rounds; ++i){
    // l('\nround '+i)
    for(let j of m) j.throwAll()
    // for(let j of m) j.report()
  }
  m.sort((a,b)=>b.inspects - a.inspects)
  // l('common multiple : ',cm)
  l('monkey business',tsk,m[0].inspects * m[1].inspects)
}
fu(1,20)
fu(2,10000)
