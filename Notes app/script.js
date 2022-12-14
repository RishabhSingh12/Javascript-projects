const addbtn = document.getElementById("add-note");
const title = document.getElementById("note-title");
const text = document.getElementById("note-text");
let notesobj;

addbtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!(title.value && text.value)) {
    return alert("Please enter both note-title and note-text");
  }

  let notes = localStorage.getItem("notes");
  // let notesobj;
  if (notes == null) {
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

  displaynotes();
});

// function for displaying notes
function displaynotes() {
  let notes = localStorage.getItem("notes");
  // let notesobj;
  let html = "";
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);

    notesobj.forEach((ele, idx) => {
      html += `<div id="note">
                    <p class="note-counter">Note ${idx + 1}</p>
                    <h3 class="note-title">${ele.notetitle}</h3>
                    <p class="note-text">${ele.notetext}</p>
                    <button id="${idx}" onclick="deleteNote(this.id)" class="note-btn">Delete</button>
                    <button id="${idx}" onclick="editNote(this.id)" class="note-btn edit-btn">Edit</button>
                </div>`;
    });
  }

  let notesElement = document.getElementById("notes");
  if (notesobj.length > 0) {
    notesElement.innerHTML = html;
  } else {
    notesElement.innerHTML = `<h1 class="fallback">No notes to display. Please add one!</h1>`;
  }
}

displaynotes();

// delete note
function deleteNote(idx) {
  let cnf = confirm("Are u sure , u want to delete this note ?");
  if (cnf == true) {
    let notes = localStorage.getItem("notes");
    // let notesobj;
    if (notes == null) {
      notesobj = [];
    } else {
      notesobj = JSON.parse(notes);
    }

    notesobj.splice(idx, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    displaynotes();
  }
}

// edit note
function editNote(idx) {
  let notes = localStorage.getItem("notes");

  // let notesObj;

  if (title.value !== "" || text.value !== "") {
    return alert("Please clear the form fields before editing !");
  }

  if (notes == null) {
    alert("You don't have any note to edit! Please add one !!");
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }

  title.value = notesobj[idx].notetitle;
  text.value = notesobj[idx].notetext;

  notesobj[idx].notetitle = title.value;
  notesobj[idx].notetext = text.value;

  notesobj.splice(idx, 1);

  localStorage.setItem("notes", JSON.stringify(notesobj));

  displaynotes();
}
