import Head from 'next/head'
import styles from "../styles/Catalog.module.scss";
import Layout from "../components/Layout";
import { useEffect, useState } from 'react';
import CatalogItem from '../components/CatalogItem';

export default function Home(props) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/v1/Catalog/items')
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

  return (
    <Layout>
        <div>
            <div style={{margin: "auto", width: "fit-content", padding: "1em"}}>
                Showing 8 of 24 products - Page 1
            </div>
        <div className={`${styles["item-container"]} ${styles["container"]}`}>
            { !items ? 
                <div>Loading...</div> 
                :
                items.map((item) => <CatalogItem CatalogItem={item} key={item.id}/>)
            }
        </div>
        </div>

    </Layout>
  )
}
