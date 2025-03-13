function getNoteTemplate(indexNote){

    return `<p class = "inner_notes">+ title: ${allNotes.notesTitles[indexNote]} -> ${allNotes.notes[indexNote]}
    
    <button onclick="moveNote(${indexNote},'notes', 'trashNotes')" class= "inner_btn" title="move to trash"><img src="assets/img/trash.png" alt="add note"></button>
    <button onclick="moveNote(${indexNote},'notes', 'archiveNotes')" class= "inner_btn" title="move to archive"><img src="assets/img/archive.png" alt="add note"></button></p>
            
     `;
}


function getArchiveNoteTemplate(indexArchiveNote){

    return `<p class = "inner_notes" >+ title: ${allNotes.archiveNotesTitles[indexArchiveNote]} ->  ${allNotes.archiveNotes[indexArchiveNote]}
    
    <button onclick="moveNote(${indexArchiveNote},'archiveNotes', 'trashNotes')" class= "inner_btn" title="move to trash"><img src="assets/img/trash.png" alt="add note"></button>
    <button onclick="moveNote(${indexArchiveNote},'archiveNotes', 'notes')" class= "inner_btn" title="move to notes"><img src="assets/img/to_notes.png" alt="add note"></button></p> `;
}

function getTrashNoteTemplate(indexTrashNote){

    return `<p class = "inner_notes" >+ title: ${allNotes.trashNotesTitles[indexTrashNote]} ->  ${allNotes.trashNotes[indexTrashNote]}
    
    <button onclick="emptyBin(${indexTrashNote})" title="Delete permanently"><img src="assets/img/delete_forever.png" alt="add note" class= "inner_btn"></button>
    <button onclick="moveNote(${indexTrashNote},'trashNotes', 'archiveNotes')" class= "inner_btn" title="move to archive"><img src="assets/img/archive.png" alt="add note"></button>
    <button onclick="moveNote(${indexTrashNote},'trashNotes', 'notes')" class= "inner_btn" title="move to notes"><img src="assets/img/to_notes.png" alt="add note"></button>
    
    </p> `;
}

