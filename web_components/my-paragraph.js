import { LitElement, html, css } from 'lit';

export class MyParagraph extends LitElement {
    constructor() {
        super()

        const shadowRoot = this.attachShadow({ mode: 'closed' })
        shadowRoot.innerHTML = `
        <style>
            p {
                color: red;
            }
        </style>
        <p>My custom paragraph</p>
        `
    }
}
customElements.define('my-paragraph', MyParagraph);
