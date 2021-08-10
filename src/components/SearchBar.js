import { render } from '@testing-library/react';
import React from 'react';

export default class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = e => {
        this.setState({ term: e.target.value });
    }

    onFormSubmit = e => {
        e.preventDefault();
        // Tell App that the user submited a search
        // Call callback from parent component
    }

    render() {
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label for="term">Video Search</label>
                        <input
                            type="text"
                            name="term"
                            value={this.state.term}
                            placeholder="Search..."
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}