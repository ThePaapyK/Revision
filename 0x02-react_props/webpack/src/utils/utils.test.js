import { getFullYear, getFooterCopy, getLatestNotification  } from './utils';

test('getCurrentYear returns the correct year', () => {
  // Arrange
  const currentYear = new Date().getFullYear();

  // Act
  const result = currentYear;

  // Assert
  expect(result).toBe(2024);
});


test('getFooterCopy returns the correct string for true', () => {
  // Arrange
  const isAuthenticated = true;

  // Act
  const result = getFooterCopy(isAuthenticated);

  // Assert
  expect(result).toBe('Fobistems Corp.');
});

test('getFooterCopy returns the correct string for false', () => {
  // Arrange
  const isAuthenticated = false;

  // Act
  const result = getFooterCopy(isAuthenticated);

  // Assert
  expect(result).toBe('Fobistems Corp. main dashboard');
});

test('getLatestNotification returns the correct HTML string', () => {
  // Act
  const result = getLatestNotification();

  // Assert
  expect(result).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
