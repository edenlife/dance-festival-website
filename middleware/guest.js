export default function ({ redirect, store }) {
  if (process.client && store.getters.getGreenhouseToken)
    return redirect('/home')
}
