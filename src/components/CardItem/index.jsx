import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import style from "./style";

function CardItem({ index, item }) {
    return (
        <View style={style.previewSearchersCard} key={index}>
            <>
                <View style={style.divisor} />
            </>
            <View style={style.infoPositionCard}>
                <View>
                    {
                        item.components._type === "city" || item.components._type === "neighbourhood" ?
                            <Text style={style.textCityName}>{item.components.city === undefined ? item.components.town : item.components.city}</Text>
                            :
                            <Text style={style.textCityName}>{item.components.village === undefined ? item.components.town : item.components.village}</Text>
                        // <Text style={style.textCityName}>{item.components.state}</Text>
                    }
                    <Text style={{ ...style.textCityName, fontWeight: "100", }}>{item.components.state}, {item.components.country}</Text>
                </View>
                <FontAwesome5 name="arrow-right" size={20} color={"#dc3545"} />
            </View>
        </View>
    )
}

export default CardItem;