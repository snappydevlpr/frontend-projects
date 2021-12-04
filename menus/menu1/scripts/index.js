let mobileMenuExpanded = false;

function expandMobileMenu(){
    mobileMenuExpanded = !mobileMenuExpanded;
    if(mobileMenuExpanded){
        document.getElementById("main").style.display = "none"
        document.getElementById("mobile-menu-expanded").style.display = "block"

    }
    else{
        document.getElementById("mobile-menu-expanded").style.display = "none"
        document.getElementById("main").style.display = "block"

    }

};