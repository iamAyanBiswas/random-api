import CryptoJS from 'crypto-js';




// Generate a random integer with dynamic length
 const randomInteger = (length: number=8): number => {
  if (length <= 0) {
    throw new Error("Length must be a positive integer.");
  }

  const min = Math.pow(10, length - 1);  // Minimum value for the given length
  const max = Math.pow(10, length) - 1;  // Maximum value for the given length

  const randomBytes = CryptoJS.lib.WordArray.random(4);  // Generate 4 random bytes
  const randomValue = randomBytes.words[0] & 0x7fffffff;  // Return a positive 32-bit integer

  return min + (randomValue % (max - min + 1));  // Scale to fit in the given range
};




// Generate a random float with dynamic precision
  const randomFloat = (length: number=8, decimalPlaces: number = 2): number => {
    if (length <= 0 || decimalPlaces < 0) {
      throw new Error("Length must be a positive integer and decimalPlaces must be a non-negative integer.");
    }
  
    // Calculate the minimum and maximum values for the integer part based on the length
    const min = Math.pow(10, length - 1);  // Minimum value for the given length (e.g., for 3 digits, this is 100)
    const max = Math.pow(10, length) - 1;  // Maximum value for the given length (e.g., for 3 digits, this is 999)
  
    // Generate a random integer value within the desired range using crypto-js
    const randomBytes = CryptoJS.lib.WordArray.random(4);  // Generate 4 random bytes
    const randomValue = randomBytes.words[0] & 0x7fffffff;  // Return a positive 32-bit integer
  
    // Scale to fit the desired range [min, max] for the integer part
    const integerPart = min + (randomValue % (max - min + 1));  // This gives us an integer of the specified length
  
    // Generate a random float between 0 and 1
    const randomFloat = randomValue / 0x7fffffff;  // Normalize it to [0, 1]
  
    // Scale the float to the desired number of decimal places
    const multiplier = Math.pow(10, decimalPlaces);
    const decimalPart = Math.floor(randomFloat * multiplier) / multiplier;  // Truncate to the desired decimal precision
  
    // Combine integer part and decimal part
    return integerPart + decimalPart;  // Final result with both length and precision
  };




  const randomIntegerInRange = (min: number=0, max: number=1000): number => {
    // Ensure the range is valid
    if (min > max) {
      throw new Error("Min cannot be greater than Max.");
    }
  
    // Generate a random 32-bit value using crypto-js
    const randomBytes = CryptoJS.lib.WordArray.random(4);  // Generate 4 random bytes
    const randomValue = randomBytes.words[0] & 0x7fffffff;  // Ensure it's a positive 32-bit integer
  
    // Scale the value to the specified range [min, max]
    return min + (randomValue % (max - min + 1));  // Return the integer within the range [min, max]
  };




  
  // Generate a random float within a specified range [min, max] with a specific number of decimal places
  const randomFloatInRange = (min: number, max: number, decimalPlaces: number = 2): number => {
    // Ensure the range and decimalPlaces are valid
    if (min > max) {
      throw new Error("Min cannot be greater than Max.");
    }
  
    if (decimalPlaces < 0) {
      throw new Error("Decimal places must be a non-negative integer.");
    }
  
    // Generate a random 32-bit value using crypto-js
    const randomBytes = CryptoJS.lib.WordArray.random(4);  // Generate 4 random bytes
    const randomValue = randomBytes.words[0] & 0x7fffffff;  // Ensure it's a positive 32-bit integer
  
    // Scale the value to the specified range [min, max]
    const randomFloat = (randomValue / 0x7fffffff) * (max - min) + min;
  
    // Scale the float to the desired number of decimal places
    const multiplier = Math.pow(10, decimalPlaces);
    return Math.floor(randomFloat * multiplier) / multiplier;  // Truncate and return with the specified precision
  };
  




// Function to generate a secure random string
const randomString = (length: number = 8): string => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = randomInteger(8) % charactersLength;
    result += characters.charAt(randomIndex);
  }
  return result;
};



export { randomInteger,randomFloat,randomIntegerInRange,randomFloatInRange,randomString }