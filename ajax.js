// Signin Page username & Password Validation Starts
let user=document.getElementById("userId");
let pwd=document.getElementById("pwdId");


function validationSin(callback) {                                        //Basic Validation Starts
    if(user.value.trim()==""||pwd.value.trim()==""){         //trim() function to eleminate white spaces before and after text
        alert("Fields marked ' * ' Cannot Be Empty"); 
        return false;
    }
    else{
            return callback();
    }
}
       
function validUser(){
    if(user.value == "admin" & pwd.value == "12345"){
            return true;
    }
    else{
            alert("Invalid Username or Password");
            return false;
    }
}
// Signin Page username & Password Validation Ends

//**********************Check box counting starts********************************
    //Reference the Table.
    var grid = document.getElementById("tab");

    //Reference the CheckBoxes in Table.
    var checkBoxes = grid.getElementsByTagName("INPUT");
    var count = 0;
    // console.log(checkBoxes.length);
    
    tab.addEventListener("input",boxChecked);
    function boxChecked(){
        var promise = new Promise(function(resolve,reject){
            for (var i = 0; i < checkBoxes.length; i++) {
                if (checkBoxes[i].checked) {
                    count++;
                }
            }
            if(count == 5){
                resolve("You have 5 completed");
            }
            else{
                reject("You can click up to 5");
            }

        });
        promise
        .then(function(){alert("Congrats!!! 5 Tasks have been Successfully Completed.");})
        .catch(function(e){console.log(e);})
        // console.log(count);
        count = 0;
    }
   
  
    // ********************Check box counting ends*********************************
    
    // Log Out button logic starts
    function myFunction() {
        location.replace("index.html")
      }
    // Log Out button logic Ends

// AJAX Starts   
function ajax(){
//Creating an XHR object
var xhttp = new XMLHttpRequest();
//Event listner
xhttp.onreadystatechange = function(){
    //Condition
    if(this.readyState==4&&this.status==200){
        var response = JSON.parse(this.responseText); //Parse function will convert JSON format to normal text
        // console.log(response);
        // var Jlist=response.list;
        console.log(response);
        var output=""
        
        
        for(var i=0;i<response.length;i++){
            var j=i+1;
            output += "<tr>"
            output += "<td>" + j +"</td>";
            output += "<td>" + "<input type=checkbox id=\"check\" onCheck = GetSelected(); >" + "</td>"
            output += "<td>" + response[i].title +"</td>";
            // output += "<td>" + Jlist[i].item +"</td>";
            // output += "<td>" + Jlist[i].qty +"</td>";
            // output += "<td>" + Jlist[i].unit +"</td>";
            // output += "<td>" + Jlist[i].catagory +"</td>";
            // output += "<td>" + Jlist[i].description +"</td>";
            // output += "</tr>"
            
        }

        document.getElementById("demo").innerHTML=output;

    }
}
//Initiation
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

}