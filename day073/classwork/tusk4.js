// 4) შექმენით to do list გვერდი, რომელზეც გექნებათ შესატანი ველი და ღილაკი, ასევე სია რომელშიც გამოიტანთ იმ ელემენტებს რომლებსაც მომხმარებლი ჩაწერს შესატან ველში, ელეემნტი უნდა დაემატოს მხოლოდ მაშინ როდესაც მომხამრებელი დასმატებელ ელემენტს ღილაკზე დაკლიკებით დაადასტურებს
(function () {
    // Create UI
    const container = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = 'To-Do List';
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter a task';
    const addButton = document.createElement('button');
    addButton.textContent = 'Add';
    const list = document.createElement('ul');

    container.appendChild(title);
    container.appendChild(input);
    container.appendChild(addButton);
    container.appendChild(list);
    document.body.appendChild(container);

    // Add item only when the user clicks the button
    addButton.addEventListener('click', () => {
        const value = input.value.trim();
        if (!value) return; // don't add empty items

        const li = document.createElement('li');
        li.textContent = value;
        list.appendChild(li);

        input.value = '';
        input.focus();
    });
})();