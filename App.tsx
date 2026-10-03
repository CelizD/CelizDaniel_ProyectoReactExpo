import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/*
 * Gymelyx
 *
 * App.tsx funciona como punto de entrada principal de la interfaz.
 *
 * Se mantiene este archivo pequeño para evitar concentrar toda la lógica
 * de la aplicación en un solo lugar. El proyecto está dividido dentro
 * de la carpeta src para facilitar su mantenimiento y crecimiento.
 *
 * Estructura principal:
 * - components: componentes reutilizables de la interfaz.
 * - screens: pantallas principales de Gymelyx.
 * - navigation: configuración de navegación entre pantallas.
 * - services: comunicación con servicios externos y con la API.
 * - hooks: lógica reutilizable mediante hooks personalizados.
 * - context: manejo de estado global de la aplicación.
 * - types: tipos e interfaces de TypeScript.
 * - utils: funciones auxiliares reutilizables.
 * - constants: valores constantes utilizados en la aplicación.
 */

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gymelyx</Text>

      <Text style={styles.subtitle}>
        Entrenamiento, alimentación y seguimiento de progreso
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});