import React, { Component } from "react";
import "../style/AreaHighlight.css";
import type { LTWHP, ViewportHighlight } from "../types";
interface Props {
    highlight: ViewportHighlight;
    onChange: (rect: LTWHP) => void;
    isScrolledTo: boolean;
}
export declare class AreaHighlight extends Component<Props> {
    render(): React.JSX.Element;
}
export default AreaHighlight;
