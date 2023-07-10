const { default: Game } = require("./src/componets/Game");
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-gesture-handler";


const App =() => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Game/> 
  </GestureHandlerRootView>
);
export default App;