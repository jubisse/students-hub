import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="bg-white">
      <motion.div
        className="relative isolate mt-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto max-w-3xl py-8">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 font-poppins">
              Sua vida estudantil, mais organizada e eficiente.{" "}
              <a href="/contacts" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                saiba mais <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-poppins">
              Organização e eficiência para estudantes de todos os níveis
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/students"
                className="rounded-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-poppins"
              >
                Students Hub
              </a>
              <a
                href="/contacts"
                className="rounded-full ring-1 ring-gray-900/10 text-sm px-3 py-1.5 font-semibold leading-6 text-gray-900 hover:ring-gray-900/20 font-poppins"
              >
                Saiba mais <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </motion.div>
    </div>
  );
};
