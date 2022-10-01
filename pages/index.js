import Head from 'next/head'
import Link from 'next/link'
import Layout  from '../components/layout';
export default function Index() {
  return (
    <Layout home>

    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="manifest" href="~/manifest.json"/> */}
        {/* <link rel="apple-touch-icon" href="/public/images/profile.jpg"/> */}

      </Head>

      <main>
        <h1 className="title">
          Learn 2 <Link href="https://nextjs.org">Next.js!</Link>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <Link href='/posts/frist-post'>hereee</Link>
        <br></br>
        <Link href='/home'>See ALL POSTS</Link><br></br>
        {/* <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"> newww</a> */}
        <ProfileImage ></ProfileImage>
      </main>

    </div>
    </Layout>
  )
}


import Image from 'next/image';

const YourComponent = () => (
  <Image
      src="/images/profile.jpg" // Route of the image file
    height="20px"// Desired size with correct aspect ratio
    width="20px" // Desired size with correct aspect ratio
    alt="Your Name"
  />
);

const ProfileImage = () => (
  <Image
  src="/images/profile.jpg"
  height={100}
  width={100}
  alt="samer"
  />
);
