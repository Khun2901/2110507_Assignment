function isCompNameBlank() {
    let compName = document.getElementById("company_name").value.trim();
    if(compName == "")
        return true;
    return false;
}

function isContactNameBlank() {
    let contactName = document.getElementById("contact_name").value.trim();
    console.log(contactName);
    if(contactName == "")
        return true;
    return false;
}

function isContactNumberBlank() {
    let contactNumber = document.getElementById("tel").value.trim();
    if(contactNumber == "")
        return true;
    return false;
}

function isChairNumberBlank() {
    let chair = document.getElementById("chairs").value.trim();
    if(chair == "")
        return true;
    return false;
}

function isChairNumberValid() {
    let chair = Number(document.getElementById("chairs").value);
    if(isNaN(chair)){
        // console.log("1");
        return false;
    }
        
    else if(chair < 1 || chair > 10){
        // console.log("2");
        return false;
    }  
    else {
        // console.log("3");
        return true;
    }
        
}

function isBoothSizeBlank() {
    let boothSize = document.getElementById("booth_size").value;
    if(boothSize == "")
        return true;
    return false;
}

function submit() {
    if(isCompNameBlank()) {
        alert("กรุณากรอกชื่อบริษัท!");
    }
    else if(isContactNameBlank()) {
        alert("กรุณากรอกชื่อผู้ติดต่อ!");
    }
    else if(isContactNumberBlank()) {
        alert("กรุณากรอกเบอร์โทรผู้ติดต่อ!");
    }
    else if(isChairNumberBlank()) {
        alert("กรุณากรอกจำนวนเก้าอี้!")
    }
    else if(!isChairNumberValid()) {
        alert("กรุณากรอกจำนวนเก้าอี้เป็นเลข 1 - 10 เท่านั้น!");
    }
    else if(isBoothSizeBlank()) {
        alert("กรุณาเลือกขนาดบูธ!");
    }
    else {
        alert("กรอกฟอร์มสำเร็จ รอรับ sms ยืนยันภายในวันพรุ่งนี้");
    }
}