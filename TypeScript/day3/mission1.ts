// https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKhCgAIUhtTAsC4CMnIF0o0DejgGOsAujlAVecB2WwH07JBE8cEZBwF1XAficA5BwFLGNJARUcAz2yQVAnBXpskBaZwDYLkQIBjgW9HAGuORAJGOANTsAANZEA1A4B92wBwTgH1HIgS1XAE02ATpoCEGYOHAAXAJ4AHAKaQAcgFcAtgGdIAXkgA7VwCNbACdYVABuCxt7AGEAewAbWKCPbzdzIIBLHwBzUIirO0g4pIATFLg-F0CggBpfAODwyMKASR8AM1ivODTMnLrK6qbwUAhoOG4+ITQWHEAA3sAGRcAUpsnAEXGBQUANVexIQBBxwB1VyEBKscAR5sAdDshAQcnARAnIQAwhrk3AE6HIQBFVxkhAMdHAVqGDADoWBwpMR8HJFKpAAOTgBcuyZ1MGQQAR44AecZh0h4gFDxgzGaCmcAZFzWJLmSAAb0gAFEAI5OACG8Tq5IAHnYAMbmOoOWLmACCPkskAAvpB2kFYi5IAAiAACBVsAFoWQALOnxWw5WxuYBOcwZeJuCURcAs2I+NL1KrBNwALkcrnKsAAjHUAEx1ADMdQALHUAKxNY2m4nGxLJG1xEP2iVBWwlCV1CXZaNquOS-zxJy2CX+k1m42lLI08wasOxUr2j2QP0RANmrKdG1tTrdWASwAu41xABprKedAHZhrLICyaW4Nc2oBTmbY2QAeTk8vmzu2QAA+RQSSQ8q+KQTKK8gjdiAD5DzVx0zWeZp1TafFF+4Bg0Qqhj6fIBOL1fqXTp+GN3VelkuTPieZ6TjO17ftuZR1LAgzBA+FpBMBr7vlOl4QbeB4wQB-TmkMx7gE0QA

type Nums = number[];
type Colors = string[];
type Coords = [number, number];
type Info = [string, number];

import { Equal, Expect, NotAny } from "@type-challenges/utils";

const numbers: Nums = [1, 2, 3, 4, 5];
const colors: Colors = ["red", "green", "blue"];
const coordinates: Coords = [3, 5];
const info: Info = ["이정환", 27];

type cases = [
  Expect<NotAny<Nums | Colors | Coords | Info>>,
  Expect<Equal<Nums, number[]>>,
  Expect<Equal<Colors, string[]>>,
  Expect<Equal<Coords, [number, number]>>,
  Expect<Equal<Info, [string, number]>>,
];
