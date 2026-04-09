// https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKhCgAIUhtTAsC4CMnIF0o0DejgGOsAujlAVecB2WwH07JBE8cEZBwF1XAficA5BwFLGNJARUcAz2yQVAnBXpskBaZwDYLkQIBjgW9HAGuORAJGOANTsAANZEA1A4B92wBwTgH1HIgS1XAE02ATpoCEGYOHAAXAJ4AHAKaQAqgGdbAJ0gBeSAG8okAHYAhgC2tgBckE7mrgCW-gDmADR+tsGBMQA2EVGxCcmQcADWtpbZ0XHxqGW5SeAAvgDcZqAQ0HDcfEJoLDiAAb2ADIuAKU0dgCLjAoKAGqvYkIAg44A6q5CAlWOAI82AOh2QgIOTgIgTkIAYQ1wTgCdDkIAiq4yQgGOjgK1DBgB0LBxSxPhyiqqAA5OALl0diTIKkIAI8cAPOPfaQ8QCh4wZjNBTABjAD2-iikAAri5XBFnG5PD4-EFQhEAEQAKXhAAt-IT8pBUukspBCQArcn+AACtgAHiFrBlbLcEcEqSkOdFAgBGInmWxRIUFTmigBMRPi8PhABMhY1wEA

type User = {
  name: string;
  email: string;
  [key: string]: string; // index signature
};

const user: User = {
  name: "John",
  email: "john@example.com",
  extra1: "test",
  extra2: "good",
};
