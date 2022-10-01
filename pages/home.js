// import { getSortedPostsData } from '../lib/posts';

import Link from 'next/link';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css'

export default function Home({ dataJson }) {
    return (
        <Layout >
            <h1>All Users Data</h1>
            <ul className={utilStyles.list}>
                {dataJson.map(({ id, website, name }) => (
                    <li className={utilStyles.listItem} key={id}>
                        title: {name}
                        <br />
                        Id: {id}
                        <br />
                        Date:   {website}
                        <br />
                        <Link href={'posts/'+ id}>
                            Visit his profile now
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}


// export async function getStaticProps() {
//     const allPostsData = getSortedPostsData();
//     return {
//         props: {
//             allPostsData,
//         },
//     };
// }

export async function getStaticProps() {
    const url = "https://jsonplaceholder.ir/users"
    let res = await fetch('https://jsonplaceholder.ir/users')
    const dataJson = await res.json()
    return {
        props: {
            dataJson
        },
    };
}

// export async function getServerSideProps(context) {
//     const url = "https://jsonplaceholder.typicode.com/posts"
//     let allposts = await fetch(url)
//     let dataJson = allposts.json()
//     return {
//       props: {
//         dataJson
//       },
//     };
//   }