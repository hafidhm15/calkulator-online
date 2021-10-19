insert = (num) => {
    document.form.inputView.value = document.form.inputView.value+num;
}

c = () => {
    document.form.inputView.value = "";
}

del = () =>{
    var x = document.form.inputView.value;
    document.form.inputView.value = x.substring(0, x.length-1)
}

equal =() =>{
    var x = document.form.inputView.value;
    if(x ==""){
        alert("Masukkan Angka");
    }
    if(x){
        document.form.inputView.value = eval(x);
    }
}