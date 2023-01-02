import blessed from 'reblessed';

export default class vis{
  static scr
  static boxes=[]
  static init(){
    this.scr=blessed.screen({
      smartCSR: true
    })
    this.scr.title = 'my window title';

    // Quit on Escape, q, or Control-C.
    this.scr.key(['escape', 'q', 'C-c'], function(ch, key) {
      this.destroy()
      return process.exit(0);
    });
  }
  static r(){this.scr.render()}
  static show(p,attr=6<<9){
    if(Array.isArray(p)){
      for(let y=0; y<p.length; ++y)
        for(let x=0; x<p[y].length; ++x)
        p[y][x] && this.scr.fillRegion(attr, String(p[y][x]), x, x+1, y, y+1)
    }else{  // strings

    }
    this.scr.render()
  }
  static putchar(x,y,char,attr=null){
    this.scr.fillRegion(attr , char , x, x+1, y, y+1)
    this.scr.render()
  }

  static box(h='50%',w='50%',params){
    let box = blessed.box({
      // top: 'center',
      // top: 1,
      // bottom:0,
      // left: 'center',
      left: 8,
      width: w,
      height: h,
      content: 'Hello {bold}world{/bold}!',
      tags: true,
      border: {
        type: 'line'
      },
      style: {
        fg: 'white',
        bg: 'black',
        border: {
          fg: '#ffe0e0'
        },
        hover: {
          // bg: 'green'
        }
      },
      ...params
    });
    
    if(box.scrollable){
      box.on('element mouse',function(b,e){
        // l(...e)
        // l(JSON.stringify(e))
        // vis.dump(e.length)
        if(e.action=='wheelup'  ) { b.scroll(-1)}
        if(e.action=='wheeldown') { b.scroll( 1)}
        b.screen.render()
      })
    }

    this.boxes.push(box);
    this.scr.append(box)
    this.scr.render()
    return box
  }
  static dump(...p){
    vis.scr.destroy()
    setTimeout(()=>console.log(...p),200)
  }
}

// attributes for fillRegion :
// reblressed/lib/widgets/element.js:258


// mouse event data :
// {
//    "name":"mouse",
//    "ctrl":false,
//    "meta":false,
//    "shift":false,
//    "type":"X10",
//    "raw":[67,66,74,"\u001b[MCBJ"],
//    "buf":{
//      "type":"Buffer",
//      "data":[27,91,77,67,66,74]
//    },
//    "x":1,
//    "y":40,
//    "action":"mousemove mousedown mouseup wheeldown wheelup",
//    ?"button": "left right middle"
// }



// // If our box is clicked, change the content.
// box.on('click', function(data) {
//   box.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}');
//   screen.render();
// });

// // If box is focused, handle `enter`/`return` and give us some more content.
// box.key('enter', function(ch, key) {
//   box.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
//   box.setLine(1, 'bar');
//   box.insertLine(1, 'foo');
//   screen.render();
// });


// // Focus our element.
// box.focus();

// Render the screen.
// screen.render();
