import React from "react";
import Hero from "./Hero/Hero";
import PageHero from "./PageHero/PageHero";
import RichTextComponent from "./RichTextComponent/RichTextComponent";
import TextImageComponent from "./TextImageComponent/TextImageComponent";
import Carousel from "./Carousel/Carousel";

function DynamicBlocks(props) {
  const {contentModule} = props;
  switch (contentModule.__component) {
    case 'blocks.hero':
      return <Hero contentModule={contentModule}/>
    case 'blocks.page-hero':
      return <PageHero contentModule={contentModule}/>
    case 'blocks.rich-text-component':
      return <RichTextComponent contentModule={contentModule}/>
    case 'blocks.carousel':
      return <Carousel contentModule={contentModule}/>
    case 'blocks.text-image-block':
      return <TextImageComponent contentModule={contentModule}/>
    default:
      return <div><h1>component not found</h1></div>
  }
  return (
    <section>contentModule={contentModule.__component}</section>
  )
}

export default DynamicBlocks;