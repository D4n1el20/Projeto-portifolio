import { Link } from 'expo-router';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.card}>
            <View style={styles.sidebar}>
              <Image
                source={require('../../assets/images/Minha-Foto.jpeg')}
                style={styles.photo}
              />
              <ThemedText type="subtitle" style={styles.sidebarTitle}>
                Habilidades
              </ThemedText>
              <View style={styles.list}>
                {[
                  'Inglês intermediário',
                  'Programação em Python',
                  'Excel básico',
                  'Programação em C',
                  'Programação em Java',
                  'Programação HTML',
                ].map((item) => (
                  <ThemedText key={item} style={styles.sidebarText}>
                    • {item}
                  </ThemedText>
                ))}
              </View>

              <ThemedText type="subtitle" style={styles.sidebarTitle}>
                Educação
              </ThemedText>
              <ThemedText style={styles.sidebarText}>
                Cursando Ciência da Computação na Universidade Católica de Pernambuco
              </ThemedText>

              <ThemedText type="subtitle" style={styles.sidebarTitle}>
                Contato
              </ThemedText>
              <ThemedText style={styles.sidebarText}>daniel1405costa@gmail.com</ThemedText>
              <ThemedText style={styles.sidebarText}>WhatsApp: 81 99344-2633</ThemedText>
            </View>

            <View style={styles.content}>
              <ThemedText type="title" style={styles.title}>
                Daniel Silva Costa
              </ThemedText>
              <ThemedText style={styles.paragraph}>
                Sou aluno do curso de Ciência da Computação, em busca de estágio na área de desenvolvimento de software.
              </ThemedText>

              <ThemedText type="subtitle" style={styles.sectionTitle}>
                Resumo
              </ThemedText>
              <ThemedText style={styles.paragraph}>
                Estudante com projetos acadêmicos e experiência em desenvolvimento de soluções para Web e Mobile.
              </ThemedText>

              <ThemedText type="subtitle" style={styles.sectionTitle}>
                Experiência profissional
              </ThemedText>
              <ThemedText type="smallBold" style={styles.paragraph}>
                Jovem Aprendiz Administrativo do Financeiro, ASA Indústria
              </ThemedText>
              <View style={styles.list}>
                {['Criação de borderôs', 'Comparação de dados', 'Uso de tabelas Excel'].map((item) => (
                  <ThemedText key={item} style={styles.paragraph}>
                    • {item}
                  </ThemedText>
                ))}
              </View>

              <ThemedText type="subtitle" style={styles.sectionTitle}>
                Experiência acadêmica
              </ThemedText>
              <ThemedText type="smallBold" style={styles.paragraph}>
                Projeto extensionista, Biblioteca Carangueijo Tabaiares
              </ThemedText>
              <ThemedText style={styles.paragraph}>
                Workshop de Cubo Mágico para crianças, com foco em curiosidade, criatividade e coordenação motora.
              </ThemedText>
              <ThemedText type="smallBold" style={styles.paragraph}>
                Projeto extensionista, Colégio Liceu Nóbrega de Artes e Ofícios
              </ThemedText>
              <ThemedText style={styles.paragraph}>
                Desenvolvimento de API offline para auxiliar equipe de robótica a mapear sítios arqueológicos.
              </ThemedText>

              <ThemedText type="subtitle" style={styles.sectionTitle}>
                Jogo da Forca
              </ThemedText>
              <ThemedText style={styles.paragraph}>
                Trabalho solicitado na cadeira de Programação Web e Mobile. Agora o jogo está integrado ao app Expo, sem usar links externos.
              </ThemedText>

              <Link href="/jogo-da-forca" asChild>
                <Pressable style={styles.button}>
                  <ThemedText type="linkPrimary" style={styles.buttonText}>
                    Jogar
                  </ThemedText>
                </Pressable>
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.four,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    maxWidth: MaxContentWidth,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    overflow: 'hidden',
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },
  sidebar: {
    backgroundColor: '#AB2E3B',
    padding: Spacing.four,
  },
  photo: {
    width: 130,
    height: 130,
    borderRadius: 100,
    marginBottom: Spacing.four,
    alignSelf: 'center',
  },
  sidebarTitle: {
    color: '#ffffff',
    marginBottom: Spacing.one,
    marginTop: Spacing.three,
  },
  sidebarText: {
    color: '#ffffff',
    marginBottom: Spacing.one,
    lineHeight: 22,
  },
  content: {
    backgroundColor: '#F5F5F5',
    padding: Spacing.four,
  },
  title: {
    marginBottom: Spacing.three,
  },
  sectionTitle: {
    marginTop: Spacing.four,
    marginBottom: Spacing.one,
  },
  paragraph: {
    marginBottom: Spacing.two,
    color: '#1E1E1E',
  },
  list: {
    marginBottom: Spacing.two,
  },
  button: {
    marginTop: Spacing.four,
    alignSelf: 'flex-start',
    backgroundColor: '#000000',
    borderRadius: 12,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.five,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
  },
});
