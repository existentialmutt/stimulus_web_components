import {controller, findTarget} from '@github/catalyst'

class CatalystLightGreeterElement extends HTMLElement {
  greet = (event) => {
    const name = findTarget(this, "name").value
    alert(`Hello, ${name}!`)
  }
}

controller(CatalystLightGreeterElement)