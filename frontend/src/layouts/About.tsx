export default function About() {
  return (
    <div className="mt-8 p-4">
        <h2 className="font-medium mb-2 text-center">- about me -</h2>
        <p className="text-justify">
          Hello! My name is Łukasz and I'm&nbsp;Frontend Developer. This app is a&nbsp;part of my
          portfolio that I&nbsp;have made while improving my coding skills.
          <br />
          The application is a&nbsp;simulation of a&nbsp;musical metronome. You can set different meters and tempos and change them while playing the metronome.
          Read more about me and see my
          other web apps with source codes at:
          <br />
        </p>
        <a
          href="https://lukaszsliwinski.pl"
          className="w-100 hover:text-lime-700 mt-1 block cursor-pointer text-center text-sm font-bold underline underline-offset-2"
        >
          www.lukaszsliwinski.pl
        </a>
    </div>
  );
}
