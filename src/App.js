import React, { Suspense, lazy } from 'react';
import Navbar from './Components/Nav';
import Model from './Components/Model';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { Employee } from './Redux/Actions/Employee';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Components/Theme'
import { useDispatch, useSelector } from 'react-redux';
const NotFound = lazy(() => import('./Pages/NotFound'));
const Blog = lazy(() => import('./Pages/Blog'));
const Post = lazy(() => import('./Components/Post'));
const FormComponent = lazy(() => import('./Components/Form'));
function App() {
  const dispatch = useDispatch()
  // Api request result
  const resultEmp = useSelector((state) => state.employee)

  // Calling Employee Api and handling error
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(Employee({
          username: 'kminchelle', password: '0lelplR',
        }));
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchData();
  }, [dispatch]);
  console.log(resultEmp)

  // Resister Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }

  return (
    <div className="App">
      {/* This is ThemeProvider And now we can use in it Child Comp */}
      <ThemeProvider theme={theme}>
        <Router>
          <Suspense fallback={<div>Loading...</div>} />
          <Navbar />
          <Switch>
            <Route exact path="/" component={FormComponent} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/:id" render={(props) => <Post {...props} />} />

            <Route component={NotFound} />
          </Switch>
        </Router>
        <Model />
      </ThemeProvider>
    </div>
  );
}

export default App;
