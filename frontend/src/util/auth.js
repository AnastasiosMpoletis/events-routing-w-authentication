import { redirect } from "react-router-dom";

/**
 * @returns duration that token is still active. If duration < 0, token is expired. If duration > 0, token is still valid.
 */
export function getTokenDuration() {
    const expirationDate = new Date(localStorage.getItem('expiration'));
    return expirationDate.getTime() - new Date().getTime(); // expiration time - now. If
}

export function getAuthToken() {
    const token = localStorage.getItem('token');

    if (!token) {
        return null;
    }

    const tokenDuration = getTokenDuration();
    if (tokenDuration < 0) {
        return 'EXPIRED';
    }

    return token;
}

export function tokenLoader() {
    return getAuthToken();
}

export function checkAuthLoader() {
    const token = getAuthToken();

    if (!token) {
        return redirect('/auth');
    }

    return null;
}