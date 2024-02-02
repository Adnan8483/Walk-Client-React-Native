import React from 'react';
import { View, StyleSheet, Pressable, Modal } from 'react-native';
import {
    Switch,
    Checkbox,
    TextInput,
    RadioButton,
    SegmentedButtons,
    Text,
} from "react-native-paper";


export const LinearScale = ({ question }) => {
    return (
        <View style={styles.container}>
            <Text
                style={styles.question}
                variant="titleMedium"
            >
                {question}
            </Text>
            <CandidateRating />
            {/* <Text style={styles.label, { marginLeft: 10, marginRight: 10, fontSize: 15, letterSpacing: .45, color: 'rgba(0, 0, 0, 0.87)', fontWeight: 500 }} variant="titleLarge" >{y.question}
            </Text>
            <View style={styles.container, { marginLeft: 20, marginTop: 10, marginRight: 20, borderRadius: 10, alignItems: 'center' }}>
                <View >
                    <View style={styles.containes}>
                        {y.value.map((number, index) => (
                            <TouchableOpacity

                                style={[
                                    styles.boxs,
                                    index === 0 && styles.firstBox,
                                    index === y.value.length - 1 && styles.lastBox,
                                    y.selected === index && { backgroundColor: 'rgba(15, 107, 245, 0.08)', },
                                ]}
                                key={'ind_' + index}
                                onPress={() => handleLinearSelect(y.id, index)}
                            >
                                <Text style={styles.numberText}>{number}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

            </View> */}

        </View>
    );
}

const CandidateRating = () => {
    const [value, setValue] = React.useState();

    console.log("rating value:-",value)

    return (
        <SegmentedButtons
            key={value}
            value={value}
            onValueChange={setValue}
            style={styles.segments}
            buttons={[
                {
                    value: "1",
                    label: "1",
                    style: [styles.segmentedNumberButton, value == 1 ? {backgroundColor:"#DDF4FC"} : null],
                },
                {
                    value: "2",
                    label: "2",
                    style: [styles.segmentedNumberButton, value == 2 ? {backgroundColor:"#DDF4FC"} : null],
                },
                {
                    value: "3",
                    label: "3",
                    style: [styles.segmentedNumberButton, value == 3 ? {backgroundColor:"#DDF4FC"} : null],
                },
                {
                    value: "4",
                    label: "4",
                    style: [styles.segmentedNumberButton, value == 4 ? {backgroundColor:"#DDF4FC"} : null],
                },
                {
                    value: "5",
                    label: "5",
                    style: [styles.segmentedNumberButton, value == 5 ? {backgroundColor:"#DDF4FC"} : null],
                },
            ]}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.2,
        borderRadius: 10,
        padding: 10,
        borderColor: "black",
        marginVertical: 5
    },
    question: {
        margin: 5,
        marginBottom: 10
    },
    segments: {
        // backgroundColor:"red",
        padding: 20,
        width: "95%",         
        flexDirection: "row", 
        alignSelf: "center"        
    },
    segmentedNumberButton: {
        flex: 1,
        minWidth: "10%",
    },
    segmentedNoReponseButton: {
        flex: 8,
        minWidth: "10%",
    },
})


