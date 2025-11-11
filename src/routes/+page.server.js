// import type { PageServerLoad } from './$types';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
  try {
    const response = await fetch('https://tosinpeter-worker.testmobell.workers.dev/api/testimonials');
    if (!response.ok) {
      throw new Error('Failed to fetch testimonials');
    }
    const testimonials = await response.json();
    return {
      testimonials, // Return testimonials directly
    };
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return {
      testimonials: [], // Return an empty array in case of an error
    };
  }
};