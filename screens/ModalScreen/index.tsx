import { Button } from '@ui-kitten/components';
import { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { getData } from '../../storage/data';
import { RootStackScreenProps } from '../../types';
import { DescribeData } from './DescribeData';

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
      <DescribeData data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
