import PrivateRoute from '../components/PrivateRoute'

const ProtectedPage = () => {
  return (
    <PrivateRoute>
      <p className="page-margin-top">This is a secret page</p>
    </PrivateRoute>
  )
}

export default ProtectedPage
