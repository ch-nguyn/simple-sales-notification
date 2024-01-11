import React from 'react';
import PropTypes from 'prop-types';
import './NoticationPopup.scss';
import {TickSmallMinor, CancelSmallMinor} from '@shopify/polaris-icons';
import {Icon} from '@shopify/polaris';

const NotificationPopup = ({
  firstName = 'Someone',
  city = 'Decatur',
  country = 'USA',
  productName = 'The Collection Snowboard: Hydrogen',
  relativeTime = 'a day ago',
  productImage = 'https://cdn.shopify.com/s/files/1/0703/3883/8562/products/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1703474695',
  hideTimeAgo = false,
  truncateProductName = true,
  hasClose = true
}) => {
  return (
    <div className="Avava-SP__Wrapper fadeInUp animated">
      <div className="Avava-SP__Inner">
        <div className="Avava-SP__Container">
          <div className="Avava-SP__CloseBtn">
            {hasClose && <Icon source={CancelSmallMinor} tone="base" color="subdued" />}
          </div>
          <a href="#" className={'Avava-SP__LinkWrapper'}>
            <div
              className="Avava-SP__Image"
              style={{
                backgroundImage: `url(${productImage})`
              }}
            />
            <div className="Avada-SP__Content">
              <div className={'Avada-SP__Title'}>
                {firstName} in {city}, {country}
              </div>
              <div className={`Avada-SP__Subtitle ${truncateProductName && 'truncate'}`}>
                Purchased {productName}
              </div>
              <div className={'Avada-SP__Footer'}>
                <p>{hideTimeAgo || relativeTime}</p>
                <span className="uni-blue">
                  <Icon color="primary" source={TickSmallMinor} tone="base" />
                  by AVADA
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

NotificationPopup.propTypes = {
  firstName: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  productName: PropTypes.string,
  relativeTime: PropTypes.string,
  productImage: PropTypes.string,
  hideTimeAgo: PropTypes.bool,
  truncateProductName: PropTypes.bool,
  hasClose: PropTypes.bool
};

export default NotificationPopup;
