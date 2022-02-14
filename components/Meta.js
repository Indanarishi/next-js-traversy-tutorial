import Head from "next/head"

const Meta = ({title, keyword, description}) => {
    return (
        <Head>
            <meta charset="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="keywords" content={keyword} />
            <meta name="description" content={description} />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'WebDev Newz',
    keywords: 'web development, programming',
    description: 'Get the latest news in web dev'
}

export default Meta