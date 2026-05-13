import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { Colors } from '../theme/colors';

type Props = {
  title: string;
  onBack?: () => void;
  backIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightPress?: () => void;
  variant?: 'light' | 'dark';
  iconColor?: string;
};

const SmartBikeHeader = ({
  title,
  onBack,
  backIcon,
  rightIcon,
  onRightPress,
  variant = 'dark',
  iconColor,
}: Props) => {
  const textColor = variant === 'dark' ? Colors.white : Colors.black;
  const resolvedIconColor = iconColor ?? (variant === 'dark' ? Colors.white : Colors.black);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={onBack}
        activeOpacity={0.85}
        disabled={!onBack}
      >
        {backIcon ?? <ChevronLeft size={20} color={resolvedIconColor} />}
      </TouchableOpacity>
      <Text style={[styles.title, { color: textColor }]} numberOfLines={1}>
        {title}
      </Text>
      {rightIcon ? (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onRightPress}
          activeOpacity={0.85}
        >
          {rightIcon}
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 12,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: Colors.figmaPrimary,
    borderWidth: 1,
    borderColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  placeholder: {
    width: 44,
    height: 44,
  },
});

export default SmartBikeHeader;
