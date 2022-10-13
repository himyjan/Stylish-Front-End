import styled from 'styled-components';

const Product = styled.div`
  width: calc((100% - 120px) / 3);
  margin: 0 20px 50px;
  flex-shrink: 0;
  text-decoration: none;

  @media screen and (max-width: 1279px) {
    width: calc((100% - 12px) / 2);
    margin: 0 3px 24px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  vertical-align: middle;
`;

const ProductColors = styled.div`
  margin-top: 20px;
  display: flex;

  @media screen and (max-width: 1279px) {
    margin-top: 8px;
  }
`;

type ProductColorProp = {
  $colorCode: string;
};

const ProductColor = styled.div<ProductColorProp>`
  width: 24px;
  height: 24px;
  box-shadow: 0px 0px 1px #bbbbbb;
  background-color: ${(props) => props.$colorCode};

  @media screen and (max-width: 1279px) {
    width: 12px;
    height: 12px;
  }

  & + & {
    margin-left: 10px;

    @media screen and (max-width: 1279px) {
      margin-left: 6px;
    }
  }
`;

const ProductTitle = styled.div`
  margin-top: 20px;
  font-size: 20px;
  letter-spacing: 4px;
  color: #3f3a3a;
  line-height: 24px;

  @media screen and (max-width: 1279px) {
    margin-top: 10px;
    font-size: 12px;
    letter-spacing: 2.4px;
    line-height: 14px;
  }
`;

const ProductPrice = styled.div`
  margin-top: 10px;
  font-size: 20px;
  letter-spacing: 4px;
  color: #3f3a3a;
  line-height: 24px;

  @media screen and (max-width: 1279px) {
    margin-top: 8px;
    font-size: 12px;
    letter-spacing: 2.4px;
    line-height: 14px;
  }
`;

function ProductItem({ mainImageUrl, colorCodes, title, price, onClick }) {
  return (
    <Product
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      <ProductImage src={mainImageUrl} />
      <ProductColors>
        {colorCodes.map((colorCode) => (
          <ProductColor $colorCode={`#${colorCode}`} key={colorCode} />
        ))}
      </ProductColors>
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>TWD.{price}</ProductPrice>
    </Product>
  );
}

export default ProductItem;
