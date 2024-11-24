function ValidateForm() {
    let passwd = document.getElementById("Password");
    let passwd_conf = document.getElementById("Confirm Password");
    let email = document.getElementById("Email");
    let email_conf = document.getElementById("Email_Confirm");
    let phone = document.getElementById("Phone Number");
    let phone_conf = document.getElementById("Phone Number Confirm");
    let name = document.getElementById("Full_Name");
    let bld = document.getElementById("bld");
    let street = document.getElementById("street");

    return (
        ValidateName(name) &&
        ValidatePhone(phone, phone_conf) &&
        Validatemail(email, email_conf) &&
        Validatepasswd(passwd, passwd_conf) &&
        Validatestreet(street) &&
        Bld_no(bld)
    );
}

function ValidateContactus(){
    const name = document.getElementById('Full_Name');
    const email = document.getElementById('Email');
    const phone = document.getElementById('Phone Number');
    const message = document.getElementById('Message');

    return (
        ValidateName(name) &&
        ValidatePhone(phone, phone) &&
        Validatemail(email, email) &&
        Validatemessage(message)
    )

}
function Validatemessage(message){
    error = document.getElementById('message_check')
    if (message.value == ''){
        error.innerHTML = 'Please Type In The Message'
        message.style.border = 'red 3px solid'
        return false;
        
    } else{
        error.innerHTML = ''
        message.style.border = ''
        return true;
    }

}

function Validatemail(email, email_conf) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const error = document.getElementById("email_check");
    if (email == null || email_conf == null) {
        return true;
    }
    if (email.value === email_conf.value && regex.test(email.value)) {
        error.innerHTML = ""; // Clear error message
        email.style.border = "none";
        email_conf.style.border = "none";
        return true;
    } else {
        error.innerHTML = "Email mismatch or invalid email format."; // Fixed the message
        error.style.color = "white";
        email.style.border = "red 3px solid";
        email_conf.style.border = "red 3px solid";
        return false;
    }
}

function Validatepasswd(passwd, passwd_conf) {
    const error = document.getElementById("passwd_check");
    if (passwd == null || passwd_conf == null) {
        return true;
    }
    if (passwd.value === passwd_conf.value) {
        error.innerHTML = "";
        passwd.style.border = "none";
        passwd_conf.style.border = "none";
        return true;
    } else {
        error.innerHTML = "Password mismatch.";
        passwd.style.border = "red 3px solid";
        passwd_conf.style.border = "red 3px solid";
        return false;
    }
}

function ValidateName(name) {
    const error = document.getElementById("name_check");
    if (name == null) {
        return true;
    }
    if (name.value.length >= 2) {
        error.innerHTML = ""; // Clear error message
        name.style.border = "none";
        return true;
    } else {
        error.innerHTML = "Name must be at least 2 characters long.";
        name.style.border = "red 3px solid";
        return false;
    }
}

function Validatestreet(street){
    error = document.getElementById('street_error')
    if (street.value === ''){
        error.innerHTML = 'Please Enter Street Name'
        street.style.border = 'red 3px solid'
        street.style.width = '97%'
        street.style.height = '26px'
        return false;
    } else{
        error.innerHTML = ''
        street.style.border = ''
        street.style.width = '97%'
        street.style.height = '26px'
        return true;
    }

}

function Bld_no(bld){
    error = document.getElementById('bld_error')
    if (isNaN(parseInt(bld.value))){
        error.innerHTML = 'Please Enter About a Building Number'
        bld.style.border = 'red 3px solid'
        bld.style.width = '97%'
        bld.style.height = '26px'
        return false
    } else {
        error.innerHTML = ''
        bld.style.border = ''
        bld.style.width = '97%'
        bld.style.height = '26px'
        return true
    }

}

function ValidatePhone(phone, phone_conf) {
    const error = document.getElementById("phone_check");
    if (phone == null || phone_conf == null) {
        return true;
    }
    if (phone.value.slice(5,-1) + phone.value.slice(-1) === phone_conf.value.slice(5,-1) + phone_conf.value.slice(-1) && (phone.value.slice(5,-1)+phone.value.slice(-1)).length == 8) {
        error.innerHTML = ""; 
        phone.style.border = "none";
        phone_conf.style.border = "none";
        return true;
    } else {
        error.innerHTML = "Phone mismatch or invalid phone number.";
        phone.style.border = "red 3px solid";
        phone_conf.style.border = "red 3px solid";
        return false;
    }
}


function toggleChat() {
        const chatWidget = document.getElementById('chatWidget');
        const chatButton = document.getElementById('chatButton');
        const chatclose = document.getElementById('chatclose');  // Ensure you're referencing the correct element for the close button
        
        if (chatWidget.style.display === 'none') {
            chatWidget.style.display = 'block';
            chatButton.style.display = 'none';  // Hide the open button
            chatclose.style.display = 'flex';  // Show the close button
        } else {
            chatWidget.style.display = 'none';
            chatButton.style.display = 'block';  // Show the open button
            chatclose.style.display = 'none';  // Hide the close button
        }}

function search_agents(){
    const items = document.getElementsByClassName('agent')
    const search_term = document.getElementById('search').value.toLowerCase()
    index = 0
    while (index < items.length) {
        if (items[index].innerHTML.toLowerCase().includes(search_term)){
            items[index].style.display = 'block'
    }
    else{
        items[index].style.display = 'none'
    }
    index += 1
}}
