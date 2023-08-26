// DROPDOWN PERSISTENCE
function hardware(){
    const hardware = document.querySelector('#hardware');

    if(hardware.onclick){
        document.querySelector(".dropdown-wrap-hw").classList.toggle('show');
    }
}
function userMenu(){
    const user = document.querySelector(".user-pic");

    if(user.onclick){
        document.querySelector(".dropdown-wrap").classList.toggle('show');
    }
}
function smartphone(){
    const smartphone = document.querySelector('#smartphone');

    if(smartphone.onclick){
        document.querySelector('.dropdown-wrap-sp').classList.toggle('show');
    }
}
window.onclick = function(e){
    if(!e.target.matches('.user-pic') && !e.target.matches('.user-pic img')){
        var dropdowns = document.getElementsByClassName("dropdown-wrap");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }

        }
    }
}
// FILTERS PERSISTENCE
