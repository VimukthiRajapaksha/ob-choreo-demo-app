import React, { createContext, useState } from "react";
import { getAppAccessToken } from "../services/token-service";

export const appContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [appContextDetails, setAppContextDetails] = useState({
        oauth2: {
            user_access_token: "",
            app_access_token: ""
        },
        ob: {
            consent_id: "",
        },
        error: {
            error_message: "",
            error_description: ""
        },
        loading: {
            add_bank: false
        }
    });

    getAppAccessToken().then(tokenResponse => {
        console.log("add application access token to app context");
        // add application access token to app context
        appContextDetails.oauth2.app_access_token = tokenResponse.data.access_token;
        setAppContextDetails(appContextDetails);
    }).catch (error => {
        console.log(error);
        appContextDetails.error.error_message = error.error_message;
        appContextDetails.error.error_description = error.error_description;
    });

    return (
        <appContext.Provider value={{appContextDetails, setAppContextDetails}}>
            {children}
        </appContext.Provider>
    );
}