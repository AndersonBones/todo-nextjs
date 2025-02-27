import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "@/styles";
import { NextSeo } from 'next-seo'; // then add the `NextSeo` at any `pages/` that you wish




export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

    
      </Head>
      
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
