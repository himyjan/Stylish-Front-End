'use client';

import { useEffect, useRef, useState, use, MutableRefObject } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import styled from 'styled-components';
import ReactLoading from 'react-loading';

import api from '../../api/api';
import { ApiDataJson, ApiData, Color } from '../../types/apiDataType';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 70px 0 46px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1279px) {
    padding: 15px 21px 6px;
  }
`;

const Product = styled.a`
  width: calc((100% - 120px) / 3);
  margin: 0 20px 50px;
  flex-shrink: 0;
  text-decoration: none;
  cursor: pointer;
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

const Loading = styled(ReactLoading)`
  margin: 0 auto;
`;
const useIntersectionObserver = (ref: MutableRefObject<undefined>, options: {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // observer.unobserve(ref.current);
    };
  }, [options, ref]);

  return isIntersecting;
};

const Products = () => {
  const [products, setProducts] = useState<ApiData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const keyword = searchParams.get('keyword');
  const category = searchParams.get('category') ?? (keyword == null ? 'all' : 'keyword');

  const [savedCategory, setSavedCategory] = useState(category);
  const [nextPaging, setNextPaging] = useState(0);
  const isFetching = useRef(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchProducts() {
    isFetching.current = true;
    setIsLoading(true);

    const loading = async (apiJson: ApiDataJson) => {
      const response: ApiDataJson = await apiJson;
      if (nextPaging === 0 || savedCategory !== category || keyword) {
        setProducts(response.data);
        setSavedCategory(category);
      } else if (nextPaging !== undefined) {
        setProducts((prev) => [...prev, ...response.data]);
      }

      setNextPaging(response.next_paging);
      isFetching.current = false;
      setIsLoading(false);
    };

    if (keyword) {
      setNextPaging(0);
      loading(await api.searchProducts(keyword, 0));
    } else {
      if (savedCategory !== category) {
        setNextPaging(0);
        loading(await api.getProducts(category, 0));
      } else {
        loading(await api.getProducts(category, nextPaging));
      }
    }
  }

  useEffect(() => {
    fetchProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, category]);

  const ref = useRef();
  const onScreen = useIntersectionObserver(ref, { threshold: 0.5 });

  useEffect(() => {
    if (!onScreen) return;
    if (nextPaging === undefined) return;
    if (isFetching.current) return;

    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onScreen]);

  // useEffect(() => {
  //   async function fetchProducts() {
  //     isFetching.current = true;
  //     setIsLoading(true);
  //     const response = keyword
  //       ? await api.searchProducts(keyword, nextPaging)
  //       : await api.getProducts(category, nextPaging);
  //     if (nextPaging === 0) {
  //       setProducts(response.data);
  //     } else {
  //       setProducts((prev) => [...prev, ...response.data]);
  //     }
  //     setNextPaging(response.next_paging);
  //     isFetching.current = false;
  //     setIsLoading(false);
  //   }
  //   async function scrollHandler() {
  //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //       if (nextPaging === undefined) return;
  //       if (isFetching) return;

  //       fetchProducts();
  //     }
  //   }

  //   fetchProducts();

  //   window.addEventListener("scroll", scrollHandler);

  //   return () => {
  //     window.removeEventListener("scroll", scrollHandler);
  //   };
  // }, [keyword, category]);

  return (
    <>
      <Wrapper>
        {products
          ? products.map(({ id, main_image, colors, title, price }) => (
            <Link href={`/product/${id}`} legacyBehavior>
              <Product key={id}>
                <ProductImage src={main_image} />
                <ProductColors>
                  {(colors as Color[]).map(({ code }) => (
                    <ProductColor $colorCode={`#${code}`} key={code} />
                  ))}
                </ProductColors>
                <ProductTitle>{title}</ProductTitle>
                <ProductPrice>TWD.{price}</ProductPrice>
              </Product>
            </Link>
          ))
          : null}
        {isLoading && <Loading type="spinningBubbles" color="#313538" />}
      </Wrapper>
      <div ref={ref as unknown as React.LegacyRef<HTMLDivElement>}></div>
    </>
  );
};

export default Products;
