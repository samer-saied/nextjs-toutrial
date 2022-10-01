import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css'
import Head from 'next/head';
export default function Post({ datta }) {
    return (
        <>
            <Head>
                <title>{datta.name}</title>
            </Head><Layout>
                <div>
                    <h1 className={utilStyles.headingXl}>  {datta.name} </h1>
                  
                    <br />
                    <div className={utilStyles.lightText}>{datta.id}</div>
                    
                    <br />
                    {datta.phone}
                </div>
            </Layout>
        </>
    )

}


export async function getStaticPaths() {
    let res = await fetch('https://jsonplaceholder.ir/users')
    const dataJson = await res.json()
    let ids = []
    dataJson.map((post) => ids.push({
        params: {
            id: post.id.toString()
        }
    }));
    console.log(ids)
    console.log("=======================")
    return {
        paths: ids,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    let postId = params.id.toString()
    let linkdata = 'https://jsonplaceholder.ir/users/' + postId + '/'
    let res = await fetch(linkdata)
    const datta = await res.json()
    return {
        props: {
            datta
        }
    }
}