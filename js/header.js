var contentHeader = $("#contentHeader");
contentHeader.empty();

var html1 = '<div class="content-menu-movil" id="contentmenuMovil" onclick="cerrarMenu()">';
html1 += '  <div class="menu-movil" id="menuMovil">';
html1 += '      <div class="menu-movil-logo">';
html1 += '          <img src="../img/LogoLuis.png">';
html1 += '      </div>';
html1 += '      <main class="menu-movil-items">';
html1 += '          <a href="#" class="menu-movil-item"><i class="bx bx-home"></i> Home</a>';
html1 += '          <a href="#aboutMe" class="menu-movil-item"><i class="bx bx-user"></i> About me</a>';
html1 += '          <a href="#experience" class="menu-movil-item"><i class="bx bx-chevrons-up"></i> Skills</a>';
html1 += '          <a href="#portfolio" class="menu-movil-item"><i class="bx bx-folder"></i> Portfolio</a>';
html1 += '      </main>';
html1 += '  </div>';
html1 += '</div>';


html1 += '<header class="content-menu" id="menu">';
html1 += '       <div class="menu-logo">';
html1 += '           <img src="./img/LogoLuis.png">';
html1 += '       </div>';
html1 += '       <div class="menu-nav">';
html1 += '           <a href="#" class="menu-nav-item" >Home</a>';
html1 += '           <a href="#aboutMe" class="menu-nav-item" >About me</a>';
html1 += '           <a href="#experience" class="menu-nav-item">Skills</a>';
html1 += '           <a href="#portfolio" class="menu-nav-item">Portfolio</a>';
html1 += '       </div>';
html1 += '       <button class="menu-nav-item-movil" onclick="abrirMenu()"><i class="bx bx-menu"></i></button>';
html1 += '   </header>';

contentHeader.append(html1);

window.addEventListener('scroll',function()
{
    let limite = this.document.getElementById('aboutMe');
    let menu = this.document.getElementById('menu');
    // let menuoptions = document.getElementsByClassName('menu-nav-item');
    
    let posicionobj1 = limite.getBoundingClientRect().top;
    // console.log(posicionobj1);

    let inicio = window.innerHeight/2;
    if(posicionobj1 < inicio){
        menu.style.background='#222';
        menu.style.height='65px';
        // for (let i = 0; i < menuoptions.length; i++) {
        //     menuoptions[i].style.color="#fff";
            
        // }
    }else
    {
        menu.style.background='linear-gradient(to top, #03b2b800, #000000)';
        menu.style.height='100px';
        // for (let i = 0; i < menuoptions.length; i++) {
        //     menuoptions[i].style.color="#000";
            
        // }
    }
})

function abrirMenu(){
    var contentmenuMovil = document.getElementById("contentmenuMovil");
    var menuMovil = document.getElementById("menuMovil");
    contentmenuMovil.style.visibility="visible";
    menuMovil.style.width="100%";
    menuMovil.style.opacity="1";
}
function cerrarMenu(){
    var contentmenuMovil = document.getElementById("contentmenuMovil");
    var menuMovil = document.getElementById("menuMovil");
    contentmenuMovil.style.visibility="hidden";
    menuMovil.style.width="0%";
    menuMovil.style.opacity="0";
}