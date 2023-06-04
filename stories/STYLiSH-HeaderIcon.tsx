import styled from 'styled-components';
import cart from './assets/cart.png';
import cartMobile from './assets/cart-mobile.png';
import profile from './assets/profile.png';
import profileMobile from './assets/profile-mobile.png';

type PageLinkProp = {
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const PageLink = styled.div<PageLinkProp>`
  @media screen and (max-width: 1279px) {
    width: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  & + & {
    margin-left: 42px;

    @media screen and (max-width: 1279px) {
      margin-left: 0;
    }
  }

  & + &::before {
    @media screen and (max-width: 1279px) {
      content: '';
      position: absolute;
      left: 0;
      width: 1px;
      height: 24px;
      margin: 10px 51px 10px 0;
      background-color: #828282;
    }
  }
`;

const PageIcon = styled.div`
  width: 44px;
  height: 44px;
  cursor: pointer;
  background-size: contain;
  position: relative;
`;

type PageLinkIconProp = {
  icon: string;
  iconMobile: string;
};

const PageLinkIcon = styled(PageIcon)<PageLinkIconProp>`
  background-image: url(${(props) => props.icon});

  @media screen and (max-width: 1279px) {
    background-image: url(${(props) => props.iconMobile});
  }
`;

type PageLinkIconNumberProp = {
  $display: string;
};

const PageLinkIconNumber = styled.div<PageLinkIconNumberProp>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 24px;
  background-color: #8b572a;
  color: white;
  border-radius: 50%;
  text-align: center;
  line-height: 24px;
  display: ${(props) => props.$display};
`;

const PageLinkText = styled.div`
  display: none;

  @media screen and (max-width: 1279px) {
    display: block;
    color: white;
  }
`;

function HeaderIcon({ icon, iconMobile, cartItemsLength, onClick }) {
  return (
    <PageLink
      onClick={() => {
        if (onClick) {
          icon === 'cart' ? onClick('checkout') : onClick('profile');
        }
      }}
    >
      <PageLinkIcon
        icon={icon === 'cart' ? cart : icon === 'user' ? profile : null}
        iconMobile={iconMobile === 'cart' ? cartMobile : profileMobile}
      >
        <PageLinkIconNumber
          $display={cartItemsLength ? cartItemsLength : 'none'}
        >
          {cartItemsLength}
        </PageLinkIconNumber>
      </PageLinkIcon>
      <PageLinkText>
        {icon === 'cart' ? '購物車' : icon === 'user' ? '會員' : ''}
      </PageLinkText>
    </PageLink>
  );
}

export default HeaderIcon;
