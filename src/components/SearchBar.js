import { render } from '@testing-library/react';
import React from 'react';

export default class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = e => {
        console.log('changed');
    }

    render() {
        return(
            <div className="search-bar ui segment">
                <form className="ui form">
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