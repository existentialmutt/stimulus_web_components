const template = document.createElement('template')
template.innerHTML = `
  <input id="name" type="text">
  <button id="submit">Greet</button>
`

export default class RawSimpleGreeter extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: "open"})
  }
  
  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.getElementById("submit").onclick = this.greet
  }

  greet = (event) => {
    const name = this.shadowRoot.getElementById("name").value
    alert(`Hello, ${name}!`)
  }
}

customElements.define("raw-simple-greeter", RawSimpleGreeter)