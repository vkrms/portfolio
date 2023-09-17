import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

import styles from "../styles/Home.module.scss";
import { getAllPostSlugsB } from "../lib/posts";

interface IndexJobProps {
  slug: string;
  title: string;
  thumb: string;
  thumbClass?: string;
  excerpt: string;
  created: string;
  disabled?: boolean;
}

// this happens in node at build time
export async function getStaticProps() {
  const slugs = getAllPostSlugsB();
  const jobs: IndexJobProps[] = [];

  // get title, thumb, descr
  for (const slug of slugs) {
    try {
      const jobData = await import(`/data/posts/${slug.slug}`)
        .then((data) => data.default)
        .catch((err) => console.error({ err }));
      // todo: job changes type here
      jobs.push(Object.assign(slug, jobData));
    } catch (err) {
      console.error({ err });
    }
  }

  const sorted = jobs.sort((a, b) => {
    const dateA = new Date(a.created) || null;
    const dateB = new Date(b.created) || null;
    return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
  });

  const props = {
    props: {
      jobs: sorted,
    },
  };
  return props;
}

export default function Home({ jobs }) {
  return (
    <div className={cn("container", styles.container)}>
      <Head>
        <title>Create (Your) Next App</title>
        <meta
          name="description"
          content="built asap to showcase some of my stuff"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="hero__h1">
          <div>Hi, I&apos;m Pavel Maliuk.</div>
          <div>I build web things.</div>
        </h1>

        <div className={styles.heroText}>
          <p>This is my attempt at building a good enough portfolio ASAP.</p>
        </div>
      </header>

      <main>
        <div className={styles.widerText}>
          <p>I&apos;ve been doing development for 13 years already (as of writing this on September 6th, 2023), and only now I&apos;m finding some free (jobless) time to improve my personal web presence. I was born in Russia&apos;s Pacific coast, lived most of my life there and GTFOed right when the war began. I have some Ukrainian ancestry, as my family name <a target="_blank" href="https://www.wikiwand.com/en/Malyuk">suggests</a>. Now I live as a digital nomad in Southeast Asia.</p>
        </div>

        <section className={styles.jobs}>
          <h2>Selected Work</h2>
          {jobs.map((job) => (
            <Job key={job.slug} {...job} />
          ))}
        </section>
      </main>
    </div>
  );
}

const Job: React.FC<IndexJobProps> = ({
  title,
  thumb,
  thumbClass,
  slug,
  excerpt,
  disabled,
}) => {
  if (disabled) return null;

  return (
    <Link href={`/jobs/${slug}`} className={styles.job}>
      <Image
        className={cn(styles.thumb, thumbClass)}
        src={thumb}
        alt={title}
        width={256}
        height={192}
      />
      <div className={styles.job__text}>
        <h3>{title}</h3>
        <div>{excerpt}</div>
      </div>
    </Link>
  );
};
