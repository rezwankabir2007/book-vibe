
import Image from "next/image";
import React from "react";

import BannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="px-4 py-6 md:py-8">
      <div
        className="
          container mx-auto
          relative overflow-hidden
          min-h-[520px]
          rounded-[32px]
          bg-gradient-to-br from-[#eff6ff] via-white to-[#dbeafe]
          px-6 py-10
          md:min-h-[600px]
          md:px-12
          lg:px-16
          xl:px-20
        "
      >
        {/* Background Decorations */}
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />

        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />

        <div className="absolute right-[40%] top-10 h-20 w-20 rounded-full bg-blue-200/30 blur-2xl" />

        {/* Main Content */}
        <div className="relative z-10 grid min-h-[520px] items-center gap-12 md:grid-cols-2">

          {/* LEFT */}
          <div className="space-y-7">

            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-blue-100
                bg-white/80
                px-4 py-2
                text-sm font-semibold
                text-blue-600
                shadow-sm
                backdrop-blur
              "
            >
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
              {/* Learn • Explore • Grow */}
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-2xl
                text-4xl font-black
                leading-[1.08]
                tracking-tight
                text-slate-900
                sm:text-5xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              Learn Smarter.
              <span className="block text-blue-600">
                Achieve More.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                max-w-xl
                text-base
                leading-7
                text-slate-600
                md:text-lg
              "
            >
              Discover subjects, books, study materials, useful tools,
              resources and everything you need to build a better future.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">

              <button
                className="
                  rounded-xl
                  bg-blue-600
                  px-7 py-3.5
                  font-bold text-white
                  shadow-lg shadow-blue-200
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-blue-700
                  hover:shadow-xl
                "
              >
                Explore Subjects →
              </button>

              <button
                className="
                  rounded-xl
                  border border-slate-200
                  bg-white/80
                  px-7 py-3.5
                  font-semibold text-slate-700
                  shadow-sm
                  backdrop-blur
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-300
                  hover:text-blue-600
                "
              >
                Explore Resources
              </button>

            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-8 pt-4">

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  100+
                </h3>
                <p className="text-sm text-slate-500">
                  Books
                </p>
              </div>

              <div className="h-10 w-px bg-slate-200" />

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  50+
                </h3>
                <p className="text-sm text-slate-500">
                  Resources
                </p>
              </div>

              <div className="h-10 w-px bg-slate-200" />

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  24/7
                </h3>
                <p className="text-sm text-slate-500">
                  Learning
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-center">

            {/* Glow */}
            <div
              className="
                absolute
                h-[320px] w-[320px]
                rounded-full
                bg-blue-400/30
                blur-3xl
                md:h-[450px]
                md:w-[450px]
              "
            />

            {/* Image Card */}
            <div
              className="
                relative
                w-full
                max-w-[560px]
                rotate-1
                overflow-hidden
                rounded-[32px]
                border-[10px]
                border-white/80
                shadow-[0_25px_70px_rgba(37,99,235,0.20)]
                transition-all
                duration-500
                hover:rotate-0
                hover:scale-[1.02]
              "
            >
              <Image
                src={BannerImg}
                alt="Student learning"
                className="
                  h-[300px]
                  w-full
                  object-cover
                  md:h-[420px]
                  lg:h-[450px]
                "
                priority
              />

              {/* Image Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-blue-950/30
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* Floating Card */}
            <div
              className="
                absolute
                -bottom-5
                -left-2
                rounded-2xl
                border border-white/70
                bg-white/90
                px-5 py-4
                shadow-xl
                backdrop-blur
                md:-left-8
              "
            >
              <p className="text-xs font-medium text-slate-500">
                Start your journey
              </p>

              <p className="text-base font-bold text-slate-900">
                🚀 Learn Something New
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;

