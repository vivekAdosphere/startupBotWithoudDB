module.exports = {
    //Greetings
    initiateConversationMessages: ["hi", "Hi", "Hello", "hii", "HI", "hello", "hey", "Hey", "HEY", "HELLO"],
    Yes: ["Yes", "yes", "1"],
    No: ["No", "no", "2"],
    welcomeMessage: "Hello this bot can evaluate your startups credentials for registration",

    welcomeMessageForStakeHolder: "",

<<<<<<< Updated upstream
    reviewProfile: "Do you want to update these details?\n\n1. Yes\n2. No",
=======

    //templates
    updateInfo: ["update_details", "en"],
>>>>>>> Stashed changes

    //Questions
    askForUserProfile: "Select your profile",
    askForName: "Enter your full name",
    askForDin: "Enter your DIN(Directors indentification number)",
    askForIdProof: "Upload your id proof (Voter id/Driving License/Passport)",
    askForCompanyName: "Enter your company name",
    askForPanCard: "Upload your pan card image",
    askForEmail: "Enter your email Id",
    askForNumber: "Enter your registered mobile number",
    askForAddressProof: "Upload an image of company's address proof",
    askForNoc: "Upload registred company's NOC image",
    askForCompanyShare: "For which company, you want a share?",
    updateData: "Do you want to update the existing details?\n\n 1.Yes\n 2.No",

    //thank you message
    thankYouMessageForStakeHolder: "Thank you for interacting with us. We will evaluate these details and inform you soon",
    thankYouMessageForShareHolder: "Thank You for your response. We will evaluate your details and notify you soon.",


    //fallbacks
    somethingWentWrong: "Oops! Something went wrong! Please reinitiate the process using 'hi' or 'hello'",
    errorMessage: "Invalid Input. Please type 'hi' or 'hello' to initiate the process.",
    errorForImage: "Invalid input, Please send image not a text",
    attachmentWarning: "Invalid input,please try again with text",
    invalidName: "Invalid name,Please try again!",
    invaliddin: "Invalid format of DIN, please try again!",
    invalidCompanyName: "Invalid company name,Please try again!",
    invalidEmail: "Invalid Email,please try again!",
    invalidNumber: "Invalid Number,Please try again!",
    invalidInput: "Invalid Input,Please try again!"

}