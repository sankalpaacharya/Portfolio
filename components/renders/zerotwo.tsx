import Link from "next/link";

export default function ZeroTwoReadMe() {
  return (
    <div className="space-y-5">
      <p>
        I came up with the idea for this project back in 2024.&nbsp;I worked on
        it for a while because I wanted to build something fun — a game.&nbsp;
        Here’s how it looked a year ago:&nbsp;
        <Link
          target="_blank"
          className="text-primary hover:underline"
          href={
            "https://www.linkedin.com/posts/sankalpa02_typebattle-webdevelopment-react-activity-7206325729268084737-eax7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcdZ9YBEgGpBMJrmSPwtYt4JnqaKKjQruE"
          }
        >
          video
        </Link>
        .
      </p>

      <p>
        The idea of the game is fairly simple — both players type and earn coins
        for each correct character.&nbsp;With those coins, you can buy powers
        like fireballs or flashbangs and use them against your opponent.
      </p>

      <p>
        I restarted the project this Diwali (2025)🪔 just for fun.&nbsp;I didn’t
        have much to do during the Diwali break since I was in the hostel.
      </p>

      <p>I spent a week rebuilding what I wanted to make a year ago.</p>

      <p>
        Building a game like this isn’t just about programming — it’s also about
        adding elements like sound effects and animations that make it more
        enjoyable and lively.
      </p>

      <p>
        This is still a work in progress.&nbsp;I want to extract the typing
        logic and turn it into a headless UI, add more animations, and fix the
        caret movement.
      </p>

      <div>
        <p>
          Repo:&nbsp;
          <Link
            target="_blank"
            href={"https://github.com/sankalpaacharya/zero-two/"}
            className="text-primary hover:underline"
          >
            github.com/sankalpaacharya/zero-two
          </Link>
        </p>
      </div>
    </div>
  );
}
