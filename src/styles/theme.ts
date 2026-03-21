export const THEME = {
    layout: {
        max: "96rem",
        breakpoint: {
            xs: "30rem",
            sm: "40rem",
            md: "48rem",
            lg: "64rem",
            xl: "80rem",
            "2xl": "96rem"
        }
    },
    spacing: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.5rem",
        10: "3rem",
        11: "3.5rem",
        12: "4rem",
        13: "5rem",
        14: "6rem",
        15: "8rem"
    },
    lineSize: {
        sm: "0.0625rem",
        base: "0.125rem",
        lg: "0.25rem"
    },
    radius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "1rem",
        pill: "9999rem",
        full: "100%"
    },
    colors: {
        brand: "#972697",
        base: "#fafafa",
        primary: "#0F1729",
        secondary: "#4B4B6B",
        surface: "#F0F0F3",
        accent: "#D14DD6",
        success: "#2E7D32",
        error: "#C62828",
        warning: "#D97706",
        info: "#0277BD",
        "neutral-1": "#ffffff",
        "neutral-2": "#f5f5f5",
        "neutral-3": "#e0e0e0",
        "neutral-4": "#bdbdbd",
        "neutral-5": "#9e9e9e",
        "neutral-6": "#757575",
        "neutral-7": "#616161",
        "neutral-8": "#424242",
        "neutral-9": "#121212"
    },
    text: {
        weight: {
            extraLight: 200,
            light: 300,
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
            extraBold: 800
        },
        size: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.75rem",
            "4xl": "2rem",
            "5xl": "2.25rem",
            "6xl": "2.5rem",
            "7xl": "3rem"
        },
        family: "Plus Jakarta Sans, sans-serif"
    },
    iconSize: {
        sm: "1rem",
        base: "1.5rem",
        lg: "2rem"
    }
} as const;
