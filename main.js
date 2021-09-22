var array = [];

function submit() {
    var nama1 = document.getElementById("student-1").value;
    var nama2 = document.getElementById("student-2").value;
    var nama3 = document.getElementById("student-3").value;
    var nama4 = document.getElementById("student-4").value;
    array.push(nama1);
    array.push(nama2);
    array.push(nama3);
    array.push(nama4);
    console.log(array);
    document.getElementById("display_name").innerHTML = array;
    document.getElementById("submit1").style.display = "none";
    document.getElementById("sortMC").style.display = "inline-block";
}

function sorting() {
    array.sort();
    console.log(array);
    document.getElementById("display_name").innerHTML = array;
}