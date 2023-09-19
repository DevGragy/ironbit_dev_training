import { LitElement, html, nothing } from '/node_modules/lit-element/lit-element.js';

export class PropsComponent extends LitElement {
    static get properties() {
        return {
            _counter: { type: Number },
            _showElement: { type: Boolean }
        };
    }

    constructor() {
        super()
        this._counter = 0
        this._internState = 'Inicial'
        this._showElement = false
    }

    render() {
        return html`
        <div>
            <p>Contador: ${this._counter} </p>
            <p>Estado Interno: ${this._internState} </p>
            <button @click="${this.updateCounter}">Incrementar</button>

            ${this._showElement ? html`<span>Visible</span>` : nothing}
        </div>
        `;
    }

    updateCounter() {
        this._counter++
        this._internState = 'Actualizado'
        this.requestUpdate()
    }

    stateChanged() {
        console.log('State has changed')
    }
}
customElements.define('props-component', PropsComponent);
