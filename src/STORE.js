import {atom} from 'jotai'


export const isModal = atom(false);
export const isDeleting = atom(false);
export const isEditProfileModal = atom(false);
export const ratingValue = atom(0);
export const user = atom({});