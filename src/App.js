import React from 'react';
import './style.css';
import Section from './Section.js';
import SideNavBar from './SideNavBar.js';

// pdf import
// import portfolio from './portfolio.pdf'


class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			'isReady':false,
			'currentSection':'',
			'sectionsScrollPositions':[],
			'VideoAnchorPosition':0
		};

		this.config = undefined;
	}

	componentDidMount() {

		if (this.config === undefined) {
			this.fetchConfig().then(json => {
				this.config = json;
				this.setState({isReady:true}, () => {
					this.getScrollPositions();
				})
			});

		}
		window.addEventListener("scroll", this.handleScroll);
		window.addEventListener("fullscreenchange", this.onFullScreenChange);
		window.addEventListener("mozfullscreenchange", this.onFullScreenChange);
		window.addEventListener("webkitfullscreenchange", this.onFullScreenChange);
		window.onbeforeunload = function () {
		  window.scrollTo(0, 0);
		}
	}


	componentWillUnmount() {
		window.removeEventListener('fullscreenchange', this.onFullScreenChange);
		window.removeEventListener('mozfullscreenchange', this.onFullScreenChange);
		window.removeEventListener('webkitfullscreenchange', this.onFullScreenChange);
	}


	getScrollPositions() {
		var positions = [];
		for (var i=0; i < this.config.sections.length ; i++) {
			var position = document.getElementById(this.config.sections[i]).getBoundingClientRect().top;
			positions.push(position)
		}
		positions.push(document.getElementById("thank").getBoundingClientRect().top)
		this.setState({sectionsScrollPositions:positions});
	}

	fetchConfig() {
		var p = new Promise(resolve => {
			fetch('data.json').then(response => {
				return response.json();
	        }).then(json => {
	        	resolve(json);
	        })
	    });
	    return p;
	}

	onFullScreenChange = event => {
		if (!document.fullscreenElement) {
	    	window.scrollTo(0, this.state.VideoAnchorPosition)
		} else {
			var target = parseInt(event.srcElement.id)
			var videoSection;
			if (target < 6) {
				videoSection = "grid-0"
			} else if (target >= 6 && target < 12) {
				videoSection = "grid-1"
			} else if (target >= 12 && target < 18) {
				videoSection = "grid-2"
			} else {
				videoSection = "page"
			}

			var VideoAnchorPosition = document.getElementById("video-"+videoSection).getBoundingClientRect().top;
			this.setState({VideoAnchorPosition})
		} 
	}

	onImageClick(event, href) {
		var newTitle = event.target.attributes.title.value;
		var newWin = window.open(href, "_blank");

		// add a load listener to the window so that the title gets changed on page load
		newWin.addEventListener("load", function() {
		    newWin.document.title = newTitle;
		});

		// stop the default `a` link or you will get 2 new windows!
		event.returnValue =  false;
	}

	// initScroll() {
	// 	var currentScrollPosition = -document.getElementById("root").getBoundingClientRect().top;

	// 	if (currentScrollPosition !== 0) {
	// 		this.handleScroll();
	// 	}
	// }

	handleScroll = () => {
		var currentScrollPosition = -document.getElementById("root").getBoundingClientRect().top + 0.5*window.innerHeight;
		var distFromBottom = document.getElementById("root").getBoundingClientRect().bottom;
		var currentSection;

		if (currentScrollPosition <= window.innerHeight || distFromBottom - window.innerHeight <= 0) {
			currentSection = ''
		} else {
			for (var i=0; i < this.state.sectionsScrollPositions.length ; i++) {
				if (this.state.sectionsScrollPositions[i] < currentScrollPosition) {
					currentSection = this.config.sections[i];
				} else {
					break;
				}
			}
		}

		this.setState({currentSection});
	} 

	updateScrollPosition = targetSection => {
		var scrollPosition = document.getElementById(targetSection).getBoundingClientRect().top - 50;
		this.setState({currentSection:targetSection}, () => {
			window.scrollBy(0, scrollPosition)
		})

	}

	renderName = () => {
		return (
			<React.Fragment>
				<h1 className={['Name', 'center'].join(' ')}> Pierre Coullandreau </h1>	
				<h2 className="Subtitle"> Personal artistic book </h2>
				<div id="address">
					<span className="AddressLine">pierre.cldr@gmail.com</span>
				</div>
			</React.Fragment>

		)
	}

	renderThankYou = () => {
		return (
			<React.Fragment>
				<h1 className={['Name', 'center'].join(' ')}> Thank you </h1>
				<h2 className="Subtitle"> Pierre Coullandreau </h2>
				<div id="address">
					<span className="AddressLine">pierre.cldr@gmail.com</span>
				</div>
			</React.Fragment>

		)
	}

	render() {

		if (this.config !== undefined) {	

			return (
				<React.Fragment>
					<SideNavBar config={this.config} selection={this.state.currentSection} updateScrollPosition={this.updateScrollPosition}/>

					{/*Download PDF*/}
				{/*<a href={portfolio} download="Pierre Coullandreau - Portfolio.pdf">*/}
					<div id="pdf-button">
						<a href="https://www.acoullandreau.com/portfolio_pierre/portfolio.pdf" target="_blank" rel="noreferrer" download="Pierre Coullandreau - Portfolio.pdf">
							<img id="pdf-icon" title="Download PDF" src={`${process.env.PUBLIC_URL}/images/pdf.svg`} alt="Download PDF" />
						</a>
					</div>

					{/*Title*/}
					<div className="container">
						<div className="block">
							{ this.renderName() }
						</div>
					</div>
					<div className="ui section divider"></div>


					{/*Sections*/}
					{
						React.Children.toArray(
							Object.keys(this.config.sections).map((item, i) => {
								let target = this.config.sections[item]
								return (
									<Section 
										target={target} 
										config={this.config} 
										onImageClick={this.onImageClick} 
										onFullScreenChange={this.onFullScreenChange}
									/>
								)
							})
						)
					}

					{/*Thank you*/}
					<div id="thank" className="container">
						<div className="block">
							{ this.renderThankYou() }
						</div>
					</div>

				</React.Fragment>
			)
		}
		return null;
	}

}

export default App;