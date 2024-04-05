$(document).ready(function(){
    $("#txtHo").blur(function (e) { 
        e.preventDefault();
        let text = $("#txtHo").val();
        let mau = /^([A-Z][a-z]*\s)+([A-Z][a-z]*)+$/;
        if(text==""){
            $("#loiHo").html("Họ không được rỗng");
            $("#txtHo").focus();
        }else if(!mau.test(text)){
            $("#loiHo").html("Họ tên phải viết hoa chữ cái đầu");
            
            $("#txtHo").focus();
        }else{
            $("#loiHo").html("");
        }
    });

    $("#txtTen").blur(function (e) { 
        e.preventDefault();
        let text = $("#txtTen").val();
        let mau = /^([A-Z][a-z]*\s)+([A-Z][a-z]*)+$/;
        if(text==""){
            $("#loiTen").html("Tên không được rỗng");
            $("#txtTen").focus();
        }else if(!mau.test(text)){
            $("#loiTen").html("Tên tên phải viết hoa chữ cái đầu");
            $("#txtTen").focus();
        }else{
            $("#loiTen").html("");
        }
    });

    $("#txtEmail").blur(function (e) { 
        e.preventDefault();
        let text = $("#txtEmail").val();
        let mau = /^[a-zA-Z0-9 !@#$%^&*]+\@gmail.(com)$/;
        if(text==""){
            $("#loiEmail").html("Email không được rỗng");
            $("#txtEmail").focus();
        }else if(!mau.test(text)){
            $("#loiEmail").html("Email sai định sạng");
            $("#txtEmail").focus();
        }else{
            $("#loiEmail").html("");
        }
    });

    $("#txtMK").blur(function (e) { 
        e.preventDefault();
        let text = $("#txtMK").val();
        let mau = /^(?=.*[a-z])(?=.*[0-9]).{6,}$/;
        if(text==""){
            $("#loiMK").html("Mật khẩu không được rỗng");
            $("#txtMK").focus();
        }else if(!mau.test(text)){
            $("#loiMK").html("Mật khẩu quá yếu");
            $("#txtMK").focus();
        }else{
            $("#loiMK").html("");
        }
    });
    $("#txtXNEM").blur(function (e) { 
        e.preventDefault();
        let text = $("#txtXNEM").val();
        let mau = $("#txtEmail").val();
        if(text==""){
            $("#loiXNEM").html(" không được rỗng");
            $("#txtXNEM").focus();
        }else if(mau!=text){
            $("#loiXNEM").html("Xác nhận sai");
            $("#txtXNEM").focus();
        }else{
            $("#loiXNEM").html("");
        }
    });
    $("#txtNamSinh").blur(function (e) { 
        e.preventDefault();
        let nam = $("#txtNamSinh").val();
        if(nam==""){
            $("#loiNS").html("Năm sinh không được rỗng");
            $("#txtNamSinh").focus();
        }else if(parseInt(nam)<2002){
            $("#loiNS").html("Năm sinh phải >=2002");
            $("#txtNamSinh").focus();
        }else{
            $("#loiNS").html("");
        }
    });

})