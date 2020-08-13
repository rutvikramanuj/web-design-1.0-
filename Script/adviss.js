var login = function () {
        let schoolCode = document.getElementById('school-code').value;
        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        if (password ===isNaN || password.length===5) {
                return false
                alert('Enter Valid Password')
        } else {

            console.log(schoolCode);
            console.log(username);
            console.log(email);
            console.log(password);
            console.log('Successfull');
        }
}