import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemedText } from '../../../components/ThemedText';
import { ThemedView } from '../../../components/ThemedView';
import TopHeaderStudent from '../../../components/TopHeaderStudent';

export default function StudentProfile() {
  return (
    <>
    <TopHeaderStudent
      showBackButton={true}
      logoText='나의페이지'
    />
    
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ThemedText style={styles.title}>학생 마이페이지</ThemedText>
        
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>내 정보</ThemedText>
          <View style={styles.infoItem}>
            <ThemedText style={styles.label}>이름:</ThemedText>
            <ThemedText style={styles.value}>홍길동</ThemedText>
          </View>
          <View style={styles.infoItem}>
            <ThemedText style={styles.label}>학교:</ThemedText>
            <ThemedText style={styles.value}>서울고등학교</ThemedText>
          </View>
          <View style={styles.infoItem}>
            <ThemedText style={styles.label}>학년:</ThemedText>
            <ThemedText style={styles.value}>2학년</ThemedText>
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>봉사활동 현황</ThemedText>
          <View style={styles.infoItem}>
            <ThemedText style={styles.label}>총 봉사시간:</ThemedText>
            <ThemedText style={styles.value}>45시간</ThemedText>
          </View>
          <View style={styles.infoItem}>
            <ThemedText style={styles.label}>참여한 봉사:</ThemedText>
            <ThemedText style={styles.value}>12건</ThemedText>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#007AFF',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    opacity: 0.8,
  },
});
