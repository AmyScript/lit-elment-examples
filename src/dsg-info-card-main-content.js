import { LitElement, html } from '@polymer/lit-element';
import './dsg-image.js';
import './dsg-heading.js';



export class DsgInfoCardMainContent extends LitElement {
  static get properties() {
    return {
      imageUrl: { type: String },
      heading: { type: String },
    };
  }

  constructor() {
    super();
    this.imageUrl = '';
    this.heading = '';
  }

  render() {
    return html`
      <style>
        :host { 
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          width: 100%;
          align-items: center;
        }
      </style>
      <dsg-image url=${this.imageUrl}></dsg-image>
      <dsg-heading content=${this.heading}></dsg-heading>
    `;
  }
}

// Register the element with the browser
customElements.define('dsg-info-card-main-content', DsgInfoCardMainContent);
