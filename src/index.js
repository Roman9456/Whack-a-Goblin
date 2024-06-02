jest.useFakeTimers(); // Используем мок для setInterval

import { moveGoblin } from '../index'; // Подключаем функцию, которую будем тестировать

describe('moveGoblin', () => {
  test('should call setInterval with correct parameters', () => {
    // Вызываем функцию moveGoblin
    moveGoblin();

    // Проверяем, что setInterval была вызвана
    expect(setInterval).toHaveBeenCalledTimes(1);

    // Проверяем, что setInterval была вызвана с правильными параметрами
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 1000);
  });
});
