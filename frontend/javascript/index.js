import "index.scss"

// Stimulus
import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers"

window.Stimulus = Application.start()
const context = require.context("./controllers", true, /\.js$/)
Stimulus.load(definitionsFromContext(context))

// Web Components (Lit)
import "lit-components/lit-hello-world"
import "lit-components/lit-simple-greeter"
import "lit-components/lit-slotted-greeter"
import "lit-components/lit-dynamic-greeter"

// Web Components (Raw)
import "raw-components/raw-hello-world"
import "raw-components/raw-simple-greeter"
import "raw-components/raw-slotted-greeter"
import "raw-components/raw-dynamic-greeter"

// Catalyst
import "catalyst-components/catalyst-hello-world"
import "catalyst-components/catalyst-light-greeter"
import "catalyst-components/catalyst-shadow-greeter"
import "catalyst-components/catalyst-slotted-greeter"
import "catalyst-components/catalyst-lit-slotted-greeter"

// Utilities
import CurrentTime from "./util/current-time"
import InnerHtmlLoader from "./util/inner-html-loader"