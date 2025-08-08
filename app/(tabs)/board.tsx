import { FlatList, StyleSheet, View } from 'react-native';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';

const mockPosts = [
  { id: '1', title: '봉사활동 후기', author: '학생1', date: '2024-01-15' },
  { id: '2', title: '봉사활동 모집', author: '기관1', date: '2024-01-14' },
  { id: '3', title: '봉사활동 안내', author: '관리자', date: '2024-01-13' },
];

export default function BoardPage() {
  const renderPost = ({ item }: { item: any }) => (
    <View style={styles.postItem}>
      <ThemedText style={styles.postTitle}>{item.title}</ThemedText>
      <ThemedText style={styles.postInfo}>
        {item.author} • {item.date}
      </ThemedText>
    </View>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>게시판</ThemedText>
      <FlatList
        data={mockPosts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    flex: 1,
  },
  postItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  postTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  postInfo: {
    fontSize: 12,
    opacity: 0.6,
  },
});
