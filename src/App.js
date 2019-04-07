import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            rachelActive: false,
            tonyActive: false,
        };
        this.updateDimensions = this.updateDimensions.bind(this);
        this.reset = this.reset.bind(this);
        this.rachel = this.rachel.bind(this);
        this.tony = this.tony.bind(this);
    };
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    updateDimensions() {
        this.setState({ width: window.innerWidth });
    }
    reset() {
        if (this.state.rachelActive === true) {
            this.toggleRachel();
        }
        if (this.state.tonyActive === true) {
            this.toggleTony();
        }
    }
    toggleRachel() {
        this.setState({
            rachelActive: !this.state.rachelActive
        });
        let rachelSkill = document.getElementsByClassName('rachel');
        for (let i = 0; i < rachelSkill.length; i++) {
            rachelSkill[i].classList.toggle('red');
        }
    }
    toggleTony() {
        this.setState({
            tonyActive: !this.state.tonyActive
        });
        let tonySkill = document.getElementsByClassName('tony');
        for (let i = 0; i < tonySkill.length; i++) {
            tonySkill[i].classList.toggle('red');
        }
    }
    rachel() {
        if (this.state.tonyActive === true) {
            this.toggleTony()
        }
        this.toggleRachel();
    }
    tony() {
        if (this.state.rachelActive === true) {
            this.toggleRachel();
        }
        this.toggleTony();
    }
    render() {
        return (
            <div className="App">
                <div id="top" style={this.state.width < 700 ? { height: '50vh' } : { height: '60vh' }}>
                    <div id="titleNamesContainer">
                        <div id="title" onClick={this.reset}>{this.state.width < 700 ? 'G' : 'Geometrics'}</div>
                        <div id="names"><span id="rachelName" className="rachel" onClick={this.rachel}>Rachel</span><span id="tonyName" className="tony" onClick={this.tony}>Tony</span></div>
                    </div>
                    <div id="svg">
                        <img src={require(`./images/PeacefulFloat.svg`)} alt="floatingLady" />
                    </div>
                </div>
                <div id="bottom">
                    <div id="skills" style={this.state.width < 700 ? { height: '50vh', padding: '0 1em' } : { height: '40vh', padding: '0 4em' }}>
                        <div className="skillsLineOne between">
                            <span className="rachel">SVGs</span>
                            <span className="tony">Go</span>
                            <span className="rachel">Material UI</span>
                        </div>
                        <div className="skillsLineTwo around">
                            <span className="rachel tony">React</span>
                            <span className="rachel tony">Redux</span>
                        </div>
                        <div className="skillsLineThree center">
                            <span className="rachel tony">JavaScript</span>
                        </div>
                        <div className="skillsLineFour between">
                            <span className="rachel">CSS3</span>
                            <span className="rachel">Sass</span>
                        </div>
                        <div className="skillsLineFive center">
                            <span className="tony">SQL</span>
                        </div>
                        <div className="skillsLineSix around">
                            <span className="rachel">Sketch</span>
                            <span className="rachel">HTML5</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
