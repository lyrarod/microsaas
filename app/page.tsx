"use client";
import React from "react";
import ReactPlayer from "react-player/youtube";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Bot,
  BotMessageSquare,
  ChartNetwork,
  CircuitBoard,
  Cog,
  Facebook,
  Image,
  Instagram,
  Linkedin,
  Menu,
  Star,
  Twitter,
  X,
} from "lucide-react";

import { Input } from "@/components/ui/input";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <header className="sticky top-0 z-50 shadow bg-background/100 backdrop-blur">
        <nav className="container py-4">
          <div className="flex items-center justify-between w-full ">
            <a href="#" className="flex items-center text-indigo-600 gap-x-1">
              <CircuitBoard className="md:size-8" />
              <strong className="text-xl md:text-2xl">MicroSaaS</strong>
            </a>
            <div className="items-center hidden md:flex gap-x-6">
              {["features", "pricing", "testimonials", "faq"].map(
                (link, index) => {
                  return (
                    <a
                      key={index}
                      href={`#${link}`}
                      className="text-sm font-medium tracking-wider capitalize hover:text-indigo-600"
                    >
                      {link}
                    </a>
                  );
                }
              )}

              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Get Started
              </Button>
            </div>

            <div className="flex md:hidden">
              <Button
                variant={"outline"}
                size={"icon"}
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              >
                {menuIsOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          {menuIsOpen && (
            <div className="md:hidden">
              <div className="flex flex-col items-center py-8 space-y-4 font-medium">
                {["features", "pricing", "testimonials", "faq"].map(
                  (link, index) => {
                    return (
                      <a
                        key={index}
                        href={`#${link}`}
                        onClick={() => setMenuIsOpen(false)}
                        className="capitalize hover:text-indigo-600"
                      >
                        {link}
                      </a>
                    );
                  }
                )}

                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="py-16 text-center bg-background bg-dotted">
          <div className="container">
            <div className="space-y-6 md:space-y-8 md:py-20">
              <h1 className="text-4xl font-bold text-indigo-900 md:text-6xl">
                Simplify Your Workflow
              </h1>
              <p className="px-4 text-gray-700 md:text-xl">
                Boost productivity with our intuitive microSaaS solution
              </p>
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Start Free Trial
              </Button>
            </div>

            <div className="mt-14 md:mt-0 player-wrapper">
              {isClient ? (
                <ReactPlayer
                  className="react-player"
                  url="https://www.youtube.com/watch?v=huWbCLHHYgQ"
                  width="100%"
                  height="100%"
                  controls
                  loop
                  // playing
                  // muted
                />
              ) : null}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-12 bg-indigo-200">
          <div className="container flex flex-col items-center justify-around space-y-4 md:space-y-0 lg:flex-row">
            <h2 className="mb-12 text-2xl font-bold text-indigo-900 lg:mb-0 md:text-4xl">
              {`Brands & Sponsors`}
            </h2>
            <div className="grid grid-cols-2 gap-10 lg:gap-16 lg:grid-cols-4">
              <img
                src="react.png"
                alt="react"
                className="transition cursor-pointer max-w-14 md:max-w-20 hover:scale-110"
                title="React"
              />
              <img
                src="next.png"
                alt="next.js"
                className="transition cursor-pointer max-w-14 md:max-w-20 hover:scale-110"
                title="Next.js"
              />
              <img
                src="tailwind.png"
                alt="tailwind"
                className="transition cursor-pointer max-w-14 md:max-w-20 hover:scale-110"
                title="Tailwindcss"
              />
              <img
                src="framer.png"
                alt="framer motion"
                className="transition cursor-pointer max-w-14 md:max-w-20 hover:scale-110"
                title="Framer Motion"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container py-16">
          <div className="container justify-center w-full mb-16 space-y-1 text-center max-w-fit">
            <strong className="block text-center text-indigo-500">
              Our Features
            </strong>
            <h2 className="text-2xl font-bold text-center text-indigo-900 md:text-3xl">
              Our Awesome Features
            </h2>
            <p className="px-4 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, quibusdam!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 md:pt-16 md:grid-cols-2 xl:grid-cols-3">
            {[
              { icon: Star, label: "Automated Tasks" },
              { icon: Bot, label: "Real-time Collaboration" },
              { icon: ChartNetwork, label: "Insightful Analytics" },
              { icon: BotMessageSquare, label: "AI Agents" },
              { icon: Cog, label: "Custom AI Voices" },
              { icon: Image, label: "AI Image Generator" },
            ].map((feature, index) => (
              <Card
                key={index}
                className="relative flex flex-col items-center text-center transition duration-300 hover:shadow-lg"
              >
                <div className="absolute top-0 flex items-center justify-center -translate-y-1/2 bg-indigo-700 rounded-full size-14">
                  <feature.icon className="text-white size-6" />
                </div>
                <CardHeader className="flex items-center mt-6">
                  <CardTitle className="text-xl font-semibold text-indigo-700">
                    {feature.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container py-16 ">
          <div className="container justify-center w-full mb-16 space-y-1 text-center max-w-fit">
            <strong className="block text-center text-indigo-500">
              Our Pricing
            </strong>
            <h2 className="text-2xl font-bold text-center text-indigo-900 md:text-3xl">
              Choose your best plan
            </h2>
            <p className="px-4 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, quibusdam!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:pt-16 lg:grid-cols-3">
            {[
              {
                name: "Basic",
                price: "$9",
                features: [
                  "5 Projects",
                  "Basic Analytics",
                  "Email Support",
                  "5 Projects",
                  "Basic Analytics",
                  "Email Support",
                ],
              },
              {
                name: "Pro",
                price: "$29",
                features: [
                  "Unlimited Projects",
                  "Advanced Analytics",
                  "Priority Support",
                  "Unlimited Projects",
                  "Advanced Analytics",
                  "Priority Support",
                ],
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "Custom Solutions",
                  "Dedicated Account Manager",
                  "24/7 Phone Support",
                  "Custom Solutions",
                  "Dedicated Account Manager",
                  "24/7 Phone Support",
                ],
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className="transition duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-indigo-700">
                    {plan.name}
                  </CardTitle>
                  <p className="text-4xl font-bold text-gray-800">
                    {plan.price}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="container py-16">
          <div className="container justify-center w-full mb-16 space-y-1 text-center max-w-fit">
            <strong className="block text-center text-indigo-500">
              Our Testimonials
            </strong>
            <h2 className="text-2xl font-bold text-center text-indigo-900 md:text-3xl">
              What Our Customers Say
            </h2>
            <p className="px-4 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, quibusdam!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 md:pt-16">
            {[
              {
                name: "Jane Smith",
                role: "Freelancer",
                quote:
                  "I can't imagine working without this tool now. It's a game-changer.",
                img: "https://randomuser.me/api/portraits/women/34.jpg",
              },
              {
                name: "John Doe",
                role: "CEO, TechCorp",
                quote:
                  "This microSaaS has revolutionized our workflow. Highly recommended!",
                img: "https://randomuser.me/api/portraits/men/57.jpg",
              },
              {
                name: "Juliette Voy",
                role: "Freelancer",
                quote:
                  "I can't imagine working without this tool now. It's a game-changer.",
                img: "https://randomuser.me/api/portraits/women/65.jpg",
              },
              {
                name: "Enzo Boy",
                role: "CEO, TechCorp",
                quote:
                  "This microSaaS has revolutionized our workflow. Highly recommended!",
                img: "https://randomuser.me/api/portraits/men/42.jpg",
              },
              {
                name: "Valentina Girl",
                role: "Freelancer",
                quote:
                  "I can't imagine working without this tool now. It's a game-changer.",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              },
              {
                name: "Shad Boss",
                role: "CEO, TechCorp",
                quote:
                  "This microSaaS has revolutionized our workflow. Highly recommended!",
                img: "https://github.com/shadcn.png",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="transition hover:shadow-md">
                <CardContent className="flex flex-col items-center justify-center pt-6 text-center">
                  <Avatar>
                    <AvatarImage src={testimonial.img} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="my-2 text-gray-600">{`"${testimonial.quote}"`}</p>
                  <strong className="text-indigo-700 ">
                    {testimonial.name}
                  </strong>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="container py-16">
          <h2 className="mb-12 text-2xl font-bold text-center text-indigo-900 md:text-3xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="container max-w-5xl">
            {[
              {
                question: "How does the free trial work?",
                answer:
                  "Our free trial lasts for 14 days and includes all features of the Pro plan. No credit card required.",
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer:
                  "Yes, you can cancel your subscription at any time. You won't be charged for the next billing cycle.",
              },
              {
                question: "Is there a limit on the number of users?",
                answer:
                  "The Basic plan allows up to 5 users. The Pro and Enterprise plans have unlimited users.",
              },
              {
                question: "Do you offer customer support?",
                answer:
                  "Yes, we offer email support for all plans and priority support for Pro and Enterprise plans.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-semibold text-left text-indigo-700 md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      {/* Footer */}
      <footer className="pt-8 text-white bg-indigo-900">
        <div className="container flex flex-col md:justify-between md:flex-row">
          <div className="space-y-2 md:mb-0">
            <a href="#" className="flex items-center gap-x-1 md:justify-normal">
              <CircuitBoard className="md:size-8" />
              <strong className="text-xl md:text-2xl">MicroSaaS</strong>
            </a>
            <p className="text-indigo-300">Simplify your workflow</p>
          </div>

          <div className="flex flex-col mt-8 space-y-2 md:mt-0">
            <strong className="capitalize">our plans</strong>
            {["basic", "pro", "enterprise"].map((link, i) => {
              return (
                <a
                  href="#"
                  key={i}
                  className="text-sm text-indigo-300 capitalize transition hover:text-white"
                >
                  {link}
                </a>
              );
            })}
          </div>

          <div className="flex flex-col mt-8 space-y-2 md:mt-0">
            <strong className="capitalize">support</strong>
            {["help center", "Privacy Policy", "Terms of Service"].map(
              (link, i) => {
                return (
                  <a
                    href="#"
                    key={i}
                    className="text-sm text-indigo-300 capitalize transition hover:text-white"
                  >
                    {link}
                  </a>
                );
              }
            )}
          </div>

          <div className="flex flex-col mt-8 space-y-2 md:mt-0">
            <strong>Connect With Us</strong>
            <div className="flex gap-x-4">
              <a href="#">
                <Twitter className="text-indigo-300 transition hover:scale-110 hover:text-white" />
              </a>
              <a href="#">
                <Facebook className="text-indigo-300 transition hover:scale-110 hover:text-white" />
              </a>
              <a href="#">
                <Instagram className="text-indigo-300 transition hover:scale-110 hover:text-white" />
              </a>
              <a href="#">
                <Linkedin className="text-indigo-300 transition hover:scale-110 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-indigo-300 border-t border-indigo-800 md:text-center">
          <p className="container py-3 text-sm">
            &copy; {new Date().getFullYear()} MicroSaaS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
