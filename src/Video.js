import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

class Video extends React.Component {

	componentDidMount() {
		window.addEventListener("fullscreenchange", this.onFullScreenChange);
		window.addEventListener("mozfullscreenchange", this.onFullScreenChange);
		window.addEventListener("webkitfullscreenchange", this.onFullScreenChange);
	}


	componentWillUnmount() {
		window.removeEventListener('fullscreenchange', this.onFullScreenChange);
		window.removeEventListener('mozfullscreenchange', this.onFullScreenChange);
		window.removeEventListener('webkitfullscreenchange', this.onFullScreenChange);
	}

	onFullScreenChange = event => {
		this.props.onFullScreenChange(event);
	}

	renderVideoGrid = (sectionNumber) => {
		var offset = 6 * sectionNumber;
		var videos = this.props.config["videos"];
		var target_1 = (<React.Fragment>{this.renderVideoPlayer(offset+1)}</React.Fragment>)
		var target_2 = (<React.Fragment>{this.renderVideoPlayer(offset+2)}</React.Fragment>)

		if (sectionNumber === 0) {
			target_1 = (<img className="gif" src={`${process.env.PUBLIC_URL}/images/high_res/01_Graphic Designer/07.gif`} alt="CF widget"/>)
			target_2 = (<img className="gif" src={`${process.env.PUBLIC_URL}/images/high_res/01_Graphic Designer/08.gif`} alt="How to go from there" />)
		} 

		return (
			<React.Fragment>
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
		var videos = this.props.config["videos"];
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

	render() {
		return (
			<React.Fragment>
				{ this.renderVideoGrid(this.props.section) }
			</React.Fragment>
		)	

	}

}


// props validation
Video.propTypes = {
	section:PropTypes.number,
	config:PropTypes.object,
	onFullScreenChange:PropTypes.func
}


export default Video;