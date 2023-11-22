import { Image, Text, TouchableOpacity, View } from 'react-native';
import { colors, images, styles } from '../constants';
import { GradientButton } from '../components';

export default function Launch() {
  return (
    <View style={styles.container}>
      <Image source={images.Group} resizeMode='stretch'/>
      <Text style={{color:colors.white,fontSize:39}}>Make Payments Much Easier in <Text style={{color:colors.firebase, fontWeight:700}}>one place</Text> </Text>
      <Text style={{color:colors.white,fontSize:19, paddingVertical:15  }}>Your money is safe & growing with us.</Text>
      <View style={{flexDirection:'row',  alignItems:'center', justifyContent:'space-between', paddingTop:20}}>
        <GradientButton onPress={()=> console.log("test")} title="Get Started" style={styles.btn1} />
        <TouchableOpacity>
            <Text style={styles.buttonText}>{'Skip >>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}