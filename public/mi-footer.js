customElements.define("mi-footer", class extends HTMLElement {
  connectedCallback() {
    this.innerText = "Alvarez Valencia Argelia IC-51M";
  }
}, { extends: "footer" });