import './App.css';
import { ButtonThemeSelector } from './components/ButtonThemeSelector';
import { ContaimerTransform } from './components/ContaimerTransform';
import { ThemeProvider } from './theme/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="flex h-screen">
        <ContaimerTransform />
        <ButtonThemeSelector />
      </main>
    </ThemeProvider>
  )
}

export default App
