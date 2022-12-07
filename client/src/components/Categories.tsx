import { categories } from '../data';

import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { mobile } from '../responsive';

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: 0, flexDirection: 'column' })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
