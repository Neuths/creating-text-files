/**
 * This function handles the onclick event meaning it will be called whenever the button is clicked.
 */
function onSave() {
  // get textarea element
  const textArea = document.getElementById("textarea3");
  // retrieve the value within it
  const note = textArea.value;
  // add the note to the list
  addNote(note);
}

/**
 * This function adds a new note to the list of notes with a timestamp.
 * @param {string} noteText text to be added to list
 */
function addNote(noteText) {
  // get the list
  const logList = document.getElementById("log-list");
  // create a new list item
  const listItem = document.createElement("li");
  // now set the text for this list item using a timestamp and the text provided as parameter
  listItem.textContent = `${new Date().toLocaleString("en-US")}  -  ${noteText}`;
  // at this stage the list element is not yet added to the list, so add it at the bottom of the list now
  logList.appendChild(listItem);
}

// wait until all the HTML has been loaded!
window.addEventListener('DOMContentLoaded', (event) => {
  // get the button element
  const saveBtn = document.getElementById("save-btn");
  // attach an event listener for the "click" event. Every time the button i clicked onSave() should be called
  saveBtn.addEventListener("click", onSave)
});
