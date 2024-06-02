import { createBoard } from '../index';

test('createBoard function is called without errors', () => {
    // Создаем мок-функцию для document.getElementById(), которая возвращает пустой объект
    document.getElementById = jest.fn().mockReturnValue({});

    // Вызываем функцию createBoard() и ожидаем, что она не вызовет ошибок
    expect(() => {
        createBoard();
    }).not.toThrow();
});