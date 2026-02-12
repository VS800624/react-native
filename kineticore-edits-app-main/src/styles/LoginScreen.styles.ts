// styles/LoginScreen.styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#ff4f9a',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ff2f92',
    marginBottom: 16,
    textAlign: 'center',
  },

  input: {
    height: 52,
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#fff0f7',
    borderWidth: 1,
    borderColor: '#ffd1e6',
    marginBottom: 16,
    color: '#333',
  },

  button: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#ff2f92',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ff2f92',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },

  secondaryText: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 12,
  },
});
