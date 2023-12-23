function SEO(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords.join(', ')} />
            <meta name="author" content="Padmashree Jha" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* for social media */}
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description}/>
            <meta property="og:type" content="website" />
        </Head>
    )
}

export default SEO;