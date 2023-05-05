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
    var contentMessage = document.getElementById('content-message')
    var contentRight = document.getElementById('content-right')
    var backIcons = document.querySelectorAll('.fa-arrow-left')
    var contentHome = document.querySelectorAll('.content-home')
    var contentItems = document.querySelectorAll('.content-items')
    
    /* BAR MENU HOME */

    menuAffiche.onclick=()=>{
            menu.classList.toggle('none')
    }
    newEmail.onclick=()=>{
            contact.classList.toggle('none')
            home.classList.add('none')
    }
    profilImage.forEach(image => {
        image.onclick=()=>{
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
    }
    menuContact.onclick=()=>{
        contact.classList.toggle('none')
        home.classList.add('none')
        menu.classList.add('none')
    }
    menuParametre.onclick=()=>{
        parametre.classList.toggle('none')
        home.classList.add('none')
        menu.classList.add('none')
    }
    menuEtiquette.onclick=()=>{
        etiquette.classList.toggle('none')
        home.classList.add('none')
        menu.classList.add('none')
    }
    menuSignup.onclick=()=>{
        signup.classList.toggle('none')
    }
}