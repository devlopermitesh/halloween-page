import Sectionpage1 from "../componts/sections/Sectionpage1";
import Sectionpage2 from "../componts/sections/Sectionpage2";
import Sectionpage3 from "../componts/sections/Sectionpage3";
import Sectionpage4 from "../componts/sections/Sectionpage4";
import Sectionpage5 from "../componts/sections/Sectionpage5";
const Home = () => {
  return (
   <section className="flex flex-col">
    <Sectionpage1/>
    <Sectionpage2/>
    <Sectionpage3/>
    <Sectionpage4/>
    <Sectionpage5/>
   </section>
  );
};

export default Home;
