

// Generic and multiuse Javascript file

let ta = new TA({
    htmlEl: '#main_header > h1',
    minDelay: 50,
    maxDelay: 50,
});

let timeToWait = 0;

ta.typingForward("Vlad Postu", 0);

setTimeout(() => {
    ta.setSelector('#main_header > h2');
    ta.typingForward("Web Designer ✏️", 0);
}, 1200)

setTimeout(() => {
    ta.typingBackward("");
}, 3300)

setTimeout(() => {
    ta.typingForward("Frontender", 0)
}, 6000)

// setTimeout(() => {
//     ta.typingBackward("");
// }, 9000)