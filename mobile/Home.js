import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { getMessage } from './networking';
import { useContext, useEffect, useState } from 'react';
import GlobalContext from './Context';

export default function Home(){
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {state} = useContext(GlobalContext)
  useEffect(() => {
    async function getData(){
      setLoading(true);
      setError(null)
      try {
        let ret = await getMessage(state.token);
        if(ret.success){
          setMsg(ret.data);
        }
      } catch (error) {
        setError(error.message)
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    getData();
  }, []);
  return(
    <View>
      {loading && <ActivityIndicator size="large"/>}
      <Text>{msg}</Text>
      {error && <Text>{error}</Text>}
    </View>
  )
}