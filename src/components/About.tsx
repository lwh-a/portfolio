function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-8 py-28"
    >

      <h2 className="mb-12 text-center text-4xl font-bold">
        About Me
      </h2>


      <div className="grid gap-8 md:grid-cols-3">

        <div className="rounded-2xl bg-white p-8 shadow">

          <h3 className="mb-4 text-xl font-bold">
             소개
          </h3>

          <p className="text-gray-600">
            React 기반 웹 화면 구현과
            사용자 경험 개선에 관심이 있습니다.
          </p>

        </div>


        <div className="rounded-2xl bg-white p-8 shadow">

          <h3 className="mb-4 text-xl font-bold">
             교육
          </h3>

          <p className="text-gray-600">
            AI + X 부트캠프 웹 프로젝트 수행
            <br />
            2026/02/24~2026/07/29
          </p>

        </div>


        <div className="rounded-2xl bg-white p-8 shadow">

          <h3 className="mb-4 text-xl font-bold">
             기술
          </h3>

          <div className="flex flex-wrap gap-2">

            {
              ["HTML", "css","javascript","python","React","TypeScript","Tailwind","Flask"]
              .map(skill => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100 px-4 py-2"
                >
                  {skill}
                </span>
              ))
            }

          </div>

        </div>


      </div>

    </section>
  );
}

export default About;