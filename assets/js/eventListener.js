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
    var contentR = document.querySelector('.content-r')
    var content = document.querySelector('.contents')

    var slideIn = ()=>{
        contentLeft.classList.toggle('transitionIn')
    }

    var showMessage = ()=>{
        var screenLength = window.screen.width
        if(screenLength <= 992){
            contentLeft.style.display = 'none'
            contentR.style.display = 'block'
        }

    }

    // DU FICHIER JSON

    var appUser = '/assets/js/users.json'
    var userItems = document.querySelector('.content-body-users')

    var getUsers = async()=>{
        var response = await fetch(appUser)
        if(!response.ok){
            throw new error("")
        }
        var users = await response.json()
        return users
    }

    var userData = async()=>{
        var data = await getUsers()
        userItems ? userItems.innerHTML= '': null
        data.forEach(user => {
           var users = `
            <div class="content-left-item content-home flex jcsb aic pr-20">
                                        <div class="profile-sender flex aic">
                                            <div class="profile-image">
                                            <img src="${user.imageURL}" alt="">
                                            </div>
                                            <div class="profile-details">
                                                <h3>${user.nom}</h3>
                                                <p>${user.contentChat}</p>
                                            </div>
                                        </div>
                                        <div class="time-message-receive">
                                            <h4>
                                                ${user.receiveTime}
                                            </h4>
                                           <p>
                                                ${user.count}
                                           </p>
                                        </div>
                                    </div>
            `
            userItems.innerHTML += users
            userItems.onclick=()=>{
                console.log('Bonjourppppp');
                if(contentMessage.classList.toggle('none')){
                    contentMessage.classList.remove('none')
                }else{
                    contentRight.classList.add('none')
                }
                showMessage()
            }
        });
        
    }
    userData()

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
            }else{
                contentRight.classList.add('none')
            }
            showMessage()
        }
    });
    contentItems.forEach(content => {
        content.onclick=()=>{
            if(contentMessage.classList.toggle('none')){
                contentMessage.classList.remove('none')
            }else{
                contentRight.classList.add('none')
            }
            showMessage()
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


