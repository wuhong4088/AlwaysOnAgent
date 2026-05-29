import { env } from '../config/env';

/**
 * Generates a safe Instacart search redirect URL from a list of ingredient terms.
 */
export class RedirectService {
  buildInstacartUrl(queryTerms: string[]): string {
    const normalized = queryTerms
      .map((t) => t.trim())
      .filter((t) => t.length > 0)
      .join(' ');
    const encoded = encodeURIComponent(normalized);
    return `${env.instacartBaseUrl}?q=${encoded}`;
  }
}
