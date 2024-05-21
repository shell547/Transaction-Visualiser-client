import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import Table from "./components/Table";
import Month from "./components/Month";
import './App.css';

const base_url = process.env.REACT_APP_API_URL;

function App() {

  const [obj, setObj] = useState({});
  const [filterMonth, setFilterMonth] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAllIdata = async () => {
      try {
        const url = `${base_url}?month=${filterMonth.toString()}&page=${page}&search=${search}`

        //promise based http request / API
        // here we destructured the response and took data property and updated out object state by passing data.
        const { data } = await axios.get(url);
        setObj(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };


    getAllIdata();


  }, [filterMonth, page, search]);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="head">
          {/* <img></img> */}
          <Search setSearch={(search) => setSearch(search)} />
        </div>
        <div className="body">
          <div className="table_container">
            <Table idatas={obj.idatas ? obj.idatas : []} />
            <Pagination
              page={page}
              limit={obj.limit ? obj.limit : 0}
              total={obj.total ? obj.total : 0}
              setPage={(page) => setPage(page)}
            />

          </div>


          <div className="filter_container">

            <Month
              filterMonth={filterMonth}
              months={obj.month ? obj.month : []}
              setFilterMonth={(month) => setFilterMonth(month)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
