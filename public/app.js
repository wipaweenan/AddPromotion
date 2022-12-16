function sendName() {
    const file = document.getElementById("files").files["0"].name
    console.log(file)
    document.getElementsByClassName("Name")[1].innerHTML = file;
}

clearName = ()  =>{
    console.log(document.getElementsByName("ko")[0])
    console.log(document.getElementsByName("ko")[1]);
    document.getElementsByClassName("Name")[1].innerHTML = ''
    document.getElementById('pro').value = ''
    document.getElementsByName("ko")[0].checked = false
    document.getElementsByName("ko")[1].checked = false

}

get = () =>{
    
}