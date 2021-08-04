import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Video from './Video.js';
import { Divider } from 'semantic-ui-react';

class Section extends React.Component {


	renderSubtitle = () => {
		return (
			<h2 className="Subtitle"> Personal artistic book </h2>

		)
	}

	renderTitle = target => {

		var title = this.props.config.visuals[target]['title'];

		return (
			<React.Fragment>
				<h1 className={['Title', 'center'].join(' ')}> {title} </h1>
				{this.renderSubtitle()}
			</React.Fragment>
		)

	}

	renderSectionTitle = title => {
		return (
			<React.Fragment>
				<h3 className="SectionTitle"> {title} </h3>
			</React.Fragment>
		)

	} 


	renderVideoPage = id => {
		let videoLink = this.props.config.videos[id].link
		let videoTitle = this.props.config.videos[id].title

		return (
			<React.Fragment>
				<div className="container">
					<div id = "VideoPage" className="block">
						{ this.renderSectionTitle(videoTitle) }
						<iframe 
							className="VideoPagePlayer"
							title="YouTube video player"
							id = {id}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
							allowFullScreen
							src={videoLink} 
						/>
					</div>
				</div>
				<Divider></Divider>
			</React.Fragment>
		)
	}

	renderImagePage = target => {
		return (
			<React.Fragment>
				<div className="container">
					<div className="block">
						{ this.renderSectionTitle(target.title) }
						<div className="OverlayImage">
							<img className="image" src={target.path} loading="lazy" alt={target.alt}/>
							<div className="hover" title={`${target.alt}.png`} onClick={e => this.props.onImageClick(e, target.high)}>
								<div className="OverlayText">Click to enlarge</div>
							</div>
						</div>
					</div>
				</div>
				<Divider></Divider>
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
										<Divider></Divider>
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
				<Divider></Divider>
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


