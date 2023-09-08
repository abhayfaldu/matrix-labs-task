import React from "react";

const Search = ({ query, onChange }) => {
	return (
		<div>
			<input
				type="text"
				value={query}
				placeholder="Search"
				onChange={(e) => onChange(e)}
			/>
		</div>
	);
};

export default Search;
