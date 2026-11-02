import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACE, TYPO, RADIUS } from '../../src/styles/tokens';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>F</Text>
        </View>
        
        {/* Ubah Nama dan NIM di bawah ini sesuai data Anda */}
        <Text style={styles.name}>Firmansah Rahadi</Text>
        <Text style={styles.nim}>NIM: 2430511033</Text>
        
        <Text style={styles.bio}>
          Mahasiswa Teknik Informatika Universitas Muhammadiyah Sukabumi.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACE.l,
    backgroundColor: COLORS.surface,
  },
  profileCard: {
    alignItems: 'center',
    padding: SPACE.xl,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    backgroundColor: '#f9fafb',
    marginTop: SPACE.xl,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACE.m,
  },
  avatarText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  name: {
    fontSize: TYPO.h1,
    fontWeight: '700',
    color: COLORS.text,
  },
  nim: {
    fontSize: TYPO.title,
    color: COLORS.muted,
    marginBottom: SPACE.s,
  },
  bio: {
    fontSize: TYPO.body,
    color: COLORS.text,
    textAlign: 'center',
    marginTop: SPACE.m,
  },
});