import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { getMessage } from "./networking";
import { useEffect, useState } from "react";
import Home from "./Home";
import Login from "./Login";
import GlobalContext from "./Context";
export default function App() {
  const [state, setState] = useState({ token: null });
  return (
    <GlobalContext.Provider value={{ setState, state }}>
      <View style={styles.container}>
        {state.token ? <Home/>: <Login/>}
      </View>
    </GlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
