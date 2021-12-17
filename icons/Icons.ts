import Ionicon from "react-native-vector-icons/Ionicons";
import styled from "styled-components/native";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";

const StyledPlaylistHeaderBackIcon = styled(Ionicon)`
    color: #f2f2f2;
    font-size: 25px;
`;

const StyledPlayIcon = styled(Ionicon)`
    color: #1DB954;
    font-size: 60px;
`;

const StyledPlaylistOptionIcon = styled(Ionicon)`
    color: #aaa7a7;
    font-size: 25px;
`;

const StyledPlaylistOptionsIcon = styled(SimpleLineIcon)`
    color: #aaa7a7;
    font-size: 25px;
`;


export {
    StyledPlayIcon,
    StyledPlaylistOptionIcon,
    StyledPlaylistOptionsIcon,
    StyledPlaylistHeaderBackIcon
}