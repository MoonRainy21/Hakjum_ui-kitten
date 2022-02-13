import { Autocomplete, AutocompleteItem, Button } from "@ui-kitten/components";
import { useState } from "react";

interface Subject {
    name: string
}

const Subjects = [
    { name: '물리1' },
    { name: '물리2' },
    { name: '물리3' },
    { name: '물리4' },
    { name: '수학1' },
    { name: '수학2' },
    { name: '수학3' },
    { name: '수학4' },
]

const filter = (item: Subject, query: string) => item.name.toLowerCase().includes(query.toLowerCase());

export function SubjectSelect(props: { setValue: any }) {
    const [value, setValue] = useState('')
    const [data, setData] = useState(Subjects)

    const renderOption = (item: Subject, index: number) => (
        <AutocompleteItem
            key={index}
            title={item.name}
        />
    );

    const temp = (item: string) => { props.setValue({name:item}) }

    return (
        <>
            <Autocomplete
                placeholder="과목명 입력"
                value={value}
                onSelect={async (index) => { setValue(Subjects[index].name); temp(Subjects[index].name) }}
                onChangeText={(query) => {
                    setValue(query)
                    setData(Subjects.filter(item => filter(item, query)))
                }}
            >
                {data.map(renderOption)}
            </Autocomplete>
        </>
    )
}