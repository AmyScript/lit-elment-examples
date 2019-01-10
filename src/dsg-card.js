
// Import LitElement base class and html helper function
import { LitElement, html } from '@polymer/lit-element';

export class DsgCard extends LitElement {
  /**
   * Define properties. Properties defined here will be automatically 
   * observed.
   */
  static get properties() {
    return {
      width: { type: String },
      height: { type: String }
    };
  }

  /**  
   * In the element constructor, assign default property values.
   */
  constructor() {
    // Must call superconstructor first.
    super();

    // Initialize properties
    this.width = '100px';
    this.height = '100px';
  }

  /**
   * Define a template for the new element by implementing LitElement's
   * `render` function. `render` must return a lit-html TemplateResult.
   */
  render() {
    return html`
      <style>
        :host { 
          box-sizing: border-box;
          width: ${this.width};
          height: ${this.height};
          border-radius: 20px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        :host([hidden]) { display: none; }
      </style>
      <div>
        <slot></slot>
      </div>
      
    `;
  }
}

// Register the element with the browser
customElements.define('dsg-card', DsgCard);
