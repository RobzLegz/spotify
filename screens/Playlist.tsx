import React from "react"
import styled from "styled-components/native";
import { StyledPlaylistHeaderBackIcon } from "../icons/Icons";

const Header = () => {
    return (
        <StyledPlaylistHeader>
            <StyledPlaylistHeaderBackIcon name="arrow-back" />
        </StyledPlaylistHeader>
    )
}

const StyledPlaylistHeader = styled.View`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    padding: 0 10px;
`;

const Playlist = () => {
    return (
        <StyledPlaylist>
            <Header />
        </StyledPlaylist>
    )
}

const StyledPlaylist = styled.ScrollView`
    width: 100%;
    display: flex;
    background-color: #000000;
`;

export default Playlist;