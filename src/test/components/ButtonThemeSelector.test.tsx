import { ButtonThemeSelector } from "@/components/ButtonThemeSelector"
import { ThemeProvider } from "@/theme/theme-provider"
import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it } from "vitest"
import userEvent from '@testing-library/user-event';

describe('Theme selector', () => {

  beforeEach(() => {
    render(
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ButtonThemeSelector />
      </ThemeProvider>
    )
  })
  it('Should show component', async() => {
    const button = screen.queryAllByRole('button');
    await userEvent.click(button[0]);
    const menuItems = await screen.queryAllByRole('menuitem');
    
    let theme = localStorage.getItem("vite-ui-theme");
    expect(theme).toBeFalsy();
    await userEvent.click(menuItems[0])
    theme = localStorage.getItem("vite-ui-theme");
    expect(theme).toBe('light');
  })
})