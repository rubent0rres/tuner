import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faUser, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../../res';

const {width, height} = Dimensions.get('window');

const tunerModeOptions = ['-20', 'Estandar', '+20'];

const TunerScreen = () => {
  const [selectInstrument, setSelectInstrument] = useState();
  const [selectMode, setSelectMode] = useState();

  const tunerOptionActive = useRef();
  useEffect(() => {
    tunerOptionActive.current.snapToItem(1);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="white-content"
        backgroundColor={Colors.backgroundLight}
      />
      <LinearGradient
        colors={[Colors.backgroundLight, Colors.backgroundBlack]}
        style={styles.gradient}>
        <View style={styles.header}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faBars} color="white" size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.pickerInstrument}>
            <Text style={styles.textColor}>Bajo Quinto</Text>
            <FontAwesomeIcon icon={faCaretDown} color="white" size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faUser} color="white" size={22} />
          </TouchableOpacity>
        </View>
        <View style={styles.tunerMode}>
          <LinearGradient
            start={{x: 0.05, y: 1}}
            colors={[Colors.backgroundLight, Colors.transparent]}
            style={styles.gradientSelectMode}
          />
          <Carousel
            layout={'default'}
            ref={tunerOptionActive}
            data={tunerModeOptions}
            renderItem={({item}) => (
              <View style={styles.containerTunerMode}>
                <Text style={styles.textTunerMode}>{item}</Text>
              </View>
            )}
            sliderWidth={width * 1}
            itemWidth={width * 0.32}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    width: width * 1,
  },
  header: {
    display: 'flex',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: width * 1,
    paddingHorizontal: width * 0.04,
  },
  pickerInstrument: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textColor: {color: '#fff', fontSize: 18, marginRight: width * 0.02},
  tunerMode: {
    marginTop: height * 0.02,
    width: width * 1,
  },
  containerTunerMode: {
    display: 'flex',
    width: width * 0.3,
    paddingVertical: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'relative',
  },
  textTunerMode: {
    fontSize: 17,
    color: 'white',
  },
});
export default TunerScreen;
