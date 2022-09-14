function submitData() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phoneNumber = document.getElementById("phone-number").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
    let emailReceiver = "ramlisiburian1111@gmail.com";

    // cek form input apakah kosong atau tidak
    if (name == "" || email == "" || phoneNumber == "" || subject == "" || message == "") {
        return alert("field tidak boleh kosong")
    }


    let a = document.createElement('a')
    //digunakan untuk mengirim email lewat email bawaan komputer
    // a.href = `mailto:${emailReceiver}?subject=${subject}&body=${message}`  

    //digunakan untuk mengirim email lewat gmail browser
    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=Hello my name is ${name}, ${message}`
    a.click();
}