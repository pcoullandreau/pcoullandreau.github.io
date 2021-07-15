import React from 'react';
import './style.css';

// images imports
import email_2 from './images/email_2.png';
import email from './images/email.png';
import flyers from './images/flyers.png';
import icons from './images/icons.png';
import logos from './images/logos.png';
import websites from './images/websites.png';
import pdf from './images/pdf.svg';
// import portfolio from './portfolio.pdf'





const videos = {
	'playlist':'https://www.youtube.com/embed/tgbNymZ7vqY',
	0:{
		'title':'Animated logo (loop)',
		'link':'https://www.youtube.com/embed/tgbNymZ7vqY'
	},
	1: {
		'title':'Widget',
		'link':'https://www.youtube.com/embed/N3NXWRWXVK0'
	},
	2: {
		'title':'Facebook Motion Banner',
		'link':'https://www.youtube.com/embed/TjtuqWwVHdU'
	},
	3: {
		'title':'15 teaser videos (ebooks)',
		'link':'https://www.youtube.com/embed/cyW5z-M2yzw'
	},
	4: {
		'title':'4 teaser videos (articles)',
		'link':'https://www.youtube.com/embed/zHhd7roXlcE'
	},
	5: {
		'title':'4 commercials',
		'link':'https://www.youtube.com/embed/-PCuYOwmbNo'
	},
	6: {
		'title':'Toto',
		'link':'https://www.youtube.com/embed/tgbNymZ7vqY'
	},
	7: {
		'title':'Toto',
		'link':'https://www.youtube.com/embed/N3NXWRWXVK0'
	},
	8: {
		'title':'Toto',
		'link':'https://www.youtube.com/embed/TjtuqWwVHdU'
	},
	9: {
		'title':'Toto',
		'link':'https://www.youtube.com/embed/cyW5z-M2yzw'
	},
	10: {
		'title':'Toto',
		'link':'https://www.youtube.com/embed/zHhd7roXlcE'
	},
	11: {
		'title':'Toto',
		'link':'https://www.youtube.com/embed/-PCuYOwmbNo'
	}
}


class App extends React.Component {

