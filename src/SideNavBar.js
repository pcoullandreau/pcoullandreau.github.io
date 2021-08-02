import React from 'react';
import PropTypes from 'prop-types';
// import { Icon } from 'semantic-ui-react';

class SideNavBar extends React.Component {

	state = {selected:''}  

	componentDidMount() {
		this.onLocationChange();
	}

	onLocationChange = () => {
		var selectedSection = this.props.selection;
		this.setState({ selected: selectedSection });
    };


	handleItemClick = (e) => {
		var targetSection = e.target.name
		this.props.updateScrollPosition(targetSection)
	}

	render () {
		return (
			<div className="nav-bar">
				{
					React.Children.toArray(
						Object.keys(this.props.config.sections).map((item, i) => {
							var target = this.props.config.sections[item]
							var backgroundColor = "#16141266";
							if (this.props.selection === target) {
								backgroundColor = "#EC1A2B";
							}
							return (
								<React.Fragment>
									<button 
										className="nav-bar-button"
										id ={`nav-bar-button-${item}`} 
										name={target}
										style = {{backgroundColor:backgroundColor}} 
										onClick={this.handleItemClick}
									>
									</button>
								</React.Fragment>
							)
						})
					)
				}
			</div>
		);

	}
}

// props validation
SideNavBar.propTypes = {
   selection: PropTypes.string,
   config:PropTypes.object,
   updateScrollPosition:PropTypes.func
}


export default SideNavBar;
