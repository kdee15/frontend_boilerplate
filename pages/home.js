import Footer from "../components/blocks/componentFooter/ComponentFooter";
import classes from "../styles/Global.module.scss";

export default function Home() {
  return (
    <>
      <div className={`${classes.oPage} oPage`}>
        <h1>NextJS FE Boilerplate</h1>
      </div>
      <Footer />
    </>
  );
}
