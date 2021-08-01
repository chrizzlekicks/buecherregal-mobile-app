/**
 * @format
 */
import React from "react"
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { AppProvider} from "./context/GlobalContext"


function GlobalWrapper() {
    return(
        <AppProvider>
            <App />
        </AppProvider>
    )
}

AppRegistry.registerComponent(appName, () => GlobalWrapper);
