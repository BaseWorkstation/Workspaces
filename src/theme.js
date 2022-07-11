import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  body: "GT Walsheim Pro, sans-serif",
  heading: "GT Walsheim Pro, sans-serif",
  mono: "GT Walsheim Pro, sans-serif",
};

const breakpoints = createBreakpoints({
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1366px",
  "3xl": "1440px",
});

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: "#103861",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9",
      },
      heroGradientEnd: {
        default: "#FF0080",
        _dark: "#fbec8f",
      },
    },
    radii: {
      button: "8px",
    },
  },
  colors: {
    black: "#16161D",
    primary: {
      50: "#d8fbff",
      100: "rgba(119, 220, 255, 0.34)",
      200: "#7adfff",
      300: "#48d1ff",
      400: "#1ac3ff",
      500: "#00ABE7",
      600: "#00ABE7",
      700: "#0084b4",
      800: "#005e82",
      900: "#003a51",
    },
    purple: "#9747FF",
    coral: "#FC5E5E",
  },
  fonts,
  breakpoints,
  components: {
    Input: {
      variants: {
        outline: (props) => ({
          field: {
            _placeholder: {
              color: "gray.400",
            },
          },
        }),
      },
      defaultProps: { focusBorderColor: "primary.500" },
      baseStyle: {
        borderRadius: "0.5rem",
      },
      sizes: {
        lg: {
          h: "52px",
        },
      },
    },
  },
});

export default theme;
