import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { QuizList } from "../../components/QuizList";

export default function MainPage() {
  return <>
    <Header />
    <main>
      <QuizList />
    </main>
    <Footer />
  </>;
}