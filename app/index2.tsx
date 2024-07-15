import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DownloadScreen = () => {

  const handleDownload = () => {
    // Lógica para download de matérias
    // Esta função pode ser implementada posteriormente
    console.log('Download iniciado...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Download de Matérias</Text>
      <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
        <Text style={styles.buttonText}>Iniciar Download</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  downloadButton: {
    backgroundColor: '#AADDEE',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DownloadScreen;
