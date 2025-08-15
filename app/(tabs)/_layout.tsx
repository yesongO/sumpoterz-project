import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import { Image, StyleSheet, View } from 'react-native';

const icons = {
  home: require('@/components/common/home.png'),
  calendar: require('@/components/common/calendar.png'),
  bell: require('@/components/common/bell.png'),
  user: require('@/components/common/user.png'),
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const renderIcon = (source: any, color: string) => (
    <View style={styles.tabIcon}>
      <Image source={source} style={[styles.iconImage, { tintColor: color }]} resizeMode="contain" />
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#f5f5f5',
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 12,
          paddingTop: 8,
          elevation: 0,
          shadowOpacity: 0,
          position: 'absolute',
          bottom: 20,
          left: 16,
          right: 16,
          borderRadius: 20,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          color: '#000',
          marginTop: 4,
        },
        tabBarIconStyle: {
          marginBottom: 0,
        },
        tabBarItemStyle: {
          paddingHorizontal: 0,
        },
      }}
    >
      <Tabs.Screen
        name="main"
        options={{
          title: '홈',
          tabBarIcon: ({ color }) => renderIcon(icons.home, color),
        }}
      />
      <Tabs.Screen
        name="board"
        options={{
          title: '게시판',
          tabBarIcon: ({ color }) => renderIcon(icons.calendar, color),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: '알림',
          tabBarIcon: ({ color }) => renderIcon(icons.bell, color),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: '프로필',
          tabBarIcon: ({ color }) => renderIcon(icons.user, color),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
});
