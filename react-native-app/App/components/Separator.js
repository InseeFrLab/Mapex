import {StyleSheet, View} from 'react-native';

const Separator = () => {
    const styles = StyleSheet.create({
        separator: {
          marginVertical: 8,
          borderBottomColor: '#737373',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }
        })
    return(
        <View style={styles.separator} />
    )
}
    



  

export default Separator;