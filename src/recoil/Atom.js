import { atom } from "recoil";

export const favoritesState = atom({
    key: 'favoritesState',
    default: [], // Initially empty array for favorites
});