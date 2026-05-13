import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Colors } from '../theme/colors';

type RightAction = {
  icon: React.ReactNode;
  onPress?: () => void;
};

type BusTopBarProps = {
  title: string;
  subtitle?: string;
  leftIcon?: React.ReactNode;
  onLeftPress?: () => void;
  rightActions?: RightAction[];
};

const BusTopBar = ({
  title,
  subtitle,
  leftIcon,
  onLeftPress,
  rightActions = [],
}: BusTopBarProps) => {
  const rightWidth = rightActions.length > 1 ? 88 : 40;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onLeftPress}
        style={[styles.iconButton, !leftIcon && styles.iconPlaceholder]}
      >
        {leftIcon}
      </TouchableOpacity>
      <View style={styles.textBlock}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <View style={[styles.rightRow, { width: rightWidth }]}>
        {rightActions.map((action, index) => (
          <TouchableOpacity
            key={`action-${index}`}
            activeOpacity={0.7}
            onPress={action.onPress}
            style={[styles.iconButton, index > 0 && styles.rightButton]}
          >
            {action.icon}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  iconButton: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    elevation: 2,
    height: 40,
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    width: 40,
  },
  iconPlaceholder: {
    backgroundColor: 'transparent',
    elevation: 0,
    shadowColor: 'transparent',
  },
  rightButton: {
    marginLeft: 8,
  },
  rightRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 96,
  },
  subtitle: {
    color: '#10141C',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 2,
  },
  textBlock: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: Colors.busGray,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default BusTopBar;
