import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import result from "./Result"



function SuggestionItem (props) {
	

	
		return (
			<div onClick={props.search} className="suggestion-list-item">
				<FontAwesomeIcon icon={faSearch} /> &nbsp;&nbsp;&nbsp;
				{props.title}
			</div>
		);
	}


export default SuggestionItem;