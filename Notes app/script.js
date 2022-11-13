const addbtn = document.getElementById("add-note");
const title = document.getElementById("title");
const text = document.getElementById("text");

addbtn.addEventListener("click", (e) => {
  if (!(title.value && text.value)) {
    alert("Please enter both note-title and note-text");
  }
});
