import React from 'react';

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search assignnee..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};
export default SearchFilter;