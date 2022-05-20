import {React, useState, useEffect} from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Torch from 'react-native-torch'
import RNShake from 'react-native-shake'

// import { Container } from './styles';

const FlashLigth = () => {

    const [toggle, setToggle] = useState(true);
    const handleChangeToggle = ()=> setToggle(oldToggle => !oldToggle);

    useEffect(() => {
        Torch.switchState(true);
    }, [toggle]);
    useEffect(() => {
        const subscription = RNShake.addListener(() =>{
            setToggle(oldToggle => !oldToggle);
        });
    });

    return (
       <View style={toggle ? style.containerWhite : style.containerBlack}>
            <TouchableOpacity onPress={handleChangeToggle}>
                <Image
                    style={toggle ? style.containerOn : style.containeOff}
                    source={
                        toggle
                            ? require('../../../assets/icons/Acesa.png')
                            : require('../../../assets/icons/Apagada.png')
                    }
                />
            </TouchableOpacity>
        </View>
    );
}

export default FlashLigth;

const style = StyleSheet.create({
    containerBlack: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerWhite: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightingOn: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 80,
        height: 80,
    },
    lightingOff: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 80,
        height: 80,
    },
});