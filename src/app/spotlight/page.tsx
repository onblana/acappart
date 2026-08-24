import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostList from "@/components/PostList";

const Spotlight = () => {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <Header />
      <Navbar />
      <PostList
        title="홍보"
        description="아카펠라와 관련 없는 홍보글은 통보 없이 삭제됩니다"
      />
      <Footer />
    </main>
  );
};

export default Spotlight;
