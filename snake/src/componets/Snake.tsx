import { Fragment } from "react";
import {Coordinate} from "../types/types";
import { View,StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


interface SnakeProps{
    snake: Coordinate[];
}



export default function Snake ({snake}: SnakeProps):JSX.Element{
    return(
        <Fragment>
           
            {snake.map((segment: Coordinate, index: number) => {
                const segmentSyle = {
                    left: segment.x * 10,
                    top: segment.y * 10,
                };
                return <View key={index} style={[styles.snake, segmentSyle]} />
            })}

        </Fragment>
    )
}

const styles = StyleSheet.create({
    snake:{
        width:15,
        height:15,
        borderRadius: 7,
        backgroundColor: Colors.primary,
        position: "absolute",
    }
})