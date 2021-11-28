import {controller, findTarget} from '@github/catalyst'

const template = document.createElement('template')
template.innerHTML = `
  <p>
    Catalyst Targets and Actions work through slots so nothing special is needed for dynamic content.
  </p>
  <slot>
`

class CatalystSlottedGreeterElement extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: "open"})
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  greet = (event) => {
    const name = findTarget(this, "name").value
    alert(`Hello, ${name}!`)
  }
}

controller(CatalystSlottedGreeterElement)