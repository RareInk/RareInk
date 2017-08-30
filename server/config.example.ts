// The port the backend server runs on.
export const serverPort = 4300;

// Secret key for the JWT token. (IMPORTANT: do not make this public!)
export const secret = 'A_VERY_LONG_SECRET';

// Byte length for the pbkdf2 hashing algorithm
// See https://nodejs.org/api/crypto.html
export const length = 128;

// Hashing algorithm used by pbkdf2
export const digest = 'sha256';
