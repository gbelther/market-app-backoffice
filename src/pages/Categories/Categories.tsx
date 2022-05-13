import { KeyboardEvent } from "react";

import { TopBar } from "../../components/TopBar";
import { CategoriesTable } from "./components/CategoriesTable";

import "./styles.scss";

const categories = [
  {
    id: 1,
    name: "Categoria 01",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quo vero dicta, id suscipit iusto temporibus explicabo culpa incidunt iste! Harum accusantium sapiente ex animi natus libero rerum! Rem, adipisci!",
  },
  {
    id: 2,
    name: "Categoria 02",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quo vero dicta, id suscipit iusto temporibus explicabo culpa incidunt iste! Harum accusantium sapiente ex animi natus libero rerum! Rem, adipisci!",
  },
  {
    id: 3,
    name: "Categoria 03",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quo vero dicta, id suscipit iusto temporibus explicabo culpa incidunt iste! Harum accusantium sapiente ex animi natus libero rerum! Rem, adipisci!",
  },
  {
    id: 4,
    name: "Categoria 04",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quo vero dicta, id suscipit iusto temporibus explicabo culpa incidunt iste! Harum accusantium sapiente ex animi natus libero rerum! Rem, adipisci!",
  },
];

const Categories = () => {
  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("Pesquisar");
    }
  };

  return (
    <section>
      <header>
        <TopBar
          inputTextProps={{
            inputProps: {
              onKeyDown: handleSearch,
            },
          }}
          onClickAddButton={() => console.log("Click")}
        />
      </header>
      <div className="p-4">
        <CategoriesTable categories={categories} />
      </div>
    </section>
  );
};

export default Categories;
