import type { NextPage } from "next";
import Head from "next/head";
import { Dela_Gothic_One } from "next/font/google";

const DelaGothicOne = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
});
const Privacy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Duckers Privacy</title>
        <meta name="description" content="Imagine a duck. A private one." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="border-duckYellow bg-notQuiteBlack min-h-screen w-screen border-t-8 px-3 pt-3 text-white">
        <h1 className={`text-3xl ${DelaGothicOne.className}`}>
          Duckers Privacy Policy
        </h1>
        <p className="mt-2 gap-2 text-base">
          This page outlines what you can except to happen to your data when you
          use the Duckers bot. &quot;We&quot; and &quot;our&quot; in this
          context refers to me, Dominic, and anyone else I choose to assist me
          with this project.{" "}
          <em>
            This is not a legal document. It is my best attempt at writing a
            somewhat professional description of what I do with your data.
          </em>
          <br /> <br />
          We collect data for operational, debugging, and/or analytical
          purposes. Some data is required for the operation of the bot, as we
          collect and store it as such. It is deleted as soon as it is not
          needed. We also collect basic metrics, primarily of command execution,
          associated with the user ID at most.
          <br /> <br />
          Most analytical data is collected with and stored in{" "}
          <a href="https://posthog.com" className="text-duckYellow">
            PostHog.
          </a>{" "}
          An anonymized overview of analytical data may be made publicly
          available.
          <br /> <br />
          Your data will not be sold. If you have any concerns or wish for your
          data to be deleted, please{" "}
          <a href="mailto:dominic@userexe.me" className="text-duckYellow">
            email me
          </a>
          .
          <br />
          <br />
          This policy was last updated October 10th 2023. While we will attempt
          to communicate any future changes, it may be updated at any time
          without notification.
        </p>
      </main>
    </>
  );
};
export default Privacy;
