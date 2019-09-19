import './lib/chrome-analytics.js';

/**
 * Handles messages from content/popup scripts
 * @callback messageHandler
 * @param {Object} message message sent by the calling script
 */
const messageHandler = async (message) => {
  /**
   * Sends click data from 
   */
  if(message.command === 'button') {
    console.log('sending tracking data', message.data);
    ga('send', 'event', message.data, 'clicked', 'Label');
  }
}

/** 
 * Fires when a message is sent from runtime.sendMessage in the popup
 */
chrome.runtime.onMessage.addListener(messageHandler)