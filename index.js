const signUp = e => {
    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    //TO check if similar info is already available in storage
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.fullname.toLowerCase() == document.getElementById('fullname').value.toLowerCase());
     //if not stored,then create new
    if(!exist){
        formData.push({
            fullname: document.getElementById('fullname').value,
            totaldays: document.getElementById('totaldays').value,
            presentdays: document.getElementById('presentdays').value,
            band: document.getElementById('band').value
        });
        localStorage.setItem('formData', JSON.stringify(formData));
        // console.log(localStorage.getItem('formData'));
        dispData();
        document.querySelector('form').reset();
        document.getElementById('fullname').focus();
    }
    else{
        alert("Duplicate name found.");
    }
    e.preventDefault();
}
function dispData(){
    console.log(localStorage.getItem('formData'));
    if(localStorage.getItem('formData'))
    {
        var output = document.querySelector('tbody');
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('formData')).forEach(data => {
            output.innerHTML += `
                    <tr>
                        <td>${data.fullname}</td>
                        <td>${data.totaldays}</td>
                        <td>${data.presentdays}</td>
                        <td>${data.band}</td>
                    </tr>
            `;
        });               
    }
}
dispData();

//All input must have values to prevent array size issue in table
/*(function () {
    $('form>input').keyup(function () {
      var empty = false;
      $('form>input').each(function () {
        if ($(this).value() == '') {
          empty = true;
        }
      });
      if (empty) {
        $('#register').attr("disabled", "disabled");
      }
      else {
        $('#register').removeAttr('disabled');
      }
    });
  })








/*
// var namew=document.getElementById("fullname").value;
// var totalw=document.getElementById("totaldays");
// var presentw=document.getElementById("presentdays");
// var bandw=document.getElementById("band");
// console.log("name",namew);
var nameinput=document.getElementById("fullname")
var totalinput=document.getElementById("totaldays")
var presentinput=document.getElementById("presentdays")
var bandinput=document.getElementById("band")

//getting data from local storage
var data=JSON.parse(localStorage.getItem("sno"));
//console.log(data.fullname+" "+data.band);
//document.getElementById("data").innerHTML=data.fullname;

// if(data==null){
//    alert("Please input some data");
// }
//getting data in tabular format
$.each(data,function(key,value){
    $('tbody').append(`<tr>
    <td class=fname>${data.fullname}</td>
    <td class=fname>${data.totaldays}</td>
    <td class=fname>${data.presentdays}</td>
    <td class=fname>${data.band}</td>
    </tr>`)
})
document
    .getElementById("attendence-form")
    .addEventListener('submit',function(event){
        event.preventDefault();

        var fullname=nameinput.value.trim();
        var totaldays=totalinput.value.trim();
        var presentdays=presentinput.value.trim();
        var band=bandinput.value.trim();
         var data={
             fullname:fullname,
             totaldays:totaldays,
             presentdays:presentdays,
             band:band
         }
         localStorage.setItem("sno",JSON.stringify(data));
        
    })


*/