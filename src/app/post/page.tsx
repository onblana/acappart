import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NewPost from "@/components/NewPost";
import Footer from "@/components/Footer";

const Post = () => {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <Header />
      <Navbar />
      <NewPost />
      <Footer />
    </main>
  );
};

export default Post;
