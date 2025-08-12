import { StyleSheet } from 'react-native';
import { ThemedText } from '../../../components/ThemedText';
import { ThemedView } from '../../../components/ThemedView';

export default function ProfileIndex() {
    return (
    <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>프로필 수정</ThemedText>
        <ThemedText style={styles.subtitle}>임시로 만들어놓은</ThemedText>
        <ThemedText style={styles.subtitle}>페이지</ThemedText>
    </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.7,
    },
});