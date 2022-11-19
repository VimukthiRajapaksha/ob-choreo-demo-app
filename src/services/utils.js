import {Buffer} from 'buffer';

export const getBasicAuthHeader = (username, secret) => {
    return "Basic " + Buffer.from(username + ":" + secret).toString("base64");
}

export const CONSTANTS = {
    app_access_token: "APP_ACCESS_TOKEN",
    user_access_token: "USER_ACCESS_TOKEN",
    added_banks: "ADDED_BANKS",
    new_banks: "NEW_BANKS",
    redirect_response: "REDIRECT_RESPONSE"
}