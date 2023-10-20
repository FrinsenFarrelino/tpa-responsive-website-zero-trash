
function modalshow(){
    document.getElementById('openModal').addEventListener("click", function() {
        document.querySelector('.bg-modal').style.display = "flex";
    });
    
    document.querySelector('.close').addEventListener("click", function() {
        document.querySelector('.bg-modal').style.display = "none";
    });
    document.refre
}


function validateForm(){

    var nominal = document.getElementById("input-nominal").value;
    var nama = document.getElementById("input-nama").value;
    var email = document.getElementById("input-email").value;
    var pesan = document.getElementById("input-pesan").value;
    var nomor = document.getElementById("input-nomor").value;
    var setuju = document.getElementById("combo-pembayaran").value;
   
    var valid= false;

    if(nominal == ""){
        alert ("Isi nominal terlebih dahulu")
        valid= false;
    }

    if(nama == ""){
        alert ("Isi nama terlebih dahulu")
        valid= false;
    }
    
    if(email == ""){
        alert ("Isi email terlebih dahulu")
        valid= false;
    }

    if(nomor == ""){
        alert ("Isi nomor terlebih dahulu")
        valid= false;
    }

    if(pesan == ""){
        alert ("Isi pesan terlebih dahulu")
        valid= false;
    }
    
    if (!email.includes("@")) {
        alert("Format email salah")
        valid= false;
    }

    if(document.getElementById("checkbox-donasi").checked==false){
        alert ("Harap menyetujui kebijakan")
        valid= false;
    }
    
   
    else{
        modalshow();
        var valid=true;
    }
   
    
}



function addData(){
if(validateForm()== true){

    var nominal = document.getElementById("input-nominal").value;
    var nama = document.getElementById("input-nama").value;
    var email = document.getElementById("input-email").value;
    var pesan = document.getElementById("input-pesan").value;
    var nomor = document.getElementById("input-nomor").value;
    

    var datadonatur;
    if (localStorage.getItem(datadonatur)== null){
        datadonatur = [];
    } else {
        datadonatur =JSON.parse(localStorage.getItem("datadonatur"));
    }

    datadonatur.push(
        {
        nominal : nominal,
        nama: nama,
        email:email,
        pesan:pesan,
        nomor:nomor,
      
    }
    
    );

    localStorage.setItem("datadonatur", JSON.stringify(datadonatur));
  
  
  }
}









