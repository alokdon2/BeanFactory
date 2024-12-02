let opened = false;
let men = document.getElementById("hams");
let clo = document.getElementById("cross");

let sidebar = document.getElementById("sidebar");
function tapped() {

    if (opened) {
        sidebar.style.left = "-50vw";
        opened = false;
        men.style.display="block";
        clo.style.display="none";

    }
    else {
        sidebar.style.left = "0vw";
        opened = true;
        men.style.display="none";
        clo.style.display="block";




    }
}
