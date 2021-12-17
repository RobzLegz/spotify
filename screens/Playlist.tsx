import React, { SetStateAction, useEffect, useState } from "react"
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import playlistData from "../data/playlistData";
import { StyledPlayIcon, StyledPlaylistHeaderBackIcon, StyledPlaylistOptionIcon, StyledPlaylistOptionsIcon, StyledPlaylistSongHeartIcon, StyledPlaylistSongOptionsIcon } from "../icons/Icons";
import { LinearGradient } from "expo-linear-gradient";
import { MIN_HEADER_HEIGHT } from "../models/PlaylistModel";

interface HeaderProps{
    distanceTop: number;
}

interface BodyProps{
    distanceTop: number;
    setDistanceTop: React.Dispatch<SetStateAction<number>>;
}

interface Song{
    name: string;
    authors: string[];
    album: string;
    cover: string;
    dateAdded: string;
    liked: boolean;
}

interface SongProps{
    info: Song;
    place: number;
}

const Header: React.FC<HeaderProps> = ({distanceTop}) => {
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
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
`;

const StyledPlaylistHeaderName = styled.Text`
    color: #f2f2f2;
    font-size: 18px;
    margin: 0 0 0 20px;
`;

const Top: React.FC<HeaderProps> = ({distanceTop}) => {
    const [coverOpacity, setCoverOpacity] = useState(distanceTop);
    const [coverSize, setCoverSize] = useState(290);
    const [coverContainerSize, setCoverContainerSize] = useState(290);

    useEffect(() => {
        if(distanceTop === 0 || Math.floor((80 * 100) / distanceTop) > 290){
            setCoverSize(290);
        }else{
            setCoverSize(Math.floor((80 * 100) / distanceTop));
        }

        if(distanceTop === 0 || 20 / distanceTop > 1){
            setCoverOpacity(1);
        }else{
            setCoverOpacity(20 / distanceTop);
        }

        if(Math.floor((8000) / distanceTop) > 290){
            setCoverContainerSize(290);
        }else if(Math.floor((8000) / distanceTop) < MIN_HEADER_HEIGHT){
            setCoverContainerSize(MIN_HEADER_HEIGHT);
        }else{
            setCoverContainerSize(Math.floor((8000) / distanceTop));
        }
    }, [distanceTop]);

    return (
        <StyledPlaylistTop
            colors={["#513B9E", "#000000"]}
        >
            <StyledPlaylistTopInputContainer>
                <StyledPlaylistTopInput 
                    placeholder="Find in playlist"
                    placeholderTextColor="#f2f2f2"
                />

                <StyledPlaylistTopSort>
                    <StyledPlaylistTopSortText>Sort</StyledPlaylistTopSortText>
                </StyledPlaylistTopSort>
            </StyledPlaylistTopInputContainer>

            <StyledPlaylistTopCoverContainer
                style={{
                    height: coverContainerSize
                }}
            >
                <StyledPlaylistTopCover
                    source={{uri: playlistData.image}}
                    style={{
                        resizeMode: "cover",
                        width: coverSize,
                        height: coverSize,
                        opacity: coverOpacity
                    }}
                />
            </StyledPlaylistTopCoverContainer>
            
            <Info />

            <Options />

            <StyledPlaylistTopAddSongsContainer>
                <StyledPlaylistTopAddSongs>
                    <StyledPlaylistTopAddSongsText>Add songs</StyledPlaylistTopAddSongsText>
                </StyledPlaylistTopAddSongs>
            </StyledPlaylistTopAddSongsContainer>
        </StyledPlaylistTop>
    )
}

const StyledPlaylistTop = styled(LinearGradient)`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 60px 10px;
`;

const StyledPlaylistTopInputContainer = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

const StyledPlaylistTopInput = styled.TextInput`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 0 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    font-size: 16px;
`;

const StyledPlaylistTopSort = styled.TouchableOpacity`
    height: 40px;
    width: 70px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    margin: 0 0 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledPlaylistTopSortText = styled.Text`
    color: #f2f2f2;
    font-size: 16px;
`;

const StyledPlaylistTopCoverContainer = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
`;

const StyledPlaylistTopCover = styled.Image``;

const StyledPlaylistTopAddSongsContainer = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const StyledPlaylistTopAddSongs = styled.TouchableOpacity`
    padding: 5px 20px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #aaa7a7;
`;

const StyledPlaylistTopAddSongsText = styled.Text`
    color: #f2f2f2;
    font-size: 16px;
`;

const Info: React.FC = () => {
    return (
        <StyledPlaylistInfo>
            <StyledPlaylistInfoName>{playlistData.name}</StyledPlaylistInfoName>

            <StyledPlaylistInfoCreatorContainer>
                <StyledPlaylistInfoCreatorAvatar 
                    source={{uri: playlistData.creaorImage}}
                    style={{
                        resizeMode: "cover"
                    }}
                />

                <StyledPlaylistInfoCreatorName>{playlistData.creator}</StyledPlaylistInfoCreatorName>
            </StyledPlaylistInfoCreatorContainer>

            <StyledPlaylistInfoLength>{playlistData.length}</StyledPlaylistInfoLength>
        </StyledPlaylistInfo>
    )
}

const StyledPlaylistInfo = styled.View`
    width: 100%;
    align-items: flex-start;
`;

const StyledPlaylistInfoName = styled.Text`
    font-size: 22px;
    color: #f2f2f2;
`;

const StyledPlaylistInfoCreatorContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin: 20px 0;
`;

const StyledPlaylistInfoCreatorAvatar = styled.Image`
    width: 25px;
    height: 25px;
    border-radius: 100px;
`;

const StyledPlaylistInfoCreatorName = styled.Text`
    color: #ececec;
    font-size: 16px;
    margin: 0 0 0 10px;
`;

const StyledPlaylistInfoLength = styled.Text`
    color: #cacaca;
    font-size: 14px;
`;

const Options: React.FC = () => {
    return (
        <StyledPlaylistOptions>
            <StyledPlaylistOptionsLeft>
                <StyledPlaylistOptionsLeftEnhance>
                    <StyledPlaylistOptionsLeftEnhanceText>Enhance</StyledPlaylistOptionsLeftEnhanceText>
                </StyledPlaylistOptionsLeftEnhance>

                <StyledPlaylistOptionIcon name="arrow-down-circle-outline" />

                <StyledPlaylistOptionIcon name="ios-person-add" />

                <StyledPlaylistOptionsIcon name="options-vertical" />
            </StyledPlaylistOptionsLeft>

            <StyledPlayIcon name="play-circle" />
        </StyledPlaylistOptions>
    )
}

const StyledPlaylistOptions = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    margin: 10px 0;
`;

const StyledPlaylistOptionsLeft = styled.View`
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const StyledPlaylistOptionsLeftEnhance = styled.TouchableOpacity`
    padding: 5px 10px;
    border: #aaa7a7 1px;
    border-radius: 100px;
`;

const StyledPlaylistOptionsLeftEnhanceText = styled.Text`
    color: #f2f2f2;
    font-size: 16px;
`;

const Song: React.FC<SongProps> = ({place, info}) => {
    return (
        <StyledPlaylistSong>
            <StyledPlaylistSongLeft 
                source={{uri: info.cover}}
                style={{
                    resizeMode: "cover"
                }}
            />

            <StyledPlaylistSongMiddle>
                <StyledPlaylistSongMiddleTop>{info.name}</StyledPlaylistSongMiddleTop>

                <StyledPlaylistSongMiddleBottom>
                    {
                        info.authors.map((author, i) => {
                            return (
                                <StyledPlaylistSongMiddleBottomText key={i}>{author}</StyledPlaylistSongMiddleBottomText>
                            )
                        })
                    }
                </StyledPlaylistSongMiddleBottom>
            </StyledPlaylistSongMiddle>

            <StyledPlaylistSongRight>
                <StyledPlaylistSongHeartIcon name="hearto" />

                <StyledPlaylistSongOptionsIcon name="options-vertical" />
            </StyledPlaylistSongRight>
        </StyledPlaylistSong>
    )
}

const StyledPlaylistSong = styled.View`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 15px;
`;

const StyledPlaylistSongLeft = styled.Image`
    width: 50px;
    height: 50px;
    margin: 0 10px 0 0;
`;

const StyledPlaylistSongMiddle = styled.View`
    flex: 1;
    height: 50px;
    justify-content: center;
`;

const StyledPlaylistSongMiddleTop = styled.Text`
    color: #f2f2f2;
`;

const StyledPlaylistSongMiddleBottom = styled.View`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
`;

const StyledPlaylistSongMiddleBottomText = styled.Text`
    color: #aaa7a7;
    margin: 0 2px;
`;

const StyledPlaylistSongRight = styled.View`
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

const Songs: React.FC = () => {
    return (
        <StyledPlaylistSongs>
            {
                playlistData.songs.map((song, i) => {
                    return (
                        <Song 
                            key={i}
                            place={i + 1}
                            info={song}
                        />
                    )
                })
            }
        </StyledPlaylistSongs>
    )
}

const StyledPlaylistSongs = styled.ScrollView`
    width: 100%;
    display: flex;
`;

const Body: React.FC<BodyProps> = ({setDistanceTop, distanceTop}) => {
    return (
        <StyledPlaylistBody onScroll={(e) => setDistanceTop(e.nativeEvent.contentOffset.y)}>
            <Top distanceTop={distanceTop} />

            <Songs />
        </StyledPlaylistBody>
    )
}

const StyledPlaylistBody = styled.ScrollView`
    width: 100%;
    display: flex;
    background-color: #000000;
`;

const Playlist = () => {
    const [distanceTop, setDistanceTop] = useState(0);

    return (
        <StyledPlaylist>
            <Header distanceTop={distanceTop} />

            <Body distanceTop={distanceTop} setDistanceTop={setDistanceTop} />
        </StyledPlaylist>
    )
}

const StyledPlaylist = styled.View`
    width: 100%;
    display: flex;
    background-color: #000000;
    height: 100%;
`;

export default Playlist;