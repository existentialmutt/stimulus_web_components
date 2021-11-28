import {controller} from '@github/catalyst'

class CatalystHelloWorldElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'Hello, Catalyst!'
  }
}

controller(CatalystHelloWorldElement)