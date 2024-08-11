import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { QuizList } from "./components/QuizList";

import "./index.sass";

export function App() {
  return (
    <>
      <Header />
      <QuizList />
      <Footer />
    </>
  );
}