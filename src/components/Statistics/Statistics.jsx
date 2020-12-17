import PropTypes from "prop-types";
import s from "./Statistics.module.css";

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map((stat) => (
          <li
            className={s.item}
            key={stat.id}
            style={{ backgroundColor: `rgb(${rand()},${rand()},${rand()})` }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

function rand() {
  return Math.floor(Math.random() * 220);
}

export default Statistics;
