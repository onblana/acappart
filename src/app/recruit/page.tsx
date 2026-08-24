import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostList from "@/components/PostList";

const Recruit = () => {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <Header />
      <Navbar />
      <PostList
        title="모집"
        description="아카펠라 팀과 파트를 모집하는 공간입니다"
      />
      <Footer />
    </main>
  );
};

export default Recruit;
