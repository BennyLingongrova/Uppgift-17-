//Funkion i konsol
function getInfo(){
    var url = new URL(window.location.href);
    var Tjabba = url.searchParams.get("Tjabba");
    console.log(Tjabba);
}