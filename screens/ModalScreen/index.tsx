import { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { getData } from '../../storage/data';
import { RootStackScreenProps } from '../../types';

interface Subject {
  name: string
}

interface Data {
  subject: Subject
  midscore: number
  finscore: number
  actscore: number
}

export default function ModalScreen({ route, navigation }: RootStackScreenProps<'Modal'>) {
  const [data, setData] = useState<Data[]>()
  const wtf = getData()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data === undefined ? 0:data[0].subject.name}</Text>
      <Text>{'과목은'+route.params?.subject.name}</Text>
      <button onClick={async()=>{let temp=await getData(); setData(temp)}}>Hi</button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
