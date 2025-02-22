import { Models } from "appwrite";
import Loader from "./Loader";

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
}

const SearchResults = ({ isSearchFetching, searchedPosts} : SearchResultsProps) => {
  if(isSearchFetching) {
    return <Loader />
  }
  if(searchedPosts.documents.length > 0) return <Gris
  return (

    <div>SearchResults</div>
  )
}

export default SearchResults