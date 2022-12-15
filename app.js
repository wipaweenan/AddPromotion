function sendName() {
    const file = document.getElementById("files").files["0"].name
    console.log(file)
    document.getElementsByClassName("Name")[1].innerHTML = file;
}

clearName = ()  =>{
    console.log(document.getElementsByClassName("Name")[1])
    console.log(document.getElementById('pro').value);
    document.getElementsByClassName("Name")[1].innerHTML = ''
    document.getElementById('pro').value = ''
    
    
}