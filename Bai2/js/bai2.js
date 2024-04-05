$(document).ready(function () {
    let a, b, c, d, e, f;
    $("#sl1").blur(function (e) {
        e.preventDefault();
        a = parseFloat($("#sl1").val());
    });
    $("#sl2").blur(function (e) {
        e.preventDefault();
        b = parseFloat($("#sl2").val());
    });
    $("#sl3").blur(function (e) {
        e.preventDefault();
        c = parseFloat($("#sl3").val());
    });
    $("#sl4").blur(function (e) {
        e.preventDefault();
        d = parseFloat($("#sl4").val());
    });
    $("#sl5").blur(function (e) {
        e.preventDefault();
        e = parseFloat($("#sl5").val());
        f = parseFloat(a * 20000 + b * 40000 + c * 30000 + d * 50000 + e * 30000);
        $("#tien").val(f);
        
    });

    
   
})