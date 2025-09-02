import { writable } from 'svelte/store';

// Начальное состояние
const initialState = {
    firstNumber: 0,
    secondNumber: 0,
    timeLeft: 60,
    isOpenModal: false,
    inputStr: "",
    rightCount: 0,
    errorCount: 0,
    num: "",
    textRender: "",
    operation: "",
    operationsHist: ""
};

// Создаем store
export const gameStore = writable(initialState);

// Функция для сброса состояния
export function restart(time = 60) {
    gameStore.update(state => ({
        ...initialState,
        timeLeft: time * 60
    }));
}