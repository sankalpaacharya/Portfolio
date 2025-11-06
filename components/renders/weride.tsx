import Link from "next/link";

export default function WerideReadme() {
  return (
    <div className="space-y-5">
      <p>Start date: Aug 2024</p>
      <p>
        🛵 I started this project thinking about myself, in our hostel many
        people own scooters, and most of the time they’re just sitting there
        collecting dust in the parking lot.
      </p>
      <p>
        And whenever I wanted to go out, I always had to hustle for an
        autorickshaw or Uber, and none of my close friends had a vehicle I could
        borrow.
      </p>
      <p>
        One day, on my way back from groceries, I got an idea why not make a
        platform where people can list their vehicles and let others rent them?
        Owners earn money, renters get cheap and comfortable transportation.
      </p>
      <p>
        So I invited two of my friends and led a small team to build the
        platform.
      </p>
      <p>We worked on it for almost 9 months and finally launched it!</p>
      <p>
        People really liked the idea, and it started doing great within the
        hostel. Within a few weeks of launch, we were already having regular
        rides.
      </p>
      <p>
        We completed 45+ rides before shutting it down since managing it legally
        was tough for us. Coding, marketing, convincing people, rushing to
        deliver vehicle keys — everything was super fun to work on!
      </p>
      <p>End date: May 2025</p>

      <div>
        <p>
          site:{" "}
          <Link
            target="_blank"
            href={"weride-ruddy.vercel.app/"}
            className="text-primary hover:underline"
          >
            weride-ruddy.vercel.app
          </Link>
        </p>

        <p>
          repo:{" "}
          <Link
            target="_blank"
            href={"https://github.com/sankalpaacharya/weride/"}
            className="text-primary hover:underline"
          >
            github.com/sankalpaacharya/weride
          </Link>
        </p>
      </div>
    </div>
  );
}
