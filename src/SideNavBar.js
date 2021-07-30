import React from 'react';
import PropTypes from 'prop-types';
// import { Icon } from 'semantic-ui-react';

class SideNavBar extends React.Component {

	state = { activeItem: '',  'matchPages':{'':'home', '#graphs':'chart bar', '#help':'help'} };

	componentDidMount() {
		this.onLocationChange();
	}

	componentDidUpdate() {
		window.addEventListener('popstate', this.onLocationChange);
	}

	onLocationChange = () => {
		var selectedPage = this.state.matchPages[window.location.hash];
		this.setState({ activeItem: selectedPage });
    };


	handleItemClick = (e, { name, to }) => {
		if (e.metaKey || e.ctrlKey) {
			var target = window.location.href.replace('#', to)
			window.open(target, "_blank")
			return;
		}

		this.setState({ activeItem: name });
		window.history.pushState({}, '', to);

		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);

	}

	render () {
		return (
			<React.Fragment>
				<div style={{margin:'10px'}}>
					<button></button>
				</div>
				<div style={{margin:'10px'}} >
					<button></button>
				</div>
			</React.Fragment>
		);

	}
}

// props validation
SideNavBar.propTypes = {
   selection: PropTypes.string,
}


export default SideNavBar;
