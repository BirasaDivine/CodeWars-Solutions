document.addEventListener("DOMContentLoaded", function (){
    const form=document.querySelector("form");
    form.addEventListener("submit",function(event){
        event.preventDefault();
      
        const name=document.getElementById('name').value.trim() ;
        const university=document.getElementById('university').value.trim();
        const age=parseInt(document.getElementById('age').value,10);

     const personDetails = {
        name : name;
        university : university,
        age : age ;
     };
     console.log(personDetails)

    })
})
document.addEventListener("DOMContentLoaded", function (){
    const form=document.querySelector("form");
    form.addEventListener("submit",function(event){
        event.preventDefault();
      
        const name=document.getElementById('name').value.trim() ;
        const university=document.getElementById('university').value.trim();
        const age=parseInt(document.getElementById('age').value,10);

     const personDetails = {
        name : name;
        university : university,
        age : age ;
     };
     console.log(personDetails)

    })
})
