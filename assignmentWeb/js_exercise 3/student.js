let currentUser=JSON.parse(localStorage.getItem("currentUser"));
console.log(currentUser.Name);

let strCourses = localStorage.getItem("courses");
let parsedCourses = JSON.parse(strCourses);

let elem = localStorage.getItem(currentUser);
let user = JSON.parse(elem);

document.getElementById("userName").innerHTML=currentUser.Name;

for(i=0;i<parsedCourses.length;i++){
    console.log(parsedCourses[i]);
    let course=parsedCourses[i];
    checkData(course);
}


function checkData(crc){
    name=JSON.parse(localStorage.getItem("currentUser")).Name;
    user=JSON.parse(localStorage.getItem(name));
    if(user[crc]==true){
        console.log(crc);
        
        let h1 = document.createElement("h1");
        h1.innerHTML=crc;
        document.body.append(h1);
        h1.classList.add("flex-container");
        h1.classList.add("content");
    }
}