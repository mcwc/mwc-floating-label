import { MDCFloatingLabelFoundation } from '@material/floating-label/foundation.js';
import { PropertyPart } from 'lit-html';
export interface FloatingLabel extends HTMLLabelElement {
    foundation: MDCFloatingLabelFoundation;
}
export declare const floatingLabel: () => (part: PropertyPart) => void;
