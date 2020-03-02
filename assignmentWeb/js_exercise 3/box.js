alert("hello");
function box1() {
    document.getElementById('show').innerHTML = "OOPS Something Went Wrong!!!"
}
setInterval(
  function() {
    let randomColor = Math.floor(Math.random() * 260);
    document.getElementById('two').style.background = "#" + randomColor;
  }, 1000);

  let id;
  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
        clearInterval(id);   
        previous()
            break;

        case 38:
            clearInterval(id);   
             next();
            break;

        case 39:
            clearInterval(id);   
            next();
            break;

        case 40:
            clearInterval(id);   

            previous();
            break;
    }
};

let colors = [ 'red', 'green', 'yellow', 'blue' ,'AliceBlue', 'Aqua' , "Aquamarine ","BlueViolet" ,"IndianRed","DarkSalmon","Cyan","DarkCyan" ];
let count=-1;
function next(){
    if(count<-1 || count==colors.length-1){
        count= -1;
    
    }
    count++;
    document.getElementById('f4').style.backgroundColor=colors[count];    
     id=setTimeout(next,5000)
    

}

function previous(){

    if(count == 0){
        count=colors.length;
    }

    count--;
    document.getElementById('f4').style.backgroundColor=colors[count];
     
    id=setTimeout(previous,5000)


}


  

