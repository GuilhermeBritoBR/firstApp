import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
return (
<View style={styles.container}>

<Text style={{fontWeight: 'bold',color: 'blue', fontSize: 30, textAlign: 'right', margin: 0,}}>Guilherme Santiago de Brito</Text>
<Text style={{fontWeight: 'bold',backgroundColor:'pink' ,color:'blue', fontSize: 20, textAlign: 'center', margin: 0,}}>Sala:7</Text>
<Text style={{fontWeight: 'bold',fontStyle:'italic',color: 'blue', fontSize: 25, textAlign: 'left', border: 'solid', borderWidth: 1, borderColor: 'black', margin: 0,}}>N:17</Text>
<Text style={{color: 'black', textAlign: 'center', fontSize: 30,}}>SENAI SP</Text>


</View>
)};


const styles = StyleSheet.create({
container: {

flex: 1,
justifyContent: 'center',
margin: 0,
display: 'flex',
},
});