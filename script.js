// Main Array
var arr = [];
// Creat object
function createTask(task, date,hour) {
    var newTask = {
        task: task,
        date: date,
        hour: hour
    }
    return newTask;
}
// Checking if task already exist
function isTaskExiste(task){
    for(var i = 0; i < arr.length;i++){
        if(task == arr[i].task){
            return true;
        }
    }
}
// LocalStorage backup function
function backUp(){
    var backup = JSON.parse(localStorage.getItem("localstorageArr"))
    if(backup == null){
        return false;
    }
    else if(backup.length > 0){
        arr = backup;
        for(var i = 0; i< backup.length;i++){
            var myContainer = document.getElementById("liContainer");
            var li = document.createElement("li");
            li.className = "listyle";
            li.innerHTML = "<i id='exitIcon' class='fas fa-times' onclick='removeNote(this)'></i>" +"<div class= 'taskContainer'><span>"+backup[i].task+"</span></div>"+"<div class='dateAndTimeS'>"+"<span>"+backup[i].date + "</span>"+"<br>"+ "<span>" + backup[i].hour +"</span></div>"
            myContainer.append(li);
        }
    }
}
backUp();
// Clear form function
function clearForm(){
    document.forms["inputForm"]["task"].value = "";
    document.forms["inputForm"]["date"].value = "";
    document.forms["inputForm"]["time"].value = "";
}
// Add button logic function
function addTask(){
    var task = document.forms["inputForm"]["task"].value;
    var date = document.forms["inputForm"]["date"].value;
    var time = document.forms["inputForm"]["time"].value;
    

    if(task === ""){
        document.getElementById('error_msg').innerHTML = 'Must add a task, please try again';
        clearForm()
    }else if(date === ""){
        document.getElementById('error_msg').innerHTML = 'Must add a date';
        clearForm()
    }else if(isTaskExiste(task) === true){
        document.getElementById('error_msg').innerHTML = 'This task alredy exists';
    }else{
        arr.push(createTask(task,date,time));
        clearForm()
        localStorage.setItem("localstorageArr", JSON.stringify(arr));
        var myContainer = document.getElementById("liContainer");
        var li = document.createElement("li");
        li.className = "listyle";
        li.innerHTML = "<i id='exitIcon' class='fas fa-times' onclick='removeNote(this)'></i>" +"<div class= 'taskContainer'><span>"+task+"</span></div>"+"<div class='dateAndTimeS'>"+"<span>"+date + "</span>"+"<br>"+ "<span>" + time +"</span></div>"
        myContainer.append(li);
        document.getElementById('error_msg').innerHTML = '';

    }


}
// Remove note by the X icon logic
function removeNote(x){
    var localTask = x.parentElement.children[1].children[0].innerHTML;
    var localDate = x.parentElement.children[2].children[0].innerHTML;
    for(var i =0; i<arr.length;i++){
        if(localTask == arr[i].task && localDate == arr[i].date){
            arr.splice(i, 1);
            localStorage.setItem("localstorageArr", JSON.stringify(arr));
        }
    }
    x.parentElement.parentElement.removeChild(x.parentElement);  
}
// Remove all notes button logic
function removeAllNotes(){
    arr = [];
    document.getElementById('liContainer').innerHTML = '';
    localStorage.setItem("localstorageArr", JSON.stringify(arr));
}
