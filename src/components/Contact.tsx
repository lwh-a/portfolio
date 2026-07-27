import { FlipCard } from "./FlipCard";

function Contact() {
    return (
        <section
            id="contact"
            className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 text-center"
        >

            <h2 className="mb-6 text-4xl font-bold">
                감사합니다.
            </h2>

            <p className="mb-10 text-gray-600">
                끝까지 봐주셔서 감사합니다.
                <br />
                언제든지 연락 부탁드립니다.
            </p>

            <div className="flex gap-6">

                <FlipCard
                    width={240}
                    height={80}
                    front={
                        <button className=" ">
                            GitHub
                        </button>
                    }
                    back={
                        <div>
                            https://github.com/lwh-a
                        </div>
                    }
                />

                <FlipCard
                    width={240}
                    height={80}
                    front={
                        <button className="">
                            Email
                        </button>
                    }
                    back={
                        <div>
                            nananatehan1133@naver.com
                        </div>
                    }
                />

            </div>

        </section>
    );
}
export default Contact;