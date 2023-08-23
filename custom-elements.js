class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div>
                    <img src="assets/three-bars.svg" id="openMenu" class="om" onclick="openNav()">
                </div>    
                <div class="logo-title" >
                    <img src="assets/logo-blanco.png" href="index.html" t="Logo-MBDesign" class="logo">
                    <img src="assets/logo-letras-blancas.png" alt="MBDESIGN" class="title">
                </div>
                <div class="relleno">
                    <a>Find a dealer</a>
                </div>
            </header>
        `
    }
}
window.customElements.define('app-header', AppHeader)
    //
class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="footer-logo">
                    <img src="assets/logo-blanco.png" alt="Logo-MBDesign" class="logo">
                </div>
    
                <hr style="width: 100%; height: 1px; color: var(--main-text-color); background-color: var(--main-text-color);">
    
                <div class="footer-text">
    
                    <div class="foot-column">
                        <p>INFORMACIÓN ADICIONAL</p>
                
                        <ul style="list-style-type: none;">
                            <li><a>CONTACTO</a></li>
                            <li><a>LEGAL</a></li>
                            <li><a>CERTIFICACIONES</a></li>
                        </ul>
                
                    </div>
            
                    <div class="foot-column">
                
                        <p>REDES SOCIALES</p>
                        
                        <ul style="list-style-type: none;">
                            <li><a>TIKTOK </a> <i class="fa fa-tiktok"></i></li>
                            <li><a>INSTAGRAM </a><i class="fa fa-instagram"></i></li>
                            <li><a href="">FACEBOOK</a> <i class="fa fa-facebook-square"></i>
                            <li><a href="">TWITTER</a> <i class="fa fa-twitter-square"></i>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            </footer>
        `
    }
}
window.customElements.define('app-footer', AppFooter)
    //
class AppNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar" id="sidenav">
        
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                
                    <a id="nvl1" class="navbar-link"  href="/index.html">Inicio</a>
                
                    <a id="nvl2" class="navbar-link"  href="/conversiones.html">Conversiones</a>
                
                    <a id="nvl3" class="navbar-link"  href="/asientos.html">Asientos</a>
                
                    <a id="nvl4" class="navbar-link"  href="/museo.html">Museo</a>
                
                    <a id="nvl5" class="navbar-link "  href="/proyectosEspeciales.html">Proyectos especiales</a>
                
                    <a id="nvl6" class="navbar-link sub" href="#">Aula móvil</a>
                    <a id="nvl7" class="navbar-link sub" href="#">Consultorio móvil</a>
                    <a id="nvl8" class="navbar-link sub" href="#">Oficinas personalizadas</a>
                    <a id="nvl9" class="navbar-link sub" href="#">Más...</a>
                    
                    <a href="#" class="navbar-link" id="nvl10">ROYAL VAN</a>
                    <a href="#" class="navbar-link" id="nvl9">Más</a>
            </nav>
        `
    }
}
window.customElements.define('app-nav', AppNav)
