import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import AgencyView from '../components/volunteer/AgencyView';
import StudentView from '../components/volunteer/StudentView';
import { useAuth } from '../context/AuthContext';

interface VolunteerData {
  id: string;
  title: string;
  organization: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: 'available' | 'applied' | 'completed' | 'active' | 'closed';
  applicantsCount?: number;
  maxApplicants?: number;
}

export default function VolunteerDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { user } = useAuth();
  const [volunteer, setVolunteer] = useState<VolunteerData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadVolunteer();
  }, [id]);

  const loadVolunteer = async () => {
    try {
      setIsLoading(true);
      // 여기서 실제 봉사활동 상세 API 호출
      const mockVolunteer: VolunteerData = {
        id: id || '1',
        title: '노인정 봉사활동',
        organization: '서울시립복지관',
        date: '2024-01-20',
        time: '09:00 - 12:00',
        location: '서울시 강남구',
        description: '노인정에서 어르신들과 함께하는 봉사활동입니다. 대화 나누기, 간단한 놀이 활동 등을 통해 어르신들에게 즐거움을 드리는 시간을 가집니다.',
        status: 'available',
        applicantsCount: 5,
        maxApplicants: 10,
      };
      setVolunteer(mockVolunteer);
    } catch (error) {
      Alert.alert('오류', '봉사활동 정보를 불러오는데 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleApply = () => {
    Alert.alert('신청 완료', '봉사활동 신청이 완료되었습니다.');
  };

  const handleViewDetails = () => {
    Alert.alert('상세 정보', '봉사활동 상세 정보입니다.');
  };

  const handleEdit = () => {
    Alert.alert('수정', '봉사활동 수정 페이지로 이동합니다.');
  };

  const handleDelete = () => {
    Alert.alert(
      '삭제 확인',
      '정말로 이 봉사활동을 삭제하시겠습니까?',
      [
        { text: '취소', style: 'cancel' },
        { text: '삭제', style: 'destructive', onPress: () => {
          Alert.alert('성공', '봉사활동이 삭제되었습니다.');
        }},
      ]
    );
  };

  const handleClose = () => {
    Alert.alert('마감', '봉사활동이 마감되었습니다.');
  };

  const handleViewApplicants = () => {
    Alert.alert('신청자 목록', '신청자 목록을 확인합니다.');
  };

  if (isLoading) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.loadingText}>로딩 중...</ThemedText>
      </ThemedView>
    );
  }

  if (!volunteer) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.errorText}>봉사활동을 찾을 수 없습니다.</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      {user?.type === 'student' ? (
        <StudentView
          volunteer={volunteer}
          onApply={handleApply}
          onViewDetails={handleViewDetails}
        />
      ) : (
        <AgencyView
          volunteer={volunteer}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onClose={handleClose}
          onViewApplicants={handleViewApplicants}
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
