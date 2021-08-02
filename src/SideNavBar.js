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

   handleItemHover = (e) => {
   	var targetElement = e.target.nextSibling
   	if (e.type === "mouseenter") {
   		targetElement.style.display = "inline-block"
   	} else {
   		targetElement.style.display = "none"
   	}
   } 

	handleItemClick = (e) => {
		var targetSection = e.target.name
		this.props.updateScrollPosition(targetSection)
	}

	render () {
		return (
			<React.Fragment>
				<div className="NavBar">
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
											className="NavBarButton"
											id = {`nav-bar-button-${item}`} 
											name={target}
											item = {item}
											style = {{backgroundColor:backgroundColor}} 
											onClick={this.handleItemClick}
											onMouseEnter={this.handleItemHover}
											onMouseLeave={this.handleItemHover}
										>
										</button>
										<div id={`nav-bar-text-${item}`}  className="NavMenuExpand" onMouseLeave={this.handleItemHover}>
											<p >{this.props.config.visuals[target]["title"]}</p>
										</div>
									</React.Fragment>
								)
							})
						)
					}
				</div>
			</React.Fragment>
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
