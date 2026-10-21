import React, { useState } from 'react';
// Perbaikan 1: 'reactnative' diubah menjadi 'react-native'
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native'; 
import { COLORS, SPACE, RADIUS, TYPO } from '../styles/tokens';

export default function EntryForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  // Menggunakan format tanggal sesuai inisiasi Anda
  const [date, setDate] = useState('2026-10-19'); 
  const [preview, setPreview] = useState('');
  
  const canSubmit = title.trim().length > 0 && preview.trim().length > 0;

  const submit = () => {
    if (!canSubmit) return;
    
    // Di dalam fungsi submit()
onSubmit?.({
  id: Date.now(),
  title: title.trim(),
  date: date.trim(),
  preview: preview.trim(),
  body: preview.trim(),
  // Pastikan Anda juga punya file default.png di folder moods
  moodImage: require('../../assets/moods/default.png'), 
});
    };
    
    // Reset form setelah disubmit
    setTitle('');
    setDate('2026-10-19');
    setPreview('');
  };

  return (
    <View style={styles.form}>
      <Text style={styles.heading}>Tambah Entri</Text>
      
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Judul"
        style={styles.input}
      />
      
      <TextInput
        value={date}
        onChangeText={setDate}
        placeholder="YYYY-MM-DD"
        style={styles.input}
      />
      
      {/* Perbaikan 2: Memperbaiki format penulisan properti multiline */}
      <TextInput
        value={preview}
        onChangeText={setPreview}
        placeholder="Ringkasan..."
        style={[styles.input, styles.multiline]}
        multiline={true} 
      />
      
      {/* Perbaikan 3: Membungkus teks "Simpan" dengan Pressable dan menerapkan kondisi buttonDisabled */}
      <Pressable 
        onPress={submit}
        disabled={!canSubmit}
        style={[styles.button, !canSubmit && styles.buttonDisabled]}
      >
        <Text style={styles.buttonText}>Simpan</Text>
      </Pressable>
    </View> // Perbaikan 4: Menambahkan tag penutup </View>
  );


const styles = StyleSheet.create({
  form: { 
    padding: SPACE.l, 
    gap: SPACE.s 
  },
  heading: {
    fontSize: TYPO.title,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACE.s,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    paddingHorizontal: SPACE.m,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  multiline: {
    minHeight: 80,
    textAlignVertical: 'top', // Memastikan teks dimulai dari atas (berguna untuk Android)
  },
  button: {
    marginTop: SPACE.s,
    padding: SPACE.m,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
  },
  buttonDisabled: { 
    opacity: 0.5 
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: '700' 
  },
});