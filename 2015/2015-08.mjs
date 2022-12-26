globalThis.l=console.log

let cc=0,cm=0,ce=0

import { open } from 'node:fs/promises';

const file = await open('./2015-08.in2');

for await (const line of file.readLines()){
  let re=line.slice(1,-1)
  re=re.replace(/\\\\|\\"|\\x../g,m=>({'\\\\':'\\','\\"':'"'}[m]||'x'))
  cc+=line.length
  cm+=re.length
  re=line.replace(/\\|"/g,'\\$&')
  ce+=re.length+2
  console.log(line,line.length,re,re.length);
}

l(cc,cm,cc-cm,ce-cc)