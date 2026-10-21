import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { COLORS, SPACE, RADIUS } from '../styles/tokens';

export default function SearchBar({
  placeholder = 'Cari entri...',
  onChange,
}) {
  const [queryText, setQueryText] = useState('');

  const handleChange = (text) => {
    setQueryText(text);
    onChange?.(text); // Memanggil fungsi onChange dari luar (jika ada)
  };

  return (
    <View style={styles.wrap}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={queryText}
        onChangeText={handleChange}
        placeholderTextColor="#6B7280" // Memberikan warna abu-abu pada teks placeholder
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: SPACE.l,
    paddingVertical: SPACE.m,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    paddingHorizontal: SPACE.m,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
});