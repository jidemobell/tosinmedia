// export async function load() {
//   try {
//     const response = await fetch('https://tosinpeter-worker.testmobell.workers.dev/api/testimonials');
//     if (!response.ok) {
//       throw new Error('Failed to fetch testimonials');
//     }
//     const testimonials = await response.json();
//     return {
//         data: testimonials,
//     };
//   } catch (error) {
//     console.error('Error fetching testimonials:', error);
//     return {
//         testimonials: [],
//     };
//   }
// }