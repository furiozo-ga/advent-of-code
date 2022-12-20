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

  static box(h='50%',w='50%'){
    let box = blessed.box({
      top: 'center',
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
          bg: 'green'
        }
      }
    });
    
    this.boxes.push(box);
    this.scr.append(box)
    this.scr.render()
    return box
  }
}


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
