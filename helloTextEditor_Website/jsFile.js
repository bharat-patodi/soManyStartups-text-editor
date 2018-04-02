/*
-------------------------------------------------
The Main Code
-------------------------------------------------
*/
const writeBox = document.getElementById("writer");
// window.onload = init;

/*
-------------------------------------------------
Initialization
-------------------------------------------------
*/

function init() {
  restore();
  writeBox.contentEditable = "true";
}

/*
-------------------------------------------------
Save
-------------------------------------------------
*/

function save() {
  localStorage.setItem('allText', writeBox.innerHTML);
}

/*
-------------------------------------------------
Restore state
-------------------------------------------------
*/

function restore() {
  writeBox.innerHTML = localStorage.getItem('allText');
}

/*
-------------------------------------------------
Text Editing
-------------------------------------------------
*/

function editingStuff(cmdname, otherValue) {
  document.execCommand(cmdname, false, otherValue);
}

function execCommandReplacement() {
  // For things that are not covered in execCommand
}














/*
-------------------------------------------------
(a) Save Pictures
(a1) saving to a file
(a2) opening files
closing files
tabbed files
bold
italics
tables
highlighting
(b) tab key
(c) Ctrl + S should save
----------

----------
"Big Changes"
(b) Code Highlighting
(c) Error removal

"Problems"

-------------------------------------------------
*/
