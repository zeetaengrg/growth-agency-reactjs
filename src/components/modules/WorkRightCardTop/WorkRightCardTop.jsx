import { CardHeader, CardProfile } from "@components/elements";
import profileImageTop from "@assets/images/2.jpg";
import profileImageBtm from "@assets/images/3.jpg";
import "./WorkRightCardTop.scss";

const WorkRightCardTop = () => {
  return (
    <section className="right__card-top" id="card-container">
      <aside className="right__price-content">
        <p className="right__price">$5k</p>
      </aside>
      <section className="right__top-content">
        <CardProfile profileImg={profileImageTop} />
        <CardProfile profileImg={profileImageBtm} />
      </section>
      <CardHeader
        title="Marketing"
        subtitle="Marketing intelligence is necessary when entering a foreign market.
        determines the intelligence needed"
      />
    </section>
  );
};

export default WorkRightCardTop;
