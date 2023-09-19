import { LitElement, html } from '/node_modules/lit-element/lit-element.js';

class newComponent extends LitElement {
    static get properties() {
        return {
            _name: { 
                type: String,
                attribute: true,
                reflect: true
            },
            _counter: {
                type: Number
            }
        };
    }

    constructor() {
        super()
        this._name = 'Dev'
        this._counter = 0
    }

    render() {
        return html`
            <h1>Hola, ${this._name}</h1>
            <p>Contador: ${this._counter}</p>
            <button @click="${this.increment}">Incrementar</button>
            <button @click="${this.reduce}">Reducir</button>
            <button @click="${this.reset}">Reestablecer</button>
        `
    }

    increment() {
        this.counter++
    }
    reduce() {
        this.counter--
    }
    reset() {
        this.counter = 0
    }
}

customElements.define('new-component', newComponent)