import {ColorsKeys, IColorsValues} from "../modules/theme/ThemeTypes.ts";

export const Colors: Record<ColorsKeys, IColorsValues> = {
    overlay: {
        light: '#21212114',
        dark: '#FFFFFF14',
        system: '#21212114',
        custom: '#03DAC5',
    },
    backgroundPrimary: {
        light: '#F1F7ED',
        dark: '#121212',
        system: '#ffffff',
        custom: '#081C15',
    },
    optional: {
        light: '#E8F6F3',
        dark: '#0D1B2A',
        system: '#E8F6F3',
        custom: '#17A398',
    },
    accentDefault: {
        light: '#02d370',
        dark: '#046de5',
        system: '#32eaea',
        custom: '#04e5a9',
    },
    textPrimary: {
        light: '#141C24',
        dark: '#FFFFFFF0',
        system: '#141C24',
        custom: '#FF9800',
    },
    textSecondary: {
        light: '#9E9E9E',
        dark: '#FFFFFF99',
        system: '#9E9E9E',
        custom: '#F39C12',
    },
};
