import { useContext, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import GlobalContext from "./Context";
import { login } from "./networking";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { state, setState } = useContext(GlobalContext);
  const pressedLogin = async () => {
    try {
      const obj = await login(username, password);
      if (obj && obj.success) {
        console.log(obj);
        setState({ ...state, token: obj.data });
      }else{
        alert(obj.error);
      }
    } catch (error) {}
  };
  return (
    <View>
      <TextInput
        placeholder="Enter Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" onPress={pressedLogin} />
    </View>
  );
}
