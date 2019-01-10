import { LitElement, html } from '@polymer/lit-element';

export class DsgText extends LitElement {
  static get properties() {
    return {
      content: {type: String},
    };
  }

  constructor() {
    super();
    this.content = '';
  }

  render() {
    return html`
      <style>
        :host { 
          display: block; 
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          line-height: normal;
          font-size: 14px;
          text-align: center;
          color: #959595;
          }
        :host([hidden]) { display: none; }
      </style>
      <h3>${this.content}</h3>
    `;
  }
}
customElements.define('dsg-text', DsgText);
