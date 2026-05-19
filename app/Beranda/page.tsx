import Navbar from "./navbar";
import Hero from "./Hero_Section";
import Features from "./features";
import Stats from "./Stats_Section";
import Profile from "./Profile_Section";
import News from "./News_Section";
import Facilities from "./Facilities";
import Footer from "./Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Profile />
      <News />
      <Facilities />
      <Footer />
    </main>
  );
}