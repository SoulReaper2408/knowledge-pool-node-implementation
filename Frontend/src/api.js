import axios from 'axios';
const quesURL = 'http://localhost:5000/question';
const userURL = 'http://localhost:5000/userURL';

const GenerateQuestions = async (data) => {
    try{
        return await axios.post('${quesURL}/gen', data);
    }catch(error){
        console.log("Error while generating question", error);
    }
}
