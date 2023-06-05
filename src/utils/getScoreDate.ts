export function getScoreDate() {
  let now = new Date()

  let day = now.getDate()
  let month = now.getMonth() + 1
  let year = now.getFullYear()

  let hour = now.getHours()
  let minutes = now.getMinutes()

  let stringDay = `${day}`
  let stringMonth = `${month}`
  let stringMinutes = `${minutes}`

  if (day < 10) stringDay = `0${day}`
  if (month < 10) stringMonth = `0${month}`
  if (minutes < 10) stringMinutes = `0${minutes}`

  let informations = `${stringDay}/${stringMonth}/${year} - ${hour}:${stringMinutes}`

  return informations
}