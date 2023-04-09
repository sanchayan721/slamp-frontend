import { createTheme } from "@mui/material";
import addAlpha from "./utils/addAlpha";

let colors_set = {
    primary: "#D99938",
    primary__dark: "#825c22",
    primary__hover_bg: "#100D09",
    secondary: "#59A5DE",
    success: "#2e7d32",
    info: "#0dcaf0",
    danger: "#da2929",
    danger__form_bg: "#120303",
    warning: "#ef6621",
    dark: "#121212",
    light: "#f8f9fa",
    muted: "#1b1b1b",
    disabled: "#333333",
    disabled__text: "#494949",
    border: "#e1e1e180",
    text__color: "#d5d5d5",
    text__color__dark: "#969696",
    inverse: "",
    shaft: "",
    body__bg: "#030302",
    dark__card: '#1E1E1E',
    darker__card: '#0c0c0c',
    white: "#ffffff",
    black: "#000000",
    link__primary: "#F08A32",
    input_border__color: "#616161",
    transperent: 'rgba(0, 0, 0, 0)',
};

export const colors = {
    ...colors_set,
    field__bg: '#3d3d3d',
    transparent__black: `${addAlpha(colors_set.black, 0.75)}`,
}

export const scales = {
    small: 1.05,
    medium: 1.10,
    large: 1.15,
    extraLarge: 2.00,
};

export const speed = {
    slow: 1000,
    medium: 600,
    fast: 300
};

const fonts = {
    poppins: "Poppins",
    montserrat: "Montserrat"
}

export const transition = (speed) => `all ${speed === 'fast' ? '200ms' : '600ms'} ease 0s`

export const drawer = {
    drawerClose: '5em',
    drawerOpenOffset: '15em',
    fullDrawerWidth: '20em'
};

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: colors.primary,
            contrastText: colors.darker__card,
        },
        secondary: {
            main: colors.secondary,
            contrastText: colors.text__color
        },
        error: {
            main: colors.danger,
            contrastText: colors.darker__card
        },
        warning: {
            main: colors.warning,
            contrastText: colors.text__color
        },
        success: {
            main: colors.success,
            contrastText: colors.text__color
        },
        buttonOnPrimary: {
            main: colors.dark__card,
            contrastText: colors.text__color
        },
        muted: {
            main: colors.muted,
            contrastText: colors.white
        },
        action: {
            disabledBackground: colors.disabled,
            disabled: colors.disabled
        }
    },

    typography: {
        fontFamily: fonts.montserrat,
        fontSize: 12,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 800,
        allVariants: {
            color: colors.text__color
        },
        button: {
            textTransform: 'none'
        }
    },

    MuiLinkButton: {
        styleOverrides: {
            root: {
                '&[disabled]': {
                    color: colors.muted,
                    pointerEvents: 'none',
                },
            },
        },
    },

    MuiButton: {
        styleOverrides: {
            root: {
                '&[disabled]': {
                    color: colors.disabled,
                    pointerEvents: 'none',
                },
            },
        },
    },

    props: {
        MuiButtonBase: {
            TouchRippleProps: {
                classes: {
                    root: {
                        color: colors.primary
                    }
                }
            },
        }
    },
}); 