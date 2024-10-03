import React from 'react';
import './SearchBar.css'; // Import CSS for styling

const SearchBar = ({ value, onChange, placeholder }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            <button type="submit">Search</button>
        </div>
    );
};

export default SearchBar;
