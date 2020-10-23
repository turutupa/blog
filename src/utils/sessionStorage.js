export function setSessionStorage(data, value) {
  try {
    window.sessionStorage.setItem(data, value)
  } catch (e) {
    console.error("Oops! Something went wrong setting session storage")
  }
}

export function fetchSessionStorage(data) {
  try {
    return window.sessionStorage.getItem(data)
  } catch (e) {
    console.error("Oops! Something went wrong retrieving session storage")
  }
}
