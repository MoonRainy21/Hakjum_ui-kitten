import { Autocomplete, AutocompleteItem, Button } from "@ui-kitten/components";
import { useEffect, useState } from "react";
import { getSubjectData, SUBJECTDATA } from "../../storage/subjectData";

const filter = (item: Subject, query: string) => item.name.toLowerCase().includes(query.toLowerCase());

export function SubjectSelect(props: { setValue: any }) {
    const [value, setValue] = useState('')
    const [data, setData] = useState<Subject[]>(SUBJECTDATA)

    const renderOption = (item: Subject, index: number) => (
        <AutocompleteItem
            key={index}
            title={item.name}
        />
    );

    return (
        <Autocomplete
            placeholder="과목명 입력"
            value={value}
            onSelect={async (index) => { setValue(data[index].name); props.setValue(data[index]) }}
            onChangeText={(query) => {
                setValue(query)
                setData(SUBJECTDATA.filter(item => filter(item, query)))
            }}
        >
            {data.map(renderOption)}
        </Autocomplete>

    )
}