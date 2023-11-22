import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../constants';

const GradientButton = ({ onPress, title, style }) => {
    return (
      <TouchableOpacity onPress={onPress}>
          <LinearGradient 
            colors={['rgba(251, 159, 108, 0.99)', 'rgba(198, 108, 252, 0.99)', 'rgba(130, 71, 255, 0.99)']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            location={[0.10, 0.10, 10]}
            style={[style, {borderRadius: 12,flexShrink: 0}]}>
              <View style={styles.btnView}>
                <Text style={styles.buttonText}>{title}</Text>
              </View>
          </LinearGradient>
        
      </TouchableOpacity>
    );
  };

export default GradientButton