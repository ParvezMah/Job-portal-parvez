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
import ProtectedRoute from './components/ProtectedRoute'

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
        element: <ProtectedRoute><Onboarding/></ProtectedRoute>,
      },
      {
        path: '/jobs',
        element: <ProtectedRoute><JobListing/></ProtectedRoute>,
      },
      {
        path: '/jobs/:id',
        element: <ProtectedRoute><JobPage/></ProtectedRoute>,
      },
      {
        path: '/post-jobs',
        element: <ProtectedRoute><PostJob/></ProtectedRoute>,
      },
      {
        path: '/saved-jobs',
        element: <ProtectedRoute><SavedJobs/></ProtectedRoute>,
      },
      {
        path: '/my-jobs',
        element: <ProtectedRoute><MyJobs/></ProtectedRoute>,
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
