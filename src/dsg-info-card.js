import { LitElement, html } from '@polymer/lit-element';
import './dsg-card.js';
import './dsg-info-card-main-content.js';
import './dsg-text.js';


export class DsgInfoCard extends LitElement {
  static get properties() {
    return {
      imageUrl: { type: String },
      heading: { type: String },
      text: { type: String },
      cardHeight: { type: String},
      cardWidth: { type: String },
    };
  }

  constructor() {
    super();
    this.imageUrl = '';
    this.heading = '';
    this.text = '';
    this.cardHeight = '100%';
    this.cardWidth = '300px';
  }

  render() {
    console.log(this.text);
    return html`
      <style>
        :host { display: block; }
        :host([hidden]) { display: none; }
      </style>
      <dsg-card width=${this.cardWidth} height=${this.cardHeight}>
        <dsg-info-card-main-content imageUrl=${this.imageUrl} heading=${this.heading}>
        </dsg-info-card-main-content>
        <dsg-text content=${this.text}></dsg-text>
      </dsg-card>
    `;
  }

}

// Register the element with the browser
customElements.define('dsg-info-card', DsgInfoCard);
