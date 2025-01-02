import React from 'react';
const jsxElem = <div id="node-div">Hello this is a JSX element</div>
const complexjaxElem = <div id="complex-div"><h1 className="title">Welcome to My Webpage</h1>
    <div className="content"><p className="intro"> Hello! This is a complex JSX element with various nested elements and
        attributes. </p>
        <ul className="features">
            <li className="feature-item">Feature 1: Responsive design</li>
            <li className="feature-item">Feature 2: User-friendly interface</li>
            <li className="feature-item">Feature 3: Cross-browser compatibility</li>
        </ul>
        <div className="actions">
            <button className="btn-primary">Click Me</button>
            <button className="btn-secondary">Learn More</button>
        </div>
    </div>
</div>

class Elem extends React.Component {
    render() {
        return <div>
            {jsxElem}
            {complexjaxElem}
        </div>
    }
}

export default Elem;