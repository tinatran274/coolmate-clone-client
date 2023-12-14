import CollectionCategory from './collection-category'

const CollectionFilter = ({ categories }) => {
  return (
    <div className="flex justify-center items-center py-8 flex-wrap my-4">
      {categories?.map((category, index) => (
        <CollectionCategory key={index} category={category} />
      ))}
    </div>
  )
}

export default CollectionFilter
