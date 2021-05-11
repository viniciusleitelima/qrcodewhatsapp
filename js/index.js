$('.generate-qr-code').on('click', function(){

    // Clear Previous QR Code
    $('#qrcodewhatsapp').empty();
    
    // Set Size to Match User Input
    $('#qrcodewhatsapp').css({
    'width' : 128,
    'height' : 128
    })

    var numberwhatsapp = $("#numberwhatsapp").val();

    var qrcode = `https://api.whatsapp.com/send?phone=55${numberwhatsapp}&text=teste`;
    
    // Generate and Output QR Code
    $('#qrcodewhatsapp').qrcode({width: 128,height: 128,text: qrcode});
    
    });