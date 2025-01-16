import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { QuizList } from "@/features/quizList/ui/QuizList";

export default function MainPage() {
  return (
    <>
      <Header />
      <main>
        <QuizList />
      </main>
      <Footer />
    </>
  );
}