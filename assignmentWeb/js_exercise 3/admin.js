
let currentUser=JSON.parse(localStorage.getItem("currentUser"));
let newCourse = document.getElementById("Add");
newCourse.addEventListener("click", addNewCourse);



if (!localStorage.getItem("courses")) {
   
    localStorage.setItem("courses", JSON.stringify(["Linux"]));
}


let strCourses = localStorage.getItem("courses");
let parsedCourses = JSON.parse(strCourses);

//////----------------addying new course function------>>>>>
function addNewCourse() {
    let newCourse = prompt("Enter new course:");
    if (newCourse) {
        parsedCourses.push(newCourse);
        strCourses = JSON.stringify(parsedCourses);
        localStorage.setItem("courses", strCourses);
    }
    document.location.reload();

}




document.getElementById("userName").innerHTML=currentUser.Name;
if (currentUser.isadmin) {
    document.getElementById("userName").innerHTML += " (Admin)";
}
for (i = 0; i < localStorage.length; i++) {
    let elem = localStorage.getItem(localStorage.key(i));
    let parsedUser = JSON.parse(elem);
    // console.log(parsedUser.Name);
    if (parsedUser.isadmin== false) {
        console.log(parsedUser.Name);
        createUsers(parsedUser);
        
    }
}
function createUsers(parsedUser){
    let a1=document.createElement("a");
    let h1 = document.createElement('h3');
    a1.addEventListener("click", toggleTopics);
    a1.innerHTML=parsedUser.Name;
    document.body.append(a1);
    let divMain = document.createElement("div")
    let divIn = document.createElement("div")
    a1.classList.add("userNames");
    for (let k = 0; k < parsedCourses.length; k++) {

        let divbtn = document.createElement("div")
        let div1 = document.createElement("div");
        let courseName = document.createElement("a")
        courseName.innerHTML = parsedCourses[k];
        let addButton = document.createElement('button');
        let deleteButton = document.createElement('button');
        addButton.innerHTML = "Add";
        deleteButton.innerHTML = "Delete";
        divbtn.append(addButton, deleteButton);
        div1.append(courseName, divbtn);
        divIn.append(div1)
        div1.classList.add("coursesRow");
        div1.classList.add("flex-container");
        addButton.classList.add("addButton");
        deleteButton.classList.add("delButton");
        courseName.classList.add("courseName");
        addButton.addEventListener("click",assignCourse);
        deleteButton.addEventListener("click",removeCourse);

        addButton.style.display = "";
        deleteButton.style.display="none";
        if(parsedUser[parsedCourses[k]]==false){
            addButton.style.display = "";
            deleteButton.style.display="none";
        }
        else if(parsedUser[parsedCourses[k]]==true){
            addButton.style.display = "none";
            deleteButton.style.display="";
        }
        
    

    }
    divMain.classList.add("users");
    divIn.classList.add("topics");
    divMain.append(h1, divIn);
    document.body.append(divMain);
}

function toggleTopics() {
    event.target.nextElementSibling.firstChild.nextElementSibling.classList.toggle("show");
}

function assignCourse(){
    courseID=event.target.parentElement.previousElementSibling.innerHTML;
    userID=event.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.innerHTML;
    let strUser=localStorage.getItem(userID);
    let parsedUser=JSON.parse(strUser);
    parsedUser[courseID]=true;
    strUser=JSON.stringify(parsedUser);
    localStorage.setItem(userID,strUser);
    event.target.style.display = "none";
    event.target.nextElementSibling.style.display="";
}
function removeCourse(){
    courseID=event.target.parentElement.previousElementSibling.innerHTML;
    userID=event.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.innerHTML;
        let strUser=localStorage.getItem(userID);
    let parsedUser=JSON.parse(strUser);
    parsedUser[courseID]=false;
    strUser=JSON.stringify(parsedUser);
    localStorage.setItem(userID,strUser);
    event.target.style.display = "none";
    event.target.previousElementSibling.style.display="";

}


