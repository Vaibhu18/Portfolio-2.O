import Menubar from './_components/Menubar'
import Header from './_components/Header';
import AboutMe from './_components/AboutMe';
import Education from './_components/Education';
import Skills from './_components/Skills';
import Experience from './_components/Experience';
import Projects from './_components/Projects';
import Footer from './_components/Footer';

const Home = () => {
    return (
        <div className='dark:bg-black dark:text-white'>
            <Header />

            <AboutMe />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Footer />
            <Menubar />
        </div>
    )
}

export default Home