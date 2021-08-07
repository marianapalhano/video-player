import { render } from '@testing-library/react';
import React from 'react';

export default class SearchBar extends React.Component {
    state = { term: '' };

    render() {
        return(
            <div>
                <form>
                    <input type="text" name="term" value="" />
                </form>
            </div>
        )
    }
}