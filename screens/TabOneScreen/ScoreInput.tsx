import { Input } from "@ui-kitten/components";
import { useState } from "react";
import { Text, View } from "../../components/Themed";

interface Test {
    name: string
    portion: string
}

export function ScoreInput(props: {test:Test, setValue:any, style?:StyleSheet}) {
    const [score, setScore] = useState<string>('')
    return(
        <View>
            <Text style={{marginTop:20}}>{props.test.name}({props.test.portion}%)</Text>
            <Input value={score} onChangeText={nextValue => {setScore(nextValue); props.setValue(nextValue)}} placeholder={props.test.name+' 점수'}/>
        </View>
    )
}