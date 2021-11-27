import {LitElement} from 'lit';

export class LitHelloWorld extends LitElement {
  connectedCallback() {
    super.connectedCallback()
    this.textContent = "Hello, Lit!"
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("lit-hello-world", LitHelloWorld)