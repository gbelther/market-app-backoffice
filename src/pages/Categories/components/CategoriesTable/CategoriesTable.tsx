import { Button } from "../../../../components/Button";
import "./styles.scss";

interface ICategory {
  id: number | string;
  name: string;
  description: string;
}

interface ICategoriesTableProps {
  categories: ICategory[];
}

const CategoriesTable = ({ categories }: ICategoriesTableProps) => {
  return (
    <table className="c-c-categories-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Descrição</th>
          <td>Opções</td>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category.id}>
            <td>{category.id}</td>
            <td>{category.name}</td>
            <td>{category.description}</td>
            <td className="f-centered f-col gap-1">
              <Button
                buttonProps={{
                  className: "w-100",
                }}
              >
                Editar
              </Button>
              <Button
                buttonProps={{
                  className: "w-100 bg-error",
                }}
                color="light-02"
                bgColor="error"
              >
                Excluir
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { CategoriesTable };
