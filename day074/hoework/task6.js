// 7) შექმენით notes list გვერდი, სადაც მომხმარებელს ექნება შესატანი ველი და ღილაკი "დამატება". როდესაც მომხმარებელი ტექსტს ჩაწერს და ღილაკს დააწკაპუნებს, ტექსტი დაემატება სიაში როგორც ახალი ელემენტი. თითოეულ ელემენტს გვერდით უნდა ჰქონდეს წაშლის ღილაკი, რომლის დაჭერისას აღნიშნული ელემენტი სიიდან წაიშლება



        const noteInput = document.getElementById('noteInput');
        const addNoteButton = document.getElementById('addNoteButton');
        const notesList = document.getElementById('notesList');

        addNoteButton.addEventListener('click', function() {
            const noteText = noteInput.value.trim();
            if (noteText !== '') {
                const listItem = document.createElement('li');
                listItem.textContent = noteText;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'წაშლა';
                deleteButton.addEventListener('click', function() {
                    notesList.removeChild(listItem);
                });

                listItem.appendChild(deleteButton);
                notesList.appendChild(listItem);
                noteInput.value = '';
            }
        })
    