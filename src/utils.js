export function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key))
  }

  localStorage.setItem(key, JSON.stringify(data))
}

export function getId() {
  return Date.now().toString()
}

export function isDateLessThanCurrent(date) {
  return new Date(date).toLocaleDateString() < new Date().toLocaleDateString()
}
