import { Link } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function ProjetosScreen() {
  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <ThemedText type="title" style={styles.title}>
            Projetos
          </ThemedText>

          <View style={styles.navRow}>
            <Link href="/" style={styles.navButton}>
              <ThemedText type="smallBold" style={styles.navText}>Home</ThemedText>
            </Link>
            <Link href="/sobre" style={styles.navButton}>
              <ThemedText type="smallBold" style={styles.navText}>Sobre</ThemedText>
            </Link>
            <Link href="/experiencia-academica" style={styles.navButton}>
              <ThemedText type="smallBold" style={styles.navText}>Acadêmico</ThemedText>
            </Link>
            <Link href="/experiencia-profissional" style={styles.navButton}>
              <ThemedText type="smallBold" style={styles.navText}>Profissional</ThemedText>
            </Link>
            <Link href="/jogo-da-forca" style={styles.navButton}>
              <ThemedText type="smallBold" style={styles.navText}>Jogo</ThemedText>
            </Link>
          </View>

          <View style={styles.card}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Trabalhos e projetos
            </ThemedText>
            <View style={styles.list}>
              <ThemedText style={styles.paragraph}>
                • Jogo da Forca: app nativo em Expo com navegação interna e teclado de letras.
              </ThemedText>
              <ThemedText style={styles.paragraph}>
                • API offline para equipe de robótica com mapa em grade para arqueologia.
              </ThemedText>
              <ThemedText style={styles.paragraph}>
                • Workshops educacionais em Cubo Mágico e Excel para comunidade local.
              </ThemedText>
            </View>
            <ThemedText style={styles.paragraph}>
              Estes projetos demonstram a capacidade de criar interfaces nativas, gerenciar rotas com Expo Router e integrar lógica de aplicação em React Native.
            </ThemedText>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  safeArea: { flex: 1 },
  container: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.four,
    alignItems: 'center',
  },
  title: { marginBottom: Spacing.four },
  navRow: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
    marginBottom: Spacing.four,
  },
  navButton: {
    backgroundColor: '#E8E8E8',
    borderRadius: 12,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  navText: { color: '#000000' },
  card: {
    width: '100%',
    maxWidth: MaxContentWidth,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: Spacing.four,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  sectionTitle: { marginBottom: Spacing.two },
  paragraph: { marginBottom: Spacing.two },
  list: { marginBottom: Spacing.two },
});