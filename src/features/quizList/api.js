import { randInt, sleep } from "@/shared/utils";
import { clientQuizList, serverSecretData, serverShallowQuizzes } from "/public/tempData";

// simulating backend
export async function getQuizList() {
  await sleep(200 + randInt(0, 200));
  const response = clientQuizList;
  if (randInt(0, 100) === 99)
    throw new Error("Unexpected error occurred");
  return response;
}

export async function getQuiz(id) {
  await sleep(200 + randInt(0, 200));
  const response = serverShallowQuizzes.find(quiz => quiz.id.toString() === id.toString());
  if (!response)
    throw new Error("Quiz not found");
  return response;
}

export async function submitQuizAll(body) {
  // ACCEPTS
  // body = {
  //   quizId: string,
  //   questions: [
  //     {
  //       questionIndex: number,
  //       chosenVariantValue: string
  //     }, ...
  //   ]
  // }
  // RETURNS
  // response = {
  //   questions: [
  //     {
  //       correct: boolean
  //     }, ...
  //   ]
  // }

  let id = body.quizId;
  await sleep(200 + randInt(0, 200));
  const quiz = serverSecretData.find(quiz => quiz.id.toString() === id.toString());
  if (!quiz)
    throw new Error("Quiz not found");

  await sleep(400 + randInt(0, 200));

  const response = {
    questions: [],
  };

  for (let i = 0; i < body.questions.length; i++) {
    let { questionIndex, chosenVariantValue } = body.questions[i];
    questionIndex = +questionIndex;

    if (
      isNaN(questionIndex) ||
      !(0 <= questionIndex && questionIndex < quiz.questions.length)
    ) {
      response.questions.push({ correct: false });
      continue;
    }
    const correctAnswerKey = quiz.questions[questionIndex].correctAnswer;
    const variants = quiz.questions[questionIndex].variants;

    if (variants[correctAnswerKey] === chosenVariantValue) {
      response.questions.push({ correct: true });
    } else {
      response.questions.push({ correct: false });
    }
  }
  return response;
}

export async function submitQuizOne(body) {
  // ACCEPTS
  // body = {
  //   quizId: string,
  //   question: {
  //     questionIndex: number,
  //     chosenVariantValue: number
  //   }
  // }
  // RETURNS
  // response = {
  //   correct: boolean
  // }
  let id = body.quizId;

  await sleep(200 + randInt(0, 200));
  const quiz = serverSecretData.find(quiz => quiz.id.toString() === id.toString());
  if (!quiz)
    throw new Error("Quiz not found");

  await sleep(200 + randInt(0, 400));

  let { questionIndex, chosenVariantValue } = body.question;
  questionIndex = +questionIndex;

  if (
    isNaN(questionIndex) ||
    !(0 <= questionIndex && questionIndex < quiz.questions.length)
  ) {
    return { correct: false };
  }

  const correctAnswerKey = quiz.questions[questionIndex].correctAnswer;
  const variants = quiz.questions[questionIndex].variants;

  if (variants[correctAnswerKey] === chosenVariantValue) {
    return { correct: true };
  } else {
    return { correct: false };
  }
}