	componentDidMount() {
		window.addEventListener("fullscreenchange", event => {
			if (!document.fullscreenElement) {
				var scrollPosition = document.getElementById("video-grid").getBoundingClientRect().top;
	    		window.scrollTo(0, scrollPosition)
			} 
		}, false);
		window.addEventListener("mozfullscreenchange", event => {
			if (!document.fullscreenElement) {
				var scrollPosition = document.getElementById("video-grid").getBoundingClientRect().top;
	    		window.scrollTo(0, scrollPosition)
			} 
		}, false);
		window.addEventListener("webkitfullscreenchange", event => {
			if (!document.fullscreenElement) {
				var scrollPosition = document.getElementById("video-grid").getBoundingClientRect().top;
	    		window.scrollTo(0, scrollPosition)
			} 
		}, false);
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


	renderTitle = title => {
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

		return (
			<React.Fragment>
				<div className="container">
					<div className="block">
						{ this.renderSectionTitle("FLYERS") }
						<span onClick={e => this.handleLoad(e, flyers)}>
							<img className="image" title="flyers.png" src={flyers} loading="lazy" alt="flyers"/>
						</span>
					</div>
				</div>
				<div className="ui section divider"></div>
				<div className="container">
					<div className="block">
						{ this.renderSectionTitle("WEBSITES AND LANDING PAGES") }
						<span onClick={e => this.handleLoad(e, websites)}>
							<img className="image" title="websites.png" src={websites} loading="lazy" alt="websites" />
						</span>
					</div>
				</div>
				<div className="ui section divider"></div>
				<div className="container">
					<div className="block">
						{ this.renderSectionTitle("EMAILS") }
						<span onClick={e => this.handleLoad(e, email)}>
							<img className="image" title="email.png" src={email} loading="lazy" alt="emails"/>
						</span>
					</div>	
				</div>
				<div className="ui section divider"></div>
				<div className="container">
					<div className="block">
						{ this.renderSectionTitle("EMAILS (CTD)") }
						<span onClick={e => this.handleLoad(e, email_2)}>
							<img className="image" title="email_2.png" src={email_2} loading="lazy" alt="emails" />
						</span>
					</div>	
				</div>
				<div className="ui section divider"></div>
				<div className="container">
					<div className="block">
						{ this.renderSectionTitle("LOGOS") }
						<span onClick={e => this.handleLoad(e, logos)}>
							<img className="image" title="logos.png" src={logos} loading="lazy" alt="logos"/>
						</span>
					</div>	
				</div>
				<div className="ui section divider"></div>
				<div className="container">
					<div className="block">
						{ this.renderSectionTitle("ICONS LIBRARY") }
						<span onClick={e => this.handleLoad(e, icons)}>
							<img className="image" title="icons.png" src={icons} loading="lazy" alt="icons"/>
						</span>
					</div>	
				</div>
				<div className="ui section divider"></div>
				<div className="container">
					<div id = "video-grid" className="block">
						{ this.renderVideoGrid(0, "VIDEOS & ANIMATIONS") }
						<div>More videos in <a href={videos['playlist']}>this playlist</a>!</div>
					</div>
				</div>
				<div className="ui section divider"></div>
				<div className="container">
					<div id = "video-grid" className="block">
						{ this.renderVideoGrid(1, "VIDEOS & ANIMATIONS (CTD)") }
						<div>More videos in <a href={videos['playlist']}>this playlist</a>!</div>
					</div>	
				</div>
				<div className="ui section divider"></div>

			</React.Fragment>

		)
	}


	renderVideoGrid = (sectionNumber, title) => {
		var offset = 6 * sectionNumber;

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
							<div className="ui segment">
								{this.renderVideoPlayer(offset+1)}
								<p className="video-title">{videos[offset+1].title}</p>
							</div>
						</div>
						<div className="column">
							<div className="ui segment">
								{this.renderVideoPlayer(offset+2)}
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

	renderPackagingDesigner = () => {

		return (
			<React.Fragment>
				<div className="container">
					<div className="block">
						{ this.renderSectionTitle("TODO") }
					</div>
				</div>
				<div className="ui section divider"></div>
			</React.Fragment>

		)

	}

	renderVideoPlayer = (id) => {
		let videoLink = videos[id].link
		return (
			<React.Fragment>
				<iframe 
					className="video-player"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
					allowFullScreen
					src={videoLink} 
				/>
			</React.Fragment>
		)

	}

	renderInfographist = () => {

		return (
			<React.Fragment>
				<div className="container">
					<div className="block">
						{ this.renderSectionTitle("TODO") }
					</div>
				</div>
				<div className="ui section divider"></div>
			</React.Fragment>

		)

	}


	renderGraphicAssistant = () => {

		return (
			<React.Fragment>
				<div className="container">
					<div className="block">
						{ this.renderSectionTitle("TODO") }
					</div>
				</div>
				<div className="ui section divider"></div>
			</React.Fragment>

		)

	}

	renderPersonalCreations = () => {

		return (
			<React.Fragment>
				<div className="container">
					<div className="block">
						{ this.renderSectionTitle("TODO") }
					</div>
				</div>
				<div className="ui section divider"></div>
			</React.Fragment>

		)

	}

	renderSection = target => {

		switch (target) {

		case "graphic":
			return <React.Fragment>{ this.renderGraphicDesigner() }</React.Fragment>;

		case "packaging":
			return <React.Fragment>{ this.renderPackagingDesigner() }</React.Fragment>;

		case "infographist":
			return <React.Fragment>{ this.renderInfographist() }</React.Fragment>;

		case "assistant":
			return <React.Fragment>{ this.renderGraphicAssistant() }</React.Fragment>;

		case "personal":
			return <React.Fragment>{ this.renderPersonalCreations() }</React.Fragment>;

		default:
			return <div>Default</div>

		}
	}

	render() {
		return (
			<React.Fragment>
				{/*Download PDF*/}
			{/*<a href={portfolio} download="Pierre Coullandreau - Portfolio.pdf">*/}
				<div id="pdf-button">
					<a href="https://www.acoullandreau.com/portfolio_pierre/portfolio.pdf" target="_blank" rel="noreferrer" download="Pierre Coullandreau - Portfolio.pdf">
						<img id="pdf-icon" title="Download PDF" src={pdf} alt="Download PDF" />
					</a>
				</div>

				{/*Title*/}
				<div className="container">
					<div className="block">
						{ this.renderName() }
					</div>
				</div>
				<div className="ui section divider"></div>

				{/*Graphic Designer*/}
				<div className="container">
					<div className="block">
						{ this.renderTitle("Graphic Designer") }
					</div>
				</div>
				<div className="ui section divider"></div>
				{ this.renderSection("graphic") }

				{/*Packaging Designer*/}
				<div className="container">
					<div className="block">
						{ this.renderTitle("Packaging Designer") }
					</div>
				</div>
				<div className="ui section divider"></div>
				{ this.renderSection("packaging") }

				{/*Infographist*/}
				<div className="container">
					<div className="block">
						{ this.renderTitle("Infographist") }
					</div>
				</div>

				<div className="ui section divider"></div>
				{ this.renderSection("infographist") }

				{/*Graphic Assistant*/}
				<div className="container">
					<div className="block">
						{ this.renderTitle("Graphic Assistant") }
					</div>
				</div>
				<div className="ui section divider"></div>
				{ this.renderSection("assistant") }

				{/*Personal Creations*/}
				<div className="container">
					<div className="block">
						{ this.renderTitle("Personal Creations") }
					</div>
				</div>
				<div className="ui section divider"></div>
				{ this.renderSection("personal") }

				{/*Thank you*/}
				<div className="container">
					<div className="block">
						{ this.renderThankYou() }
					</div>
				</div>



			</React.Fragment>
		)
	}

}

export default App;