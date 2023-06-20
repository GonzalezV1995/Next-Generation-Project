import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       Accessible Content <br className="sm:block hidden" /> for your clients and users
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Elevate the aestetics of your business with vibrant user friendly graphics and design frameworks created in our office by skilled software developers, UX Designers and graphic designers experts. 
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;