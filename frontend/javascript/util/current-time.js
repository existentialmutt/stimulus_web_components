export default class CurrentTime extends HTMLElement {
  connectedCallback() {
    this.innerHTML = new Date().toString()
  }
}

customElements.define("current-time", CurrentTime)