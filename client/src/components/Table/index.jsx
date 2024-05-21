import styles from "./styles.module.css";

const Table = ({ idatas }) => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>

                <p className={styles.id_tab}>Id</p>
                <p className={styles.title_tab}>Title</p>
                <p className={styles.description_tab}>Description</p>
                <p className={styles.price_tab}>Price</p>
                <p className={styles.category_tab}>Category</p>
                <p className={styles.sold_tab}>Sold</p>
                <p className={styles.month_tab}>Month</p>

            </div>


            {idatas.map((idata) => (
                <div className={styles.idata} key={idata._id}>


                    <div className={styles.id_container}>
                        <p className={styles.idata_id}>
                            {idata.id}
                        </p>
                    </div>




                    <div className={styles.title_container}>
                        <img src={idata.image} alt="product" className={styles.idata_img} />
                        <p className={styles.idata_title}>
                            {idata.title.substring(0, 20)}
                        </p>
                    </div>


                    <div className={styles.description_container}>
                        <p className={styles.idata_description}>
                            {idata.description.substring(0, 20)}
                        </p>
                    </div>





                    <div className={styles.price_container}>
                        <p className={styles.idata_price}>
                            {idata.price}
                        </p>
                    </div>


                    <div className={styles.category_container}>
                        <p className={styles.idata_category}>
                            {idata.category}
                        </p>
                    </div>


                    <div className={styles.sold_container}>
                        <p className={styles.idata_sold}>
                            {idata.sold}
                        </p>
                    </div>


                    <div className={styles.month_container}>
                        <p className={styles.idata_month}>
                            {idata.month}
                        </p>
                    </div>




                </div>
            ))};
        </div>
    );
};
export default Table;