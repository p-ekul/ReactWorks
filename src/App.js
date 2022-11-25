import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';


const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
          {/*Starting point*/}
        	<Route path="/" element={<LoginPage/>}></Route>

          <Route path="/MainPage" element={<MainPage/>}></Route>          


					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="*" element={<NotFound/>}></Route>
				
        </Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;