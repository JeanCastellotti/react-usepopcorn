function HeaderSearchResults({ movies }) {
  return (
    <p className="text-xl">
      Found <strong>{movies.length}</strong> results
    </p>
  )
}

export default HeaderSearchResults
