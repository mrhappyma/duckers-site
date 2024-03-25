import Head from "next/head";
import { api } from "~/utils/api";
import { Dela_Gothic_One } from "next/font/google";
import { useState } from "react";

const DelaGothicOne = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const stats = api.stats.get.useQuery();
  const [showDetails, setDetails] = useState(false);

  return (
    <>
      <Head>
        <title>Duckers</title>
        <meta name="description" content="Imagine a duck" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="border-duckYellow bg-notQuiteBlack min-h-screen w-screen border-t-8 px-3 pt-3">
        <h1
          className={`text-7xl text-white sm:text-9xl ${DelaGothicOne.className}`}
        >
          Duckers
        </h1>
        <p className={`mt-5 text-2xl text-white ${DelaGothicOne.className}`}>
          Join{" "}
          <span className="text-bold text-duckYellow">
            {stats.data?.guildCount?.toLocaleString() ?? "loading"}+
          </span>{" "}
          servers and{" "}
          <span className="text-bold text-duckYellow">imagine a duck!</span>
        </p>
        <div className="mt-16 flex flex-row items-center justify-center">
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=906651557829967902"
            target="_blank"
            rel="noreferrer"
            className="bg-duckYellow m-1 rounded-md p-5 text-white transition-all hover:mx-0 hover:px-7"
          >
            Invite
          </a>
        </div>
        <span
          className="text-duckYellow flex  cursor-zoom-in flex-row items-center justify-center text-sm underline"
          onClick={() => setDetails(!showDetails)}
        >
          learn more
        </span>
        {/* <br /> go brr */}
        {showDetails && (
          <p className="mt-2 text-base text-white">
            Type /quack, get a duck.
            <br />
            <br />
            Sentimental story time!
            <br />
            <br />
            Duckers would probably be considered my first project. It was
            originally written and hosted on{" "}
            <a href="https://autocode.com" className="text-duckYellow">
              Autocode
            </a>
            , and took me a while to write and I remember asking for help on how
            to assign the http response to a variable. You type /quack and you
            get a duck. So cool. Wow. Amazing.
            <br />I put it on all the bot lists, and sorta promoted it while
            continuing to use Autocode to do things I couldn&apos;t do and
            Autocode really wasn&apos;t built to do. Autocode was what really
            got me into coding, so credit to it for that. For a while I was
            trying to make an official Autocode library for the API I get the
            ducks from,{" "}
            <a href="https://random-d.uk" className="text-duckYellow">
              random-d.uk
            </a>
            . After I turned 13, the legal age you actually have to be to use
            Discord, I got my parents help to verify the bot. Then it just sorta
            sat there for a bit.
            <br /> <br />
            Then it broke. Autocode changed their pricing and Duckers no longer
            fit in the free tier. People using the bot rushed to join my server
            and let me know, and I rewrote the bot and had it online in 20
            minutes, from a school chromebook.
            <br />
            This let me know there were people still using the bot. I
            didn&apos;t know that. But they were annoying and I had to get rid
            of them. I announced a plan to shut down the bot, and began making a
            guide and open-source version that could be deployed on Vercel
            serverless functions if you <i>really</i> still wanted ducks. Long
            story short there were so many more people than I thought there
            were. If you&apos;re wondering, the serverless functions version is
            what runs today.
            <br />
            <br />
            So here we are. You still just type /quack and get a duck.
            There&apos;s one new feature: the Duck of The Day gives you... the
            duck of the day. I even set up some basic analytics - ~800 ducks get
            sent every month. Last month had closer to 2,000 but those trends
            don&apos;t seem to be continuing. The privacy policy needs a better
            home so now it has a proper website (the old one made great use of
            marquee but needs to be retired).
            <br />
            <br />
            Invite the bot. Get some ducks. Thanks for reading.
            <br />
            Dominic, October 10th 2023
          </p>
        )}
      </main>
    </>
  );
}
