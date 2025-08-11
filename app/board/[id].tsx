import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';
import Button from '../../components/common/Button';

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  views: number;
}

export default function BoardDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPost();
  }, [id]);

  const loadPost = async () => {
    try {
      setIsLoading(true);
      // 여기서 실제 게시글 상세 API 호출
      // 예시로 하드코딩된 데이터 사용
      const mockPost: Post = {
        id: id || '1',
        title: '봉사활동 후기',
        content: '이번 봉사활동을 통해 많은 것을 배웠습니다. 지역사회에 기여할 수 있어서 정말 의미있는 시간이었고, 앞으로도 꾸준히 참여하고 싶습니다.',
        author: '학생1',
        date: '2024-01-15',
        views: 42,
      };
      setPost(mockPost);
    } catch (error) {
      Alert.alert('오류', '게시글을 불러오는데 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = () => {
    Alert.alert(
      '삭제 확인',
      '정말로 이 게시글을 삭제하시겠습니까?',
      [
        { text: '취소', style: 'cancel' },
        { text: '삭제', style: 'destructive', onPress: () => {
          // 실제 삭제 로직
          Alert.alert('성공', '게시글이 삭제되었습니다.');
        }},
      ]
    );
  };

  if (isLoading) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.loadingText}>로딩 중...</ThemedText>
      </ThemedView>
    );
  }

  if (!post) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.errorText}>게시글을 찾을 수 없습니다.</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ThemedText style={styles.title}>{post.title}</ThemedText>
        
        <View style={styles.metaInfo}>
          <ThemedText style={styles.author}>작성자: {post.author}</ThemedText>
          <ThemedText style={styles.date}>{post.date}</ThemedText>
          <ThemedText style={styles.views}>조회수: {post.views}</ThemedText>
        </View>

        <View style={styles.contentContainer}>
          <ThemedText style={styles.content}>{post.content}</ThemedText>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="수정하기"
            onPress={() => Alert.alert('알림', '수정 기능은 준비 중입니다.')}
            variant="outline"
            style={styles.editButton}
          />
          <Button
            title="삭제하기"
            onPress={handleDelete}
            variant="secondary"
            style={styles.deleteButton}
          />
        </View>
      </ScrollView>
    </ThemedView>
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
  loadingText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
    color: '#FF3B30',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  metaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  author: {
    fontSize: 14,
    opacity: 0.7,
  },
  date: {
    fontSize: 14,
    opacity: 0.7,
  },
  views: {
    fontSize: 14,
    opacity: 0.7,
  },
  contentContainer: {
    marginBottom: 30,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.8,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  editButton: {
    flex: 1,
  },
  deleteButton: {
    flex: 1,
  },
});
