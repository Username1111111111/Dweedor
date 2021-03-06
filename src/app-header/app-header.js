/* eslint-disable react/prop-types */
import React from 'react';
// import styled from 'styled-components';
import './app-header.css';

// const Header = styled.div`
//     display: flex;
//     align-items: flex-end;
//     justify-content: space-between;
//     h1 {
//         font-size: 26px;
//         color: ${props => props.colored ? 'red' : 'black'};
//         :hover {
//             color: blue;
//         }
//     }
//     h2 {
//         font-size: 1.2rem;
//         color: grey;
//     }
// `;

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            {/* <Header as='a' colored> */}
            <h1>AccountName</h1>
            <h2>{allPosts} posts, liked {liked}</h2>
        </div>
    );
};

export default AppHeader;