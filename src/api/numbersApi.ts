import axios from 'axios'

const BASE_URL = 'http://numbersapi.com'

export async function getNumberFact(type: string, number: string | number): Promise<string> {
  const url = `${BASE_URL}/${number}/${type}?json`
  const response = await axios.get(url)
  return response.data.text
}

export async function getRandomFact(type: string): Promise<string> {
  const url = `${BASE_URL}/random/${type}?json`
  const response = await axios.get(url)
  return response.data.text
}
