console.log("welcome");

// if user adds a note add it to the local storage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {

    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    console.log(notesObj);
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt = "";
    console.log(notesObj);
    showNotes();

});
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="card my-2 mx-2" style="width: 18rem;">

                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>

                </div>
            </div>
        `;
    });
    let notesEle = document.getElementById('notes');
    if (notes.length != 0) {
        notesEle.innerHTML = html;
    }
}

// function to delete note

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchtxt');
search.addEventListener('input', function () {
    let inputval = search.value.toLowerCase;
    console.log("fired", inputval);
    let notecards = document.getElementsByClassName('card');
    Array.from(notecards).forEach(function(element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }

    });
})


