import React from 'react';

// images imports
import email_2 from './images/email_2.png';
import email from './images/email.png';
import flyers from './images/flyers.png';
import icons from './images/icons.png';
import logos from './images/logos.png';
import websites from './images/websites.png';

// import videos from './images/videos.png';

const videos = {
	0:'https://www.youtube.com/embed/tgbNymZ7vqY',
	1:'https://www.youtube.com/embed/N3NXWRWXVK0',
	2:'https://www.youtube.com/embed/TjtuqWwVHdU',
	3:'https://www.youtube.com/embed/cyW5z-M2yzw',
	4:'https://www.youtube.com/embed/zHhd7roXlcE&t=7s',
	5:'https://www.youtube.com/embed/-PCuYOwmbNo'
}


class App extends React.Component {


	renderName = () => {
		return (
			<React.Fragment>
				<h1 className={['name', 'center'].join(' ')}> Pierre Coullandreau </h1>	
				{this.renderSubtitle()}
				<div id="address">
					1801 N Page Avenue <br/>
					Oklahoma City, OK 73111 <br/>
					(405) 215-0662 <br/>
					pierre.cldr@gmail.com <br/>
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
					1801 N Page Avenue <br/>
					Oklahoma City, OK 73111 <br/>
					(405) 215-0662 <br/>
					pierre.cldr@gmail.com <br/>
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
				<div className="slide">
					<div className="container">
						<div className="block">
							<div class="ui section divider"></div>
							{ this.renderSectionTitle("FLYERS") }
							<img className="image" src={flyers} />
						</div>
					</div>
				</div>
				<div className="slide">
					<div className="container">
						<div className="block">
							<div class="ui section divider"></div>
							{ this.renderSectionTitle("WEBSITES AND LANDING PAGES") }
							<img className="image" src={websites} />
						</div>
					</div>
				</div>
				<div className="slide">
					<div className="container">
						<div className="block">
							<div class="ui section divider"></div>
							{ this.renderSectionTitle("EMAILS") }
							<img className="image" src={email} />
						</div>	
					</div>
				</div>
				<div className="slide">
					<div className="container">
						<div className="block">
							<div class="ui section divider"></div>
							{ this.renderSectionTitle("EMAILS (CTD)") }
							<img className="image" src={email_2} />
						</div>	
					</div>
				</div>
				<div className="slide">
					<div className="container">
						<div className="block">
							<div class="ui section divider"></div>
							{ this.renderSectionTitle("LOGOS") }
							<img className="image" src={logos} />
						</div>	
					</div>
				</div>
				<div className="slide">
					<div className="container">
						<div className="block">
							<div class="ui section divider"></div>
							{ this.renderSectionTitle("ICONS LIBRARY") }
							<img className="image" src={icons} />
						</div>	
					</div>
				</div>
				<div className="slide">
					<div className="container">
						<div className="block">
							<div class="ui section divider"></div>
							{ this.renderVideoGrid() }
						</div>	
					</div>
				</div>

			</React.Fragment>

		)
	}


	renderVideoGrid = () => {
		return (
			<React.Fragment>
				{ this.renderSectionTitle("VIDEOS & ANIMATIONS") }
				<div class="ui equal width grid">
					<div class="row">
						<div class="column">
							<div class="ui segment">
								{this.renderVideoPlayer(0)}
								<p className="video-title">Animated logo (loop)</p>
							</div>
						</div>
						<div class="column">
							<div class="ui segment">
								{this.renderVideoPlayer(1)}
								<p className="video-title">Widget</p>
							</div>
						</div>
						<div class="column">
							<div class="ui segment">
								{this.renderVideoPlayer(2)}
								<p className="video-title">Facebook Motion Banner</p>
							</div>
						</div>
					 </div>
					 <div class="row">
						<div class="column">
							<div class="ui segment">
								{this.renderVideoPlayer(3)}
								<p className="video-title">15 teaser videos (ebooks)</p>
							</div>
						</div>
						<div class="column">
							<div class="ui segment">
								{this.renderVideoPlayer(4)}
								<p className="video-title">4 teaser videos (articles)</p>
							</div>
						</div>
						<div class="column">
							<div class="ui segment">
								{this.renderVideoPlayer(5)}
								<p className="video-title">4 commercials</p>
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
				<div className="slide">
					<div className="container">
						<div className="block">
							<div class="ui section divider"></div>
							{ this.renderSectionTitle("TODO") }
						</div>
					</div>
				</div>
			</React.Fragment>

		)

	}

	renderVideoPlayer = (id) => {
		let videoLink = videos[id]
		return (
			<React.Fragment>
				<iframe 
					className="video-player"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen;" 
					allowfullscreen
					src={videoLink} 
				/>
			</React.Fragment>
		)

	}

	renderInfographist = () => {

		return (
			<React.Fragment>
				<div className="slide">
					<div className="container">
						<div className="block">
							<div class="ui section divider"></div>
							{ this.renderSectionTitle("TODO") }
						</div>
					</div>
				</div>
			</React.Fragment>

		)

	}


	renderGraphicAssistant = () => {

		return (
			<React.Fragment>
				<div className="slide">
					<div className="container">
						<div className="block">
							<div class="ui section divider"></div>
							{ this.renderSectionTitle("TODO") }
						</div>
					</div>
				</div>
			</React.Fragment>

		)

	}

	renderPersonalCreations = () => {

		return (
			<React.Fragment>
				<div className="slide">
					<div className="container">
						<div className="block">
							<div class="ui section divider"></div>
							{ this.renderSectionTitle("TODO") }
						</div>
					</div>
				</div>
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
				{/*Title*/}
				<div className="slide">
					<div className="container">
						<div className="block">
							{ this.renderName() }
						</div>
					</div>
				</div>

				{/*Graphic Designer*/}
				<div className="slide">
					<div className="container">
						<div className="block">
							<div class="ui section divider"></div>
							{ this.renderTitle("Graphic Designer") }
						</div>
					</div>
				</div>
				{ this.renderSection("graphic") }

				{/*Packaging Designer*/}
				<div className="slide">
					<div className="container">
						<div className="block">
							<div class="ui section divider"></div>
							{ this.renderTitle("Packaging Designer") }
						</div>
					</div>
				</div>
				{ this.renderSection("packaging") }

				{/*Infographist*/}
				<div className="slide">
					<div className="container">
						<div className="block">
							<div class="ui section divider"></div>
							{ this.renderTitle("Infographist") }
						</div>
					</div>
				</div>
				{ this.renderSection("infographist") }

				{/*Graphic Assistant*/}
				<div className="slide">
					<div className="container">
						<div className="block">
							<div class="ui section divider"></div>
							{ this.renderTitle("Graphic Assistant") }
						</div>
					</div>
				</div>
				{ this.renderSection("assistant") }

				{/*Personal Creations*/}
				<div className="slide">
					<div className="container">
						<div className="block">
							<div class="ui section divider"></div>
							{ this.renderTitle("Personal Creations") }
						</div>
					</div>
				</div>
				{ this.renderSection("personal") }

				{/*Thank you*/}
				<div className="slide">
					<div className="container">
						<div className="block">
							<div class="ui section divider"></div>
							{ this.renderThankYou() }
						</div>
					</div>
				</div>



			</React.Fragment>
		)
	}

}

export default App;