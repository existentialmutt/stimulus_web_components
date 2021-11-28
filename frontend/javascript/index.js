import "index.scss"

// Stimulus
import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers"

window.Stimulus = Application.start()
const context = require.context("./controllers", true, /\.js$/)
Stimulus.load(definitionsFromContext(context))

// Web Components (Lit)
import LitHelloWorld from "./lit-components/lit-hello-world"
import LitSimpleGreeter from "./lit-components/lit-simple-greeter"
import LitSlottedGreeter from "./lit-components/lit-slotted-greeter"
import LitDynamicGreeter from "./lit-components/lit-dynamic-greeter"

// Web Components (Raw)
import { RawHelloWorld } from "./raw-components/raw-hello-world"
import RawSimpleGreeter from "./raw-components/raw-simple-greeter"
import RawSlottedGreeter from "./raw-components/raw-slotted-greeter"
import RawDynamicGreeter from "./raw-components/raw-dynamic-greeter"

// Utilities
import CurrentTime from "./util/current-time"
import InnerHtmlLoader from "./util/inner-html-loader"