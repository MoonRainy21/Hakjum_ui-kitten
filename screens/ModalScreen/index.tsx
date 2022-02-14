import { Button } from '@ui-kitten/components';
import { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { getData } from '../../storage/data';
import { RootStackScreenProps } from '../../types';

export default function ModalScreen({ route, navigation }: RootStackScreenProps<'Modal'>) {
  const data = route.params
  if (data === undefined) {
    return (
      <>
        <Text>Error Occured</Text>
        <Button onPress={() => navigation.navigate('Root')}>Go Back to Root</Button>
      </>
    )
  }
  return (
    <View style={styles.container}>
      <Text>{'과목 : ' + data.subject.name}</Text>
      <Text>{'중간 점수 : ' +data.midscore}</Text>
      <Text>{'기말 점수 : ' +data.finscore}</Text>
      <Text>{'수행 점수 : ' +data.actscore}</Text>

      <Text>{'최종 학점 : '+1}</Text>
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
