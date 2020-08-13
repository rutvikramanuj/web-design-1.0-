
let signup = function () {
      let newUser = {
          schoolName : document.getElementById("school-name").value,
         schoolCode : document.getElementById("school-code").value,
         Address : document.getElementById("Address").value,
         city : document.getElementById("city").value,
         pin : document.getElementById("pin").value,
         cont : document.getElementById("cont-no").value,
         aadhar : document.getElementById("aadhar").value,
         pan : document.getElementById("pan").value,
         username : document.getElementById("username").value,
         email : document.getElementById("email").value,
         password : document.getElementById("password").value,
         gender : document.querySelectorAll("gender").value
      }
         
        console.log(newUser.schoolName);    
        console.log(newUser.schoolCode);    
        console.log(newUser.Address);    
        console.log(newUser.city);    
        console.log(newUser.pin);    
        console.log(newUser.cont);    
        console.log(newUser.aadhar);    
        console.log(newUser.pan);    
        console.log(newUser.username);    
        console.log(newUser.email);    
        console.log(newUser.password);   
       if (newUser.gender.value === 'male') {
        console.log('Male'); 
         
       } else {
        console.log('Female'); 

       }

       
      
}