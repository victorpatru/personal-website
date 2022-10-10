import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Victor Patru</title>
        <meta name="description" content="Victor Patru" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center font-sans">
        <section className="flex max-w-md flex-col items-center space-y-7 rounded-3xl border-4 border-double bg-[#fafafa] p-20 text-center shadow-xl transition duration-700 ease-in-out hover:scale-105">
          <svg
            width="100"
            height="100"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="duration-300 ease-in-out hover:rotate-90"
          >
            <circle cx="128" cy="128" r="128" fill="url(#gradient)" />
            <defs>
              <linearGradient
                id="gradient"
                x1="0"
                y1="0"
                x2="256"
                y2="256"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#ffae00" />
                <stop offset="1" stop-color="#a600ff" />
              </linearGradient>
            </defs>
          </svg>

          <p className="text-3xl font-bold text-[#1c1c1e]">Victor Patru</p>

          <p className="text-slate-500">
            At the intersection of Software Engineering, Political Philosophy
            and Compound Movements
          </p>

          {/* Previous work */}
          <div className="-ml-5 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="19"
              fill="#ff9000"
            >
              <path d="M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z" />
            </svg>
            <p className="ml-2 text-slate-600">
              Previously early at{" "}
              <a
                href="https://www.beondeck.com/"
                className="font-semibold text-slate-900"
                target="_blank"
                rel="noreferrer"
              >
                On Deck
              </a>
            </p>
          </div>

          {/* Location */}
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="20"
              fill="#006fff"
            >
              <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
            </svg>

            <p className="ml-2 text-slate-600">Currently based out of Europe</p>
          </div>

          {/* Get in touch */}
          <div className="ml-2 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20"
              fill="#ff0000"
            >
              <path d="M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V323.9c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64H391l48 192H387.8c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73L121 96z" />
            </svg>
            <p className="ml-2 text-slate-600">
              Get in touch, DM me on{" "}
              <a
                href="https://twitter.com/Victor_Patru"
                className="font-semibold text-slate-900"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </p>
          </div>

          <div className="-ml-16 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="20"
              fill="#ffc500"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>

            <p className="ml-2 text-slate-600">
              Also active on{" "}
              <a
                href="https://github.com/victorpatru"
                className="font-semibold text-slate-900"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
