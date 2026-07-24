import { useEffect, useRef, useState } from "react";
import todayMenu from "../assets/images/today-menu.png";
import seoulBike from "../assets/images/seoul-bike.png";
import connectShop from "../assets/images/connectshop.png";
import bookStore from "../assets/images/bookstore.png";

const projects = [
    {
        title: "오늘의 메뉴",

        info: "팀 프로젝트 5명 · 2026.06.19~07.16",

        description:
        "메뉴 추천, 식당 검색, 파티 모집,  AI 챗봇 기능을 제공하는 음식 추천 웹 서비스입니다.",

        role:
        "프론트엔드 · QA",

        contribution:
        "· 가게 배너 이미지 컴포넌트화 \n · 찜,클릭,검색수에 연동 된 인기 키워드 로직 구현  \n · 고객센터 localstorage DB혼선 해결 ",

        stack: [
        "React",
        "Tailwind CSS",
        "Flask",
        "PostgreSQL",
        "Docker",
        ],

        image: todayMenu,

        github: "https://github.com/lwh-a/today-menu/tree/main",

        demo: "https://today-menu-git-main-sdhuen01-3018s-projects.vercel.app/",
    },

    {
        title: "서울 자전거",

        info: "팀 프로젝트 4명 · 2026.05.21 ~ 2026.06.12",
        
        description:
            "서울시 공공 자전거 데이터를 활용해 이용량을 분석,예측한 데이터 프로젝트 입니다.",

        role: "데이터 전처리 · 데이터 분석",

        contribution:
            "· 성별,연령에 따른 이용량 분석 \n · 년도별 이용량 정리 및 내년 이용량 예측 \n · 대시보드 예측값 검사   ",
        stack: [
            "Python",
            "Pandas",
            "Colab",
            "Machine Learning",
        ],
        image: seoulBike,
        github: "https://github.com/seoul-public-bike/seoul-public-bike",
        demo: "https://huggingface.co/spaces/lwh1207/seoul_bike",
    },

    {
        title: "커넥트샵",
        info: "팀 프로젝트 4명 · 2026.04.07 ~ 2026.04.28",
        description:
            "flask를 사용해 구현한 프로젝트로 가상의 전자제품 판매사이트를 만들었습니다 .",
        
        role: "프론트엔드",

        contribution: "· 버튼과 카드에 애니메이션을 적용하여 사용자 피드백을 강화 \n · 제품의 제품군과 브랜드에 맞게 분류  \n · 제품 별 옵션과 그에따른 가격,이미지 변동 구현 ",

        detail:
            "처음으로 flask를 사용하고 처음으로 그룹을 지어 제작한 프로젝트로 회원,비회원 구분 제품별 페이지,개별 옵션 구현 장바구니 마이페이지등 실제에 가깝게 구현시켰습니다 .",
        stack: [
            "HTML",
            "CSS",
            "JavaScript",
            "python",
            "flask"
        ],
        image: connectShop,
        github: "https://github.com/lwh-a/ConnectShop",
        demo: "https://connectshop.onrender.com/",
    },

    {
        title: "단기북스",
        info: "개인 프로젝트 · 2026.05.19 ~ 2026.06.06",
        description:
            "카카오 API를 활용하여 도서 정보를 연결시킨 도서점 홈페이지 입니다",

        role: "전체",

        contribution: "· 카카오 API와 연동해 데이터를 연결 \n · 슬라이드,드롭아웃 버튼 등 기초적인 자바스크립트 기능 구현\n · 스티키 포지션의 미작동 이유 파악 후 재구현",

        stack: [
            "HTML",
            "CSS",
            "JavaScript",
            "API"
        ],
        image: bookStore,
        github: "https://github.com/lwh-a/bookstore",
        demo: "https://lwh-a.github.io/bookstore/",
    },
];


function Projects() {

    const [activeIndex, setActiveIndex] = useState(0);

    const project = projects[activeIndex];

    const [move, setMove] = useState(0);

    const [hover, setHover] = useState(false);

    const imgRef = useRef<HTMLImageElement>(null);

    const BOX_HEIGHT = 400;

    useEffect(() => {
        setMove(0);
        setHover(false);
    }, [activeIndex]);

    const handleImageLoad = () => {

        if (!imgRef.current) return;

        const renderedHeight =
            imgRef.current.getBoundingClientRect().height;

        setMove(
            Math.max(renderedHeight - BOX_HEIGHT, 0)
        );
    };

    return (
        <section
            id="projects"
            className="mx-auto max-w-7xl px-8 py-28">

            <h2 className="mb-12 text-center text-4xl font-bold">
                Projects
            </h2>


            {/* 프로젝트 선택 */}
            <div className="mb-10 flex justify-center gap-4">

                {projects.map((item, index) => (

                    <button key={item.title}
                        onClick={() => setActiveIndex(index)}
                        className={`
                            rounded-full
                            px-6
                            py-2
                            transition

                            ${activeIndex === index
                                ? "bg-blue-600 text-white"
                                : "border hover:bg-gray-100"
                            }
                        `}
                    >
                        {item.title}
                    </button>

                ))}

            </div>

            <div className="grid gap-10 lg:grid-cols-2">

                {/* 설명 영역 */}
<div>

    {/* 프로젝트명 */}
    <h3 className="text-3xl font-bold">
        {project.title}
    </h3>

    {/* 프로젝트 정보 */}
    <div className="mt-2 mb-8 flex gap-4 text-sm text-gray-500 ">

        <span className="rounded-full
                bg-gray-900
                px-3
                py-1
                text-white
                text-xs">
            {project.info}
        </span>

    </div>



    {/* 프로젝트 소개 */}
    <div className="mb-8">

        <p className="leading-8 text-gray-600">
            {project.description}
        </p>

    </div>



    {/* 담당 */}
    <div className="mb-8">

        <p className="leading-8 text-gray-600">
            {project.role}
        </p>

    </div>



    {/* 기여 항목 */}
    <div className="mb-8">

        <p className="whitespace-pre-line leading-8 text-gray-600">
            {project.contribution}
        </p>

    </div>



    {/* 사용 기술 */}
    <div className="mb-8">

        <div className="flex flex-wrap gap-2">

            {project.stack.map(skill => (

                <span
                    key={skill}
                    className="
                        rounded-full
                        bg-slate-100
                        px-3
                        py-1
                        text-xs
                    "
                >
                    {skill}
                </span>

            ))}

        </div>

    </div>



    {/* 링크 */}
    <div className="flex gap-4">

        <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
                rounded
                bg-gray-900
                px-5
                py-3
                text-white
            "
        >
            GitHub
        </a>

        <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
                rounded
                bg-blue-600
                px-5
                py-3
                text-white
            "
        >
            Demo
        </a>

    </div>

</div>

                {/* 이미지 영역 */}
                <div
                    className="
                    h-[400px]
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow"

                    onMouseEnter={() => setHover(true)}

                    onMouseLeave={() => setHover(false)}
                >

                    <img
                        key={project.image}
                        ref={imgRef}
                        src={project.image}
                        alt={project.title}
                        onLoad={handleImageLoad}

                        style={{
                            transform: hover
                                ? `translateY(-${move}px)`
                                : "translateY(0)",

                            transition: "transform 3s linear"
                        }}

                        className="w-full"
                    />

                </div>

            </div>

        </section>
    );
}

export default Projects;