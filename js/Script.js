let finalpassword = ' ';
let checkqr = 0;
//function that generate the password
function password(length) {
    var length = document.getElementById('Inputlength').value;
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&*+<=>?@';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.getElementById('finalpassword').value=result ;
    finalpassword = result;
    checkpassword(finalpassword);
}

//function that copy password
function copypassword() {
    var copyText = document.getElementById('finalpassword');
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//function that generate QR code
function generateQR() {
    if (checkqr == 0)
    {
        var qrcode = new QRCode(document.getElementById('qrcode'));
        var data = document.getElementById('finalpassword');
        qrcode.makeCode(data.value);
        checkqr = 1;
    }
}

var code=document.getElementById("finalpassword");
code.addEventListener('click',function(){checkpassword(code.value)});

//function that check password

function checkpassword(finalpassword){
    if (finalpassword)
    {
        var strengthBar= document.getElementById('strength');
        var strength=0;
        if (finalpassword.match(/[a-z]+/))
            {strength+=1;}
        if (finalpassword.match(/[A-Z]+/))
            {strength+=1;}
        if (finalpassword.match(/[0-9]+/))
            {strength+=1;}
        if (finalpassword.match(/[$@#&!]+/))
            {strength+=1;}

        switch(strength)
        {
            case 0:
                strengthBar.value=0;
                break
            case 1:
                strengthBar.value=25;
                break
            case 2:
                strengthBar.value=50;
                break
            case 3:
                strengthBar.value=75;
                break
            case 4:
                strengthBar.value=100;
                break
        }
    }
}
