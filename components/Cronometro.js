import React from 'react';
import {styles} from "./styles";
import {Text, View, Alert} from 'react-native';

class Cronometro extends React.Component{
    render() {
         return (
          <View style={styles.timerContainer}>
                <Text style={styles.timer}>{this.props.currentTime}</Text>
          </View>
            )
        }
    }

export default Cronometro