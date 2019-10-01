import React, {Component} from 'react';

class SearchBar extends Component { //SearchBar클래스를 정의하고 React.Component 로부터 모든기능을 제공받겠다는 뜻
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSerchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar">

                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }
}

export default SearchBar;

