globalThis.l=console.log
import { crypto, toHashString } from "https://deno.land/std/crypto/mod.ts";

async function md5(s){
    return toHashString(await crypto.subtle.digest("MD5", new TextEncoder().encode(s)))
}

async function write(s){
    return await Deno.stdout.write(new TextEncoder().encode(s))
}


let inp='ojvtpuvg'
  , c=0 , i=-1
  , p2='________'.split``

await write('\r'+p2.join``+'   ')
while(1){
    let m=await md5(inp+ ++i)
    if(m.indexOf('00000')!=0) continue
    p2[c]=m[5]
    await write('\r'+p2.join``+'   ')
    if(++c>7) break
}

c=0,i=-1,p2='________'.split``
await write('\n'+p2.join``+'   ')
while(1){
    let m=await md5(inp+ ++i)
    if(m.indexOf('00000')!=0) continue
    if(!/[0-7]/.test(m[5]))continue
    if(p2[+m[5]]!='_')continue
    p2[+m[5]]=m[6]
    await write('\r'+p2.join``+'   ')
    if(++c>7) break
}
