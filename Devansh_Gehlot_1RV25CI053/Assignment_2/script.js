document.getElementById('To_Do').addEventListener('submit', (e) => {
    e.preventDefault();

    const task = document.getElementById('task').value;
    const list = document.getElementById('wlist');

    const li = document.createElement('li');
    li.textContent = task;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';

    delBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(delBtn);

    list.appendChild(li);

    document.getElementById('task').value = '';
});