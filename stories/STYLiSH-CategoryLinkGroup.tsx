import styled from 'styled-components';

type CategoryLinkProp = {
  $isActive: boolean;
};

const CategoryLink = styled.a<CategoryLinkProp>`
  font-size: 20px;
  letter-spacing: 30px;
  padding-left: 39px;
  padding-right: 11px;
  position: relative;
  text-decoration: none;
  color: ${(props) => (props.$isActive ? '#8b572a' : '#3f3a3a')};

  @media screen and (max-width: 1279px) {
    font-size: 16px;
    letter-spacing: normal;
    padding: 0;
    text-align: center;
    color: ${(props) => (props.$isActive ? 'white' : '#828282')};
    line-height: 50px;
    flex-grow: 1;
  }

  &:hover {
    color: #8b572a;

    @media screen and (max-width: 1279px) {
      color: white;
    }
  }

  & + &::before {
    content: '|';
    position: absolute;
    left: 0;
    color: #3f3a3a;

    @media screen and (max-width: 1279px) {
      color: #828282;
    }
  }
`;

function CategoryLinkGroup({ categories, currentCategory, onClick }) {
  return (
    <>
      {categories.map(({ name, displayText }, index) => (
        <CategoryLink
          key={index}
          $isActive={name === currentCategory}
          onClick={() => {
            if (onClick) {
              onClick(name);
            }
          }}
        >
          {displayText}
        </CategoryLink>
      ))}
    </>
  );
}

export default CategoryLinkGroup;
