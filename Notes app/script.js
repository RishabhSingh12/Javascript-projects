const addbtn = document.getElementById("add-note");
const title = document.getElementById("title");
const text = document.getElementById("text");

addbtn.addEventListener("click", (e) => {
  if (!(title.value && text.value)) {
    return alert("Please enter both note-title and note-text");
  }

  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }

  let myObj = {
    notetitle: title.value,
    notetext: text.value,
  };

  notesobj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesobj));

  title.value = "";
  text.value = "";

  //   displaynotes();
});

// function for displaying notes
function displaynotes() {
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }

  let html = "";
  notesobj.forEach((ele, idx) => {
    html += `<div id="note">
                    <p class="note-counter">Note ${idx + 1}</p>
                    <h3 class="note-title">${ele.notetitle}</h3>
                    <p class="note-text">${ele.notetext}</p>
                    <button id="${idx}" onclick="deleteNote(this.id)" class="note-btn">Delete</button>
                    <button id="${idx}" onclick="editNote(this.id)" class="note-btn edit-btn">Edit</button>
                </div>`;
  });

  let notesElement = document.getElementById("notes");
  if (notesobj.length > 0) {
    notesElement.innerHTML = html;
  } else {
    notesElement.innerHTML = `<h1 class="fallback">No notes to display. Please add one!</h1>`;
  }
}

displaynotes();
