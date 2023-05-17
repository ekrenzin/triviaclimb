interface TriviaScore {
    correct: number;
    incorrect: number;
    total: number;
    rating: number;
    correctStreak: number;
    incorrectStreak: number;
    streakType: number;
    name: string;
  }
  
  interface TriviaResult {
    score: TriviaScore;
    correct: boolean;
    answer: string;
    correct_answer: string;
  }

  interface TriviaPrompt {
    question: string;
    correct_answer: string;
    context: string;
    title: string;
    choices: string[];
    rating: number;
    category: string;
  }
  
  interface TriviaQuestion {
    question: string;
    context: string;
    category: string;
    title: string;
    rating: number;
    choices: string[];
    id?: number;
  }


  interface TriviaAnswer {
    question_id: number;
    choices: string[];
    correct_answer: string;
  }