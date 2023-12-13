export class Feedback {
    constructor(email, feedback) {
      this.email = email;
      this.feedback = feedback;
      this.timestamp = new Date().toISOString();
    }
  }
  
  // Példa használat
  const formSubmission = new Feedback('example@email.com', 'Ez egy példa feedback.');
  console.log(formSubmission);
  