



  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, userArr, i;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase().trim();
    div = document.getElementById("myDropdown");
    userArr = div.getElementsByTagName("a");
    for (i = 0; i < userArr.length; i++) {
      txtValue = userArr[i].getAttribute("data-userName");
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        var tempStr = txtValue.replace(new RegExp(`${filter}`, 'ig'), (searchValue) => { return `<span style="color:red;">${searchValue}</span>` });
        userArr[i].innerHTML = tempStr;
        userArr[i].style.display = "block";
      } else {
        userArr[i].style.display = "none";
      }
    }
  } 
  
// function myFunction() {
//     //  let arr=[
//     //   "Sarang Jain", "Omendra Singh" ,"Nanda Kishore","Prashant Sharma","Ravi Bhut","Ram Kumar",
//     //   "Dhairya Sharma","Pankaj Kuamr","Bhupemdra Agarwal","shivika Sharma","Sanyog Sharma","Kumar sanu",
//     //   "Rahul Kumar","Sharma Raj", "Yogi Adityanath","Modi","Damodar Das","Sahil Khan","Dhoop Agarwal","shubham Yadav",
//     //   "Vikas Jadon","Sara Ali","Deepika Singh","Ranveer Kishore","Randhir Sharma","Raj Bhai",",Vineet Yadav","Rahul Jhalani"
//     //  ]; 

//     document.getElementById("myDropdown").classList.toggle("show");


//   }
  
//   function filterFunction() {
//     var input, filter, a, i;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
    
//     div = document.getElementById("myDropdown");
    
//     a = div.getElementsByTagName("a");
    
//     for (i = 0; i < a.length; i++) {
    
//       txtValue = a[i].textContent || a[i].innerText;
    
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
    
//         a[i].style.display = "";
    
//       } else {
        
//         a[i].style.display = "none";
//       }
//     }
//   } 