/**
 * Fetches products from a specified URL asynchronously.
 *
 * @param {string} url - The URL from which to fetch the products.
 * @return {Promise<T>} A promise that resolves with the fetched data.
 */
export const fetchProducts = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data as T
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}
