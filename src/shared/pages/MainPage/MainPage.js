import { Header } from "@/shared/components/Header";
import { Footer } from "@/shared/components/Footer";
import { QuizList } from "@/shared/components/QuizList";

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