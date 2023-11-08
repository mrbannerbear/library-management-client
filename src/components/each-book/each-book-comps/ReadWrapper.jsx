import { PDFViewer } from "@react-pdf/renderer";
import Read from "./Read";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ReadWrapper = () => {

    const location = useLocation();
    useEffect(() => {
      axios
        .get(`http://localhost:4000/books${location.search}`)
        .then((data) => setBook(data.data[0]))
        .catch((err) => console.log(err));
    }, []);
  
    const [book, setBook] = useState({});

    return (
        <div className="min-h-screen">

            <Read book = {book}></Read>

        </div>
    );
};

export default ReadWrapper;