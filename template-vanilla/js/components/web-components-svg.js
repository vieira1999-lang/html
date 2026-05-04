document.addEventListener("DOMContentLoaded", function () {
    // Criando um WEB COMPONENT  (Tag customizada) Decore
    // Forma de criar suas tags personalizadas com comportamentos especificos.
    class LinhaGuia extends HTMLElement {
        connectedCallback() { // metodo connectedCallback() é chamada todo vez que o navehador identificar sua "tag" 
            this.innerHTML = `  <svg width="100%" height="100%" style="position: absolute; pointer-events: none;">
                                <line x1="5%" y1="0%" x2="100%" y2="0%" stroke="#8b8b8b" stroke-dasharray="4" />
                                </svg>`; // Conteudo usado dentro "tag"
        }
    }
    
    customElements.define('linha-guia', LinhaGuia); // Diz ao navegador 'Hey, se caso você encontrar uma tag com o nome "linha-guia" 
    // execute a logica da classe LinhaGuia. 
});

