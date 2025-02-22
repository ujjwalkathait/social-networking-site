import { Models } from "appwrite";

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
}

const SearchResults = ({ isSearchFetching, searchedPosts} : SearchResultsProps) => {
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults