import { html, css, LitElement } from "lit";
import React from "react";
import { customElement, property } from "lit/decorators.js";
import ReactDOM from "react-dom";
import { Subject } from "rxjs";

import {SampleReactComponent} from '@micro-lc/react';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("sample-web-component")
export class SampleWebComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  @property()
  eventBus?: Subject<any>;

  connectedCallback(): void {
    this.eventBus?.subscribe(console.log)
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.renderRoot)
    super.disconnectedCallback();
  }

  updated(changedProperties: any) {
    super.updated(changedProperties);
    this.reactRender()
  }

  reactRender() {
    const component = React.createElement(SampleReactComponent)
    ReactDOM.render(component, this.renderRoot)
  }

  render() {
    return html`<slot></slot>`;
  }
}
