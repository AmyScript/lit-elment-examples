import { LitElement, html } from '@polymer/lit-element';

export class DsgHeading extends LitElement {
  static get properties() {
    return {
      content: {type: String},
    };
  }

  constructor() {
    super();
    this.content= '';
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
          font-size: 64px;
          text-align: right;
          color: #000000; 
          margin: 0px;
        }
        :host([hidden]) { display: none; }
        h3 {
          margin: 0;
        }
      </style>
      <h3>${this.content}</h3>
    `;
  }
}
customElements.define('dsg-heading', DsgHeading);
