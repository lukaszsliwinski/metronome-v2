export default function About() {
  return (
    <div className="mt-8 p-4">
      <h2 className="mb-2 text-center font-medium">- about me -</h2>
      <p className="text-justify">
        Hello! My name is Łukasz and I'm&nbsp;Frontend Developer. This app is a&nbsp;part of my
        portfolio that I&nbsp;have made while improving my coding skills.
        <br />
        The application is a&nbsp;simulation of a&nbsp;musical metronome. You can set different
        meters and tempos and change them while playing the metronome. Read more about me and see my
        other apps with source codes at:
        <br />
      </p>
      <a
        href="https://portfolio.lukaszsliwinski.pl"
        className="w-100 mt-4 block cursor-pointer text-center text-xs font-bold underline underline-offset-2 hover:text-lime-700"
        target="_blank"
      >
        www.portfolio.lukaszsliwinski.pl
      </a>
    </div>
  );
}
