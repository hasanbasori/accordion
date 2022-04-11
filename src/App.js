import { useState } from 'react';
import './App.css';
import SingleContent from './component/SingleContent';
import data from './data';

function App() {
  const [contain, setContaint] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>เครื่องมือพัฒนาเว็บ 2021</h3>
        <section>
          {contain.map((data) => {
            return <SingleContent key={data.id} {...data} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
