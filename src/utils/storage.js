// 세션 스토리지에 값을 저장하는 함수
export function setSessionStorage(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

// 세션 스토리지에서 값을 가져오는 함수
export function getSessionStorage(key) {
  const value = sessionStorage.getItem(key);

  return JSON.parse(value);
}

export function removeSessionStorage(key) {
  sessionStorage.removeItem(key);
}
