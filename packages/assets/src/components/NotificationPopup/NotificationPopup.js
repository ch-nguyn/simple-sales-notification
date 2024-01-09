import React from 'react';
import PropTypes from 'prop-types';
import './NoticationPopup.scss';
import {TickSmallMinor, CancelSmallMinor} from '@shopify/polaris-icons';
import {Icon} from '@shopify/polaris';

const NotificationPopup = ({
  firstName = 'Someone',
  city = 'Decatur',
  country = 'USA',
  productName = 'Puffer Jacket',
  relativeTime = 'a day ago',
  productImage = 'http://paris.mageplaza.com/images/shop/single/big-1.jpg',
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
              <div className={'Avada-SP__Subtitle'}>
                Purchased {truncateProductName ? `${productName.slice(0, 10)}...` : productName}
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
