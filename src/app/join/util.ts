import { validateEmail } from "./validation";

export const getEmailInputClasses = (
  onError: boolean,
  onFocused: boolean,
  Input: string,
  Error: string,
  Focused: string,
): string => {
  let classes = Input;
  if (onError) {
    classes += ` ${Error}`;
  }
  if (onFocused) {
    classes += ` ${Focused}`;
  }
  return classes;
};

export function checkRegistrationSuccess(
  email: string,
  password: string,
  rePassword: string,
  nickname: string,
  emailError: string,
  passwordError: string,
  rePasswordError: string,
  nicknameError: string,
  setOnSuccess: (value: boolean) => void,
) {
  const isEmailValid = validateEmail(email); // 이메일 형식 확인
  const isPasswordValid = password.length >= 6 && password.length <= 15; // 비밀번호 길이 확인
  const isRePasswordValid = rePassword === password; // 비밀번호 확인과 일치하는지 확인
  const isNicknameValid = nickname.length >= 2 && nickname.length <= 8; // 닉네임 길이 확인

  const isAllFieldsFilled = email !== "" && password !== "" && rePassword !== "" && nickname !== "";
  const isAllErrorsEmpty = emailError === "" && passwordError === "" && rePasswordError === "" && nicknameError === "";

  // 모든 조건이 충족되면 onSuccess 값을 true로 설정
  if (
    isAllFieldsFilled &&
    isAllErrorsEmpty &&
    isEmailValid &&
    isPasswordValid &&
    isRePasswordValid &&
    isNicknameValid
  ) {
    setOnSuccess(true);
  } else {
    setOnSuccess(false);
  }
}
