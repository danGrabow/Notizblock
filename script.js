let allNotes = {
    'notesTitles' : ['Ba', 'Aufgabe'],
    'notes' : ['banana', 'rasen mähen'],
    'trashNotesTitles' : [],
    'trashNotes' : [],
    'archiveNotesTitles' : [],
    'archiveNotes' : [],
}

function moveNote(indexNote, startKey, destinationKey ){
    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0])
  
    let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(notesTitle[0])

    saveToLocalStorage();

    renderNotes();     
    renderTrashNotes();   
    renderArchiveNotes()
    
}

function renderNotes(){
let contentRef = document.getElementById('content')

    getFromLocalStorage();    
    contentRef.innerHTML = "";    

    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);        
    }    
}

function renderTrashNotes(){
let trashContentRef = document.getElementById('trash_content')
    
    
    trashContentRef.innerHTML = "";    

    for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);        
    }
}

function renderArchiveNotes(){
let archiveContentRef = document.getElementById('archive_content')
    
    
    archiveContentRef.innerHTML = "";    

    for (let indexArchiveNote = 0; indexArchiveNote < allNotes.archiveNotes.length; indexArchiveNote++) {
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
    
        allNotes.notesTitles.push(titleContent)
        allNotes.notes.push(noteInput);

    saveToLocalStorage();
    renderNotes();

    titleContentRef.value = "";
    noteInputRef.value = "";   

    }    
} 

function emptyBin (indexTrashNote){   

    allNotes.trashNotes.splice(indexTrashNote, 1);   
    allNotes.trashNotesTitles.splice(indexTrashNote, 1)
    
    saveToLocalStorage();

    renderNotes();
    renderTrashNotes();
    renderArchiveNotes();
}

function saveToLocalStorage(){
    localStorage.setItem("myObject", JSON.stringify(allNotes)); 
    }

function getFromLocalStorage() {    
let myArr = JSON.parse(localStorage.getItem("myObject"));

    if(myArr === null){}

    else {
    allNotes = myArr;
    
    }    

}