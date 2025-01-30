export enum ThemeTypes {
    LIGHT = 'light',
    DARK = 'dark',
    SYSTEM = 'system',
    CUSTOM = 'custom'
}
export type ThemeType = ThemeTypes.LIGHT | ThemeTypes.DARK | ThemeTypes.SYSTEM | ThemeTypes.CUSTOM;
export interface IColorsValues {
    light: string;
    dark: string;
    system:string;
    custom:string;
}
export interface IColors {
    overlay: string;
    backgroundPrimary: string;
    optional:string;
    accentDefault: string;
    textPrimary: string;
    textSecondary: string;
}
export enum ColorsKeys {
    overlay = 'overlay',
    backgroundPrimary = 'backgroundPrimary',
    optional = 'optional',
    accentDefault = 'accentDefault',
    textPrimary = 'textPrimary',
    textSecondary = 'textSecondary',
}
export interface IThemeContext {
    theme: ThemeType;
    selectTheme: ThemeTypes;
    changeTheme: (value: ThemeTypes) => void;
}
