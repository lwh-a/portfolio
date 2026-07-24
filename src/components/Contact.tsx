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

                <button className="rounded-full border px-6 py-3">
                    GitHub
                </button>

                <button className="rounded-full border px-6 py-3">
                    Email
                </button>

                <button className="rounded-full bg-blue-600 px-6 py-3 text-white">
                    Resume
                </button>

            </div>

        </section>
    );
}
export default Contact;