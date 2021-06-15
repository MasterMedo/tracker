import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import MMKVStorage, { useMMKVStorage } from 'react-native-mmkv-storage';


const MMKV = new MMKVStorage.Loader().initialize();
export const useStorage = (key: string) => {
  // @ts-ignore
  return useMMKVStorage(key, MMKV);
};

export default function App() {
  const [categories, setCategories] = useStorage('categories');
  const [text, onChangeText] = useState<string>('');
  useEffect(() => {
    if (!categories) setCategories(['hello'])
  })
  return (
    <View style={styles.container}>
      <Text>{(categories || []).join()}</Text>
      <TextInput
        value={text}
        onChangeText={onChangeText}
        placeholder="enter text"
      />
      <Button
        onPress={() => {setCategories((categories || []).concat(text))}}
        title="update"
      />
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
