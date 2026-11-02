import React, { useMemo } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useEntries } from '../../src/context/EntriesContext';
import DiaryCard from '../../src/components/DiaryCard';
import { COLORS, SPACE, TYPO } from '../../src/styles/tokens';

export default function FavoritesScreen() {
  const router = useRouter();
  const { entries, likedIds, toggleLike } = useEntries();

  // Filter hanya entri yang memiliki id di dalam set likedIds
  const favoriteEntries = useMemo(() => {
    return entries.filter(entry => likedIds.has(entry.id));
  }, [entries, likedIds]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Entri Favorit</Text>
      
      {favoriteEntries.length === 0 ? (
        <Text style={styles.emptyText}>Belum ada entri yang disukai.</Text>
      ) : (
        <FlatList
          data={favoriteEntries}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <DiaryCard
              title={item.title}
              date={item.date}
              preview={item.preview}
              moodImage={item.moodImage}
              liked={true}
              onToggleLike={() => toggleLike(item.id)}
              onPress={() =>
                router.push({
                  pathname: '/detail/[id]',
                  params: { id: String(item.id) },
                })
              }
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACE.l,
    backgroundColor: COLORS.surface,
  },
  header: {
    fontSize: TYPO.h1,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACE.m,
  },
  list: {
    gap: SPACE.m,
    paddingBottom: SPACE.xl,
  },
  emptyText: {
    fontSize: TYPO.body,
    color: COLORS.muted,
    textAlign: 'center',
    marginTop: SPACE.xl,
  },
});