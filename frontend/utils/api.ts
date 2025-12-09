/// <reference types="vite/client" />


// =======================================
// API BASE URL
// =======================================
export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:1337";

/**
 * Helper to build query string
 * @param params Object of key-value pairs
 * @returns Query string
 */
export function buildQuery(params: Record<string, any> = {}): string {
    return Object.keys(params)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
}

/**
 * Helper to make GET requests to API endpoints
 * @param path The path of the API endpoint (e.g. '/news')
 * @param urlParamsObject URL parameters object, will be stringified
 * @param options Options passed to fetch
 * @returns Parsed JSON response
 */
export async function fetchAPI<T>(
    path: string,
    urlParamsObject: Record<string, any> = {},
    options: RequestInit = {}
): Promise<T> {
    // Merge default and user options
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    if (options.body instanceof FormData) {
        // Let browser set Content-Type with boundary for FormData
        delete (headers as any)['Content-Type'];
    }

    const mergedOptions = {
        ...options,
        headers,
    };

    // Build request URL
    const queryString = buildQuery(urlParamsObject);
    const requestUrl = `${API_URL}${path}${queryString ? `?${queryString}` : ''}`;

    try {
        const response = await fetch(requestUrl, mergedOptions);
        if (!response.ok) {
            throw new Error(`An error occurred while fetching the data: ${response.statusText}`);
        }
        const data = await response.json();
        return data; // Strapi returns { data: [...], meta: {...} }
    } catch (error) {
        console.error(`Error fetching data from ${path}:`, error);
        throw error;
    }
}

/**
 * Helper to extract text from Strapi Rich Text Block
 * This is a basic implementation to get string content from blocks
 */
export function extractTextFromBlocks(blocks: any[]): string {
    if (!Array.isArray(blocks)) return '';

    return blocks.map(block => {
        if (block.type === 'paragraph' || block.type === 'heading') {
            return block.children?.map((child: any) => child.text).join('') || '';
        }
        return '';
    }).join('\n\n');
}

// Helper to handle the response format if needed (though the provided format is flat in data)
export function flattenStrapiResponse<T>(res: any): T[] {
    if (res?.data && Array.isArray(res.data)) {
        return res.data;
    }
    return [];
}
