"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FadeInUp } from "@/components/FadeInUp";
import SectionHeading from "@/components/SectionHeading";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="container-max mx-auto">
        <FadeInUp>
          <SectionHeading
            title="Testimonials"
            subtitle="What clients and colleagues say about working with me"
          />
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="relative mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-lg border border-white/20 p-8 sm:p-12">
              <Quote className="mb-6 h-10 w-10 text-gray-500" />

              <div>
                <p className="text-lg leading-relaxed text-gray-300 sm:text-xl">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/20">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="rounded border border-white/20 p-2 hover:border-white/40"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      index === current
                        ? "w-6 bg-white"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    )}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="rounded border border-white/20 p-2 hover:border-white/40"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
