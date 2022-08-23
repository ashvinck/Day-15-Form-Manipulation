
// creating  a function for Dom Manipulation
document.getElementById("submit").onclick = function(){
    let table1 = document.getElementById("table-body");
    let row1  = table1.insertRow(0);
    let cell1 = row1.insertCell(0);
    let cell2 = row1.insertCell(1);
    let cell3 = row1.insertCell(2);
    let cell4 = row1.insertCell(3);
    let cell5 = row1.insertCell(4);
    let cell6 = row1.insertCell(5);
    let cell7 = row1.insertCell(6);
    let cell8 = row1.insertCell(7);
    let cell9 = row1.insertCell(8);

    cell2.innerHTML =  document.getElementById("first-name").value;
    cell3.innerHTML =  document.getElementById("last-name").value;
    cell4.innerHTML =  document.getElementById("address").value;
    cell5.innerHTML =  document.getElementById("pincode").value;
    cell6.innerHTML =  document.getElementById("gender").value;
    cell8.innerHTML =  document.getElementById("State").value;
    cell9.innerHTML =  document.getElementById("Country").value;
////checkBox functions
function checkBox(){
    let indian = document.getElementById("foodOption1");
    let chinese = document.getElementById("foodOption2");
    let mediterranean = document.getElementById("foodOption3");
    let continental = document.getElementById("foodOption4");
    let bakery = document.getElementById("foodOption5");

     let res = "";

       if (indian.checked == true){
        let f1 = document.getElementById("foodOption1").value;
        res = f1 + "," ;
       }
       if (chinese.checked == true){
        let f2 = document.getElementById("foodOption2").value;
        res = res + f2 + ", ";
       }
       if (mediterranean.checked == true){
        let f3  = document.getElementById("foodOption3").value;
        res = res + f3 + ", " ;
       }
       if (continental.checked == true){
        let f4 = document.getElementById("foodOption4").value;
        res = res + f4 + ", " ;
       }
       if (bakery.checked == true){
         let f5 = document.getElementById("foodOption5").value;
         res = res + f5 + " ";
       }
       return cell7.innerHTML = res;
    }checkBox();

    function ValidateCheckBox()  {  
      let checkboxes = document.getElementsByName("food");  
      let numberOfCheckedItems = 0;  
      for(var i = 0; i < checkboxes.length; i++)  
      {  
          if(checkboxes[i].checked)  
              numberOfCheckedItems++;  
      }  
      if(numberOfCheckedItems < 2)  
      {  
          alert("Please select atleast two food options!");  
          return false;  
      }  
  }ValidateCheckBox();

}
// prevent form submission  by default
const form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);






