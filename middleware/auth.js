export default function (context) {
  console.log('Sushi')
  const { user, loggedIn } = context.$auth

  console.log('Sushi')
  console.log(!user)
  console.log(!loggedIn)

  if (!user && !loggedIn) {
    return context.redirect('/login')
  }
}
