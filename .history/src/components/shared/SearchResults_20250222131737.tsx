import { Models } from "appwrite";
import { Loader } from "lucide-react";

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
}

const SearchResults = ({ isSearchFetching, searchedPosts} : SearchResultsProps) => {
  if(isSearchFetching) {
    return <Loader />
  }
  return (

    <div>SearchResults</div>
  )
}

export default SearchResults