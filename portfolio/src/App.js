import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Navbar from './components/Navbar';
import Video from './components/aboutme/Video';
import { AdContainer } from './components/aboutme/Advertisement';
import ReviewAndSome from './components/reviews/ReviewAndSome';
import ReviewSummary from './components/reviews/ReviewSummary';
import CommentSection from './components/input/comment_section/CommentSection';
import Footer from './components/Footer';
import Comments from './components/input/comment_section/Comments';

import { postComment } from './store/actions';

import { device } from './style-variables/devices';
import './App.css';

function App(props) {
	const commentArray = [
        "Wow, that developer sounds amazing. He's obviously much better at Super Smash Brothers Melee than most.",
        "I can only imagine a developer of that caliber is leading a team in Silicon Valley by this point.",
        "I hope that one day I might be worthy of basking in the glory of this developer's brilliant code. Only then will I feel fulfilled.",
        "Is there any way I could reach out to this developer? I'd like to give him lots of money, please.",
		"What a gentleman and a scholar as well, incredible. I wonder if he'd be open to meeting my daughter."
    ]

    const generateComment = () => {
        return commentArray[Math.floor(Math.random() * Math.floor(commentArray.length))];
    }

	return (
		<AppContainer>
			<Navbar />
			<AdContainer />
			<Row>
				<AdContainer leftAd />
				<Main>
					<Video>About Me Video will go here</Video>
					<ReviewedBy>Definitely not reviewed by Christian Pelayo, March 1st 2020 | 9:31 PM PST</ReviewedBy>
					<ReviewAndSome />
					<ReviewSummary />
					<AdContainer full />
					<CommentSection postComment={props.postComment} generateComment={generateComment} />
					<Comments />
				</Main>
				<AdContainer rightAd />
			</Row>
			<Footer />
		</AppContainer>
	);
}

export const Lite = styled.span`
    font-weight: 300;
`;

const ReviewedBy = styled.span`
	font-size: 0.8rem;
	margin-top: 10px;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
`;

const AppContainer = styled.div`
	width: 80%;
	margin: auto;
	padding-bottom: 2px;
	display: flex;
	flex-direction: column;

	@media ${device.laptop} {
		width: 98%;
	}
`;

const Main = styled.main`
	width: 65%;
	max-width: 800px;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
`;

const mapDispatchToProps = dispatch => ({
	postComment: (comment) => dispatch(postComment(comment))
});

export default connect(null, mapDispatchToProps)(App);
