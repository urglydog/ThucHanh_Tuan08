$(document).ready(function(){
    $("#txtDN").blur(function(e) {
        e.preventDefault();
        let tendangnhap = $("#txtDN").val();
        let reg_tendangnhap = /^[a-zA-Z0-9]+$/; // khac rong

        if (tendangnhap == "") {
            $("#loiDN").html("Tên đăng nhập không được để trống");
            $("#txtDN").focus();
        } else if (!reg_tendangnhap.test(tendangnhap)) {
            $("#loiDN").html("Tên đăng nhập phải ít nhất 1 ký tự, không được chứa khoảng trắng");
            $("#txtDN").focus();
        } else {
            $("#loiDN").html("");
        }
    });
    $("#txtMK").blur(function (e) { 
        e.preventDefault();
        let mk = $("#txtMK").val();
        let reMK = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,}$/
        if(mk==""){
            $("#loiMK").html("Mật khẩu không được để trống");
            $("#txtMK").focus();
        }else if(!reMK.test(mk)){
            $("#loiMK").html("ừ 8 ký tự trở lên, có ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt ");
            $("#txtMK").focus();
        }else{
            $("loiMK").html("");
        }
    });
    $("#txtXNMK").blur(function (e) { 
        e.preventDefault();
        let xnmk = $("#txtXNMK").val();
        let mk = $("#txtMK").val();
        if(xnmk==""){
            $("#loiXNMK").html("Xác nhận mậ khẩu không được rỗng");
            $("#loiXNMK").focus();
        }else if(xnmk!=mk){
            $("#loiXNMK").html("Vui lòng xác nhận lại mật khẩu");
            $("#txtXNMK").focus();
        }else{
            $("loiXNMK").html("");
        }
    });
    $("#txtName").blur(function (e) { 
        e.preventDefault();
        let name = $("#txtName").val();
        let rename = /^([A-Z][a-z]*\s)+([A-Z][a-z]*)$/
        if(name==""){
            $("#loiName").html("Họ tên không được rỗng");
        }else if(!rename.test(name)){
            $("#loiName").html("Ít nhất 2 từ, viết hoa chữ cái mỗi từ, mỗi từ cách nhau dấu cách");
            $("#txtName").focus();
        }else{
            $("#loiName").html("");
        }
    });
    $("#txtDC").blur(function (e) { 
        e.preventDefault();
        let dc = $("#txtDC").val();
        if(dc==""){
            $("#loiDC").html("Địa chỉ không được để trống");
        }else{
            $("#loiDC").html("");
        }
    });
    $("#txtDT").blur(function (e) { 
        e.preventDefault();
        let dt = $("#txtDT").val();
        let reDt = /^(0[2-7])|(09)[0-9]{8}$/
        if(dt==""){
            $("#loiDT").html("SĐT không được rỗng");
            $("#txtDT").focus();
        }else if(!reDt.test(dt)){
            $("#loiDT").html("Phải bắt đầu là 02,03,04,05,06,07 hoặc 09, gồm 10 số");
            $("#txtDT").focus();
        }else{
            $("#loiDT").html("");
        }
    });
    $("#txtEmail").blur(function (e) { 
        e.preventDefault();
        let email = $("#txtEmail").val();
        let reEmail = /^[a-zA-Z0-9]+\@[a-zA-Z]+\.(com)$/
        if(email==""){
            $("#loiEmail").html("Email không được rỗng");
            $("#txtEmail").focus();
        }else if(!reEmail.test(email)){
            $("#loiEmail").html("Phải đúng định dạng");
            $("#txtEmail").focus();
        }else{
            $("#loiEmail").html("");
        }
    });
})