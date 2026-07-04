import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import ExperiencedTools from "@/components/ExperiencedTools";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

const HomePage = () => {
  return (
    <div>
    <Banner></Banner>
    <ExperiencedTools></ExperiencedTools>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  )
}

export default HomePage
