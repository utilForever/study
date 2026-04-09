// https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKhCgAIUhtTAsC4CMnIF0o0DejgGOsAujlAVecB2WwH07JBE8cEZBwF1XAficA5BwFLGNJARUcAz2yQVAnBXpskBaZwDYLkQIBjgW9HAGuORAJGOANTsAANZEA1A4B92wBwTgH1HIgS1XAE02ATpoCEGYOHAAXAJ4AHAKaQAwgHsArgCcAzvYC8kAN5QkAB2AIYAtrYAXJAe5m4AlkEA5gA0gdYJAMZRwS5hAEa2bmmQMeYuACa2QeYA+pk10UF5hcWBIS7mABZObtGxCcklkG62ADYh5rYV9a6eth79cYlJsKhpAL4A3GagENBw3HxCaCw4gAG9gAyLgClNR4Ai4wKCgBqr2JCAIOOAOquQgJVjgCPNgDodkEAg5OARAnIIAMIa4T0AJ0OQQAiq4xIIAx0cArUMGAB0LA4UmI+DkilUgAHJwAuXUcUjIFJBABHjgB5x0nSHiAUPGDMZoKZ4mFrL1zP5IABRACOLhCY3JfIAHnZMuZyQA5JzmACCQUskA2kAAZm4nGFIAAiAACVjsAFpMl0RWNqkkFsBOvExh49TtwJknEFYpA3e4vNFnD6fP5AqEItE9V9GZBBNhAYAM8ZUgE4u26AAYXGYASocEgF7OwAdS3rhhl4tlogBWYsABgrw1ilWqdQa5miAEYywAOACcww63V6YcALuNcQAaa5AAD6QADqiSmbjGTicFTzgVGEymM2980WcECpXDkEj0bjidugBrOwCGo7nhtvAJ9jkEAIKuAAw7s4AV0dI7y+gATxwAoPRmc5BANUzkEADxrABlxhdSnWcBtjMY17AAFQWcwHBCLwPEgXxYECCUpXMAAeeUlRVbD-XmAA+Yjhkw2xpWwrd+SFEVsIAa1sSwnA1Rw5i8ck9RDWw9RHfUC2yPjRz1asqhqeoamE-Uux6NxpL1JdJmmWYAydYjAjIjDJUonDBWFMZCI42xYG48JePWMpBiSUjyJ0qj9PooivFMwSLPJZoCiKWztKw7DHMM5yTNE8pxLrKTLM81ofNKCiHLowLjNM2Tej1SyBhWGL+XsvSEqMgNTKUldVPXNLyQy5I1lI8BUB2IA

type Course = {
  name: string;
  price: number;
  student_cnt: number;
  author: string;
  related_courses: string[];
};

import { Equal, Expect, NotAny } from "@type-challenges/utils";

const course: Course = {
  name: "한 입 크기로 잘라먹는 타입스크립트",
  price: 55000,
  student_cnt: 1089,
  author: "이정환 | Winterlood",
  related_courses: [
    "한 입 크기로 잘라먹는 리액트",
    "웹 프론트엔드를 위한 자바스크립트 첫 걸음",
  ],
};

type TestCases = [
  Expect<NotAny<Course>>,
  Expect<
    Equal<
      keyof Course,
      "name" | "price" | "student_cnt" | "author" | "related_courses"
    >
  >,
  Expect<Equal<Course["name"], string>>,
  Expect<Equal<Course["price"], number>>,
  Expect<Equal<Course["student_cnt"], number>>,
  Expect<Equal<Course["author"], string>>,
  Expect<Equal<Course["related_courses"], string[]>>,
];
