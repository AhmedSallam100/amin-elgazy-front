import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
	return (
		<NavContainer>
			<Button onClick={() => setLibraryStatus(!libraryStatus)}>
				<span className="audio-lists">قائمه الصوتيات</span>

				<FontAwesomeIcon icon={faMusic} />
			</Button>
		</NavContainer>
	);
};

const NavContainer = styled.div`
	min-height: 10vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media screen and (max-width: 768px) {
		position: fixed;
		z-index: 10;
		top: 40px;
		left: 0;
		width: 100%;
	}
    
    direction: rtl;
`;


const Button = styled.button`
	background: transparent;
	border: none;
    border-radius : 10px;
	cursor: pointer;
	border: 2px solid #0075ff;
    margin-top : 53px;
	padding: 10px 15px;
	transition: all 0.3s ease;
	&:hover {
		background: #0075ff;
		color: white;
	}
`;

export default Nav;