

function submitSignin(callback){

    var user =document.getElementById("name").value;
    var pass =document.getElementById("psw").value;
    
    
    if( (user==="admin")&&(pass==="12345")) {
         callback();
    }
         else if(user){
        
        alert("Incorrect password");
        
         }
         else if(pass){
             alert("incorrect username");
         }
         else{
             alert("incorect user name and password");
         }
    }
    
    



function gotodo(){

    window.location="todo.html";
    
}

function call(){

    submitSignin(gotodo);
}



    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response =JSON.parse(this.responseText);
            var grsdata = '';
        for(var i = 0; i < response.length; i++) {

           

        if(response[i].completed === true){
            grsdata += '<tr> <td class="listItem"> <input  id="checker" checked="checked" type="checkbox"  disabled>'+" " + response[i].title + '</td></tr>';
        }else{
            grsdata += '<tr> <td class="listItem"> <input id="checker" type="checkbox" onclick="clickEvent(this)">'+" " + response[i].title + '</td></tr>';       

        }
          
          
        }
        document.querySelector('.todolistitem tbody').innerHTML = grsdata;      
        }
    }
    
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    
    

let counter = 0;

function clickEvent(select){
    console.log("checler");

    var promis = new Promise(function(resolve,reject){
        if(select.checked === true){
            counter++;
            if(counter ==5){
                resolve("congrats!.. 5 Tasks completed!");
            }
            else if(counter>5){
                resolve("allready 5 Tasks completed");
            }
        }else{
            counter--;
            console.log(true);
           

        }
        
    });

    promis.then(function(message){
        alert(message);
    });


}


