const Tasks = document.getElementById('Inputt');
const Sub = document.getElementById('SubBut');
const DisArea = document.getElementById('Diss');
const ClrBtn = document.getElementById('ClrButton');

Sub.addEventListener('click', (event) => {

    event.preventDefault()

    const TaskText = Tasks.value;

    if(TaskText.trim() !== "")
    {
        const Para = document.createElement('li');
        const checkboxx = document.createElement('input');
        Para.textContent = TaskText;
        checkboxx.type = 'checkbox';

        //Para.appendChild(Para);
        Para.append(" ");
        Para.appendChild(checkboxx);

        DisArea.appendChild(Para);

        //Tasks.value = "";
    }
    else{
        alert("Please enter some text!");
    }
});

ClrBtn.addEventListener('click', (e) => {
    const ConfDel = confirm("Are you sure, Do you want to delete all the tasks?");
    if(ConfDel)
    {
        DisArea.innerHTML = '';
    }
});