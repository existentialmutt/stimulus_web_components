const template = document.createElement('template')
template.innerHTML = `
  <slot name="name"></slot>
  <slot name="submit"></slot>
`

export default class RawSlottedGreeter extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: "open"})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
  
  connectedCallback() {
    this.shadowRoot
      .querySelector('slot[name="submit"]')
      .assignedElements()[0]
      .addEventListener("click", this.greet)
  }

  greet = (event) => {
    const name = this
      .shadowRoot
      .querySelector('slot[name="name"]')
      .assignedElements()[0]
      .value
    alert(`Hello, ${name}!`)
  }
}

customElements.define("raw-slotted-greeter", RawSlottedGreeter)