import { Text, TextProps, View } from "../../components/Themed";
import { HakjumByData, RawScoreByData } from "./util";

function LargeText(props: TextProps) {
    const { style, ...otherProps } = props
    return <Text style={[style, { fontSize: 30 }]} {...otherProps} />
}

export function DescribeData(props: { data: Data }) {
    const data = props.data
    console.log(data)
    return (
        <View>
            <LargeText>{data.subject.name}</LargeText>
            <LargeText>중간성적: {data.midscore}</LargeText>
            <LargeText>기말성적: {data.finscore}</LargeText>
            <LargeText>수행성적: {data.actscore}</LargeText>
            <LargeText>학점: {RawScoreByData(data)}</LargeText>
            <LargeText>학점: {HakjumByData(data)}</LargeText>
        </View>
    )
}