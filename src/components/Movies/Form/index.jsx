import React, {Component} from 'react';

class Form extends Component {

    state = {
        query: '',
    };

    componentDidMount() {
        this.setState({query: this.props.query});
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevState.query && !prevProps.query && this.props.query) {
            this.setState({query: this.props.query});
        }
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.submitForm();
        }
    };

    handleChange = (e) => {
        this.setState({query: e.target.value});
    };

    handleClick = (e) => {
        e.preventDefault();
        this.submitForm();
    }

    submitForm() {
        this.props.onSubmit(this.state.query);
    }

    render() {
        const {query} = this.state;
        return <div className='form'>
            <input value={query} onChange={this.handleChange}/>
            <button disabled={!query} onClick={this.handleClick}>Search</button>
        </div>
    }
}

export default Form;