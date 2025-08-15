import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TopHeaderMain from '../../components/TopHeaderMain';

export default function MainPage() {
  const [selectedCategory, setSelectedCategory] = useState('교육');
  const router = useRouter();
  
  const categories = ['교육', '예술', '음악', 'Category', 'Category'];
  
  const events = [
    {
      id: 1,
      title: '한빛초등학교 AI교육봉사',
      date: '2025.10.08 ~ 10.10',
      location: '강화군 불은면 중앙로 삼성초등학교',
      image: require('../../assets/images/men.png'), // 임시 이미지
    },
    {
      id: 2,
      title: '한빛초등학교 AI교육봉사',
      date: '2025.10.08 ~ 10.10',
      location: '강화군 불은면 중앙로 삼성초등학교',
      image: null,
    },
    {
      id: 3,
      title: '한빛초등학교 AI교육봉사',
      date: '2025.10.08 ~ 10.10',
      location: '강화군 불은면 중앙로 삼성초등학교',
      image: null,
    },
    {
      id: 4,
      title: '한빛초등학교 AI교육봉사',
      date: '2025.10.08 ~ 10.10',
      location: '강화군 불은면 중앙로 삼성초등학교',
      image: null,
    },
    {
      id: 5,
      title: '한빛초등학교 AI교육봉사',
      date: '2025.10.08 ~ 10.10',
      location: '강화군 불은면 중앙로 삼성초등학교',
      image: null,
    },
  ];

  const handleEventPress = (eventId: number) => {
    router.push(`/volunteer/${eventId}`);
  };

  return (
    <>
      <TopHeaderMain
        showBackButton={false}
        logoText='섬포터즈'
        profileImageSource={require('../../assets/images/men.png')}
        gender='agency'
      />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* 검색바 */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#999"
            />
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
          {events.map((event, index) => (
            <TouchableOpacity 
              key={event.id} 
              style={styles.eventItem}
              onPress={() => handleEventPress(event.id)}
            >
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
              <TouchableOpacity style={styles.viewMoreButton}>
                <Text style={styles.viewMoreText}>더보기</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
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
    fontSize: 18,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
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
});
