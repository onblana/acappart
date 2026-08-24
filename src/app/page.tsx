import type { NextPage } from "next";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import PostList from "@/components/PostList";
import Footer from "@/components/Footer";
// import Image from "next/image";

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <Header />
      <Navbar />
      <PostList
        title="전체 보기"
        description="모든 카테고리의 글을 볼 수 있습니다."
      />
      <Footer />
    </main>
  );
};

export default Home;
