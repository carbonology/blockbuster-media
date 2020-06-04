import Head from 'next/head'
import NextLink from 'next/link'

import {
  Box,
  Button,
  Copy,
  Footer,
  Hero,
  Image,
  Global,
  Header,
  Heading,
  Link,
  Wrapper,
  VertSpace
} from 'blockbuster-design-system'

import SmallArticle from '../components/SmallArticle'
import BigArticle from '../components/BigArticle'
import HorSpace from '../components/HorSpace'

export default function Home() {
  return (
    <div className="container">
      <Global />
      <Head>
        <title>BB LIVE</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&family=Roboto:wght@100;300;400&display=swap" rel="stylesheet" />
      </Head>
      <Header buttonText="SIGN IN" buttonLink="#">
        <Link color="var(--white)" href="#">Movies</Link>
        <Link color="var(--white)" href="#">TV</Link>
        <Link color="var(--white)" href="#">Create Account</Link>
      </Header>
      <main>
        <Hero
          title="Tenet is not what we need right now"
          subtitle="Nolan's new film is set to release this fall, or is it?"
          buttonText="READ MORE"
          buttonLink="/article"
          linkWrapper={NextLink}
          imgSrc="https://thenerdsofcolor.files.wordpress.com/2019/12/john-david-washington-in-the-2020-film-tenet.png.jpg"
        />
        <Box backgroundColor="var(--black)">
          <Wrapper>
            <VertSpace size={3}/>
            <Heading color="var(--blue)" size={2}>Trending Now</Heading>
            <VertSpace />
            <Box justifyContent="space-between" flexWrap="no-wrap" backgroundColor="var(--black)">
              <Box margin="0 40px 0 0">
                <BigArticle
                  title="2020 is the new 2012 - Opinion"
                  subtitle="The movie's events may have been very different, but the results are similar."
                  buttonText="Read article"
                  imgSrc="https://i.pinimg.com/originals/d3/69/31/d36931c87b7009be38fd0e6c894fbcb4.jpg"
                />
              </Box>
              <Box width="30%">
                <SmallArticle
                  title="Big 10 movies guaranteed to rock your socks"
                  imgSrc="data:image/jpeg;base64,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"
                />
                <SmallArticle
                  title="Marvel Cinematic universe is BACK"
                  imgSrc="https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg"
                />
                <SmallArticle
                  title="Can Batman fly? No, but here's why he should."
                  imgSrc="https://images-na.ssl-images-amazon.com/images/I/81az0oR6izL._AC_SL1200_.jpg"
                />
              </Box>
            </Box>
            <Box backgroundColor="var(--black)">
              <VertSpace size={3} />
            </Box>
            <Heading color="var(--blue)" size={2}>Popular Reads</Heading>
            <VertSpace />
            <BigArticle
              title="Why Jaws wasn't at fault"
              subtitle="Apex predators do be like that sometimes"
              buttonText="Read article"
              imgSrc="https://wearesecondunion.com/wp-content/uploads/2017/10/jaws-movie-screencaps.com-9600.jpg"
            />
            <Box backgroundColor="var(--black)">
              <VertSpace size={2} backgroundColor="var(--black)" />
            </Box>
            <Box width="100%" flexWrap="no-wrap" backgroundColor="var(--black)">
              <SmallArticle
                title="BUSTED: Matthew McConaghuey spelled his name incorrectly"
                imgSrc="https://i.ytimg.com/vi/Jn8b3RHs1yk/maxresdefault.jpg"
                width="33%"
                />
              <HorSpace />
              <SmallArticle
                title="Why parasite should be eligible for the 2021 Oscars - Opinion"
                imgSrc="https://www.americamagazine.org/sites/default/files/main_image/Parasite_27x40_USPOSTER_PRINT_BBv3.jpg"
                width="33%"
                />
              <HorSpace />
              <SmallArticle
                title="New to Blockbuster Streaming: Gone With the Wind"
                width="33%"
                imgSrc="https://1.bp.blogspot.com/_PSYLPd3G_7E/TAWLTbWw6TI/AAAAAAAAACg/eMesqslpxDA/s1600/Scarlett+is+Desperate+in+Blu+Ray.png"
              />
            </Box>
          </Wrapper>
        </Box>
        <Box backgroundColor="var(--black)">
          <VertSpace size={1} />
        </Box>
        <Hero
          title="How many people has John Wick killed?"
          subtitle="Yeah, you're not gonna believe this"
          buttonText="Find out"
          buttonLink="/article"
          linkWrapper={NextLink}
          imgSrc="https://i.pinimg.com/736x/a4/87/d5/a487d55739d1c6958416c12d3833f6e8.jpg"
        />
        <Box backgroundColor="var(--black)">
          <Wrapper>
            <VertSpace size={2}/>
            <Heading color="var(--blue)" size={2}>This week in Hollywood</Heading>
            <VertSpace />
            <Box justifyContent="space-between" flexWrap="no-wrap" backgroundColor="var(--black)">
              <Box margin="0 40px 0 0" backgroundColor="var(--black)">
                <BigArticle
                  title="Blockbuster Red Carpet Weekend"
                  subtitle="Best of the best and the worst of the worst"
                  buttonText="Read article"
                  imgSrc="https://cdn.lifestyleasia.com/wp-content/uploads/2018/05/16002955/31225980_169189070430280_568801373915709440_n-2.jpg"
                />
              </Box>
              <Box width="30%" backgroundColor="var(--black)">
                <SmallArticle
                  title="Leonardo Dicaprio. But did he?"
                  imgSrc="https://www.telegraph.co.uk/content/dam/films/2018/09/21/TELEMMGLPICT000027014340_trans%2B%2BM37qcIWR9CtrqmiMdQVx7HKcsGtiuU_lafizKj4PQO0.jpeg"
                  />
                <SmallArticle
                  title="Brad Pitt, yeah"
                  imgSrc="data:image/jpeg;base64,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"
                />
                <SmallArticle
                  title="Can Batman fly? No, but here's why he should."
                  imgSrc="https://images-na.ssl-images-amazon.com/images/I/81az0oR6izL._AC_SL1200_.jpg"
                />
              </Box>
            </Box>
          </Wrapper>
        </Box>
      </main>
      <Box backgroundColor="var(--black)">
        <VertSpace size={3} />
      </Box>
      <Footer />

      <style jsx>{``}</style>
    </div>
  )
}
