import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NewPost = () => {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <Header />
      <Navbar />
      {/* 피치파이프 넣기 */}
      <Footer />
    </main>
  );
};

export default NewPost;
