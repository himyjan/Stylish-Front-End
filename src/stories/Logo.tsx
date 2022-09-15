import styled from 'styled-components';

type PictureProp = {
  logo: string;
};

const Picture = styled.div<PictureProp>`
  width: 258px;
  height: 48px;
  background-image: url(${(props) => props.logo});
  background-size: contain;
  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1279px) {
    width: 129px;
    height: 24px;
  }
`;

function Logo({ logoPicture, onClick }) {
  return (
    <Picture
      logo={logoPicture}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    />
  );
}

export default Logo;
