import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { Grid, Segment } from 'semantic-ui-react';

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
			target_1 = (<img className="gif" loading="lazy" src={`${process.env.PUBLIC_URL}/images/high_res/01_Graphic Designer/07.gif`} alt="CF widget"/>)
			target_2 = (<img className="gif" loading="lazy" src={`${process.env.PUBLIC_URL}/images/high_res/01_Graphic Designer/08.gif`} alt="How to go from there" />)
		} 

		return (
			<Grid>
				<Grid.Row columns='equal'>
					<Grid.Column>
						<Segment>
							{this.renderVideoPlayer(offset+0)}
							<p className="VideoTitle">{videos[offset+0].title}</p>
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment textAlign='center'>
							{target_1}
							<p className="VideoTitle">{videos[offset+1].title}</p>
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment textAlign='center'>
							{target_2}
							<p className="VideoTitle">{videos[offset+2].title}</p>
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row columns='equal'>
					<Grid.Column>
						<Segment>
							{this.renderVideoPlayer(offset+3)}
							<p className="VideoTitle">{videos[offset+3].title}</p>
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment>
							{this.renderVideoPlayer(offset+4)}
							<p className="VideoTitle">{videos[offset+4].title}</p>
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment>
							{this.renderVideoPlayer(offset+5)}
							<p className="VideoTitle">{videos[offset+5].title}</p>
						</Segment>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}


	renderVideoPlayer = (id) => {
		var videos = this.props.config["videos"];
		let videoLink = videos[id].link
		return (
			<React.Fragment>
				<iframe 
					className="VideoPlayer"
					title="YouTube video player"
					id = {id}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
					allowFullScreen
					loading="lazy"
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