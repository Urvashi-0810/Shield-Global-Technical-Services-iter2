import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro.jsx'

export default function NotFound() {
  return (
    <>
      <PageIntro index="404" title="This page could not be found." />
      <div className="wrap section--tight">
        <Link to="/" className="btn btn--solid">Back to Home</Link>
      </div>
    </>
  )
}
