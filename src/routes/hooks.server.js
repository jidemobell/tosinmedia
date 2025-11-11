// Example for SvelteKit hooks
export async function handle({ event, resolve }) {
  const user = event.locals.user; // however you store user info

  // Protect /admin
  if (event.url.pathname.startsWith('/admin') && (!user || user.role !== 'admin')) {
    return Response.redirect('/login');
  }

  // Protect /username
  if (
    /^\/[^/]+$/.test(event.url.pathname) && // matches /username
    (!user || user.username !== event.url.pathname.slice(1))
  ) {
    return Response.redirect('/login');
  }

  return resolve(event);
}