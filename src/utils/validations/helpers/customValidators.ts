const regex = {
  is_valid_password: /^([a-zA-Z0-9-_.]{8,})*$/,
  is_latin_letters: /^[A-Za-z\s]*$/,
  is_georgian_letters: /^[ა-ჰ\s]*$/,
  is_base_64_str: /^[A-Za-z0-9+/]+={0,2}$/,
  is_numeric: /^[0-9]*$/,
};

export const isValidPassword = {
  validator: (password: string) => regex.is_valid_password.test(password),
  message:
    "პაროლი უნდა შედგებოდეს მინ. 8 სიმბოლოსაგან. გამოიყენეთ ლათინური ასოები და სიმბოლოები ( . - _ )",
};

export const isLatinLetters = {
  validator: (value: string) => regex.is_latin_letters.test(value),
  message: (key: string) => `გთხოვთ ${key} შეიყვანოთ მხოლოდ ლათინური ასოებით`,
};

export const isGeorgianLetters = {
  validator: (value: string) => regex.is_georgian_letters.test(value),
  message: (key: string) => `გთხოვთ ${key} შეიყვანოთ მხოლოდ ქართული ასოებით`,
};

export const isBase64Str = {
  validator: (value: string) => {
    const base64String = value.split(",")[1] || value;
    return (
      regex.is_base_64_str.test(base64String) && base64String.length % 4 === 0
    );
  },
  message: "გთხოვთ მიუთითოთ ვალიდური ფოტო-სურათი",
};

export const isNumeric = {
  validator: (value: string) => regex.is_numeric.test(value),
  message: "გთხოვთ შეიყვანოთ მხოლოდ ციფრები",
};

export const greaterThanZero = {
  validator: (value: string) => parseFloat(value) > 0,
  message: (key: string) => `${key} უნდა აღემატებოდეს 0_ს`,
};

export const confirmPasswordValidation = {
  validator: (password: string, candidatePassword: string) =>
    password === candidatePassword,
  message: "confirm password უნდა ემთხვეოდეს თქვენს მიერ ზემოთ შეყვანილ პაროლს",
};
