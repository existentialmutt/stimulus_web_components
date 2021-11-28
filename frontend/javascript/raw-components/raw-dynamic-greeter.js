const template = document.createElement('template')
template.innerHTML = `
  <slot name="name"></slot>
  <slot name="submit"></slot>
  <slot></slot>
`

export default class RawDynamicGreeter extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: "open"})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
  
  connectedCallback() {
    this.shadowRoot
      .querySelector('slot[name="submit"]')
      .addEventListener("slotchange", this.ensureSubmitHandlesClick)
      // .assignedElements()[0]
      // .addEventListener("click", this.greet)
  }

  ensureSubmitHandlesClick = (event) => {
    const oldSubmitNode = this.submitNode
    this.submitNode = event.currentTarget.assignedElements()[0]
    if (oldSubmitNode != this.submitNode) {
      this.submitNode.addEventListener("click", this.greet)
    }
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

customElements.define("raw-dynamic-greeter", RawDynamicGreeter)