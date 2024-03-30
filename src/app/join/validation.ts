export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export function validateFormData(
  birthYear: string,
  selectedCategory: string | null,
  selectedGender: string | null,
): boolean {
  if (
    birthYear !== "" &&
    parseInt(birthYear) >= 1924 &&
    parseInt(birthYear) <= 2009 &&
    selectedCategory !== "" &&
    selectedGender !== ""
  ) {
    return true;
  } else {
    return false;
  }
}
