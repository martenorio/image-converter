import './App.css';
import { ButtonThemeSelector } from './components/ButtonThemeSelector';
import { ContainerTabs } from './components/ContainerTabs';
import { ThemeProvider } from './theme/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="flex h-screen">
        <ContainerTabs />
        <ButtonThemeSelector />
      </main>
    </ThemeProvider>
  )
}

export default App
