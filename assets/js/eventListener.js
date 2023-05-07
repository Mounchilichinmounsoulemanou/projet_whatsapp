window.onload=()=>{
    var menuAffiche = document.getElementById('dots-menu')
    var menu = document.getElementById('menu')
    var newEmail = document.getElementById('new-mail')
    var contact = document.getElementById('contact')
    var profilImage = document.querySelectorAll('img')
    var profil = document.getElementById('profil')
    var home = document.getElementById('home')
    var parametre = document.getElementById('parametre')
    var etiquette = document.getElementById('etiquette')
    var menuProfil = document.getElementById('menu-profil')
    var menuContact = document.getElementById('menu-contact')
    var menuParametre = document.getElementById('menu-parametre')
    var menuEtiquette = document.getElementById('menu-etiquette')
    var menuSignup = document.getElementById('menu-signup')
    var signup = document.getElementById('signup')
    var cancelBtn = document.getElementById('cancel-btn')
    var signupBtn = document.getElementById('signup-btn')
    var contentMessage = document.getElementById('content-message')
    var contentRight = document.getElementById('content-right')
    var backIcons = document.querySelectorAll('.fa-arrow-left')
    var contentHome = document.querySelectorAll('.content-home')
    var contentItems = document.querySelectorAll('.content-items')
    // var contentLeft = document.querySelectorAll('.content-option')
    var contentLeft = document.querySelector('.content-l')
    var content = document.querySelector('.contents')

    var slideIn = ()=>{
        contentLeft.classList.toggle('transitionIn')
    }

    // var slideOut = ()=>{
    //     contentLeft.classList.toggle('transitionOut')
    // }
    
    /* BAR MENU HOME */

    menuAffiche.onclick=()=>{
            menu.classList.toggle('none')
    }
    menu.onmouseleave=()=>{
        if(menu.classList.add('none')){
            menu.classList.add('none')
        }
    }
    newEmail.onclick=()=>{
        slideIn()
        contact.classList.toggle('none')
        home.classList.add('none')
       
    }
    profilImage.forEach(image => {
        image.onclick=()=>{
            slideIn()
            profil.classList.toggle('none')
            home.classList.toggle('none')
        }
        
    });

    backIcons.forEach(back => {
        back.onclick=()=>{
            console.log('Bonjour');
            profil.classList.add('none')
            contact.classList.add('none')
            parametre.classList.add('none')
            etiquette.classList.add('none')
            home.classList.toggle('none')
            slideIn()
            // slideOut()
             
        }
        
    });

    /* BODY */

    contentHome.forEach(content => {
        content.onclick=()=>{
            if(contentMessage.classList.toggle('none')){
                contentMessage.classList.remove('none')
            }
            contentRight.classList.add('none')
        }
    });
    contentItems.forEach(content => {
        content.onclick=()=>{
            if(contentMessage.classList.toggle('none')){
                contentMessage.classList.remove('none')
            }
            contentRight.classList.add('none')
        }
    });

    /* MENU */
    
    menuProfil.onclick=()=>{
        profil.classList.toggle('none')
        home.classList.add('none')
        menu.classList.add('none')
        slideIn()
    }
    menuContact.onclick=()=>{
        contact.classList.toggle('none')
        home.classList.add('none')
        menu.classList.add('none')
        slideIn()
    }
    menuParametre.onclick=()=>{
        parametre.classList.toggle('none')
        home.classList.add('none')
        menu.classList.add('none')
        slideIn()
    }
    menuEtiquette.onclick=()=>{
        etiquette.classList.toggle('none')
        home.classList.add('none')
        menu.classList.add('none')
        slideIn()
    }
    menuSignup.onclick=()=>{
        signup.classList.remove('none')
    }
    
    /* BUTTON */
    cancelBtn.onclick=()=>{
        signup.classList.add('none')
    }
    signupBtn.onclick=()=>{
        content.classList.add('none')
    }

}


