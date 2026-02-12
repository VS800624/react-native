import React from "react";
import {View, StyleSheet} from 'react-native';

export default function CenteredScreen({
    children,
}: {
    children: React.ReactNode;
}){
    return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


// Purpose: Centers everything on screen , Reused in Login & File screens