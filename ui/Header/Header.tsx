'use client';

import { useEffect, useState, useContext } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import styled from 'styled-components';

import logo from './logo.png';
import search from './search.png';
import cart from './cart.png';
import cartMobile from './cart-mobile.png';
import profile from './profile.png';
import profileMobile from './profile-mobile.png';

import { CartItemsContext } from '../../context/cartItemsContext';
import { Product } from 'types/productType';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 140px;
  width: 100%;
  padding: 0 54px 0 60px;
  border-bottom: 40px solid #313538;
  z-index: 99;
  background-color: white;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1279px) {
    height: 52px;
    padding: 0;
    border: none;
    justify-content: center;
  }
`;

const Logo = styled.a`
  width: 258px;
  height: 48px;
  background-image: url(${logo.src});
  background-size: contain;

  @media screen and (max-width: 1279px) {
    width: 129px;
    height: 24px;
  }
`;

const CategoryLinks = styled.div`
  margin: 16px 0 0 57px;

  @media screen and (max-width: 1279px) {
    margin: 0;
    position: fixed;
    top: 52px;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    background-color: #313538;
  }
`;

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

const SearchInput = styled.input`
  height: 40px;
  width: 214px;
  border: none;
  outline: none;
  margin-left: auto;
  border-radius: 20px;
  padding: 6px 45px 6px 20px;
  border: solid 1px #979797;
  background-image: url(${search.src});
  background-size: 44px;
  background-position: 160px center;
  background-repeat: no-repeat;
  font-size: 20px;
  line-height: 24px;
  color: #8b572a;

  @media screen and (max-width: 1279px) {
    width: 0;
    border: none;
    position: fixed;
    right: 16px;
    background-size: 32px;
    background-position: right center;
  }

  &:focus {
    @media screen and (max-width: 1279px) {
      width: calc(100% - 20px);
      border: solid 1px #979797;
    }
  }
`;

const PageLinks = styled.div`
  margin-left: 42px;
  display: flex;

  @media screen and (max-width: 1279px) {
    width: 100%;
    margin-left: 0;
    height: 60px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #313538;
  }
`;

const PageLink = styled.a`
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

const PageLinkIcon = styled.div`
  width: 44px;
  height: 44px;
  cursor: pointer;
  background-size: contain;
  position: relative;
`;

const PageLinkCartIcon = styled(PageLinkIcon)`
  background-image: url(${cart.src});

  @media screen and (max-width: 1279px) {
    background-image: url(${cartMobile.src});
  }
`;

const PageLinkProfileIcon = styled(PageLinkIcon)`
  background-image: url(${profile.src});

  @media screen and (max-width: 1279px) {
    background-image: url(${profileMobile.src});
  }
`;

const PageLinkIconNumber = styled.div`
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
`;

const PageLinkText = styled.div`
  display: none;

  @media screen and (max-width: 1279px) {
    display: block;
    color: white;
  }
`;

const categories = [
  {
    name: 'women',
    displayText: '女裝',
  },
  {
    name: 'men',
    displayText: '男裝',
  },
  {
    name: 'accessories',
    displayText: '配件',
  },
];

function Header() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get('category') ?? 'all';
  const cartItemsState = useContext(CartItemsContext);
  if (cartItemsState === undefined) {
    throw new Error('useContext must be used within a CartItemsProvider');
  }
  const cartItems: Product[] = cartItemsState[0];

  useEffect(() => {
    if (category) {
      setInputValue('');
    }
  }, [category]);

  return (
    <Wrapper>
      <Link href={'/'} passHref={true} legacyBehavior>
        <Logo />
      </Link>
      <CategoryLinks>
        {categories.map(({ name, displayText }, index) => (
          <CategoryLink
            $isActive={category === name}
            key={index}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
              router.push(`/?category=${name}`);
            }}
          >
            {displayText}
          </CategoryLink>
        ))}
      </CategoryLinks>
      <SearchInput
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            router.push(`/?keyword=${inputValue}`);
          }
        }}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <PageLinks>
        <Link href={'/checkout'} passHref={true} legacyBehavior>
          <PageLink>
            <PageLinkCartIcon>
              <PageLinkIconNumber>
                {(cartItems as []).length}
              </PageLinkIconNumber>
            </PageLinkCartIcon>
            <PageLinkText>購物車</PageLinkText>
          </PageLink>
        </Link>
        <Link href={'/profile'} passHref={true} legacyBehavior>
          <PageLink>
            <PageLinkProfileIcon />
            <PageLinkText>會員</PageLinkText>
          </PageLink>
        </Link>
      </PageLinks>
    </Wrapper>
  );
}

export default Header;
