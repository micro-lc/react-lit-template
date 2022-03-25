import { html, css, LitElement } from "lit";
import React from "react";
import { customElement, property } from "lit/decorators.js";
import ReactDOM from "react-dom";
import { Subject, Subscription } from "rxjs";

// @ts-ignore
import { SampleReactComponent } from "@micro-lc/react";

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

  private _eventBus?: Subject<any>;

  @property({attribute: false})
  get eventBus (): Subject<any> | undefined {
    return this._eventBus
  }

  set eventBus(eventBus) {
    this._eventBus = eventBus;
    if (eventBus) {
      this.subscriptions.add(this.eventBus?.subscribe(console.log));
    }
  }

  private subscriptions = new Subscription();

  connectedCallback(): void {
    super.connectedCallback();
    this.reactRender();
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.renderRoot);
    this.subscriptions.unsubscribe();
    super.disconnectedCallback();
  }

  updated(changedProperties: any) {
    super.updated(changedProperties);
    this.reactRender();
  }

  reactRender() {
    const component = React.createElement(SampleReactComponent);
    ReactDOM.render(component, this.renderRoot);
  }

  render() {
    return html`<slot></slot>`;
  }
}
