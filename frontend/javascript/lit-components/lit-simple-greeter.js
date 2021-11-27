import {LitElement, html} from 'lit';

export default class LitSimpleGreeter extends LitElement {
  render() {
    return html`
      <input id="name" type="text">
      <button @click="${this._greet}">Greet</button>
    `
  }

  _greet(event) {
    event.preventDefault()
    const name = this.shadowRoot.querySelector("#name").value
    alert(`Hello, ${name}!`)
  }
}

customElements.define("lit-simple-greeter", LitSimpleGreeter)