import {LitElement, html} from 'lit';
import {controller, findTarget} from '@github/catalyst'

export default class CatalystLitSlottedGreeter extends LitElement {
  render() {
    return html`
      <p>Cata...lit?!</p>
      <slot>
    `
  }

  greet(event) {
    const name = findTarget(this, "name").value
    alert(`Hello, ${name}!`)
  }
}

controller(CatalystLitSlottedGreeter)