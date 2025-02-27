const prompt = require("prompt-sync")();

API_KEY="AIzaSyD67TGAJJU6UV5Cl-5yHKc2KToQCHVftHY"

const { GoogleGenerativeAI } = require("@google/generative-ai");


const  callAPI = async () =>{
    const genAI = new GoogleGenerativeAI(API_KEY);
    
    const instruction="You're an Ai Laywer , Your sole task is to act as a Legal adviser , Provide legal solutions to people for their issues, Your responses should align with indian Law suits+ , Do not perform any other tasks. ";
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", systemInstruction : instruction });
    let pmt = prompt("Enter prompt: ") ;
    const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: "Hello" }],
          },
          {
            role: "model",
            parts: [{ text: "Great to meet you. Do you need any help with your legal issues" }],
          },
        ],
      });
      
      let result = await chat.sendMessage(pmt);
      console.log(result.response.text());
      pmt = prompt("Enter following promt: ")
      let result2 = await chat.sendMessage(pmt);
      console.log(result2.response.text());



}

callAPI() ;