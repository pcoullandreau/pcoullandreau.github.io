import React from 'react';
import './style.css';

// pdf import
// import portfolio from './portfolio.pdf'


class App extends React.Component {

	// config = undefined;

	constructor(props) {
		super(props);

		this.state = {
			'isReady':false,
			'scrollPosition':0
		};

		this.config = undefined;
	}

	componentDidMount() {

		if (this.config === undefined) {
			this.fetchConfig().then(json => {
				this.config = json;
				this.setState({isReady:true});
			});

		}

		window.addEventListener("fullscreenchange", this.onFullScreenChange);
		window.addEventListener("mozfullscreenchange", this.onFullScreenChange);
		window.addEventListener("webkitfullscreenchange", this.onFullScreenChange);
	}


	componentWillUnmount() {
		window.removeEventListener('fullscreenchange', this.onFullScreenChange);
		window.removeEventListener('mozfullscreenchange', this.onFullScreenChange);
		window.removeEventListener('webkitfullscreenchange', this.onFullScreenChange);
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
	    	window.scrollTo(0, this.state.scrollPosition)
		} else {
			var videoSection;
			if (event.srcElement.id < 6) {
				videoSection = "grid-0"
			} else if (event.srcElement.id >= 6 && event.srcElement.id < 12) {
				videoSection = "grid-1"
			} else if (event.srcElement.id >= 12 && event.srcElement.id < 18) {
				videoSection = "grid-2"
			} else {
				videoSection = "page"
			}
			var scrollPosition = document.getElementById("video-"+videoSection).getBoundingClientRect().top;
			this.setState({scrollPosition})
		} 
	}

	handleLoad(event, href) {
		var newTitle = event.target.attributes.title.value;
		var newWin = window.open(href, "_blank");

		// add a load listener to the window so that the title gets changed on page load
		newWin.addEventListener("load", function() {
		    newWin.document.title = newTitle;
		});

		// stop the default `a` link or you will get 2 new windows!
		event.returnValue =  false;
	}


	renderName = () => {
		return (
			<React.Fragment>
				<h1 className={['name', 'center'].join(' ')}> Pierre Coullandreau </h1>	
				{this.renderSubtitle()}
				<div id="address">
					<span className="address-line">pierre.cldr@gmail.com</span>
				</div>
			</React.Fragment>

		)
	}


	renderThankYou = () => {
		return (
			<React.Fragment>
				<h1 className={['name', 'center'].join(' ')}> Thank you </h1>
				<h2 className="subtitle"> Pierre Coullandreau </h2>
				<div id="address">
					<span className="address-line">pierre.cldr@gmail.com</span>
				</div>
			</React.Fragment>

		)
	}

	renderSubtitle = () => {
		return (
			<h2 className="subtitle"> Personal artistic book </h2>

		)
	}


	renderTitle = target => {

		var title = this.config.visuals[target]['title'];

		return (
			<React.Fragment>
				<h1 className={['title', 'center'].join(' ')}> {title} </h1>
				{this.renderSubtitle()}
			</React.Fragment>
		)

	}

	renderSectionTitle = title => {
		return (
			<React.Fragment>
				<h3 className="section-title"> {title} </h3>
			</React.Fragment>
		)

	} 

	renderGraphicDesigner = () => {
		var videos = this.config["videos"];
		var content = this.config.visuals.graphic_designer;

		return (
			<React.Fragment>
				{
					React.Children.toArray(
						Object.keys(content.pages).map((item, i) => {
							return (
								<React.Fragment>
									<div className="container">
										<div className="block">
											{ this.renderSectionTitle(content.pages[item].title) }
											<span onClick={e => this.handleLoad(e, content.pages[item].path)}>
												<img className="image" title={`${content.pages[item].alt}.png`} src={content.pages[item].path} loading="lazy" alt={content.pages[item].alt}/>
											</span>
										</div>
									</div>
									<div className="ui section divider"></div>
								</React.Fragment>
							)
						})
					)
				}
				<div className="container">
					<div id = "video-grid-0" className="block">
						{ this.renderVideoGrid(0, "VIDEOS & ANIMATIONS") }
						<div>More videos in <a href={videos['playlist']}>this playlist</a>!</div>
					</div>
				</div>
				<div className="ui section divider"></div>
				<div className="container">
					<div id = "video-grid-1" className="block">
						{ this.renderVideoGrid(1, "VIDEOS & ANIMATIONS (CTD)") }
						<div>More videos in <a href={videos['playlist']}>this playlist</a>!</div>
					</div>	
				</div>
				<div className="ui section divider"></div>
				<div className="container">
					<div id = "video-grid-2" className="block">
						{ this.renderVideoGrid(2, "VIDEOS & ANIMATIONS (CTD)") }
						<div>More videos in <a href={videos['playlist']}>this playlist</a>!</div>
					</div>	
				</div>
				<div className="ui section divider"></div>
			</React.Fragment>
		)

	}


	renderVideoGrid = (sectionNumber, title) => {
		var offset = 6 * sectionNumber;
		var videos = this.config["videos"];
		var target_1 = (<React.Fragment>{this.renderVideoPlayer(offset+1)}</React.Fragment>)
		var target_2 = (<React.Fragment>{this.renderVideoPlayer(offset+2)}</React.Fragment>)

		if (sectionNumber === 0) {
			target_1 = (<img className="gif" src={`${process.env.PUBLIC_URL}/images/01_Graphic Designer/07.gif`} alt="CF widget"/>)
			target_2 = (<img className="gif" src={`${process.env.PUBLIC_URL}/images/01_Graphic Designer/08.gif`} alt="How to go from there" />)
		} 

		return (
			<React.Fragment>
				{ this.renderSectionTitle(title) }
				<div className="ui equal width grid">
					<div className="row">
						<div className="column">
							<div className="ui segment">
								{this.renderVideoPlayer(offset+0)}
								<p className="video-title">{videos[offset+0].title}</p>
							</div>
						</div>
						<div className="column">
							<div className="ui center aligned segment">
								{target_1}
								<p className="video-title">{videos[offset+1].title}</p>
							</div>
						</div>
						<div className="column">
							<div className="ui center aligned segment">
								{target_2}
								<p className="video-title">{videos[offset+2].title}</p>
							</div>
						</div>
					 </div>
					 <div className="row">
						<div className="column">
							<div className="ui segment">
								{this.renderVideoPlayer(offset+3)}
								<p className="video-title">{videos[offset+3].title}</p>
							</div>
						</div>
						<div className="column">
							<div className="ui segment">
								{this.renderVideoPlayer(offset+4)}
								<p className="video-title">{videos[offset+4].title}</p>
							</div>
						</div>
						<div className="column">
							<div className="ui segment">
								{this.renderVideoPlayer(offset+5)}
								<p className="video-title">{videos[offset+5].title}</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}


	renderVideoPlayer = (id) => {
		var videos = this.config["videos"];
		let videoLink = videos[id].link
		return (
			<React.Fragment>
				<iframe 
					className="video-player"
					title="YouTube video player"
					id = {id}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
					allowFullScreen
					src={videoLink} 
				/>
			</React.Fragment>
		)

	}

	renderVideoPage = id => {
		let videoLink = this.config.videos[id].link
		let videoTitle = this.config.videos[id].title

		return (
			<React.Fragment>
				<div className="container">
					<div id = "video-page" className="block">
						{ this.renderSectionTitle(videoTitle) }
						<iframe 
							className="video-page-player"
							title="YouTube video player"
							id = {id}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
							allowFullScreen
							src={videoLink} 
						/>
					</div>
				</div>
				<div className="ui section divider"></div>
			</React.Fragment>
		)
	}

	renderSection = target => {

		if (target === "graphic_designer") {
			return <React.Fragment>{ this.renderGraphicDesigner() }</React.Fragment>;
		} else {

			var videoPage;
			if (target === "graphic_assistant") {
				videoPage = (<React.Fragment>{this.renderVideoPage(100)}</React.Fragment>)
			}


			var content = this.config.visuals[target];

			return (
				<React.Fragment>
					<React.Fragment>
						{
							React.Children.toArray(
								Object.keys(content.pages).map((item, i) => {
									return (
										<React.Fragment>
											<div className="container">
												<div className="block">
													{ this.renderSectionTitle(content.pages[item].title) }
													<span onClick={e => this.handleLoad(e, content.pages[item].path)}>
														<img className="image" title={`${content.pages[item].alt}.png`} src={content.pages[item].path} loading="lazy" alt={content.pages[item].alt}/>
													</span>
												</div>
											</div>
											<div className="ui section divider"></div>
										</React.Fragment>
									)
								})
							)
						}
					</React.Fragment>
					{videoPage}
				</React.Fragment>
			)	

		} 

	}

	render() {

		if (this.config !== undefined) {	

			return (
				<React.Fragment>
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
									<React.Fragment>
										<div className="container">
											<div className="block">
												{ this.renderTitle(target) }
											</div>
										</div>
										<div className="ui section divider"></div>
										{ this.renderSection(target) }
									</React.Fragment>
								)
							})
						)
					}

					{/*Thank you*/}
					<div className="container">
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