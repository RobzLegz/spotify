import { Dimensions } from "react-native";
import Constants from "expo-constants";

const windowHeight = Dimensions.get("window").height;
const val = (1 + Math.sqrt(5)) / 2;

const MIN_HEADER_HEIGHT = 64 + Constants.statusBarHeight;
const MAX_HEADER_HEIGHT = windowHeight * (1 - 1 / val);
const HEADER_DELTA = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;

export {
    windowHeight,
    MIN_HEADER_HEIGHT,
    MAX_HEADER_HEIGHT,
    HEADER_DELTA
}