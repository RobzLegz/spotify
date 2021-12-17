import React from "react"
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import playlistData from "../data/playlistData";
import { StyledPlaylistHeaderBackIcon } from "../icons/Icons";

const Header = () => {
    return (
        <StyledPlaylistHeader>
            <StyledPlaylistHeaderBackIcon name="arrow-back" />

            <StyledPlaylistHeaderName 
                style={{
                    opacity: 0,
                }}
            >{playlistData.name}</StyledPlaylistHeaderName>
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

const StyledPlaylistHeaderName = styled.Text`
    color: #f2f2f2;
    font-size: 18px;
    margin: 0 0 0 20px;
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