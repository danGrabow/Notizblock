function getNoteTemplate(indexNote){

    return `<p class = "inner_notes">+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]} <button onclick="moveToTrash(${indexNote})" class= "inner_btn" title="move to trash"><img src="assets/img/trash.png" alt="add note"></button> <button onclick="moveToArchive(${indexNote})" class= "inner_btn" title="move to archive"><img src="assets/img/archive.png" alt="add note"></button></p>
            
     `;
}

function getTrashNoteTemplate(indexTrashNote){

    return `<p class = "inner_notes" >+ title: ${trashNotesTitles[indexTrashNote]} ->  ${trashNotes[indexTrashNote]}<button onclick="emptyBin(${indexTrashNote})" title="Delete permanently"><img src="assets/img/delete_forever.png" alt="add note" class= "inner_btn"></button> <button onclick="moveToArchiveFromTrash(${indexTrashNote})" class= "inner_btn" title="move to archive"><img src="assets/img/archive.png" alt="add note"></button></p> `;
}

function getArchiveNoteTemplate(indexArchiveNote){

    return `<p class = "inner_notes" >+ title: ${archiveNotesTitles[indexArchiveNote]} ->  ${archiveNotes[indexArchiveNote]}<button onclick="moveToTrashFromArchive(${indexArchiveNote})" class= "inner_btn" title="move to trash"><img src="assets/img/trash.png" alt="add note"></button> <button onclick="moveToNotesFromArchive(${indexArchiveNote})" class= "inner_btn" title="move to notes"><img src="assets/img/to_notes.png" alt="add note"></button></p> `;
}