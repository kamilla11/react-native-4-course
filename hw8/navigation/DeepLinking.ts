import {getStateFromPath, getActionFromState, LinkingOptions} from '@react-navigation/native';
import {Linking} from 'react-native';
import Navigation from './Navigation.ts';
import {linkingPrefix} from "../base/constants.ts";

export class DeepLinking {
    static linking: LinkingOptions<{}> = {
        prefixes: [linkingPrefix],
        config: {
            screens: {
                ['Tab']: {
                    screens: {
                        ['Characters']: {
                            path: 'characters',
                        },
                        ['Episodes']: {
                            path: 'episodes',
                        },
                    },
                },
            },
        },
        getInitialURL() {
            return null;
        },
        subscribe(listener: (url: string) => void) {
            const linkingSubscription = Linking.addEventListener('url', ({url}) => {
                if (url) {
                    listener(url);
                    DeepLinking.handleNavigate(url);
                }
            });
            return () => {
                linkingSubscription.remove();
            };
        },
    };

    static getPathWithoutPrefix = (url: string) => {
        let path = '';
        DeepLinking.linking.prefixes.forEach(prefix => {
            if (url.indexOf(prefix) > -1) {
                path = url.replace(prefix, '');
            }
        });
        return path;
    };
    static getActionFromState = (config: any, url: string) => {
        const path = DeepLinking.getPathWithoutPrefix(url);
        const state = getStateFromPath(path, config);
        if (!state) {
            return;
        }
        return getActionFromState(state, config);
    };

    static handleNavigate = async (url: string, isInitialNavigate?: boolean) => {
        const action = DeepLinking.getActionFromState(DeepLinking.linking.config, url);
        switch (action?.type) {
            case 'NAVIGATE':
                const {name, params} = action.payload;
                if (name && params) {
                    if (isInitialNavigate) {
                        Navigation.replace(name, params); // наш кастомный навигатор
                        return;
                    }
                    Navigation.navigate(name, params); // наш кастомный навигатор
                }
                return;
        }
    };

    static handleInitialNavigate = async (initialUrl: string | null) => {
        if (!initialUrl) {
            return;
        }
        await DeepLinking.handleNavigate(initialUrl, true); // <- Данный метод добавим далее
    };
}
