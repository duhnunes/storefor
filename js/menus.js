// DROPDOWN PERSISTENCE
const avatar = document.querySelector('#user');

avatar.addEventListener('click', () => {
    const dropdownWrap = document.querySelector('#dp');

    if(dropdownWrap.classList.contains('show')){
        dropdownWrap.classList.remove('show');
    }else{
        dropdownWrap.classList.add('show');
    }
})

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-wrap");
    for (let i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}