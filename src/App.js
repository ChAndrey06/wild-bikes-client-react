import { Booking, Details, Document } from './booking';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="booking" element={<Booking />}>
          <Route path="details" element={<Details />} />
          <Route path="document" element={<Document />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
