import React, {Component} from 'react';
import SuggestionItem from './SuggestionItem.jsx';

function Suggestions (props) {
	
	
		return (
			<div id="suggestion-list">
				{
					props.suggestions.map((suggestion, index) => (
						<SuggestionItem 
							title={suggestion}
							onFetchResults={props.onFetchResults}
							key={index}
						/>
					))
				}
			</div>
		);
	}


export default Suggestions