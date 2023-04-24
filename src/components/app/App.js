import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Layout from "../layout/Layout";
import QuizList from "../quizList/QuizList";
import QuizCreator from "../quizCreator/QuizCreator";
import Auth from "../auth/Auth";
import Quiz from '../quiz/Quiz';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/auth" element={<Auth />}/>
          <Route path="/quiz-creator" element={<QuizCreator />}/>
          <Route path="/quiz/:id" element={<Quiz />}/>
          <Route path="/" element={<QuizList/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
