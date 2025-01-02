import React from 'react';
import PropTypes from 'prop-types';
import logo from './asset/githubcat.svg'

const Welcome = ({name}) => {
    return (
        <div>
            <h3>Hello, <strong>{name}</strong>!</h3>
        </div>
    );
}

const Image = (props) => {
    return (
        <img src={props.url} className="Body-logo" alt="Image"></img>
    )
}

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Ecco una poesia per te",
            subtitle: "la poesia si intitola “Voglio, avrò” di Fernando Pessoa",
            text: ["Voglio, avrò\n",
                "se non qui,\n",
                "in altro luogo che ancora non so.\n",
                "Niente ho perduto.\n",
                "Tutto sarò."
            ]
        }
    }

    render() {
        const {title, subtitle, text} = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <div className="row">
                    {text.map((line, index) => (<p key={index}>{line}<br/></p>))}
                </div>
                <Image url={logo}/>
            </div>
        )
    }
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired
};

class App extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Body-custom">
                <Welcome name={"Gabriele"}/>
                <Component/>
            </div>
        );
    }
}

export default App;
