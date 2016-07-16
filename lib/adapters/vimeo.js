import BaseAdapter from './base';
import Iframe from '../util/iframe';
import getScript from '../util/get-script';
import debug from '../util/debug';
import ENUMS from '../enums';

const VIMEO_API_SCRIPT = '//player.vimeo.com/api/player.js';

const SUPPORTED_METHODS = [
  'play',
  'pause',
  'getPaused',
  'mute',
  'unmute',
  'getMuted',
  'setVolume',
  'getVolume',
  'getDuration',
  'setCurrentTime',
  'getCurrentTime'
];

const SUPPORTED_EVENTS = [
  'progress',
  'timeupdate',
  'play',
  'pause',
  'ended',
  'seeked',
  'error'
];

/**
  * The Vimeo video adapter interface
  */
export default class VimeoAdapter extends BaseAdapter {
  /**
   * Create a new Vimeo adapter
   * @param {Object} config - the configuration
   * @param {Messenger} messenger - the messenger instance
   */
  constructor()  {
    super(...arguments);

    let getApi = new Promise((resolve, reject) => {
      getScript(VIMEO_API_SCRIPT).then(resolve);
    });

    getApi.then(() => this.init());
  }

  init() {
    let iframe = new Iframe(`${this.config.src}${this.config.videoId}`);

    iframe.appendTo(document.body);

    this.player = new Vimeo.Player(iframe.iframe);

    this.player.ready().then(() => {
      SUPPORTED_EVENTS.forEach((eventName) => {
        this.player.on(eventName, () => {
          this.messenger.emit(eventName);
        });
      });

      this.ready();
    });
  }

  /**
   * Vimeo iframe events
   * @type {Array}
   */
  supportedEvents = SUPPORTED_EVENTS;

  /**
   * Vimeo iframe methods
   * @type {Array}
   */
  supportedMethods = SUPPORTED_METHODS;

  /**
   * Play the video
   */
  play() {
    this.player.play();
  }

  /**
   * Pause the video
   * @returns {boolean}
   */
  pause() {
    this.player.pause();
  }

  /**
   * Returns false if the video is playing, true otherwise
   * @returns {boolean}
   */
  getPaused(data) {
    this.player.getPaused().then((paused) => {
      this.messenger.returns(data, paused);
    });
  }

  /**
   * Mute audio by setting volume to 0
   */
  mute() {
    this.player.getVolume().then((volume) => {
      this.lastVolume = volume;
      this.player.setVolume(0);
    });
  }

  /**
   * Unmute audio by setting volume to volume before mute
   */
  unmute() {
    this.player.setVolume(this.lastVolume);
  }

  /**
   * Get video mute status
   * @return {boolean}
   */
  getMuted(data) {
    this.player.getVolume().then((volume) => {
      this.messenger.returns(data, volume === 0);
    });
  }

  /**
   * Set the volume between 0-100
   * @param {Number} value
   */
  setVolume(data) {
    // Vimeo API expects a value between 0-1
    this.player.setVolume((data.value / 100).toFixed(2)).then((volume) => {
      this.lastVolume = volume;
    });
  }

  /**
   * Get the volume between 0-100
   * @returns {number}
   */
  getVolume(data) {
    this.player.getVolume().then((volume) => {
      this.lastVolume = volume;
      this.messenger.returns(data, Math.round(volume * 100));
    });
  }

  /**
   * Get the duration in seconds
   */
  getDuration(data) {
    this.player.getDuration().then((duration) => {
      this.messenger.returns(data, duration);
    });
  }

  /**
   * Seek to a time in seconds
   * @param {Object} value - time in seconds
   */
  setCurrentTime(data) {
    this.player.setCurrentTime(data.value);
  }

  /**
   * Get current time in seconds
   * @returns {Number} seconds
   */
  getCurrentTime(data) {
    this.player.getCurrentTime().then((seconds) => {
      this.messenger.returns(data, seconds);
    });
  }

  /**
   * Volume default
   * @type {Number}
   */
  static lastVolume = 100;
}
