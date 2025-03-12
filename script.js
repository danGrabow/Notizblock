let notesTitles =['Ba', 'Aufgabe'];
let notes =['banana', 'rasen mähen'];

let trashNotesTitles =[];
let trashNotes =[];

let archiveNotesTitles = [];
let archiveNotes = [];

function renderNotes(){
let contentRef = document.getElementById('content')

    getFromLocalStorage();    
    contentRef.innerHTML = "";    

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);        
    }    
}

function renderTrashNotes(){
let trashContentRef = document.getElementById('trash_content')
    getFromLocalStorageTrash();
    
    trashContentRef.innerHTML = "";    

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);        
    }
}

function renderArchiveNotes(){
let archiveContentRef = document.getElementById('archive_content')
    getFromLocalStorageArchive();
    
    archiveContentRef.innerHTML = "";    

    for (let indexArchiveNote = 0; indexArchiveNote < archiveNotes.length; indexArchiveNote++) {
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);        
    }
}

// Notizen hinzufügen
function addNote(){
let noteInputRef = document.getElementById('note_Input')
let noteInput = noteInputRef.value;

    let titleContentRef = document.getElementById('title_Input')
    let titleContent  = titleContentRef.value;
    
    if (titleContent.length === 0){
    alert('Bitte einen Titel hinzufügen!')}

    else {
    
    notesTitles.push(titleContent)
    notes.push(noteInput);

    saveToLocalStorage();
    renderNotes();

    titleContentRef.value = "";
    noteInputRef.value = "";   

    }    
}

function moveToTrash(indexNote){
let trashNote = notes.splice(indexNote, 1);
  trashNotes.push(trashNote[0])

  let trashNotesTitle = notesTitles.splice(indexNote, 1);
  trashNotesTitles.push(trashNotesTitle[0])

    saveToLocalStorage();
    renderNotes();

    saveToLocalStorageTrash();
    renderTrashNotes();
    renderArchiveNotes()
}

function moveToTrashFromArchive(indexNote){
let trashNote = archiveNotes.splice(indexNote, 1);
    trashNotes.push(trashNote[0])
  
    let trashNotesTitle = archiveNotesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNotesTitle[0])
  
      saveToLocalStorage();
      renderNotes();
  
      saveToLocalStorageTrash();
      renderTrashNotes();

      saveToLocalStorageArchive();
      renderArchiveNotes();
  }

function moveToArchive(indexNote){
let archiveNote = notes.splice(indexNote, 1);
    archiveNotes.push(archiveNote[0])
  
    let archiveNotesTitle = notesTitles.splice(indexNote, 1);
    archiveNotesTitles.push(archiveNotesTitle[0])
  
      saveToLocalStorage();
      renderNotes();
  
      saveToLocalStorageTrash();
      renderTrashNotes();
    
      saveToLocalStorageArchive()
      renderArchiveNotes()
  }

function moveToArchiveFromTrash(indexNote){
let archiveNote = trashNotes.splice(indexNote, 1);
    archiveNotes.push(archiveNote[0])
  
    let archiveNotesTitle = trashNotesTitles.splice(indexNote, 1);
    archiveNotesTitles.push(archiveNotesTitle[0])
  
      saveToLocalStorage();
      renderNotes();
  
      saveToLocalStorageTrash();
      renderTrashNotes();
    
      saveToLocalStorageArchive()
      renderArchiveNotes()
  }

function moveToNotesFromArchive(indexNote){
let noteRef = archiveNotes.splice(indexNote, 1);
    notes.push(noteRef[0])
  
    let notesTitle = archiveNotesTitles.splice(indexNote, 1);
    notesTitles.push(notesTitle[0])
  
      saveToLocalStorage();
      renderNotes();
  
      saveToLocalStorageTrash();
      renderTrashNotes();

      saveToLocalStorageArchive();
      renderArchiveNotes();
  }  

function emptyBin (indexTrashNote){   

    trashNotes.splice(indexTrashNote, 1);   
    trashNotesTitles.splice(indexTrashNote, 1)
    
    saveToLocalStorageTrash();

    renderNotes();
    renderTrashNotes();
    renderArchiveNotes();
}

function saveToLocalStorage(){
    localStorage.setItem("notes", JSON.stringify(notes)); 
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles)); 
}

function getFromLocalStorage() {    
let myArr = JSON.parse(localStorage.getItem("notes"));
let myArrTitles = JSON.parse(localStorage.getItem("notesTitles"));

    if(myArr, myArrTitles === null){}

    else {
    notes = myArr;
    notesTitles = myArrTitles;
    }    

}

function saveToLocalStorageTrash(){
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes)); 
    localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles));  
}

function getFromLocalStorageTrash() {    
let myArrTrash = JSON.parse(localStorage.getItem("trashNotes"));
let myArrTrashTitles = JSON.parse(localStorage.getItem("trashNotesTitles"));

    if(myArrTrash, myArrTrashTitles === null){}

    else {
        trashNotes = myArrTrash;
        trashNotesTitles = myArrTrashTitles;
    }

}

function saveToLocalStorageArchive(){
    localStorage.setItem("archiveNotes", JSON.stringify(archiveNotes));
    localStorage.setItem("archiveNotesTitles", JSON.stringify(archiveNotesTitles)); 
}

function getFromLocalStorageArchive() {    
let myArrArchive = JSON.parse(localStorage.getItem("archiveNotes"));
let myArrArchiveTitles = JSON.parse(localStorage.getItem("archiveNotesTitles"));

    if(myArrArchive, myArrArchiveTitles === null){}

    else {
        archiveNotes = myArrArchive;
        archiveNotesTitles = myArrArchiveTitles;
    }
}