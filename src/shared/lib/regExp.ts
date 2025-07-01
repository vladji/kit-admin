export const NICKNAME_REGEXP = new RegExp(
  '^(?!.*[_-]{2})(?!.*@.*@)[a-zA-Z0-9@_-]+$'
);

export const PASSWORD_REGEXP = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()])[a-zA-Z\\d!@#$%^&*()]+$'
);
