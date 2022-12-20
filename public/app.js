function sendName() {
    const file = document.getElementById("files").files["0"].name
    console.log(file)
    document.getElementsByClassName("Name")[1].innerHTML = file;
}

function validateData() {
    let adsName = document.getElementById('pro').value;
    if (adsName === "") {
       alert("กรุณากรอกชื่อโปรโมชั่น");

    } else {
        console.log('validate data');
        const files = document.getElementById("files").files;
        if (files.length === 0) {
            alert("กรุณาเลือกไฟล์ !!!");
        } else {
            const filename = files[0].name;
            if (filename === "") {
                alert("กรุณากรอกชื่อโปรโมชั่น !!!");
            } else {
                saveData();
            }
        }
    }
}

function saveData() {
    console.log("save data");
    let adsName = document.getElementById('pro').value;
    let enable = getEnableCheckboxValue();

    const files = document.getElementById("files").files;
    console.log(files);
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('enable', enable);
    formData.append('adsName', adsName);

    fetch('http://localhost:3000/api/add', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            console.log(error.message);
            alert('เพิ่มข้อมูลไม่สำเร็จ !!!');
        })
}

function getEnableCheckboxValue() {
    var radios = document.getElementsByName('ko');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            return (radios[i].value);

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
}

window.alert = function (message) {
    const alert = document.createElement('div');
    const alertButton = document.createElement('button');

    alertButton.innerText ='OK';
    alert.classList.add('alert');
    alert.setAttribute('style', `
        background-color: #fff;
        position: fixed;
        top: 140px;
        left: 45%;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 2p 10px 5px 0 #00000022;
        display: flex;
        flex-direction:column; 
        border: 1px 
        border: solid ;
        border-color: #62B6B7;
        
    `);

    alertButton.setAttribute('style',`
        border: 1px  
        border: solid ;
        border-color: #62B6B7;
        background: white;
        border-radius: 5px;
        padding: 5px;
        transition: 0.4s;

    `);
    

    alert.innerHTML = `<span style="padding: 10px">${message}</span>`;
    alert.appendChild(alertButton);
    document.body.appendChild(alert);
    alertButton.addEventListener('click',(e)=>{
            alert.remove();
    });
}


clearName = () => {
    console.log(document.getElementsByName("ko")[0])
    console.log(document.getElementsByName("ko")[1]);
    document.getElementsByClassName("Name")[1].innerHTML = ''
    document.getElementById('pro').value = ''
    document.getElementsByName("ko")[0].checked = false
    document.getElementsByName("ko")[1].checked = false

}



// [{a:aaaa,b:bbbb,c:cccc}]