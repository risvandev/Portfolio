import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => <div className="min-h-screen bg-background"><Navigation /><main><Hero /><About /><Projects /><Skills /><Education /><Contact /></main><Footer /></div>;
export default Index;