/**
 * Filters the provided data based on a search term and updates the state with the filtered results.
 *
 * @param {Object} params - The parameters object.
 * @param {Function} params.setState - The state setter function to update the filtered results.
 * @param {Array} params.data - The array of data objects to filter.
 * @param {string} params.item - The search term used for filtering.
 */
export const handleSearchData = ({ setState, data, item }) => {
    setState(data.filter((search) =>
        Object.values(search).some(
            (field) =>
                typeof field === 'string' &&
                field?.toLowerCase().includes(item?.toLowerCase()),
        )
    ))
}
