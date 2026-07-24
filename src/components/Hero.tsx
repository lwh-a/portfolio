function Hero() {
  return (
    <section className="flex h-screen flex-col items-center justify-center px-6 text-center">

      <p className="mb-4 text-lg font-semibold text-blue-600">
        Frontend Developer
      </p>

      <h1 className="mb-6 text-6xl font-black">
        이원호
      </h1>

      <p className="max-w-xl text-lg leading-8 text-gray-600">
        기능과 사용성을 함께 고민하며
        <br />
        사용자 경험을 만드는 프론트엔드 개발자입니다.
      </p>

      <a href= "#projects"className="mt-10 rounded-full bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700">
        프로젝트 보기
      </a>


      <div className="absolute bottom-10 animate-bounce text-3xl">
        ↓
      </div>

    </section>
  );
}

export default Hero;