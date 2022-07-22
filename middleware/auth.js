export default function ({ store, redirect }) {
  if (process.client && !store.getters.getGreenhouseToken) {
    return redirect('/login')
  }
}
