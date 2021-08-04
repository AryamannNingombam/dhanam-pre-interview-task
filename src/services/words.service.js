import axios from 'axios';

export const getRandomWords = (count) => {


    return axios.get(`https://random-word-api.herokuapp.com/word?number=${count}`);;
}



export const getWordMeaning = async (word) => {
    return axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
}


export const getRandomWordsWithMeanings = async (count) => {
    const response1 = await getRandomWords(count);
    const words = response1.data;
    const allMeanings = [];
    let response2, word2;
    for (let word of words) {
       try{
        response2 = await getWordMeaning(word);
        word2 = response2.data[0];
        allMeanings.push(word2);
       }catch(err){
       }
        
    }
    return allMeanings;
}