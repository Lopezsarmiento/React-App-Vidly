import React from 'react';

// input : liked: boolean
// output onCLick

// Stateless functional component
// should receive props as arg
// and avoid reference to this.props
const Like = (props) => {
	let classes = 'fa fa-heart';
	if (!props.liked) classes += '-o';
	return (
		<React.Fragment>
			<button
				type="button"
				className="btn btn-link btn-sm"
				onClick={props.onClick}>
				<i className={classes} aria-hidden="true"></i>
			</button>
		</React.Fragment>
	);
}

export default Like;