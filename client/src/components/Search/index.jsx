
import styles from "./styles.module.css";
// we will use this function to update the search state value from here
const Search = ({ setSearch }) => {
	return (
		<input
			type="text"
			className={styles.search}
			placeholder="Search Transactions"
			onChange={({ currentTarget: input }) => setSearch(input.value)}
		/>
	);
};

export default Search;