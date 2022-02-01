import React from "react";
import { Animated } from "react-native";

export const FadeInView = ({ duration = 1500, ...props }) => {
    return (
        <Animated.View // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim, // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
};