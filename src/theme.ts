import { createTheme, type MantineColorsTuple } from '@mantine/core';

const green: MantineColorsTuple = [
  '#e6fbf1', '#c3f4dc', '#9aedc5', '#6fe5ac', '#4fdf99',
  '#39d98a', '#2fc27a', '#25a567', '#1c8853', '#126b40',
];

// Mesma paleta escura da versão anterior (dark[7] = fundo da página)
const dark: MantineColorsTuple = [
  '#d7dee8', '#b9c4d2', '#8b98a9', '#5c6878', '#2a3646',
  '#1f2a38', '#121924', '#0a0e14', '#070a0f', '#05070a',
];

export const theme = createTheme({
  primaryColor: 'green',
  primaryShade: 5,
  colors: { green, dark },
  fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  fontFamilyMonospace: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
  respectReducedMotion: true,
});
