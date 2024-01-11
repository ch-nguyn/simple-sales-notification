import React from 'react';
import PropTypes from 'prop-types';
import './NoticationPopup.scss';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const NotificationPopup = ({
  firstName = 'Someone',
  city = 'Decatur',
  country = 'USA',
  productName = 'Puffer Jacket',
  timestamp = new Date('2024-1-1'),
  productImage = 'http://paris.mageplaza.com/images/shop/single/big-1.jpg',
  hideTimeAgo = false,
  truncateProductName = true,
  position = 'top-left',
  onClick = () => {}
}) => {
  let timeAgo = <span className={'Avada-SP__Footer--TimeAgo'}>{dayjs(timestamp).fromNow()}</span>;

  if (hideTimeAgo) {
    timeAgo = <></>;
  }

  return (
    <div className={`Avava-SP__Wrapper ${position} fadeInUp animated`}>
      <div className="Avava-SP__Inner">
        {/* <div className="Avava-SP__CloseBtn" onClick={onClick}>
          x
        </div> */}
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
                {timeAgo}
                <span className="uni-blue">by Avada</span>
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
  timestamp: PropTypes.string,
  productImage: PropTypes.string,
  hideTimeAgo: PropTypes.bool,
  truncateProductName: PropTypes.bool,
  position: PropTypes.string,
  onClick: PropTypes.func
};

export default NotificationPopup;
