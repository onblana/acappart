import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostList from "@/components/PostList";

const Anything = () => {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <Header />
      <Navbar />
      <PostList
        title="자유"
        description="운영 규칙에 위배되는 글은 통보 없이 삭제됩니다"
      />
      <Footer />
    </main>
  );
};

export default Anything;
