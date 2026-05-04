import React from 'react';
import { Text, View } from '';
import { useEffect, useState } from 'react-native';

export default function App() {
  const [mensagem, setmensagem] = useState("carregando mensagem motivacional......")
  useEffect(() => {
    setTimeout(() => {
      setmensagem("bem vindo ao app");
    }, 5000);
  }, []);

  return (
    <View style>
      <Text></Text>
    </View>
  );
}
