import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import MMKVStorage, { useMMKVStorage, create } from "react-native-mmkv-storage";


const MMKV = new MMKVStorage.Loader().initialize();
create(MMKV)
export const useStorage = (key: string) => {
  return useMMKVStorage(key, MMKV);
};

export default function App() {
  const [user, setUser] = useStorage("user");
  const [text, onChangeText] = useState<string>("");
  return (
    <View style={styles.container}>
      <Text>{user}</Text>
      <TextInput
        value={text}
        onChangeText={onChangeText}
        placeholder="enter text"
      />
      <Button onPress={() => {setUser(text)}} title="update"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
