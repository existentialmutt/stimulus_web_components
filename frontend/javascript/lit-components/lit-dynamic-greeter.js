import {LitElement, html} from 'lit';

export default class LitDynamicGreeter extends LitElement {
  render() {
    return html`
      <slot name="name"></slot>
      <slot name="submit"></slot>
      <slot></slot>
    `
  }

  firstUpdated() {
    this.shadowRoot
      .querySelector('slot[name="submit"]')
      .addEventListener("slotchange", this.ensureSubmitHandlesClick)
  }

  ensureSubmitHandlesClick = (event) => {
    const oldSubmitNode = this.submitNode
    this.submitNode = event.currentTarget.assignedElements()[0]
    if (oldSubmitNode != this.submitNode) {
      this.submitNode.addEventListener("click", this._greet)
    }
  }

  _greet = (event) => {
    const name = this
      .shadowRoot
      .querySelector('slot[name="name"]')
      .assignedElements()[0]
      .value
    alert(`Hello, ${name}!`)
  }
}

customElements.define("lit-dynamic-greeter", LitDynamicGreeter)