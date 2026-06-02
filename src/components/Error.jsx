/** @format */
import styles from "./weather.module.css";
import retry from "../assets/images/icon-retry.svg";
import error from "../assets/images/icon-error.svg";
export default function Error() {
  return (
    <div className={styles.error}>
      <img src={error} alt='' />
      <h3>Something went wrong</h3>
      <span>
        {" "}
        We couldn't connect to the server (API error). Please try again in a few
        moments
      </span>

      <button onClick={() => window.location.reload()}>
        <img src={retry} alt='' /> Retry
      </button>
    </div>
  );
}
