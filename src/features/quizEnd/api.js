export function calcPercentageFromAnswers(gameState) {
  let total = gameState.quiz.questionNumber;
  let correctCnt = 0;
  for (let i = 0; i < gameState.quiz.questionNumber; i++) {
    if (String(gameState.quiz.questions[i].correctAnswer - 1) === String(gameState.answered[i])) {
      correctCnt++;
    }
  }
  return ((100 * correctCnt) / total).toFixed(2) || 0;
}