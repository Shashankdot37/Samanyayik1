
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';

export interface StrapiMeta {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
}

export interface StrapiResponse<T> {
    data: T;
    meta: StrapiMeta;
}

export interface StrapiDataItem<T> {
    id: number;
    attributes: T;
}

export interface StrapiData<T> {
    data: StrapiDataItem<T>[];
    meta: StrapiMeta;
}

/**
 * Helper to fetch data from Strapi API
 * @param path The API endpoint path (e.g. '/api/notices')
 * @param urlParamsObject Object containing query parameters
 * @param options Fetch options
 * @returns Promise with the data
 */
export async function fetchAPI<T>(
    path: string,
    urlParamsObject: Record<string, any> = {},
    options: RequestInit = {}
): Promise<T> {
    // Merge default and user options
    const mergedOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    };

    // Build request URL
    const queryString = Object.keys(urlParamsObject)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(urlParamsObject[key])}`)
        .join('&');

    const requestUrl = `${API_URL}${path}${queryString ? `?${queryString}` : ''}`;

    try {
        const response = await fetch(requestUrl, mergedOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching data from ${path}:`, error);
        throw error;
    }
}

/**
 * Helper to flatten Strapi response
 * Strapi v4 returns { data: [{ id, attributes: { ... } }] }
 * This converts it to [{ id, ...attributes }]
 */
export function flattenStrapiResponse<T>(data: any): T[] {
    if (!data || !data.data) return [];

    if (Array.isArray(data.data)) {
        return data.data.map((item: any) => ({
            id: item.id,
            ...item.attributes,
        }));
    }

    // Single item
    if (data.data && data.data.attributes) {
        return [{
            id: data.data.id,
            ...data.data.attributes
        }] as any;
    }

    return [];
}
