import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostList from "@/components/PostList";

const Notice = () => {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <Header />
      <Navbar />
      <PostList title="공지" description="커뮤니티 공지사항입니다" />
      <Footer />
    </main>
  );
};

export default Notice;
