import { StyleSheet } from 'react-native';
import { ThemedText } from '../../../components/ThemedText';
import { ThemedView } from '../../../components/ThemedView';

export default function ProfileIndex() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>프로필</ThemedText>
      <ThemedText style={styles.subtitle}>기관으로 로그인 시 기관페이지가 뜨고</ThemedText>
      <ThemedText style={styles.subtitle}>학생으로 로그인 시 나의페이지가 뜨게됩니다.</ThemedText>
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

// import Agency from './agency';
// import Student from './student';
// import { useUserType } from '../hooks/useUserType'; // 예시

// export default function ProfileIndex() {
//   const userType = useUserType(); // 'agency' or 'student'

//   return userType === 'agency' ? <Agency /> : <Student />;
// }
