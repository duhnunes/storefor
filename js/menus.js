// DROPDOWN PERSISTENCE
const menu = document.querySelector('.menu__shop');

function userMenu(){
    const user = document.querySelector(".user-pic");
    const navlink = document.querySelector('.nav-link');

    let navLink = [1,2,3,4,5];
    for(let pos in navLink){
        console.log(navLink[pos]);
    }

    if(user.onclick){
        document.querySelector(".dropdown-wrap").classList.toggle('show');
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
