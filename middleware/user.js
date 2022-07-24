export default function (context) {
  const { loggedIn } = context.$auth
  if (!loggedIn) {
    return context.redirect('/login')
  }
}
