const Tasks = document.getElementById('inputList').value;
const DisArea = document.getElementById('Output');

if(Tasks.trim() !== "")
{
    const Para = document.createElement('p');
    Para.textContent = Tasks;

    DisArea.appendChild(Para);
}
else{
    alert("Please enter some text!");
}