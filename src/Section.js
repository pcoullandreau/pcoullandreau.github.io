import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Video from './Video.js';

class Section extends React.Component {


	renderSubtitle = () => {
		return (
			<h2 className="subtitle"> Personal artistic book </h2>

		)
	}

	renderTitle = target => {

		var title = this.props.config.visuals[target]['title'];

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


	renderVideoPage = id => {
		let videoLink = this.props.config.videos[id].link
		let videoTitle = this.props.config.videos[id].title

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

	renderImagePage = target => {
		return (
			<React.Fragment>
				<div className="container">
					<div className="block">
						{ this.renderSectionTitle(target.title) }
						<div className="overlay-image">
							<img className="image" src={target.path} loading="lazy" alt={target.alt}/>
							<div className="hover" title={`${target.alt}.png`} onClick={e => this.props.onImageClick(e, target.high)}>
								<div className="overlay-text">Click to enlarge</div>
							</div>
						</div>
					</div>
				</div>
				<div className="ui section divider"></div>
			</React.Fragment>
		)
	}

	renderSection = target => {

		var content = this.props.config.visuals[target];
		var videos = this.props.config["videos"];
		var extraContent;

		if (target === "graphic_assistant") {
			extraContent = (<React.Fragment>{this.renderVideoPage(100)}</React.Fragment>)
		} else if (target === "graphic_designer") {
			let video_info = {
				0:"VIDEOS & ANIMATIONS",
				1:"VIDEOS & ANIMATIONS (CTD)",
				2:"VIDEOS & ANIMATIONS (CTD)"
			}

			extraContent = (
				<React.Fragment>
					{
						React.Children.toArray(
							Object.keys(video_info).map((item, i) => {
								return (
									<React.Fragment>
										<div className="container">
											<div id = {`video-grid-${item}`} className="block">
												{ this.renderSectionTitle(video_info[item]) }
												<Video section={parseInt(item)} config={this.props.config} onFullScreenChange={this.props.onFullScreenChange}/>
												<div>More videos in <a href={videos['playlist']}>this playlist</a>!</div>
											</div>	
										</div>
										<div className="ui section divider"></div>
									</React.Fragment>
								)
							})
						)
					}
				</React.Fragment>
			)
		}

		return (
			<React.Fragment>
				<React.Fragment>
					{
						React.Children.toArray(
							Object.keys(content.pages).map((item, i) => {
								return (
									<React.Fragment>
										{ this.renderImagePage(content.pages[item]) }
									</React.Fragment>
								)
							})
						)
					}
				</React.Fragment>
				{extraContent}
			</React.Fragment>
		)	


	}

	render() {
		let target = this.props.target;

		return (
			<React.Fragment>
				<div className="container" id={target}>
					<div className="block">
						{ this.renderTitle(target) }
					</div>
				</div>
				<div className="ui section divider"></div>
				{ this.renderSection(target) }
			</React.Fragment>
		)



	}

}


// props validation
Section.propTypes = {
	target:PropTypes.string,
   config: PropTypes.object,
   onImageClick:PropTypes.func,
   onFullScreenChange:PropTypes.func
}


export default Section;


