import { Input } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../../components/Themed";
import { selectUser, setUsername } from "../../redux";

export function UserInput() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    return (
        <View style={{width:'100%', alignItems:'center'}}>
            <Text style={{ width: '70%' }}> 이름을 입력하세요</Text>
            <Input style={{ width: '70%' }} value={user.username} onChangeText={nextValue => dispatch(setUsername(nextValue))} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
