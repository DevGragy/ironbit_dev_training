import { LitElement, html } from 'lit';

export class MyComponent extends LitElement {
    render() {
        return html`
        <p>My Component from Lit!!</p>
        `;
    }
}
customElements.define('my-component', MyComponent);
