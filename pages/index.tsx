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
          <p>Maybe one day I will build myself a better portfolio =)</p>
        </div>
      </header>

      <main>
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
