import { LitElement, html, css } from 'lit';

export class MyButton extends LitElement {
    constructor() {
        super()

        const button = document.createElement('button')
        button.textContent = this.textContent
        button.style.padding = "10px 20px"
        button.style.border = "none"
        button.style.borderRadius = "4px"
        button.style.backgroundColor = "#4CAF50"
        button.style.color = "white"
        button.style.fontSize = "16px"

        button.addEventListener('click', () => {
            alert('Button clicked!')
        });

        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(button)
    }
}
customElements.define('my-button', MyButton);
