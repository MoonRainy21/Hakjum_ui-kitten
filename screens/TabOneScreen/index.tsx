import { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { Savedata } from './Savedata';
import { ScoreInput } from './ScoreInput';
import { SubjectSelect } from './SubjectSelect';

interface Subject {
  name: string
}

interface Data {
  subject: Subject
  midscore: number
  finscore: number
  actscore: number
}

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [subject, setSubject] = useState<Subject>({ name: 'default' })
  const [midscore, setMidscore] = useState<string>('0')
  const [finscore, setFinscore] = useState<string>('0')
  const [actscore, setActscore] = useState<string>('0')

  const data: Data = {
    subject: subject,
    midscore: Number(midscore),
    finscore: Number(finscore),
    actscore: Number(actscore),
  }

  return (
    <View style={styles.container}>
      <SubjectSelect setValue={setSubject} />
      <ScoreInput test={{ name: '중간고사', portion: '35' }} setValue={setMidscore} />
      <ScoreInput test={{ name: '기말고사', portion: '35' }} setValue={setFinscore} />
      <ScoreInput test={{ name: '수행평가', portion: '35' }} setValue={setActscore} />
      <Pressable
        onPress={async () => {
          await Savedata(data)
          navigation.navigate('Modal', { subject: subject, midscore: Number(midscore), finscore: Number(finscore), actscore: Number(actscore) });
        }}
        style={[styles.button, { backgroundColor: '#000066', width: '30%', marginTop: 20 }]}
      >
        <Text style={{ color: 'white', fontSize: 15 }}>계산하기!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
});
