import React, { useState, useEffect } from 'react';

const Search = ({ onSearch, value }) => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        value && value !== '' && setTerm(value);
    }, [value]);

    const searchOnKeyDown = (event, value) => {
        if (event.code === "Enter" || event.keyCode === 13) {
            onSearch(value);
        }
    }

    return (
        <div className="w-1/2">
            <input
                type="search"
                placeholder="Search Here..."
                className="py-3 px-18 w-full rounded shadow font-thin focus:outline-none focus:shadow-lg focus:shadow-slate-200 duration-100 shadow-gray-100"
                onKeyDown={e => searchOnKeyDown(e, term)}
                onChange={e => setTerm(e.target.value)}
                value={term}
            />
        </div>
    );
}

export default Search;
