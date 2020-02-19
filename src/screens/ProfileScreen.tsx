import React, {FC} from 'react';
import Screen from '../components/Screen';
import {
  FlatList,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import theme from '../theme';
import ChevronLeftIcon from '../assets/icons/chevron-left.svg';
import {useUserStore} from '../stores/UserStore';
import {useNavigation} from '@react-navigation/native';

type MenuItem = {title: string; subtitle: string};

const PROFILE_MENU_ITEMS: MenuItem[] = [
  {title: 'My tickets', subtitle: 'Already have 12 tickets'},
  {title: 'Payment methods', subtitle: 'Visa  **34'},
  {title: 'Promo codes', subtitle: 'You have special promo codes'},
  {title: 'My reviews', subtitle: 'Reviews for 4 movies'},
  {title: 'Settings', subtitle: 'Notifications, password'},
];

const MenuItem: FC<MenuItem> = ({title, subtitle}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.item}>
      <View>
        <Text style={theme.typography.h3}>{title}</Text>
        <Text style={theme.typography.small}>{subtitle}</Text>
      </View>
      <ChevronLeftIcon />
    </TouchableOpacity>
  );
};

const MenuHeader: FC = () => {
  const {user} = useUserStore();

  if (!user) {
    return null;
  }
  return (
    <View style={styles.header}>
      {user.name && <Text style={theme.typography.h2}>{user.name}</Text>}
      {user.email && <Text style={theme.typography.p}>{user.email}</Text>}
    </View>
  );
};

const MenuFooter: FC = () => {
  const navigation = useNavigation();
  const {signOut} = useUserStore();

  async function handleSignOut() {
    try {
      await signOut();
      navigation.navigate('Welcome');
    } catch (e) {
      console.log('Error signing out', e);
    }
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleSignOut}
      style={styles.footer}>
      <Text style={[theme.typography.h3, styles.footerText]}>Sign out</Text>
    </TouchableOpacity>
  );
};

const ProfileScreen: FC = () => {
  return (
    <Screen>
      <Text style={theme.typography.h1}>My Profile</Text>
      <FlatList
        data={PROFILE_MENU_ITEMS}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<MenuHeader />}
        ListFooterComponent={<MenuFooter />}
        renderItem={({item}) => <MenuItem {...item} />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,
  header: {
    paddingVertical: 14 * 2,
  } as ViewStyle,
  footer: {
    paddingVertical: 14 * 1.5,
  } as ViewStyle,
  footerText: {
    fontWeight: 'bold',
    color: theme.colors.error,
  } as TextStyle,
});

export default ProfileScreen;
