import React, { Suspense} from "react";
import { styled } from 'linaria/react';

const StyledAirLineLogo = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  jusitfy-items: center;
`;

// первый раз попробовал Lazy Loading. Не думал что сработает
const carriersLogo = {
  TK: React.lazy(() => import("./../../../../static/icons/carriers/TK"))
};

const getLogo = (carrier) => {
    if (!carriersLogo[carrier]) {
        return "unknownCarrier";
    }

    const Logo = carriersLogo[carrier];
    console.warn("Logo >>>", Logo)
    return <Suspense fallback={<div></div>}><Logo></Logo></Suspense>
}

const AirLineLogo = ({ ticketCarrier }) => {
 
    const logo = getLogo(ticketCarrier);
  return <StyledAirLineLogo>{logo}</StyledAirLineLogo>;
};

export default AirLineLogo;
