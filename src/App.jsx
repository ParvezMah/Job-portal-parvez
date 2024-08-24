import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import LandingPage from './pages/LandingPage'
import Onboarding from './pages/Onboarding'
import JobListing from './pages/jobListing'
import JobPage from './pages/job'
import PostJob from './pages/PostJob'
import SavedJobs from './pages/SavedJobs'
import MyJobs from './pages/myJobs'
import { ThemeProvider } from './components/theme-provide'

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <LandingPage/>,
      },
      {
        path: '/onboarding',
        element: <Onboarding/>,
      },
      {
        path: '/jobs',
        element: <JobListing/>,
      },
      {
        path: '/jobs/:id',
        element: <JobPage/>,
      },
      {
        path: '/post-job',
        element: <PostJob/>,
      },
      {
        path: '/saved-jobs',
        element: <SavedJobs/>,
      },
      {
        path: '/my-jobs',
        element: <MyJobs/>,
      },
    ]
  }
])

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
