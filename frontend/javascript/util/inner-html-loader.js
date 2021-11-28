const template = document.createElement('template')
template.innerHTML = `
  <button id="submit">Reload</button>
`

export default class InnerHtmlLoader extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: "open"})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.shadowRoot.getElementById("submit").addEventListener("click", async (event) => {
      const target = document.querySelector(this.getAttribute("target"))
      const response = await fetch(this.getAttribute("url"))
      const responseText = await response.text()
      target.innerHTML = responseText
    })
  }
}
customElements.define("inner-html-loader", InnerHtmlLoader)
