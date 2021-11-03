import { atom } from 'recoil';

export const firstLoadingState = atom({
	key: 'firstloading', // unique ID (with respect to other atoms/selectors)
	default: true, // default value (aka initial value)
});

export const loadingState = atom({
	key: 'loading', 
	default: false, 
});