import "./styles.scss";

interface ICategoryCardProps {
  id: number | string;
  name: string;
  description: string;
}

const CategoryCard = ({ id, name, description }: ICategoryCardProps) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
    </tr>
  );
};

export { CategoryCard };
