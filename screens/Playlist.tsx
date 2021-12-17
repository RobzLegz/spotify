import React, { SetStateAction, useState } from "react"
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import playlistData from "../data/playlistData";
import { StyledPlaylistHeaderBackIcon } from "../icons/Icons";
import { LinearGradient } from "expo-linear-gradient";

interface HeaderProps{
    distanceTop: number;
}

interface BodyProps{
    setDistanceTop: React.Dispatch<SetStateAction<number>>;
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
`;

const StyledPlaylistHeaderName = styled.Text`
    color: #f2f2f2;
    font-size: 18px;
    margin: 0 0 0 20px;
`;

const Top = () => {
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

            <StyledPlaylistTopCover
                source={{uri: playlistData.image}}
                style={{
                    resizeMode: "cover"
                }}
            />

            <Info />
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

const StyledPlaylistTopCover = styled.Image`
    width: 230px;
    height: 230px;
    margin: 40px 0;
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
    height: 200px;
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

const Body: React.FC<BodyProps> = ({setDistanceTop}) => {
    return (
        <StyledPlaylistBody onScroll={(e) => setDistanceTop(e.nativeEvent.contentOffset.y)}>
            <Top />
        </StyledPlaylistBody>
    )
}

const StyledPlaylistBody = styled.ScrollView`
    width: 100%;
    display: flex;
    background-color: #000000;
    position: absolute;
    top: 0;
    left: 0;
`;

const Playlist = () => {
    const [distanceTop, setDistanceTop] = useState(0);

    return (
        <StyledPlaylist>
            <Header distanceTop={distanceTop} />

            <Body setDistanceTop={setDistanceTop} />
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