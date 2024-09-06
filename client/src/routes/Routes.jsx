import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { lazy  , Suspense} from "react";
import PageNotFound from '../pages/PageNotFound';
import AppLayout from '../components/AppLayout';
import AboutPage from '../pages/AboutPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import ProtectedRoute from '../components/ProtectedRoute';
import Services from '../pages/Services';
import DevelopersInfo from '../pages/DeveloperInfo';
import ContactPage from '../pages/ContactPage';
import WasteDisposal from '../pages/WasteDisposalPage';
const HomePage = lazy(() => import("../pages/HomePage")) ;
function Routes() {
    const routes = createBrowserRouter(
        [
          {
            path : "/",
            element : <AppLayout/>,
            children : [
              {
                path : "",
                element : <HomePage/>
              },
              {
                path : "about",
                element : <AboutPage/>
              },
              {
                path : "services",
                element : (
                <ProtectedRoute>
                  <Services/>
                </ProtectedRoute>
                )
              },
              {
                path : "contact",
                element : <ContactPage/>
              },
              {
                path : "signIn",
                element : <SignInPage/>
              },
              {
                path : "signUp",
                element : <SignUpPage/>
              },
              {
                path : "developerInfo",
                element : <DevelopersInfo/>
              },
              {
                path : "wasteDisposal",
                element : <WasteDisposal/>
              },

            ]
          },
          {
            path : "*",
            element : <PageNotFound/>,
          }
        ]
      )
    return (
        <Suspense>
            <RouterProvider router={routes}/>
        </Suspense>
    )
}

export default Routes
