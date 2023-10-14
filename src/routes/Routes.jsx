import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Home/Category/Category";
import News from "../pages/News/News";
import NewsLayout from "../NewsLayout/NewsLayout";
import LogIn from "../pages/LogIn&Register/LogIn/LogIn";
import Register from "../pages/LogIn&Register/Register/Register";
import LogInLayout from "../layouts/LogInLayout/LogInLayout";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import Terms from "../pages/shared/Terms&Conditions/Terms";

const router = createBrowserRouter([

     {
        path: '/',
        element: <LogInLayout></LogInLayout>,
        children: [

         {
             path: '/',
             element : <Navigate to='/category/0'></Navigate>
         },
         {

             path: '/logIn',
             element: <LogIn></LogIn>
         },
         {
               path: '/register',
               element: <Register></Register>
         },
         {
            path: '/terms',
            element: <Terms></Terms>
         }
        ]
     },
     {
         path : '/category',
         element: <Main></Main>,
         loader: () => fetch('http://localhost:3000/news/'),
         children: [
             
             {

                path: `:id`,
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:3000/categories/${params.id}`)
            
              }
         ]
     },
     {
        path : '/news',
        element:<NewsLayout></NewsLayout>,
        children: [

             {
                path: ':id',
                element :  <PrivateRoute><News></News></PrivateRoute>,
                loader : ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
             }
        ]
     }
   
]);

export default router;
