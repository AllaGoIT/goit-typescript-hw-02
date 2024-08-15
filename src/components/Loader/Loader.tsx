import { Audio } from "react-loader-spinner";
import css from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={css.loader}>
      <Audio
        height="50"
        width="50"
        // radius="9"
        color="red"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};
export default Loader;
