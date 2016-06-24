import Thenable from './util/thenable';
import Messenger from './messenger';
import adapters from './adapters';
import ENUMS from './enums';

/**
 * Player.js iframe class
 * @class
 */
export default class PlayerjsIframe {
  /**
   * Create a Player.js iframe
   * @param {Object} config -
   */
  constructor(config) {
    this.Adapter = adapters[config.adapter];

    if (!this.Adapter) {
      throw new Error(`No adapter for ${config.adapter}`);
    }

    this.config = config;

    this.messenger = new Messenger({
      context: ENUMS.CONTEXT
    });

    Object.keys(ENUMS).forEach((name) => {
      this[name] = ENUMS[name];
    });
  }

  /**
   * Register new adapters
   * @param {string} name - adapter name
   * @param {Class} adapter - adapter class
   * @function
   */
  addAdapter(name, adapter) {
    adapters[name] = adapter;
  }

  /**
   * Loads the video via the Adapter
   * @returns {Thenable} the thenable that resolves to the player
   */
  load() {
    // create a new instance of the Adapter
    let adapter = new this.Adapter(this.config, this.messenger);

    return new Thenable((fulfill, reject) => {
      // wait for the adapter to load
      adapter.load().then((player) => {
        // bind all the supported methods to the messenger listener
        player.initMessenger();

        // fulfill with the player
        fulfill(player);
      });
    });
  }
}
