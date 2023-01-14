import onExit from 'node-cleanup'
onExit(()=>console.log('\x1b(B'))
globalThis.l=console.log
String.prototype.ld=function(){
  return '\x1b(0'+this+'\x1b(B'
}
l('\x1b(0')

l('lwk\n'
 +'tnu\n'
 +'mvj')


/*
q= ─
x= │

l w k
t n u
m v j

◆` ▒a ␉b ␌c ␍d ␊e °f ±g ␤h ␋i ┘j ┐k ┌l └m ┼n ⎺o ⎻p ─q ⎼r ⎽s ├t ┤u ┴v ┬w │x ≤y ≥z π{ ≠| £} ·~

  ┌─┐
┌─┘ │
└───┘
*/