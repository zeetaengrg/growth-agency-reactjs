import { CardHeader } from "@components/elements";
import { FaCircle } from "react-icons/fa";
import pieChartOne from "@assets/images/pie-chart1.png";
import pieChartTwo from "@assets/images/pie-chart2.png";
import "./WorkRightCardBtm.scss";

const WorkRightCardBtm = () => {
  return (
    <section className="btm__card-bottom" id="card-container">
      <section className="btm__top-container" id="top-container">
        <article className="btm__top-content">
          <div className="btm__earn">
            <p className="btm__earn-num">
              <FaCircle fontSize="0.5rem" color="orange" />
              $500+
            </p>
            <p className="btm__earn-text">Earn per day</p>
          </div>
          <div className="btm__pay">
            <p className="btm__pay-num">
              <FaCircle
                fontSize="0.5rem"
                color="hsl(268.7837837837838, 93.67088607594937%, 69.01960784313725%)"
              />
              $50
            </p>
            <p className="btm__pay-text">Pay us</p>
          </div>
        </article>
        <figure className="btm__pie-chart">
          <img src={pieChartOne} alt="Pie One" className="pie-one" />
          <img src={pieChartTwo} alt="Pie Two" className="pie-two" />
        </figure>
        <article className="btm__bottom-text">
          <p className="btm__earning-num">$15000+</p>
          <p className="btm__earning-text">Earning</p>
        </article>
      </section>
      <aside className="btm__dashboard">
        <p className="btm__dashboard-text">Dashboard</p>
        <figure className="btm__bar-graph">
          <div className="btm__bar"></div>
          <div className="btm__bar"></div>
          <div className="btm__bar"></div>
          <div className="btm__bar"></div>
        </figure>
      </aside>
      <CardHeader
        title="External Data"
        subtitle="This allows them to see current key performance .."
      />
    </section>
  );
};

export default WorkRightCardBtm;
