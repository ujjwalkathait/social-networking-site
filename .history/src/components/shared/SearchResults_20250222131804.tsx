import { Models } from "appwrite";
import Loader from "./Loader";
import { searchPosts } from "@/lib/appwrite/api";

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
}

const SearchResults = ({ isSearchFetching, searchedPosts} : SearchResultsProps) => {
  if(isSearchFetching) {
    return <Loader />
  }
  if(searchPosts.)
  return (

    <div>SearchResults</div>
  )
}

export default SearchResults