import { StyleSheet } from 'react-native';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';
import TopHeaderMain from '../../components/TopHeaderMain';

export default function MainPage() {
  return (
    <>
    <TopHeaderMain
      // 상단바에서 뒤로가기가 없을 때는 false로 설정해 줍니다.
      showBackButton={true}    
      logoText='섬포터즈'
      // api를 통해 유저의 성별을 가져오고, 그에 따른 그림을 보여줍니다.
      profileImageSource={require('../../assets/images/men.png')}
      gender='agency'
    />

      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>메인페이지</ThemedText>
        <ThemedText style={styles.subtitle}>봉사활동 메인 화면</ThemedText>
      </ThemedView>
    </>
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
