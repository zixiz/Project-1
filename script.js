var arr = [];

function createTask(task, date,hour) {
    var newTask = {
        task: task,
        date: date,
        hour: hour
    }
    return newTask;
}

function isTaskExiste(task){
    for(var i = 0; i < arr.length;i++){
        if(task == arr[i].task){
            return arr[i].task
        }
    }
}

function addTask(){
    var task = document.forms["inputForm"]["task"].value;
    var date = document.forms["inputForm"]["date"].value;
    var time = document.forms["inputForm"]["time"].value;
    
    if(isTaskExiste(task) === task){
        document.getElementById('error_msg').innerHTML = 'This task alredy exist';
    }else{
        arr.push(createTask(task,date,time));
        var myContainer = document.getElementById("liContainer");
        var li = document.createElement("li");
        li.className = "listyle"
        li.innerHTML = "<i class='fas fa-times' onclick='removeNote(this)'></i>" +"<div class= 'taskContainer'><span>"+task+"</span></div>"+"<div class='dateAndTimeS'>"+"<span>"+date + "</span>"+ "<span>" + time +"</span></div>"
        myContainer.append(li)
        document.getElementById('error_msg').innerHTML = '';

    }
    

}
function removeNote(x){
    x.parentElement.parentElement.removeChild(x.parentElement);
    
}