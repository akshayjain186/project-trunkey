/**
 * Parses a JSON string of color values and resolves them to valid CSS color values.
 *
 * @param {string} colors - A JSON string representing an array of color definitions. 
 *                          Each color can be a CSS variable (e.g., "--primary-color"), a HEX value (e.g., "#FFFFFF"),
 *                          or a combination of a CSS variable and alpha (e.g., "--primary-color,0.5").
 * @returns {Array<string>} - An array of resolved color values. These can be HEX values, RGBA strings, 
 *                            or the original input if resolution fails.
 */
const getChartColorsArray = ($document, colors) => {
    colors = JSON.parse(colors);
    return colors.map((value) => {
        const newValue = value.replace(" ", "");  // Changed 'let' to 'const' here
        if (newValue.indexOf(",") === -1) {
            // Using $document service to access the document object
            const color = $document[0].documentElement.style.getPropertyValue(newValue);  // Changed 'let' to 'const' here

            if (color.indexOf("#") !== -1) {
                return color.replace(" ", "");
            } else if (color) {
                return color;
            } else {
                return newValue;
            }
        } else {
            const val = value.split(',');
            if (val.length === 2) {
                let rgbaColor = $document[0].documentElement.style.getPropertyValue(val[0]);
                rgbaColor = `rgba(${rgbaColor},${val[1]})`; // Using template literals here
                return rgbaColor;
            } else {
                return newValue;
            }
        }
    });
};

export default getChartColorsArray;
