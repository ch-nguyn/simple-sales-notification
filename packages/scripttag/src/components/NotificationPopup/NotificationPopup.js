import React from 'react';
import PropTypes from 'prop-types';
import './NoticationPopup.scss';

const NotificationPopup = ({
  firstName = 'Someone',
  city = 'Decatur',
  country = 'USA',
  productName = 'Puffer Jacket',
  relativeTime = new Date('2024-1-1'),
  productImage = 'http://paris.mageplaza.com/images/shop/single/big-1.jpg',
  hideTimeAgo = false,
  truncateProductName = true,
  position = 'top-left'
}) => {
  return (
    <div className={`Avava-SP__Wrapper ${position} `}>
      <div className="Avava-SP__Inner">
        <div className="Avava-SP__Container">
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
              <p className={`Avada-SP__Subtitle ${truncateProductName && 'truncate'}`}>
                Purchased {productName}
              </p>
              <div className={'Avada-SP__Footer'}>
                <span className="Avada-SP__Footer--TimeAgo">{hideTimeAgo || relativeTime}</span>
                <span className="uni-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                  </svg>{' '}
                  by Avada
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
  position: PropTypes.string
};

export default NotificationPopup;
