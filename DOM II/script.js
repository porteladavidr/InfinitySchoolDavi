document.addEventListener('DOMContentLoaded', function () {
    const noteInput = document.querySelector('#noteInput');
    const addNoteBtn = document.querySelector('#addNoteBtn');
    const notesList = document.querySelector('#notesList');
  
    function addNote() {
      const noteText = noteInput.value.trim();
  
      if (noteText === '') {
        alert('Por favor, insira uma nota.');
        return;
      }
  
      const noteItem = document.createElement('li');
      noteItem.classList.add('note-item');
      noteItem.textContent = noteText;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Excluir';
      deleteBtn.addEventListener('click', () => notesList.removeChild(noteItem));
  
      noteItem.appendChild(deleteBtn);
      notesList.appendChild(noteItem);
  
      noteInput.value = '';
      noteInput.focus();
    }
  
    addNoteBtn.addEventListener('click', addNote);
  
    noteInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addNote();
      }
    });
  });
  