import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { customFonts } from '../../constants/fonts';

export default function SignupAgencyScreen() {
    const router = useRouter();
    const [fontsLoaded] = useFonts(customFonts);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <LinearGradient
        colors={['#FFFEDD', '#FFFFFF', '#ABDCFF']}
        locations={[0, 0.5, 0.99]}
        style={styles.container}
        >
            <View>
                <Text style={styles.title}>학생 회원가입</Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'godoMaum',
        fontSize: 50,
    }
})