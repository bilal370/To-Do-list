var btn;
var inputvalue;
var List;
var updatebtn;

let updateindex;

let tasklist=[]
btn=document.getElementById('add');
inputvalue=document.getElementById('task');
List=document.getElementById('list');
updatebtn=document.getElementById('update');
btn.addEventListener('click', function () {
    tasklist.push(inputvalue.value);
    inputvalue.value='';
    console.log('tasklist:' ,tasklist);

    List.innerHTML='';
    for (let index = 0; index < tasklist.length; index++) {
        List.innerHTML+=`<li>${tasklist[index]}
          <button onclick="deletetask('${index}')">delete</button>
          <button onclick="Edittask('${index}')">Edit</button>
       </li>`;
        
    }
});

function deletetask(index){
   alert(`Are you sure to delete`);
   tasklist.splice(index,1);
   List.innerHTML='';
   for (let index = 0; index < tasklist.length; index++) {
      List.innerHTML+=`<li>${tasklist[index]}
       <button onclick="deletetask('${index}')">delete</button>
       </li>`;
    
   }

}   

function Edittask(index){
    alert(`would you like to Edit task: ${tasklist[index]}`);
    inputvalue.value=tasklist[index];
    updateindex=index;
    
}

updatebtn.addEventListener('click' , function(){
   alert('task updated');

   tasklist[updateindex]=inputvalue.value;

   List.innerHTML='';
    for (let index = 0; index < tasklist.length; index++) {
        List.innerHTML+=`<li>${tasklist[index]}
          <button onclick="deletetask('${index}')">delete</button>
          <button onclick="Edittask('${index}')">Edit</button>
       </li>`;
        
    }
})




