import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { customFonts } from '../constants/fonts';

export default function SelectTypeScreen() {
    const router = useRouter();
    const [fontsLoaded] = useFonts(customFonts);

    if (!fontsLoaded) {
        return (
            <View style={styles.loadingContainer}>
                <Text>로딩 중...</Text>
            </View>
        );
    }

    const handleStudentSelect = () => {
        router.push('/signup/student' as any);
    };

    const handleAgencySelect = () => {
        router.push('/signup/agency' as any);
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <LinearGradient
            colors={['#FFFEDD', '#FFFFFF', '#ABDCFF']}
            locations={[0, 0.5, 0.99]}
            style={styles.container}
        >
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                    <Text style={styles.backButtonText}>← 뒤로</Text>
                </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.title}>선택해 주세요</Text>
                
                    <View style={styles.cardContainer}>
                        <TouchableOpacity style={styles.card} onPress={handleStudentSelect}>
                            <View style={styles.cardContent}>
                                <View style={styles.studentIcon}>
                                    <View style={styles.studentCharacter}>
                                        <View style={styles.head} />
                                        <View style={styles.body} />
                                        <View style={styles.books}>
                                            <View style={[styles.book, styles.book1]} />
                                            <View style={[styles.book, styles.book2]} />
                                            <View style={[styles.book, styles.book3]} />
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.cardText}>학생이에요</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.card} onPress={handleAgencySelect}>
                            <View style={styles.cardContent}>
                                <View style={styles.agencyIcon}>
                                    <View style={styles.buildings}>
                                        <View style={[styles.building, styles.building1]} />
                                        <View style={[styles.building, styles.building2]} />
                                        <View style={[styles.building, styles.building3]} />
                                    </View>
                                </View>
                                <Text style={styles.cardText}>기관이에요</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 30,
        paddingTop: 60,
        paddingBottom: 40,
    },
    backButton: {
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    backButtonText: {
        fontFamily: 'inkLipquid',
        fontSize: 26,
        color: '#484848',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFEDD',
    },
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        marginBottom: 100,
    },
    title: {
        fontFamily: 'inkLipquid',
        fontSize: 40,
        color: '#000000',
        marginBottom: 60,
        textAlign: 'center',
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        gap: 20,
    },
    card: {
        width: 140,
        height: 140,
        backgroundColor: '#FFFFFF',
        borderRadius: 70,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardContent: {
        alignItems: 'center',
    },
    studentIcon: {
        marginBottom: 10,
    },
    studentCharacter: {
        alignItems: 'center',
    },
    head: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#FFB74D',
        marginBottom: 5,
    },
    body: {
        width: 40,
        height: 50,
        backgroundColor: '#FF9800',
        borderRadius: 20,
        marginBottom: 10,
    },
    books: {
        flexDirection: 'row',
    },
    book: {
        width: 12,
        height: 15,
        borderRadius: 2,
        marginHorizontal: 1,
    },
    book1: {
        backgroundColor: '#4CAF50',
    },
    book2: {
        backgroundColor: '#E91E63',
    },
    book3: {
        backgroundColor: '#9C27B0',
    },
    agencyIcon: {
        marginBottom: 10,
    },
    buildings: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    building: {
        borderRadius: 4,
        marginHorizontal: 2,
    },
    building1: {
        width: 20,
        height: 35,
        backgroundColor: '#9C27B0',
    },
    building2: {
        width: 25,
        height: 45,
        backgroundColor: '#2196F3',
    },
    building3: {
        width: 18,
        height: 30,
        backgroundColor: '#03A9F4',
    },
    cardText: {
        fontFamily: 'godoMaum',
        fontSize: 16,
        color: '#000000',
        textAlign: 'center',
    },
});