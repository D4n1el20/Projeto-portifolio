import { DarkTheme, DefaultTheme, Tabs, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const activeTint = colorScheme === 'dark' ? '#ffffff' : '#000000';

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: activeTint,
          tabBarInactiveTintColor: '#888888',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '700',
          },
          tabBarStyle: {
            height: 64,
            paddingBottom: 8,
            paddingTop: 8,
          },
        }}
      >
        <Tabs.Screen name="index" options={{ title: 'Home', tabBarLabel: 'Home' }} />
        <Tabs.Screen
          name="experiencia-academica"
          options={{ title: 'Acadêmico', tabBarLabel: 'Acadêmico' }}
        />
        <Tabs.Screen
          name="experiencia-profissional"
          options={{ title: 'Profissional', tabBarLabel: 'Profissional' }}
        />
        <Tabs.Screen name="projetos" options={{ title: 'Projetos', tabBarLabel: 'Projetos' }} />
        <Tabs.Screen name="jogo-da-forca" options={{ title: 'Jogo', tabBarLabel: 'Jogo' }} />
      </Tabs>
    </ThemeProvider>
  );
}
