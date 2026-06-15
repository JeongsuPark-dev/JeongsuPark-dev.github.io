import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Technology from "../components/Technology";
import Project from "../components/Project";
import Footer from "../components/Footer";

const PROJECTS = {
  outer_link: [
    {
      Title: "네이버 클론코딩",
      Link: "https://me2.do/xWNMi3gu",
      Image: "naver_clone",
      Description: "네이버 메인 페이지 클론. 단축 URL API를 활용한 학습용 프로젝트.",
      Tags: ["React", "API", "Clone"],
      SubLink: "https://me2.do/xWNMi3gu",
      SubContents: "me2.do/xWNMi3gu",
    },
  ],
  inner_link: [
    {
      Title: "안드로이드 앱 프로젝트",
      Link: "miniproject001",
      Description: "학습 보조 앱. 네이티브 안드로이드와 DB 연동을 학습한 첫 출시 앱입니다.",
      Tags: ["Android", "Java", "DB"],
    },
    {
      Title: "IoT 앱 프로젝트",
      Link: "miniproject002",
      Description: "블루투스로 센서값을 수집해 서버 DB에 적재하는 IoT 연동 실험.",
      Tags: ["IoT", "Bluetooth", "DB"],
    },
  ],
};

const SKILLS = {
  tech_high_list: ["java", "git", "js", "mysql", "html", "css3", "jquery"],
  tech_mid_list: ["nodejs", "react"],
  tech_low_list: ["redux", "objective_c"],
};

export default function Main() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Technology {...SKILLS} />
        <Project {...PROJECTS} />
      </main>
      <Footer />
    </div>
  );
}
