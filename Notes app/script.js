const addbtn = document.getElementById("add-note");
const title = document.getElementById("title");
const text = document.getElementById("text");

addbtn.addEventListener("click", (e) => {
  if (!(title.value && text.value)) {
    return alert("Please enter both note-title and note-text");
  }

  let notes = localStorage.getItem("notes");
  if (notes === nul) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }

  let myObj = {
    title: addTitle.value,
    text: addText.value,
  };

  notesobj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesobj));

  addTitle.value = "";
  addText.value = "";

  displaynotes();
});

// function for displaying notes
function displaynotes() {
  let notes = localStorage.getItem("notes");
  if (notes === nul) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
}
