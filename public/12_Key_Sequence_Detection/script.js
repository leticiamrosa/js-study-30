
// const pressed = [];
// const secretCode = 'steve';

// // add a key for array


// // add an event listener to display which key is being preloaded by the user
// window.addEventListener('keyup', e => {
//     const keys = e.key;

//     pressed.push(keys);

//     pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

//     if (pressed.join('').includes(secretCode)) {
//         console.log('DING DING!');
//         cornify_add();
//       }
//     console.log(pressed);

// })


const pressed = [];
const secretCode = 'tabada';
window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    console.log('DING DING!');
    this.cornify_add();
  }
  console.log(pressed);
});