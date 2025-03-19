import HeroVideo from "../../components/Herovideo/HeroVideo";
import BasicPie from "../../components/charts/PieChart";
import SimpleLineChart from "../../components/charts/LineChartDeluxe";
import CircularText from "../../components/RotatingText/CircularText";

function HomePage() {
  return (
    <div>
      < HeroVideo />
      <section className="mt-5">
        <CircularText text="Bitcoin" />
      </section>
    </div>
  );
}

export default HomePage;
