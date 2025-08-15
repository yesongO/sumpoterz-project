import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TopHeaderMain from '../../components/TopHeaderMain';

export default function MainPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  
  const categories = ['전체', '교육', '환경', '문화', '복지', '동물'];
  
  // 로그아웃 처리
  const handleLogout = () => {
    Alert.alert(
      '로그아웃',
      '로그아웃 하시겠습니까?',
      [
        {
          text: '아니오',
          style: 'cancel',
        },
        {
          text: '예',
          onPress: () => {
            // 로그인 페이지로 이동
            router.push('/login');
          },
        },
      ]
    );
  };

  const events = [
    {
      id: 1,
      title: '한빛초등학교 AI교육봉사',
      date: '2025.10.08 ~ 10.10',
      location: '강화군 불은면 중앙로 삼성초등학교',
      category: '교육',
      image: require('../../assets/images/StudentsImage.png'),
    },
    {
      id: 2,
      title: '초등학생 코딩교육 봉사',
      date: '2025.10.15 ~ 10.17',
      location: '서울시 강남구 코딩아카데미',
      category: '교육',
      image: null,
    },
    {
      id: 3,
      title: '노인정 디지털 교육 봉사',
      date: '2025.10.20 ~ 10.22',
      location: '인천시 연수구 행복노인정',
      category: '교육',
      image: null,
    },
    {
      id: 4,
      title: '환경정리 및 플로깅 봉사',
      date: '2025.10.25 ~ 10.26',
      location: '한강공원 일대',
      category: '환경',
      image: null,
    },
    {
      id: 5,
      title: '도서관 독서지도 봉사',
      date: '2025.11.01 ~ 11.03',
      location: '서울시립도서관 강남분관',
      category: '문화',
      image: null,
    },
    {
      id: 6,
      title: '장애인 시설 방문 봉사',
      date: '2025.11.05 ~ 11.07',
      location: '인천시 장애인복지관',
      category: '복지',
      image: null,
    },
    {
      id: 7,
      title: '동물보호소 봉사활동',
      date: '2025.11.10 ~ 11.12',
      location: '경기도 수원시 동물보호센터',
      category: '동물',
      image: null,
    },
  ];

  // 검색 및 필터링된 이벤트 계산
  const filteredEvents = events.filter(event => {
    // 검색어 필터링
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        event.title.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query);
      
      if (!matchesSearch) return false;
    }

    // 카테고리 필터링
    if (selectedCategory !== '전체') {
      return event.category === selectedCategory;
    }

    return true;
  });

  // 검색어 입력 처리
  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
  };

  // 검색어 초기화
  const handleSearchClear = () => {
    setSearchQuery('');
  };

  const handleEventPress = (eventId: number) => {
    // 각 봉사활동별로 다른 상세페이지로 이동
    switch (eventId) {
      case 1:
        router.push('/volunteer/1'); // AI교육봉사 (기존)
        break;
      case 2:
        router.push('/volunteer/coding-education'); // 코딩교육
        break;
      case 3:
        router.push('/volunteer/digital-education'); // 디지털교육
        break;
      case 4:
        router.push('/volunteer/environment'); // 환경정리
        break;
      case 5:
        router.push('/volunteer/library'); // 도서관
        break;
      case 6:
        router.push('/volunteer/disability'); // 장애인시설
        break;
      case 7:
        router.push('/volunteer/animal'); // 동물보호소
        break;
      default:
        router.push(`/volunteer/${eventId}`);
    }
  };

  return (
    <>
      <TopHeaderMain
        showBackButton={true}
        logoText='섬포터즈'
        profileImageSource={require('../../assets/images/men.png')}
        gender='agency'
        onLogoutPress={handleLogout}
      />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* 검색바 */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Image source={require('../../assets/images/search.png')} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={handleSearchChange}
            />
            {searchQuery && (
              <TouchableOpacity onPress={handleSearchClear}>
                <Text style={styles.clearSearchIcon}>✕</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* 배너 */}
        <View style={styles.bannerContainer}>
          <View style={styles.banner}>
            <View style={styles.bannerContent}>
              <View style={styles.bannerText}>
                <Text style={styles.bannerTitle}>강화도 옹진군 유채마을</Text>
                <Text style={styles.bannerSubtitle}>노부부 스냅사진 찍어드리기</Text>
                <Text style={styles.bannerDate}>2025.11.12 ~ 11.20</Text>
              </View>
              <View style={styles.bannerImage}>
                <Text style={styles.bannerImagePlaceholder}>🎨</Text>
              </View>
            </View>
          </View>
          {/* 배너 인디케이터 */}
          <View style={styles.bannerIndicator}>
            {[1, 2, 3, 4, 5].map((dot, index) => (
              <View
                key={index}
                style={[
                  styles.indicatorDot,
                  index === 0 && styles.activeIndicatorDot
                ]}
              />
            ))}
          </View>
        </View>

        {/* 카테고리 필터 */}
        <View style={styles.categoryContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.categoryButton,
                  selectedCategory === category && styles.selectedCategoryButton
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category && styles.selectedCategoryText
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* 이벤트 리스트 */}
        <View style={styles.eventListContainer}>
          {filteredEvents.length === 0 ? (
            <Text style={styles.noEventsMessage}>
              검색 결과가 없습니다.
            </Text>
          ) : (
            filteredEvents.map((event, index) => (
              <View key={event.id} style={styles.eventItem}>
                <View style={styles.eventImageContainer}>
                  {event.image ? (
                    <Image source={event.image} style={styles.eventImage} />
                  ) : (
                    <View style={styles.eventImagePlaceholder} />
                  )}
                </View>
                <View style={styles.eventContent}>
                  <Text style={styles.eventTitle}>{event.title}</Text>
                  <Text style={styles.eventDate}>{event.date}</Text>
                  <Text style={styles.eventLocation}>{event.location}</Text>
                </View>
                <TouchableOpacity 
                  style={styles.viewMoreButton}
                  onPress={() => handleEventPress(event.id)}
                >
                  <Text style={styles.viewMoreText}>더보기</Text>
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  clearSearchIcon: {
    fontSize: 20,
    marginLeft: 10,
  },
  bannerContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  banner: {
    backgroundColor: '#fff9c4',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
  },
  bannerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerText: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  bannerSubtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  bannerDate: {
    fontSize: 14,
    color: '#666',
  },
  bannerImage: {
    width: 80,
    height: 80,
    backgroundColor: '#e8f5e8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImagePlaceholder: {
    fontSize: 40,
  },
  bannerIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeIndicatorDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#666',
  },
  categoryContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginRight: 10,
    backgroundColor: '#fff',
  },
  selectedCategoryButton: {
    backgroundColor: '#666',
    borderColor: '#666',
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  selectedCategoryText: {
    color: '#fff',
  },
  eventListContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100, // 하단 탭바 공간
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  eventImageContainer: {
    marginRight: 15,
  },
  eventImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  eventImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#e8f5e8',
  },
  eventContent: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  eventLocation: {
    fontSize: 14,
    color: '#666',
  },
  viewMoreButton: {
    backgroundColor: '#87ceeb',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
  },
  viewMoreText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  noEventsMessage: {
    textAlign: 'center',
    paddingVertical: 20,
    color: '#666',
    fontSize: 16,
  },
});
