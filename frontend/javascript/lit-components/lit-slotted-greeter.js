import {LitElement, html} from 'lit';

// TODO get decoractors working and use @queryAssignedNodes
// https://lit.dev/docs/components/shadow-dom/#query-assigned-nodes 

export default class LitSlottedGreeter extends LitElement {
  render() {
    return html`
      <slot name="name"></slot>
      <slot name="submit"></slot>
    `
  }

  firstUpdated() {
    this.shadowRoot
      .querySelector('slot[name="submit"]')
      .assignedElements()[0]
      .addEventListener("click", this._greet)
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

customElements.define("lit-slotted-greeter", LitSlottedGreeter)