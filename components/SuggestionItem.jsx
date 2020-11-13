import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SuggestionItem (props) {
	const openSuggestion = () => {
		
	};

	
		return (
			<div onClick={openSuggestion} className="suggestion-list-item">
				<FontAwesomeIcon icon={faSearch} /> &nbsp;&nbsp;&nbsp;
				{props.title}
			</div>
		);
	}


export default SuggestionItem;