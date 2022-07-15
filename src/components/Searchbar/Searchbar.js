import {useState} from "react";
import s from "./Searchbar.module.css";

function Searchbar({onSubmit}) {
    const [query, setQuery] = useState('');

    const handleQueryChange = e => {
        let value = e.target.value.toLowerCase();
        setQuery(value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (query.trim() === '') { 
            return 
        };
        
        onSubmit(query);
        setQuery('');
    };


    return (
        <header className={s.Searchbar}>
            <form className={s.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={s.SearchFormButton}>
                    <span className={s.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    className={s.SearchFormInput}
                    value={query}
                    onChange={handleQueryChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
};

export default Searchbar;






