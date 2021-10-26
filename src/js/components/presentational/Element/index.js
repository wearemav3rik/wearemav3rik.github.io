import React from 'react';
import Gist from "react-gist";
import CalloutBlock from "../CalloutBlock";

const Element = ({ element }) => {
    switch(element.type) {
        case 'paragraph':
            return (
                <p dangerouslySetInnerHTML={{__html: element.html}} />
            )
        case 'code-block':
            return (
                <div className="docs-code-block">
                    {!!element.label && (
                        <h3>{element.label}</h3>
                    )}
                    <Gist id={element.gist} />
                </div>
            )
        case 'callout-block':
            return (
                <CalloutBlock type={element.blockType} label={element.label}>{element.html}</CalloutBlock>
            )
    }
}

export default Element;