import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({onClick}) => {
    return (
        <div>
            <button className={css.btn}type ="button">Load More</button>
        </div>
    )
 };
export default LoadMoreBtn;