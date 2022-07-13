window.emptySpaceClick = function(){
    if (event.stopPropagation) {
        event.stopPropagation();
        var dropdownContainer = document.querySelector('.dropdown-container');
        var burger = document.querySelector('.burger-button');
        var target = event.target;
        var isdropdownContainer = target == dropdownContainer || dropdownContainer.contains(target);
        var isBurger = target == burger;
    
        if(!isdropdownContainer && !isBurger) {
            window.closeDropdownMainMenu();
        }
    }
};