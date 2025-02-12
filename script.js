function formvaidation() {

    let fname = document.querySelector('#name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;
    let mobile = document.getElementById('mobile').value

    if (fname === "") {
        document.querySelector('#error-name1').innerHTML = 'please enter your name';
        let namebox = document.querySelector('#name');
        namebox.style.borderColor = 'red';
        namebox.style.outlineColor = 'red';
        return false;
    }
    else if (email === "") {
        document.querySelector('#error-name2').innerHTML = 'please enter email';
        let namebox = document.querySelector('#email');
        namebox.style.borderColor = 'red';
        namebox.style.outlineColor = 'red';
        return false;
    }
    else if (mobile === "") {
        document.querySelector('#error-mobile').innerHTML = 'please enter mobile number';
        let namebox = document.querySelector('#mobile');
        namebox.style.borderColor = 'red';
        namebox.style.outlineColor = 'red';
        return false;
    }
    else if (password === "") {
        document.querySelector('#error-name3').innerHTML = 'please enter password';
        let namebox = document.querySelector('#password');
        namebox.style.borderColor = 'red';
        namebox.style.outlineColor = 'red';
        return false;
    }
    else if (cpassword === "") {
        document.querySelector('#error-name4').innerHTML = 'please enter password';
        let namebox = document.querySelector('#cpassword');
        namebox.style.borderColor = 'red';
        namebox.style.outlineColor = 'red';
        return false;
    }
    else if (!(password.match(/[1234567890]/) &&
        password.match(/[abcdefghijklmnopqrstuvwxyz]/) &&
        password.match(/[ABCDFGHIJKLMNOPQRSTUVWXYZ]/) &&
        password.match(/[!@#$%^&*()_+]/))) {
        document.getElementById('error-name3').innerHTML = 'make a strong password';
        let inputbox = document.getElementById('password');
        inputbox.style.borderColor = 'red';
        inputbox.style.outlineColor = 'red'
        return false;
    }

    else if (!(cpassword.match(/[1234567890]/)
        &&
        cpassword.match(/[abcdefghijklmnopqrstuvwxyz]/)
        &&
        cpassword.match(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/)
        &&
        cpassword.match(/[!@#$%^&*()_+]/))) {
        document.getElementById('error-name4').innerHTML = 'make a strong cpassword';
        let inputbox = document.getElementById('cpassword');
        inputbox.style.borderColor = 'red'
        inputbox.style.outlineColor = 'red'
        return false;
    }
    else if (cpassword != password) {
        document.querySelector('#error-name4').innerHTML = "password doesn't match";
        document.getElementById('password').value;
        document.getElementById('cpassword').value;
        document.getElementById('password').focus();
        return false;
    }
    else if (password.length < 5 || password.length > 16) {
        document.getElementById('error-name3').innerHTML = 'lenght should be between 6 to 16 characters'
        let namebox = document.querySelector('#password');
        namebox.style.borderColor = 'red';
        namebox.style.outlineColor = 'red';
        return false;
    }


    // local storage


    let name1 = document.querySelector('#name').value;
    let mobile1 = document.querySelector('#mobile').value;
    let email1 = document.querySelector('#email').value;
    let password1 = document.querySelector('#password').value;
    let cpassword1 = document.querySelector('#cpassword').value;

    let data = {
        name: name1,
        email: email1,
        mobile: mobile1,
        password: password1,
        cpassword: cpassword1,
    }

    convertdata = localStorage.setItem('userdata', JSON.stringify(data))

    function localStor() {
        let finaldata = JSON.parse(localStorage.getItem('username'))

        let validemail = finaldata.email;
        let validpassword = finaldata.cpassword;
        let email2 = document.querySelector('#email').value;
        let cpassword2 = document.querySelector('#cpassword').value;

        if (email2 != validemail) {
            let error = document.querySelector('#error-name2')
            error.innerHTML = 'sorry , we could not find your account'
        }
        else if (cpassword2 != validpassword) {
            let error = document.querySelector('#rror-name4')
            error.innerHTML = 'sorry incorrect password'
            return false;
        }

    }
}
