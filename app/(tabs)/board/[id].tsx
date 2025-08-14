// *** 게시글 하나의 상세 페이지 ***

import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import TopHeaderBoard from '../../../components/TopHeaderBoard';


export default function BoardDetail() {
  const { id } = useLocalSearchParams();

  // 추후 서버에서 id에 맞는 글 데이터를 가져와야 함
  // 지금은 예시용 하드코딩
  const post = {
    id,
    title: `게시글 ${id}의 제목`,
    date: "2025-08-14",
    content: "여기는 게시글 상세 내용입니다.",
  };

  return (
    <>
    <TopHeaderBoard
      showBackButton={true}
      logoText='섬포터즈 게시판'
    />
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.date}>{post.date}</Text>
      <Text style={styles.content}>{post.content}</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold" },
  date: { fontSize: 14, color: "gray", marginBottom: 10 },
  content: { fontSize: 16, lineHeight: 24 },
});