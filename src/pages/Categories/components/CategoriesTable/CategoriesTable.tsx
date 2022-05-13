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
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category.id}>
            <td>{category.id}</td>
            <td>{category.name}</td>
            <td>{category.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { CategoriesTable };
