import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1279px) {
    align-items: flex-start;
    flex-wrap: wrap;
    padding-bottom: 20px;
    border-bottom: 1px solid #3f3a3a;
    font-size: 14px;
    line-height: 17px;
  }

  & + & {
    margin-top: 30px;

    @media screen and (max-width: 1279px) {
      margin-top: 20px;
    }
  }
`;

const ItemImage = styled.img`
  width: 114px;

  @media screen and (max-width: 1279px) {
    order: 1;
  }
`;

const ItemDetails = styled.div`
  margin-left: 20px;
  flex-grow: 1;
  align-self: flex-start;

  @media screen and (max-width: 1279px) {
    width: calc(100% - 174px);
    order: 1;
  }
`;

const ItemName = styled.div``;

const ItemID = styled.div`
  margin-top: 18px;
`;

const ItemColorName = styled.div`
  margin-top: 22px;
`;

const ItemSize = styled.div`
  margin-top: 10px;
`;

const ItemQuantity = styled.div`
  width: 185px;

  @media screen and (max-width: 1279px) {
    margin-top: 20px;
    text-align: center;
    width: calc(100% / 3);
    order: 2;
  }
`;

type hideOnDesktopProp = {
  hideOnDesktop: boolean;
};

const ItemQuantityName = styled.div<hideOnDesktopProp>`
  ${(props) => props.hideOnDesktop && 'display: none;'}

  @media screen and (max-width: 1279px) {
    display: block;
  }
`;

const ItemQuantitySelect = styled.select`
  width: 80px;
  height: 30px;
  padding-left: 17px;
  border-radius: 8px;
  border: solid 1px #979797;
  background-color: #f3f3f3;

  @media screen and (max-width: 1279px) {
    margin-top: 12px;
  }
`;

const ItemUnitPrice = styled.div`
  width: 166px;

  @media screen and (max-width: 1279px) {
    margin-top: 20px;
    text-align: center;
    width: calc(100% / 3);
    order: 2;
  }
`;

const ItemUnitPriceName = styled.div<hideOnDesktopProp>`
  ${(props) => props.hideOnDesktop && 'display: none;'}

  @media screen and (max-width: 1279px) {
    display: block;
  }
`;

const ItemUnitPriceValue = styled.div`
  @media screen and (max-width: 1279px) {
    margin-top: 20px;
  }
`;

const ItemPrice = styled.div`
  width: 167px;

  @media screen and (max-width: 1279px) {
    margin-top: 20px;
    text-align: center;
    width: calc(100% / 3);
    order: 2;
  }
`;

const ItemPriceName = styled.div<hideOnDesktopProp>`
  ${(props) => props.hideOnDesktop && 'display: none;'}

  @media screen and (max-width: 1279px) {
    display: block;
  }
`;

const ItemPriceValue = styled.div`
  @media screen and (max-width: 1279px) {
    margin-top: 20px;
  }
`;

type DeleteButtonProp = {
  trash: string;
};

const DeleteButton = styled.div<DeleteButtonProp>`
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.trash});
  background-size: contain;
  cursor: pointer;

  @media screen and (max-width: 1279px) {
    order: 1;
    background-position: center -10px;
  }
`;

function CartItem({
  index,
  image,
  id,
  name,
  color,
  size,
  qty,
  stock,
  price,
  trashIcon,
  deleteBtnOnClick,
  cartQtyOnChange,
}) {
  return (
    <Item>
      <ItemImage src={image} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <ItemID>{id}</ItemID>
        <ItemColorName>顏色｜{color.name}</ItemColorName>
        <ItemSize>尺寸｜{size}</ItemSize>
      </ItemDetails>
      <ItemQuantity>
        <ItemQuantityName hideOnDesktop>數量</ItemQuantityName>
        <ItemQuantitySelect
          value={qty}
          onChange={(e) => {
            if (cartQtyOnChange) {
              cartQtyOnChange(index, e.target.value);
            }
          }}
        >
          {Array(stock)
            .fill(undefined)
            .map((_, index) => (
              <option key={index}>{index + 1}</option>
            ))}
        </ItemQuantitySelect>
      </ItemQuantity>
      <ItemUnitPrice>
        <ItemUnitPriceName hideOnDesktop>單價</ItemUnitPriceName>
        <ItemUnitPriceValue>NT.{price}</ItemUnitPriceValue>
      </ItemUnitPrice>
      <ItemPrice>
        <ItemPriceName hideOnDesktop>小計</ItemPriceName>
        <ItemPriceValue>NT.{qty * price}</ItemPriceValue>
      </ItemPrice>
      <DeleteButton
        trash={trashIcon}
        onClick={() => {
          if (deleteBtnOnClick) {
            deleteBtnOnClick(index);
          }
        }}
      />
    </Item>
  );
}

export default CartItem;
