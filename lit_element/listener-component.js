import { LitElement, html } from '/node_modules/lit-element/lit-element.js';


class ListenerComponent extends LitElement {
    render() {
        return html`
        <listener-component @mi-evento="${this.handleEvent}">

        </listener-component>
        `;
    }

    handleEvent(event) {
        const detail = event.detail
        console.log(`Evento personalizado recibido: ${detail.data}`)
    }
}
customElements.define('listener-component', ListenerComponent);
