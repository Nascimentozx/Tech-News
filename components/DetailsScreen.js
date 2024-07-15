import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { article } = route.params;

  // Remover "[+ chars]" do conteúdo
  const cleanedContent = article.content ? article.content.replace(/\[\+\d+ chars\]/, '') : '';

  // Função para abrir a URL completa da notícia
  const openFullArticle = () => {
    if (article.url) {
      Linking.openURL(article.url);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: article.urlToImage }}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description}>{article.description}</Text>
        <Text style={styles.content}>{cleanedContent}</Text>
        {/* Botão para direcionar para a notícia completa */}
        <TouchableOpacity onPress={openFullArticle} style={styles.button}>
          <Text style={styles.buttonText}>Ver Notícia Completa</Text>
        </TouchableOpacity>
        <View style={styles.metaData}>
          {article.author && <Text style={[styles.textCenter, styles.author]}>Autor: {article.author}</Text>}
          {article.publishedAt && <Text style={[styles.textCenter, styles.publishedAt]}>Publicado em: {new Date(article.publishedAt).toLocaleDateString()}</Text>}
          {article.source && article.source.name && <Text style={[styles.textCenter, styles.source]}>Fonte: {article.source.name}</Text>}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    marginBottom: 12,
    color: '#555',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    textAlign: 'justify',
  },
  metaData: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 16,
    marginBottom: 16,
  },
  author: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 4,
    color: '#666',
  },
  publishedAt: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  source: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#AADDEE',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default DetailsScreen;
