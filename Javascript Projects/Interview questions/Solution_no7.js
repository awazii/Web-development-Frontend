// The Local Storage Manager:
// You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

// Solution:
function save(note) {
    localStorage.setItem('note', JSON.stringify(note));
}
let mynote={
    title: 'My note',
    content: 'This is my note'
}
save(mynote);
console.log(localStorage.getItem('note'));