import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { createClient, groq } from "next-sanity";
import { PortableText } from "@portabletext/react";

const clientConfig = {
  projectId: "07ezi5fc",
  dataset: "production",
  useCdn: false,
};

function getCorgis() {
  return createClient(clientConfig).fetch(groq`
    *[_type == "corgi"] {
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      content
    }
  `);
}

export default async function Home() {
  const corgis = await getCorgis();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Welcome corgis</h1>
        <div className={styles.corgis}>
          {corgis.map((corgi: any) => (
            <div className="corgi" key={corgi._id}>
              <h2>{corgi.name}</h2>
              <Image
                alt={corgi.alt}
                src={corgi.image}
                width={400}
                height={400}
              />
              <PortableText value={corgi.content} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
