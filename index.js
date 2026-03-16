/**
 * react-candlesticks
 */

const ReactCandlesticks = {
  version: '0.0.0',

  /**
   * Render a chart into the given DOM element.
   * @param {HTMLElement} container - The target DOM element.
   * @param {Object} config - Chart configuration (type, data, options).
   */
  render(container, config) {
    console.log('ReactCandlesticks.render() called with config:', config);
    container.innerHTML = `<p style="font-family:sans-serif;color:#888;">
      ReactCandlesticks
    </p>`;
  },

  /**
   * Destroy / clean up a chart instance.
   * @param {HTMLElement} container
   */
  destroy(container) {
    console.log('ReactCandlesticks.destroy() called');
    container.innerHTML = '';
  },
};

export default ReactCandlesticks;
