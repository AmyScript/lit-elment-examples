import { LitElement, html } from '@polymer/lit-element';

export class DsgImage extends LitElement {
  static get properties() {
    return {
      url: {type: String},
    };
  }

  constructor() {
    super();
    this.url = '';
  }

  render() {
    return html`
      <style>
        :host { 
          display: flex; 
          justify-content: center;
          }
          img {
            border-radius: 50%;
            border: 2px solid #E8E8E8;
          }
        :host([hidden]) { display: none; }
      </style>
      <div>
        <img
          src=${this.url}
        />
      </div>
      
    `;
  }
}
customElements.define('dsg-image', DsgImage);
