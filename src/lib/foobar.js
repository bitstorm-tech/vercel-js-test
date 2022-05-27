import randomstring from "randomstring";

export function randomString() {
  const randomStr = randomstring.generate();
  return randomStr;
}
