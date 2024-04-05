$(document).ready(function(){
    $("#txtName").focus();
    $("#dk").prop("disabled",true);
    var name,malop,tenlop,mon,sotc,loai;
    $("#txtName").blur(function (e) { 
        e.preventDefault();
        name = $("#txtName").val();
        let mau  = /^([A-Z][a-z]*\s)+([A-Z][a-z]*)$/
        if(name==""){
            $("#loiName").html("Không được để trống");
            $("#txtName").focus();
        }else if(!mau.test(name)){
            $("#loiName").html("Họ tên phải bắt đầu bằng chữ cái in hoa");
            $("#txtName").focus();
        }else{
            $("#loiName").html("");
        }
    });
    


    $("#lop").change(function (e) { 
        e.preventDefault();
        malop = $(this).val();
        tenlop = $(this).find('option:selected').attr('name');


    });
    if(!malop){
        malop = $("#lop").find('option:first').val();
        tenlop = $("#lop").find('option:first').attr('name');
    }


    $("#mon").change(function (e) { 
        e.preventDefault();
        mon = $(this).find('option:selected').attr('name');
        sotc = $(this).val();

    });
    if(!mon){
        mon = $("#mon").find('option:first').val();
        sotc = $("#mon").find('option:first').attr('name');
    }
    $("input[name='loai']").change(function (e) { 
        e.preventDefault();
        loai = $("input[type='radio']:checked").val();
        kichHoat();
    });
    function kichHoat(){
        if(name && malop && tenlop && mon && sotc && loai){
            $("#dk").prop("disabled",false);
        }
    }
    $("#dk").click(function (e) { 
        e.preventDefault();
        let newrow = "<tr> <th>"+name+"</th>   <th>"+malop+"</th>  <th>"+tenlop+"</th>   <th>"+mon+"</th>    <th>"+sotc+"</th>    <th>"+loai+"</th>  </tr>"
        $("#table").append(newrow);
    });


})