import { GoogleGenerativeAI } from "@google/generative-ai";

async function gemini(prompt) {
	try { 
		const genAI = new GoogleGenerativeAI("AIzaSyA276LWsvzNT2Qcj9E4c-HZtYf8oAoRmb8");
		const model = genAI.getGenerativeModel({ 
		  model: "gemini-1.5-flash" 
		});
	  
		const result = await model.generateContent(prompt);
		// console.log(result.response.text());
		return result.response.text();
	  }
	  catch(error) {
		console.log(error)
	  }
}

export default gemini