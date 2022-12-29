globalThis.l=console.log
Object.prototype.cp=function(){
    return JSON.parse(JSON.stringify(this))
}

let istate={
    h1:50,
    m1:500,
    h0:51,
    d0:9,
    bossturn: false,
    shield: 0,
    poison: 0,
    charge:0,
}

l(opt({...istate})[1])

function opt(state){
    // l(state)
    // dots
    if(state.poison){
        state.poison--
        state.h0-=3
        if(state.h0<1) return [true, 0]
    }

    if(state.charge){
        state.charge--
        state.m1+=101
    }

    if(state.shield){
        state.shield--
    }

    // boss turn
    if(state.bossturn){
        state.h1 -= state.shield ? state.d0-7 : state.d0
        if(state.h1<1){
            // l('player dead')
            return [false, 0]
        }
        state.bossturn=false
        return opt(state)
    }

    // player turn

    // part 2
    if(state.h1==1) return [false,0]
    else state.h1--
    // ^^^ comment out for part 1

    let min=Infinity, outcome , mana
      , cost=53
    if(state.m1>=cost){ // magic misiles
        if(state.h0<=4){
            // l('boss dead by magic misiles')
            min=cost
        }else{
            [outcome,mana]=opt({...state, m1:state.m1-cost, bossturn:true, h0:state.h0-4})
            if(outcome) min=mana+cost
        }
    }

    cost=73     // drain
    if(state.m1>=cost && min>cost){
        [outcome,mana]=opt({...state, m1:state.m1-cost, bossturn:true, h0:state.h0-2, h1:state.h1+2})
        if(outcome && min>mana+cost) min=mana+cost
    }

    cost=113     // shield
    if(state.m1>=cost && min>cost && state.shield==0){
        [outcome,mana]=opt({...state, m1:state.m1-cost, bossturn:true, shield:6})
        if(outcome && min>mana+cost) min=mana+cost
    }

    cost=173     // poison
    if(state.m1>=cost && min>cost && state.poison==0){
        [outcome,mana]=opt({...state, m1:state.m1-cost, bossturn:true, poison:6})
        if(outcome && min>mana+cost) min=mana+cost
    }

    cost=229     // recharge
    if(state.m1>=cost && min>cost && state.charge==0){
        [outcome,mana]=opt({...state, m1:state.m1-cost, bossturn:true, charge:5})
        if(outcome && min>mana+cost) min=mana+cost
    }

    if(min==Infinity) return [false,0]
    return [true ,min]
}