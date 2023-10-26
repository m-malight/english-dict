export async function fetch_words(word) {
  const dictionaryApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  try {
    const response = await fetch(dictionaryApi);
    const data = await response.json();
    // const audio = data.phonetics[0].audio
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
