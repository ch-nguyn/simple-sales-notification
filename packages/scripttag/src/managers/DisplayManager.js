import {insertAfter} from '../helpers/insertHelpers';
import {render} from 'preact';
import React from 'preact/compat';
import delay from '../helpers/delay';
import lazy from 'preact-lazy';
const NotificationPopup = lazy(() => import('../components/NotificationPopup/NotificationPopup'));

export default class DisplayManager {
  constructor() {
    this.notifications = [];
    this.settings = {};
  }
  async initialize({notifications, settings}) {
    this.notifications = notifications;
    this.settings = settings;
    this.insertContainer();

    const {firstDelay, maxPopsDisplay, displayDuration, popsInterval} = settings;

    const isNotAllowed = this.checkUrls();
    if (isNotAllowed) return;

    const notificationsShow = notifications.slice(0, maxPopsDisplay);
    await delay(firstDelay);
    for (const notification of notificationsShow) {
      await this.display({notification, settings});
      await delay(displayDuration);
      this.fadeOut();
      await delay(popsInterval);
    }
  }

  fadeOut() {
    const container = document.querySelector('#Avada-SalePop');
    container.style.display = 'none';
  }

  display({notification, settings}) {
    const container = document.querySelector('#Avada-SalePop');
    container.style.display = 'block';
    render(<NotificationPopup {...settings} {...notification} />, container);
  }

  checkUrls() {
    const {excludedUrls, includedUrls, allowShow} = this.settings;
    const currentUrl = window.location.href.replace(/[?#].*$/, '');
    const excludedUrlsArr = excludedUrls.split('\n');
    const includedUrlsArr = includedUrls.split('\n');

    if (excludedUrlsArr.includes(currentUrl)) return true;

    if (allowShow === 'specific' && !includedUrlsArr.includes(currentUrl)) return true;

    return false;
  }

  insertContainer() {
    const popupEl = document.createElement('div');
    popupEl.id = `Avada-SalePop`;
    popupEl.classList.add('Avada-SalePop__OuterWrapper');
    const targetEl = document.querySelector('body').firstChild;
    if (targetEl) {
      insertAfter(popupEl, targetEl);
    }

    return popupEl;
  }
}
