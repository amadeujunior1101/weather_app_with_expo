import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import config from "../../../config";
import * as Location from "expo-location";

import { useDispatch, useSelector } from "react-redux";
import { addNewSearch } from "../../store/PreviewSearchers/PreviewSearchers.actions";

import CardItem from "../../components/CardItem"

import style from "./style";

const Main = () => {
    const dispatch = useDispatch();

    const result = useSelector((state) => state.preview);

    const [cityName, setCityName] = useState("")
    const [previewSearchers, setPreviewSearchers] = useState([])
    const [loading, setLoading] = useState(false)

    function handle(event) {
        setCityName(event)
    }

    async function find() {
        if (cityName.length === 0) return alert("Informe o nome da cidade.")
        setLoading(true)
        try {

            const cageDataURL = `${config.BASE_OPENCAGEDATA_URL}key=${config.OPENCAGEDATA_API_KEY}&q=${cityName}`;

            const response = await fetch(cageDataURL);

            const result = await response.json();

            if (result.results.length > 0) {
                setLoading(false)
                setCityName("")

                dispatch(addNewSearch(...result.results));
                loadResultRedux();
            } else {
                setLoading(false)
                alert("Cidade não encontrada.")
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    function loadResultRedux() {
        return setPreviewSearchers([...result])
    }

    async function permission() {
        setLoading(true)
        try {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== "granted") {
                setErrorMessage("Access to location is needed to run the app");
                return;
            }
            const location = await Location.getCurrentPositionAsync();

            const { latitude, longitude } = location.coords;

            const cageDataURL = `${config.BASE_OPENCAGEDATA_URL}key=${config.OPENCAGEDATA_API_KEY}&q=${latitude}, ${longitude}`;
            const response = await fetch(cageDataURL);

            const result = await response.json();

            if (result.results.length > 0) {
                setLoading(false)
                // setPreviewSearchers([...result.results, ...previewSearchers])
                dispatch(addNewSearch(...result.results));
                loadResultRedux();
            } else {
                setLoading(false)
                alert("Cidade não encontrada.")
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            {
                loading === true &&
                <View style={style.loading}>
                    <Text style={{ fontSize: 20, color: "#FFF" }}>Aguarde...</Text>
                </View>
            }
            <View style={style.wrapper}>
                <Text style={style.titleInput}>Type your location here:</Text>
                <View style={style.boxInputCityOfName}>
                    <TextInput
                        placeholder="city of name?"
                        style={style.inputCityOfName}
                        autoCompleteType="name"
                        autoFocus={true}
                        onChangeText={(text) => handle(text)}
                        value={cityName}
                    />
                </View>

                <View style={style.boxButtons}>
                    <TouchableOpacity style={style.button} onPress={() => find()}>
                        <Text style={style.textButtonSubmit}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button} onPress={() => permission()}>
                        <FontAwesome5 name="crosshairs" size={30} color={"#FFF"} />
                    </TouchableOpacity>
                </View>

                <Text style={style.textTitlePreviews}>Preview Searchers</Text>

                <ScrollView style={{ height: 280 }}>
                    {
                        previewSearchers.map((item, index) => {
                            return (
                                index <= 2 &&
                                <CardItem index={index} item={item} key={index} />
                            )
                        })
                    }
                </ScrollView>

            </View>
        </>
    );
}

export default Main;