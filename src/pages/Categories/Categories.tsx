import { TopBar } from "../../components/TopBar";

import "./styles.scss";

const Categories = () => {
  return (
    <section>
      <TopBar onClickAddButton={() => console.log("Click")} />
    </section>
  );
};

export default Categories;
