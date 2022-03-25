import { LitElement } from "lit";
import { Subject } from "rxjs";
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class SampleWebComponent extends LitElement {
    static styles: import("lit").CSSResult;
    private _eventBus?;
    get eventBus(): Subject<any> | undefined;
    set eventBus(eventBus: Subject<any> | undefined);
    private subscriptions;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: any): void;
    reactRender(): void;
    render(): import("lit-html").TemplateResult<1>;
}
