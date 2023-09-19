import { LitElement, html, css } from 'lit';

export class SellButton extends LitElement {
    static styles = [
        css`
            :host {
                --orange: #e67e22;
                --space: 1.5em;
            }
            .btn-container {
                border: 2px dashed var(--orange);
                padding: var(--space);
                text-align: center;
            }
            .btn {
                background-color: var(--orange);
                border: 0;
                border-radius: 5px;
                color: white;
                padding: var(--space);
                text-transform: uppercase;
            }
        `
    ];

    render() {
        return html`
        <div class="btn-container">
            <button class="btn">Comprar ahora</button>
        </div>
        `;
    }
}
customElements.define('sell-button', SellButton);
