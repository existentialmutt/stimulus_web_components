export class RawHelloWorld extends HTMLElement {
  connectedCallback() {
    this.textContent = "Hello, Raw Web Component!"
  }
}

customElements.define("raw-hello-world", RawHelloWorld)