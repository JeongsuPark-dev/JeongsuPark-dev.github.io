import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Technology from "../components/Technology";
import Project from "../components/Project";
import Writing from "../components/Writing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const PROJECTS = {
  outerLinks: [
    {
      title: "네이버 클론코딩",
      link: "https://me2.do/xWNMi3gu",
      image: "naver_clone",
      description: "네이버 메인 페이지 클론. 단축 URL API를 활용한 학습용 프로젝트.",
      tags: ["React", "API", "Clone"],
      subLink: "https://me2.do/xWNMi3gu",
      subContents: "me2.do/xWNMi3gu",
    },
  ],
  innerLinks: [
    {
      title: "안드로이드 앱 프로젝트",
      link: "miniproject001",
      description: "학습 보조 앱. 네이티브 안드로이드와 DB 연동을 학습한 첫 출시 앱입니다.",
      tags: ["Android", "Java", "DB"],
    },
    {
      title: "IoT 앱 프로젝트",
      link: "miniproject002",
      description: "블루투스로 센서값을 수집해 서버 DB에 적재하는 IoT 연동 실험.",
      tags: ["IoT", "Bluetooth", "DB"],
    },
  ],
};

const SKILLS = {
  techHighList: ["java", "git", "js", "mysql", "html", "css3", "jquery"],
  techMidList: ["nodejs", "react"],
  techLowList: ["redux", "objective_c"],
};

export default function Main() {
  return (
    <div className="app">
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Technology {...SKILLS} />
        <Project {...PROJECTS} />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
