import {controller, findTarget} from '@github/catalyst'

const template = document.createElement('template')
template.innerHTML = `
  <input data-target="catalyst-shadow-greeter.name" type="text">
  <button data-action="click:catalyst-shadow-greeter#greet">Greet</button>
`

class CatalystShadowGreeterElement extends HTMLElement {
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

controller(CatalystShadowGreeterElement)