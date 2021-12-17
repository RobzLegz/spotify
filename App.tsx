import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Navigator from "./navigator/Navigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <StyledSafeAreaView>
        <Navigator />
      </StyledSafeAreaView>
    </SafeAreaProvider>
  );
}

const StyledSafeAreaView = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  position: relative;
`;