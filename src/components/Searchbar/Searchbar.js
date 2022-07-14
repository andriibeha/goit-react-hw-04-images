import React, { Component } from "react";
import s from "./Searchbar.module.css"

class Searchbar extends Component {
    state = {
        query: '',
        page: 1
    };

    handleQueryChange = e => {
        this.setState({ query: e.target.value.toLowerCase() })
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.query.trim() === '') { 
            return 
        }
        
        this.props.onSubmit(this.state.query, this.state.page);
        this.setState({ query: "", page: 1 })
    };


    render() { 
        const {query} = this.state
        return (
            <header className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={s.SearchFormInput}
                        value={query}
                        onChange={this.handleQueryChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
}
 
export default Searchbar;

