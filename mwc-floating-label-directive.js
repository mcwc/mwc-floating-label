import { MDCFloatingLabelFoundation } from '@material/floating-label/foundation.js';
import { directive } from 'lit-html';
const createAdapter = (labelElement) => {
    return {
        addClass: (className) => labelElement.classList.add(className),
        removeClass: (className) => labelElement.classList.remove(className),
        getWidth: () => labelElement.scrollWidth,
        registerInteractionHandler: (evtType, handler) => {
            labelElement.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: (evtType, handler) => {
            labelElement.removeEventListener(evtType, handler);
        },
    };
};
const partToFoundationMap = new WeakMap();
export const floatingLabel = directive(() => (part) => {
    const lastFoundation = partToFoundationMap.get(part);
    if (!lastFoundation) {
        const labelElement = part.committer.element;
        labelElement.classList.add('mdc-floating-label');
        const adapter = createAdapter(labelElement);
        const foundation = new MDCFloatingLabelFoundation(adapter);
        foundation.init();
        part.setValue(foundation);
        partToFoundationMap.set(part, foundation);
    }
});
//# sourceMappingURL=mwc-floating-label-directive.js.map