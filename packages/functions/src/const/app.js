export const apiPrefix = {
  embed: '/api',
  standalone: '/apiSa'
};

export const getApiPrefix = isEmbedApp => (isEmbedApp ? apiPrefix.embed : apiPrefix.standalone);

export const domain = 'https://c9ac-1-53-204-250.ngrok-free.app';

export const defaultSettings = {
  position: 'bottom-left',
  hideTimeAgo: false,
  truncateProductName: true,
  displayDuration: 5,
  firstDelay: 5,
  popsInterval: 2,
  maxPopsDisplay: 20,
  includedUrls: '',
  excludedUrls: '',
  allowShow: 'all'
};
